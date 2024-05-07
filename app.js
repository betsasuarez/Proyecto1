const express = require('express');

const app = express();

const COUNTRIES = [
    {
        id: 'c1',
        name: 'United States',
        cities: ['New York', 'Los Angeles', 'Chicago']
    },
    {
        id: 'c2',
        name: 'United Kingdom',
        cities: ['London', 'Manchester', 'Birmingham']
    },
    {
        id: 'c3',
        name: 'France',
        cities: ['Paris', 'Marseille', 'Lyon']
    }
];

app.get('/api/countries', (req, res, next) => {
    res.json(COUNTRIES);
});

app.get('/api/countries/:cid', (req, res, next) => {
    const countryId = req.params.cid;
    const country = COUNTRIES.find(c => c.id === countryId);

    if (!country) {
        return res.status(404).json({ message: "Country not found" });
    }

    res.json(country);
});

app.get('/api/countries/:cid/cities', (req, res, next) => {
    const countryId = req.params.cid;
    const country = COUNTRIES.find(c => c.id === countryId);

    if (!country) {
        return res.status(404).json({ message: "Country not found" });
    }

    res.json(country.cities);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
