module.exports = async (req, res) {
  let { headers, method } = req;

  if (method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.status(200).send();
  }

  else {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Vary", "origin");
    res.setHeader("Content-Type", "text/html");

    res.status(200).send(`Hello from the server. You accessed this URL: ${req.url}`);
  }
}
