import axios from "axios";

export default {
  // Gets all tasks
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  // Gets the upload data with the given id
  getTask: function(id) {
    return axios.get("/api/tasks" + id);
  },
  // getUsername: function(address) {
  //   return axios.get("/api/uploads/email/" + address);
  // },
  // signUpParticipant: function(userData) {
  //   return axios.post("/api/participant", userData);
  // }
  // loginUser: function(loginCredentials) {
  //   return axios.post("/auth/login", loginCredentials);
  // }
};
