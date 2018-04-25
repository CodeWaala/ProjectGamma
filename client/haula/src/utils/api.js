import axios from "axios";

export default {
  // Gets all orders
  getOrders: function() {
    return axios.get("/api/orders");
  },

  getOrdersPending : function() {
      return axios.get("/api/orders/pending");
  }
 
};