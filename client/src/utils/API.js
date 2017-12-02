import axios from "axios";

export default {

//routes for teams
  
  addTeam: function(teamData){
    return axios.post("/api/team/", teamData)
  },

  getTeams: function(userId){
    return axios.put("/api/team/user/" + userId)
  },

  getOneTeam: function(id){
    return axios.get("/api/team/" + id)
  },
  deleteTeam: function(id){
    console.log("delete", id);
    return axios.delete("/api/team/" + id);
  },

//routes for players
  addPlayer: function(playerData){
    return axios.post("/api/player/", playerData)
  },

  getPlayers: function(){
    return axios.get("/api/player/")
  },

  getOnePlayer: function(id){
    return axios.get("/api/player/" + id)
  },

  deletePlayer: function(id){
    return axios.delete("/api/player/" + id)
  },

  editPlayer: function(id ,playerData){
    return axios.put("/api/player/", + id, playerData)
  },

//routes for games
  
  deletePlayerGame: function(id){
    return axios.delete("/api/playerGames/"+ id)
  },

  editPlayerGame: function(id, playerGameData){
    return axios.put("/api/playerGames/" + id , playerGameData)
  },

  getPlayerGames: function(){
    return axios.get("/api/playerGames/")
  },

  getOnePlayerGame: function(id){
    return axios.get("/api/playerGames/" + id)
  },

  addPlayerGame: function(playerGameData){
    return axios.post("/api/playerGames/", playerGameData)
  },

  addTeamGame: function(teamGameData){
    return axios.post("/api/teamGames/", teamGameData)
  },

   //routes for users

   registerUser: function(userData){
        return axios.post("/api/login/", userData)
    },

   updateUser: function(userUpdate){
        return axios.put("/api/login/", userUpdate)
    },

   login: function (cred) {
        return axios.post("/api/login/auth", cred)
    }

};




