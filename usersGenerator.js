const { generator } = require('./randomGenerator');
const { User } = require('./models/User');
const { data } = require('./data');

const changePosition = (value, first, last) => {
    return (
        value.substr(0, first) +
        value[last] +
        value.substring(first + 1, last) +
        value[first] +
        value.substr(last + 1)
    );
};

const createError = (random, value, randomError, nat) => {
    const randIndex = Math.floor(random * value.length);

    // console.log(randIndex, value, randomError, nat);

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

const generateUsers = (page, seed, nat, results, errors) => {
    const users = [];

    for (let i = 0; i < results; i++) {
        const initializedSeed = generator.initSeed(page, seed, i);

        const random = generator.sfc32(
            initializedSeed[0],
            initializedSeed[1],
            initializedSeed[2],
            initializedSeed[3]
        );

        const id = Math.floor(random * 100000000000000000);
        const firstName =
            data[nat].firstNames[
                Math.floor(random * data[nat].firstNames.length)
            ];
        const lastName =
            data[nat].lastNames[
                Math.floor(random * data[nat].lastNames.length)
            ];
        const middleName =
            data[nat].middleNames[
                Math.floor(random * data[nat].middleNames.length)
            ];
        const country = data[nat].country;
        const city =
            data[nat].cities[Math.floor(random * data[nat].middleNames.length)];
        const street =
            data[nat].streets[
                Math.floor(random * data[nat].middleNames.length)
            ];
        const house = Math.floor(random * 200);
        const phone = data[nat].phoneCode + Math.floor(random * 1000000000);

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

    // console.log(users)

    if (errors > 0) {
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

                const initializedSeed = generator.initSeed(page, seed, j);

                const random = generator.sfc32(
                    initializedSeed[0],
                    initializedSeed[1],
                    initializedSeed[2],
                    initializedSeed[3]
                );
    
                const randomField = fields[Math.floor(random * fields.length)];
                const randomError =
                    errorTypes[Math.floor(random * errorTypes.length)];
    
                const user = users[i];
    
                // console.log(randomField, randomError);
    
                switch (randomField) {
                    case 'firstName':
                        user.firstName = createError(
                            random,
                            user.firstName,
                            randomError,
                            nat
                        );
                        break;
                    case 'lastName':
                        user.lastName = createError(
                            random,
                            user.lastName,
                            randomError,
                            nat
                        );
                        break;
                    case 'middleName':
                        user.middleName = createError(
                            random,
                            user.middleName,
                            randomError,
                            nat
                        );
                        break;
                    case 'country':
                        user.country = createError(
                            random,
                            String(user.country),
                            randomError,
                            nat
                        );
                        break;
                    case 'city':
                        user.city = createError(
                            random,
                            user.city,
                            randomError,
                            nat
                        );
                        break;
                    case 'street':
                        user.street = createError(
                            random,
                            String(user.street),
                            randomError,
                            nat
                        );
                        break;
                    case 'house':
                        user.house = createError(
                            random,
                            String(user.house),
                            randomError,
                            nat
                        );
                        break;
                    case 'phone':
                        user.phone = createError(
                            random,
                            String(user.phone),
                            randomError,
                            nat
                        );
                        break;
                }

            }
        }
    }

    console.log(users);
};

module.exports = generateUsers;
