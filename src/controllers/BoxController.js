const Box = require('../models/Box');

class BoxController {

    async store(req, res) {

        const box = await Box.create(req.body);

        return res.json(box);
    }

    async show(req, res) {
        const box = await Box.findById(req.params.id);
        return res.json(box);
    }
}

module.exports = new BoxController();