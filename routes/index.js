var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let players=[
    {
      name:"Cristiano Ronaldo",
      country:"Portugal",
      position:"Forward",
      description:"Machester-United",
      jerseynum:"7",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p14937.png"
    },
    {
      name:"Marcus Rashford",
      country:"England",
      position:"Right-Winger",
      description:"Machester-United",
      jerseynum:"10",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p176297.png"
    },
    {
      name:"Bruno Fernandes",
      country:"Portugal",
      position:"Attacking Midfielder",
      description:"Machester-United",
      jerseynum:"8",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p141746.png"
    },
    {
      name:"Jadon Sancho",
      country:"England",
      position:"Left-winger",
      description:"Machester-United",
      jerseynum:"25",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p209243.png"
    },
    {
      name:"Antony",
      country:"Brazil",
      position:"Left-winger",
      description:"Machester-United",
      jerseynum:"21",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p467169.png"
    },
    {
      name:"Raphael Varane",
      country:"France",
      position:"Defender",
      description:"Machester-United",
      jerseynum:"19",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p90152.png"
    },
    {
      name:"Lisandro Martinez",
      country:"Argentina",
      position:"Defender",
      description:"Machester-United",
      jerseynum:"6",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p221820.png"
    },
    {
      name:"Christien Eriksen",
      country:"Denmark",
      position:"Attacking Midfield",
      description:"Machester-United",
      jerseynum:"14",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p80607.png"
    },
    {
      name:"Diogo Dalot",
      country:"Portugal",
      position:"Right-Back",
      description:"Machester-United",
      jerseynum:"20",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p216051.png"
    },
    {
      name:"Casemiro",
      country:"Brazil",
      position:"Defensive Midfielder",
      description:"Machester-United",
      jerseynum:"18",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p61256.png"
    },
    {
      name:"Antony Martial",
      country:"France",
      position:"Striker",
      description:"Machester-United",
      jerseynum:"9",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p148225.png"
    },
    {
      name:"David De Gea",
      country:"Spain",
      position:"Goal keeper",
      description:"Machester-United",
      jerseynum:"1",
      image:"https://resources.premierleague.com/premierleague/photos/players/250x250/p51940.png"
    },
  ]

  
  res.render('index', { players });
});

module.exports = router;
