/**
 * Required External Modules
 */
 const express = require("express");
 const path = require("path");
 
/**
 * App Variables
 */
 const app = express();
 const port = process.env.PORT || "5001";
 
/**
 *  App Configuration
 */
 app.use('/static', express.static(path.join(__dirname, 'static')));



/**
 * Server Activation
 */
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });