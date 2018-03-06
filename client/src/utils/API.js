import axios from "axios";

export default {
  // Gets all participants
  getParticipants: function() {
    return axios.get("/api/participants");
  },
  // Gets the upload data with the given id
  getParticipant: function(id) {
    return axios.get("/api/participant" + id);
  },
  // getUsername: function(address) {
  //   return axios.get("/api/uploads/email/" + address);
  // },
  signUpParticipant: function(userData) {
    return axios.post("/api/participant", userData);
  }
  // loginUser: function(loginCredentials) {
  //   return axios.post("/auth/login", loginCredentials);
  // }
};
