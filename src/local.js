const PORT = process.env.PORT || 3000;
const OBD_BASE_URL = "https://www.oekobaudat.de/OEKOBAU.DAT/resource/";

const express = require("express");
const app = express();

// bent is a lightweight request library
const bent = require("bent");
const getString = bent("string");

app.get('/oekobaudat', async (req, res) => {
  let query = req.query.query.replace(/;/g, "&");
  console.log(query);
  getString(OBD_BASE_URL + query)
    .then(body => { res.status(200).send(body); })
    .catch(e => console.error(e));
});

app.post('/', async (req, res) => {
  console.log(req.url);
  console.log(body);
})

app.listen(PORT, () => {
  console.log("server is running");
})
