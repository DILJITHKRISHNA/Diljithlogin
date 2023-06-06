var express = require('express');
var router = express.Router();
var path=require("path");
var session;
const authent = {
  email: "diljith@gmail.com",
  password: "diljith123"
}
let items = [{
  image: 'https://cdn.hmv.com/r/w-640/hmv/files/ab/abc98650-ef23-4912-8c22-6cf87dfe1399.png',
  cardtitle: "Hogwarts legacy-ps5 version",
  discription: "$250",
  button: "add to cart",
}, {
  image: 'https://store-images.s-microsoft.com/image/apps.49800.13718773309227929.bebdcc0e-1ed5-4778-8732-f4ef65a2f445.9ac09d39-064d-466c-81ca-2f1b6f0b95c5',
  cardtitle: "Forza Horizon-ps5 version",
  discription: "$200",
  button: "add to cart",
}
  , {
  image: 'https://qph.cf2.quoracdn.net/main-qimg-c2f9add9477fbbdd20a38bdc64b49404',
  cardtitle: "GTA V-Ps5 version ",
  discription: "$150",
  button: "add to cart",
},
{
  image: 'https://www.reliancedigital.in/medias/Ubisoft-Assassins-Creed-Valhalla-Gaming-Titles-491973482-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1ODg0ODd8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2g0MS85NjE5ODg5NjUxNzQyLmpwZ3xiMWMxY2EyNTdkNDE0YzFmNjU3ODIxMTViN2FkMjk4YTI3ZjdlMjQwYWY5MWI4ZmZlNDNkNzBmMWExZjgwYTIw',
  cardtitle: "Assassin creed valhalla-ps5 version",
  discription: "$230",
  button: "add to cart",
}]
/* GET index page. */
router.get('/', function (req, res) {
  session = req.session;
  if (session.userid) {
    res.redirect('/home')
  } else {
    res.render('index');
  }
});

 
//login user
router.post('/login', function (req, res) {

  // console.log(req.body)
  if (req.body.username == authent.email && req.body.password == authent.password) {
    session = req.session;
    req.session.userid = req.body.username;
    res.redirect('/home')
  }

  else {
    res.render('index', { login: 'Invalid Username or password' })

  }
})
// home page
router.get('/home', (req, res) => {
  session = req.session;
  if (session.userid) {
    res.render('home', { items })
  } else {
    res.redirect('/')
  }
})



// logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/')
})





module.exports = router;
