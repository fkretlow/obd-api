const OBD_BASE_URL = "https://www.oekobaudat.de/OEKOBAU.DAT/resource/";

// bent is a lightweight modern request library
const bent = require("bent");
const getString = bent("string");

module.exports = async (req, res) => {
    let { method } = req;

    // CORS preflight
    if (method === "OPTIONS") {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET");
        res.status(200).send();
    }

    // the actual request
    else {
        // parse the query (need to use ; instead of & in the original request to the api)
        let db_query = req.query.query.replace(/;/g, "&");
        console.log(`query: ${db_query}`);

        // request
        getString(OBD_BASE_URL + db_query)
            .then(body => {
                console.log("received data:\n", body);
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.setHeader("Vary", "origin");
                // res.setHeader("Content-Type", "text/html");
                res.status(200).send(body);
            })
            .catch(e => console.error(e));
    }
}
