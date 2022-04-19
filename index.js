const dotenv = require(`dotenv`);
dotenv.config();

const express = require(`express`);

const app = express();
const PORT = process.env.PORT;

app.use(express.static(`./public`));

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});