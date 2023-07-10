import express from "express";
import API_KEY from "../config";
import HomePage from "./Components/HomePage";
import App from "./App";
import { renderToString } from "react-dom/server";
import React from "react";

const port = 8000;
const app = express();

app.get("/", (req, res) => {
  fetch(
    `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=england&country=gb&category=top`
  )
    .then((response) => response.json())
    .then((apiData) => {
    const html = renderToString(<HomePage apiData={apiData} />);

      res.send(`
      <!DOCTYPE html>
      <html>
        <body>
          <div id="root">${html}</div>
          <script src="/bundle.js"></script>
        </body>
      </html>
  `);
    });
    
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
