const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Привет, Октагон!</h1>');
});

app.get('/static', (req, res) => {
    res.json({ header: "Hello", body: "Octagon NodeJS Test" });
});

app.get('/dynamic', (req, res) => {
    const values = ['a', 'b', 'c'].map(key => parseFloat(req.query[key]));

    if (values.some(isNaN)) {
        return res.json({ header: "Error" });
    }

    const result = (values[0] * values[1] * values[2]) / 3;
    res.json({ header: "Calculated", body: result.toString() });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
