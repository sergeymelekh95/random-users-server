const { generator } = require('./randomGenerator');
const { User } = require('./models/User');
const { data } = require('./data');

const changePosition = (value, first, last) => {
    let arr = value.split('');
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    arr = arr.join('').toString();

    return arr;
};

const createError = (random, value, randomError, nat) => {
    const randIndex = Math.floor(random * value.length);

    switch (randomError) {
        case 'delete':
            if (value.length > 0) {
                return value.substring(0, randIndex - 1) + value.substring(randIndex, value.length);
            }

            break;
        case 'add':
            const alphabet = data[nat].alphabet;
            const randomSymbol = alphabet[Math.floor(random * alphabet.length)];

            return (
                value.slice(0, randIndex) +
                randomSymbol +
                value.slice(randIndex)
            );
        case 'changePosition':
            if (value.length > 0) {
                if (randIndex === value.length - 1) {
                    return changePosition(value, randIndex, randIndex - 1);
                } else {
                    return changePosition(value, randIndex, randIndex + 1);
                }
            }

            break;
    }
};

const generateErrors = (nat, errors, users) => {
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
        for (let j = 0; j < errors; j++) {

            const randomField = fields[Math.floor(generator.getRandom(10) * fields.length)];
            const randomError =
                errorTypes[Math.floor(generator.getRandom(10) * errorTypes.length)];     

            const user = users[i];

            switch (randomField) {
                case 'firstName':
                    user.firstName = createError(
                        generator.getRandom(10),
                        String(user.firstName),
                        randomError,
                        nat
                    );
                    break;
                case 'lastName':
                    user.lastName = createError(
                        generator.getRandom(10),
                        String(user.lastName),
                        randomError,
                        nat
                    );
                    break;
                case 'middleName':
                    user.middleName = createError(
                        generator.getRandom(10),
                        String(user.middleName),
                        randomError,
                        nat
                    );
                    break;
                case 'country':
                    user.country = createError(
                        generator.getRandom(10),
                        String(user.country),
                        randomError,
                        nat
                    );
                    break;
                case 'city':
                    user.city = createError(
                        generator.getRandom(10),
                        String(user.city),
                        randomError,
                        nat
                    );
                    break;
                case 'street':
                    user.street = createError(
                        generator.getRandom(10),
                        String(user.street),
                        randomError,
                        nat
                    );
                    break;
                case 'house':
                    user.house = createError(
                        generator.getRandom(10),
                        String(user.house),
                        randomError,
                        nat
                    );
                    break;
                case 'phone':
                    user.phone = createError(
                        generator.getRandom(10),
                        String(user.phone),
                        randomError,
                        nat
                    );
                    break;
            }
        }
    }
};

const generateUsers = (page, seed, nat, results, errors) => {
    generator.initSeed(seed, page);

    const users = [];

    for (let i = 0; i < results; i++) {

        const id = Math.floor(generator.getRandom(10) * 100000000000000);
        const firstName =
            data[nat].firstNames[
                Math.floor(generator.getRandom(10) * data[nat].firstNames.length)
            ];
        const lastName =
            data[nat].lastNames[
                Math.floor(generator.getRandom(10) * data[nat].lastNames.length)
            ];
        const middleName =
            data[nat].middleNames[
                Math.floor(generator.getRandom(10) * data[nat].middleNames.length)
            ];
        const country = data[nat].country;
        const city =
            data[nat].cities[Math.floor(generator.getRandom(10) * data[nat].middleNames.length)];
        const street =
            data[nat].streets[
                Math.floor(generator.getRandom(10) * data[nat].middleNames.length)
            ];
        const house = Math.floor(generator.getRandom(10) * 200);
        const phone = data[nat].phoneCode + Math.floor(generator.getRandom(10) * 1000000000);

        const user = new User(
            // index,
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
        generateErrors(nat, errors, users);
    }

    return users;
};

module.exports = generateUsers;
