var express = require('express')
var app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  //res.send('Hello Lighthouse!')
  res.render('home', {title: "Example App", animal: "slow loris"});
})

app.get('/hulahoop', function(req, res) {
  //res.send("Wheee, we're hula-hoopin'");
  res.json({hula: "with hoops"});
});

app.get('/users/:id', function(req, res) {
  if (!isNaN(req.params.id)) {
    //res.send("You requested user with the ID: " + req.params.id);
    res.render("user", req.params);
  } else {
    if (req.params.id == "secret") {
      res.redirect("/hulahoop");
    } else {
      //res.send("Silly rabbit. Tricks are for kids.");
      res.render("error");
    }
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
