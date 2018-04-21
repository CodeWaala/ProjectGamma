import axios from "axios";

export default {
  // Gets all orders
  getOrders: function() {
    return axios.get("/api/orders");
  },

  getOrdersPending : function() {
      return axios.get("/api/orders/pending");
  },

  signup: function () {
      return axios.post("/signup");
  },

  login: function () {
      return axios.get("/signin");
  },

  signout: function () {
      return axios.get("/signout");
  }
 
};