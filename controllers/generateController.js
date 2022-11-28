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
        this.swap = this.swap.bind(this);
        this.createError = this.createError.bind(this);
        this.generateErrors = this.generateErrors.bind(this);
        this.generateUsers = this.generateUsers.bind(this);
        this.addToList = this.addToList.bind(this);
        this.clearList = this.clearList.bind(this);
        this.getCsv = this.getCsv.bind(this);
        this.checkCountErrors = this.checkCountErrors.bind(this);
        this.addZero = this.addZero.bind(this);
        this.getRandomValue = this.getRandomValue.bind(this);
    }

    swap(value, first, last) {
        let arr = value.split('');
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        arr = arr.join('').toString();
        return arr;
    }

    createError(value, randomError, nat) {
        const randIndex = generator.getRandom(value.length - 1);

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
                    alphabet[generator.getRandom(alphabet.length)];

                return (
                    value.slice(0, randIndex) +
                    randomSymbol +
                    value.slice(randIndex)
                );
            case 'swap':
                if (value.length > 1) {
                    if (randIndex === value.length - 1) {
                        return this.swap(value, randIndex, randIndex - 1);
                    } else {
                        return this.swap(value, randIndex, randIndex + 1);
                    }
                }

                break;
        }
    }

    checkCountErrors() {
        if (!Number.isInteger(this.countErrors)) {
            this.countErrors = String(this.countErrors);

            const percent = this.countErrors.split('.')[1];
            const random = generator.getRandom(10);

            this.countErrors = +this.countErrors;
            this.countErrors = this.countErrors.toFixed();

            if (random < +`0.${percent}`) {
                this.countErrors = this.countErrors++;
            }
        }
    }

    getRandomValue(value) {
        return value[generator.getRandom(value.length)];
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

        const errorTypes = ['delete', 'add', 'swap'];

        for (let i = 0; i < users.length; i++) {
            for (let j = 0; j < this.countErrors; j++) {
                const randomField = this.getRandomValue(fields);
                const randomError = this.getRandomValue(errorTypes);

                const user = users[i];

                switch (randomField) {
                    case 'firstName':
                        if (user.firstName) {
                            user.firstName = this.createError(
                                String(user.firstName),
                                randomError,
                                nat
                            );
                        }
                        break;
                    case 'lastName':
                        if (user.lastName) {
                            user.lastName = this.createError(
                                String(user.lastName),
                                randomError,
                                nat
                            );
                        }
                        break;
                    case 'middleName':
                        if (user.middleName) {
                            user.middleName = this.createError(
                                String(user.middleName),
                                randomError,
                                nat
                            );
                        }
                        break;
                    case 'country':
                        if (user.country) {
                            user.country = this.createError(
                                String(user.country),
                                randomError,
                                nat
                            );
                        }
                        break;
                    case 'city':
                        if (user.city) {
                            user.city = this.createError(
                                String(user.city),
                                randomError,
                                nat
                            );
                        }
                        break;
                    case 'street':
                        if (user.street) {
                            user.street = this.createError(
                                String(user.street),
                                randomError,
                                nat
                            );
                        }
                        break;
                    case 'house':
                        if (user.house) {
                            user.house = this.createError(
                                String(user.house),
                                randomError,
                                nat
                            );
                        }
                        break;
                    case 'phone':
                        if (user.phone) {
                            user.phone = this.createError(
                                String(user.phone),
                                randomError,
                                nat
                            );
                        }
                        break;
                }
            }
        }
    }

    addZero(str, length) {
        let fullStr = str;

        while (fullStr.length < length) {
            fullStr = fullStr + '0';
        }

        return fullStr;
    }

    generateUsers(page, seed, nat, results, errors) {
        generator.initSeed(seed, page);

        const users = [];

        for (let i = 0; i < results; i++) {
            const id = this.addZero(
                String(generator.getRandom(1000000000)),
                12
            );
            const firstName =
                data[nat].firstNames[
                    generator.getRandom(data[nat].firstNames.length)
                ];
            const lastName =
                data[nat].lastNames[
                    generator.getRandom(data[nat].lastNames.length)
                ];
            const middleName = data[nat].middleNames
                ? data[nat].middleNames[
                      generator.getRandom(data[nat].middleNames.length)
                  ]
                : null;
            const country = data[nat].country;
            const city =
                data[nat].cities[generator.getRandom(data[nat].cities.length)];
            const street =
                data[nat].streets[
                    generator.getRandom(data[nat].streets.length)
                ];
            const house = generator.getRandom(200);
            const phone = this.addZero(
                data[nat].phoneCode + generator.getRandom(1000000000),
                13
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

        if (+errors > 0) {
            this.generateErrors(nat, +errors, users);
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
