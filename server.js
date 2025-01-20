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
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const c = parseFloat(req.query.c);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return res.json({ header: "Error" });
    }

    const result = (a * b * c) / 3;
    res.json({ header: "Calculated", body: result.toString() });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
