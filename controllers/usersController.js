const axios = require('axios');

class usersController {
    async generateUsers(req, res) {
        try {
            const { nat, results, seed, page, errors } = req.query;

            const users = await axios.get(
                `https://randomuser.me/api/?inc=gender,name,nat,phone,location,login&nat=${nat}&results=${results}&seed=${seed}&page=${page}`
            );

            return res.json(users.data);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new usersController();
