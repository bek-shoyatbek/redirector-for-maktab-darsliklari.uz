const express = require("express");
const app = express();
const port = 3400;
const redirectURL = 'https://play.google.com/store/apps/details?id=dev.mobile.books';


app.use("*", (req, res) => {
    res.redirect(redirectURL);
    return;
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});