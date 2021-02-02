const router = require('express').Router();

let User = require('../models/user.model');

router.get('/', async (req, res) => {
    const users = await User.find();
    try {
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/add', async (req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });

    try {
        await newUser.save();
        res.send(newUser);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) res.status(404).send("No item found");
        res.status(200).send();
    } catch (err) {
        res.status(500).send(err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);
        await User.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
