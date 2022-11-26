const fs = require('fs');
const { generator } = require('./randomGenerator');
const { User } = require('../models/User');
const { data } = require('../data');
const ObjectsToCsv = require('objects-to-csv');

class generateController {
    constructor() {
        this.users = [];
        this.countErrors = 0;

        this.getRandomUsers = this.getRandomUsers.bind(this);
        this.changePosition = this.changePosition.bind(this);
        this.createError = this.createError.bind(this);
        this.generateErrors = this.generateErrors.bind(this);
        this.generateUsers = this.generateUsers.bind(this);
        this.addToList = this.addToList.bind(this);
        this.clearList = this.clearList.bind(this);
        this.getCsv = this.getCsv.bind(this);
        this.checkCountErrors = this.checkCountErrors.bind(this);
        this.checkLength = this.checkLength.bind(this);
    }

    changePosition(value, first, last) {
        let arr = value.split('');
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        arr = arr.join('').toString();

        return arr;
    }

    createError(random, value, randomError, nat) {
        const randIndex = Math.floor(random * value.length);

        switch (randomError) {
            case 'delete':
                if (value.length > 0) {
                    return (
                        value.substring(0, randIndex - 1) +
                        value.substring(randIndex, value.length)
                    );
                }

                break;
            case 'add':
                const alphabet = data[nat].alphabet;
                const randomSymbol =
                    alphabet[Math.floor(random * alphabet.length)];

                return (
                    value.slice(0, randIndex) +
                    randomSymbol +
                    value.slice(randIndex)
                );
            case 'changePosition':
                if (value.length > 0) {
                    if (randIndex === value.length - 1) {
                        return this.changePosition(
                            value,
                            randIndex,
                            randIndex - 1
                        );
                    } else {
                        return this.changePosition(
                            value,
                            randIndex,
                            randIndex + 1
                        );
                    }
                }

                break;
        }
    }

    checkCountErrors() {
        if (!Number.isInteger(this.countErrors)) {
            const percent = this.countErrors.split('.')[1];
            const random = generator.getRandom(10);

            this.countErrors = +this.countErrors;
            this.countErrors = this.countErrors.toFixed();

            if (random < +`0.${percent}`) {
                this.countErrors = this.countErrors++;
            }
        }
    }

    generateErrors(nat, errors, users) {
        this.countErrors = errors;

        this.checkCountErrors();

        const fields = [
            'firstName',
            'lastName',
            'middleName',
            'country',
            'city',
            'street',
            'house',
            'phone',
        ];

        const errorTypes = ['delete', 'add', 'changePosition'];

        for (let i = 0; i < users.length; i++) {
            for (let j = 0; j < this.countErrors; j++) {
                const randomField =
                    fields[Math.floor(generator.getRandom(10) * fields.length)];
                const randomError =
                    errorTypes[
                        Math.floor(generator.getRandom(10) * errorTypes.length)
                    ];

                const user = users[i];

                switch (randomField) {
                    case 'firstName':
                        user.firstName = this.createError(
                            generator.getRandom(10),
                            String(user.firstName),
                            randomError,
                            nat
                        );
                        break;
                    case 'lastName':
                        user.lastName = this.createError(
                            generator.getRandom(10),
                            String(user.lastName),
                            randomError,
                            nat
                        );
                        break;
                    case 'middleName':
                        user.middleName = this.createError(
                            generator.getRandom(10),
                            String(user.middleName),
                            randomError,
                            nat
                        );
                        break;
                    case 'country':
                        user.country = this.createError(
                            generator.getRandom(10),
                            String(user.country),
                            randomError,
                            nat
                        );
                        break;
                    case 'city':
                        user.city = this.createError(
                            generator.getRandom(10),
                            String(user.city),
                            randomError,
                            nat
                        );
                        break;
                    case 'street':
                        user.street = this.createError(
                            generator.getRandom(10),
                            String(user.street),
                            randomError,
                            nat
                        );
                        break;
                    case 'house':
                        user.house = this.createError(
                            generator.getRandom(10),
                            String(user.house),
                            randomError,
                            nat
                        );
                        break;
                    case 'phone':
                        user.phone = this.createError(
                            generator.getRandom(10),
                            String(user.phone),
                            randomError,
                            nat
                        );
                        break;
                }
            }
        }
    }

    checkLength(str, length) {
        if (str.length < length) {
            return `${str}0`;
        }

        return str;
    }

    generateUsers(page, seed, nat, results, errors) {
        generator.initSeed(seed, page);

        const users = [];

        for (let i = 0; i < results; i++) {
            const id = Math.floor(generator.getRandom(10) * 100000000000000);
            const firstName =
                data[nat].firstNames[
                    Math.floor(
                        generator.getRandom(10) * data[nat].firstNames.length
                    )
                ];
            const lastName =
                data[nat].lastNames[
                    Math.floor(
                        generator.getRandom(10) * data[nat].lastNames.length
                    )
                ];
            const middleName =
                data[nat].middleNames[
                    Math.floor(
                        generator.getRandom(10) * data[nat].middleNames.length
                    )
                ];
            const country = data[nat].country;
            const city =
                data[nat].cities[
                    Math.floor(
                        generator.getRandom(10) * data[nat].middleNames.length
                    )
                ];
            const street =
                data[nat].streets[
                    Math.floor(
                        generator.getRandom(10) * data[nat].middleNames.length
                    )
                ];
            const house = Math.floor(generator.getRandom(10) * 200);
            const phone = this.checkLength(
                data[nat].phoneCode +
                    Math.floor(10000 * generator.getRandom(10) * 90000),
                12
            );

            const user = new User(
                id,
                firstName,
                lastName,
                middleName,
                country,
                city,
                street,
                house,
                phone
            );

            users.push(user);
        }

        if (errors > 0) {
            this.generateErrors(nat, errors, users);
        }

        return users;
    }

    addToList(users) {
        this.users = [...this.users, ...users];
    }

    clearList() {
        this.users = [];
    }

    getRandomUsers(req, res) {
        const { seed, page, nat, results, errors = 0 } = req.query;

        if (page == 1) {
            this.clearList();
        }

        const users = this.generateUsers(page, seed, nat, results, errors);

        this.addToList(users);

        return res.json(users);
    }

    async getCsv(req, res) {
        if (this.users.length) {
            const csv = new ObjectsToCsv(this.users);

            await csv.toDisk('./randomUsers.csv');

            return res.download('./randomUsers.csv', () => {
                fs.unlinkSync('./randomUsers.csv');
            });
        }
    }
}

module.exports = new generateController();
