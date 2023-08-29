const express = require('express');
const router = new express.Router();
const weatherModel = require("../models/weatherschema.js");

router.get('/weather/api', async (req, res) => {
    try {
        res.status(400).json({ cod: "400", message: "Nothing to geocode" })

    } catch (e) {
        console.log(e);
        res.status(200).send("Internal Server Error");
    }
})
//get data && get methode
router.get("/weather/api/:name", async (req, res) => {
    try {
        const name = req.params.name;
        var cityData = await weatherModel.find({ name: name }, { _id: 0 });
        // console.log(cityData);
        if (cityData == false) {
            res.status(404).json({ cod: "404", message: "City Not Found" });
        } else {
            res.status(200).send(cityData);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }

})
router.get('/weather/api/data/apidata', async (req, res) => {
    try {
        res.status(400).json({ cod: "400", message: "Nothing to geocode" })
    } catch (e) {
        console.log(e);
        res.status(200).send("Internal Server Error");
    }

})
// get all apidata
router.get('/weather/api/data/apidata', async (req, res) => {
    try {
        const allApiData = await weatherModel.find();
        // res.status(200).send(allApiData);
        if (allApiData == false) {
            res.status(404).json({ cod: "404", message: "Nothing to geocode" });
        } else {
            res.status(200).send(allApiData);
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error")
    }
})
module.exports = router;