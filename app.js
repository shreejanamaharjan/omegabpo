const express = require('express');
const app = express();
app.get("/", function(req, res){
  res.send("hey beautiful");
});
app.listen(3000);