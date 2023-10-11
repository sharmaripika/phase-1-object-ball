function gameObject() {
    return {
    home:{
    teamName: "Brooklyn Nets",
    colors: ["Black", "White" ],
    players:{
        'Alan Anderson':{
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1},
        'Reggie Evans': {
            
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },

        'Brook Lopez': {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          'Mason Plumlee': {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          'Jason Terry': {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }

    }
},
away:{
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players:{
    
            'Jeff Adrien': {
              number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assists: 1,
              steals: 2,
              blocks: 7,
              slamDunks: 2
            },
            'Bismak Biyombo': {
              number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assists: 7,
              steals: 7,
              blocks: 15,
              slamDunks: 10
            },
            'DeSagna Diop': {
              number: 2,
              shoe: 14,
              points: 24,
              rebounds: 12,
              assists: 12,
              steals: 4,
              blocks: 5,
              slamDunks: 5
            },
            'Ben Gordon': {
              number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assists: 2,
              steals: 1,
              blocks: 1,
              slamDunks: 0
            },
            'Brendan Haywood': {
              number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assists: 12,
              steals: 22,
              blocks: 5,
              slamDunks: 12
            }
    }

}
}
}
console.log(gameObject());
function homeTeamName(){
    let object = gameObject();
    return object['home']['teamName'];
}
console.log(homeTeamName());

function numPointsScored(playersName){
let game = gameObject();
for(let team in game){
    if( game[team].players.hasOwnProperty(playersName)){
        return game[team].players[playersName].points;
    }
}
return null;
};

function shoeSize(playersName){
let game = gameObject();
for(let team in game){
    if (game[team].players.hasOwnProperty(playersName)){
        return game[team].players[playersName].shoe;
    }
}
return null;
}

function teamColors(teamName){
let game = gameObject();
for(let team in game){
    if(game[team].hasOwnProperty(teamName)){
        return(game[team][teamName].colors)
    }
    return null;
}
}
function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null;
}
function teamNames(){
    let game = gameObject();
    let teamNamesArray=[]
    for(let team in game) {
      teamNamesArray.push(game[team].teamName)
      }
  return teamNamesArray;  }
  
  
  console.log (teamNames());
  function playerNumbers(teamName){
    let game = gameObject();
    for(let team in game){
      if( game[team].teamName === teamName){
      let  playerNumbersArray=[];
      for(let player in game[team].players){
        playerNumbersArray.push(game[team].players[player].number);
          }
        return playerNumbersArray;  
      }
    
    }
     return null; 
  }
  function playerStats(playerName) {
    let game = gameObject();

    for (let team in game) {
        for (let player in game[team].players) {
            if (player === playerName) {
                return {
                    number: game[team].players[player].number,
                    shoe: game[team].players[player].shoe,
                    points: game[team].players[player].points,
                    rebounds: game[team].players[player].rebounds,
                    assists: game[team].players[player].assists,
                    steals: game[team].players[player].steals,
                    blocks: game[team].players[player].blocks,
                    slamDunks: game[team].players[player].slamDunks
                };
            }
        }
    }
    return null;
}

function bigShoeRebounds(){
    let game = gameObject();
    let largerstShoeSize = Object.values(game.home.players)
    .concat(Object.values(game.away.players))
    .reduce((maxShoeSize, player) => Math.max(maxShoeSize, player.shoe), 0);

    for(let team in game){
        for(let player in game[team].players){
         if ( game[team].players[player].shoe===largerstShoeSize){
            return game[team].players[player].rebounds;
         }
        }
    }
    return null;
}
function mostPointsScored(){
    let game = gameObject();
    let maxPoints = 0;
    let playerName ="";
    
    for(let team in game){
      for (let player in game[team].players){
        if(game[team].players[player].points>maxPoints){
          maxPoints=game[team].players[player].points;
          playerName= player;
        }
      
      }
    }
    debugger; 
  return playerName;
  }
  function winningTeam(){
    let game = gameObject();
    let homePoints= 0;
    let awayPoints=0;
  
    for(let player in game.home.players){
        homePoints += game.home.players[player].points;}
    for(let player in game.away.players){
        awayPoints += game.away.players[player].points;
    }
      if(homePoints>awayPoints){
        return game.home.teamName;
      }
      else if (awayPoints>homePoints){
        return game.away.teamName;
      }
      else{
        return "It's a tie";
      }
    }
    function playerWithLongestName(){
        let longestName=0;
        let playerName="";
        let game = gameObject();
        for(let team in game){
          for(let player in game[team].players){
            if(game[team].players[player].name>longestName.length)
              longestName=game[team].players[player].name;
            playerName= player;
          }
        }
        return playerName;
      }
      
      console.log(playerWithLongestName());
      function doesLongNameStealATon() {
        let stealTon = 0;
        let playerName = '';
        let longName = '';
        let game = gameObject();
      
        for (let team in game) {
          for (let player in game[team].players) {
            if (player.length > longName.length) {
              longName = player;
              playerName = game[team].players[player].name;
              stealTon = game[team].players[player].steals;
              teamWithLongestNameAndSteals = team;
            }
          }
        }
      
        return playerName !== '' && game[teamWithLongestNameAndSteals].players[longName].steals > stealTon;
      }
      
      console.log(doesLongNameStealATon());
      
      