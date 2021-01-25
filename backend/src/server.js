// o mesmo que const app = express;

const app = require('./app');

app.get("/", (req, res) => {
    res.json({
        message: "Olá, mundo;"
    });
})

app.listen(3333);