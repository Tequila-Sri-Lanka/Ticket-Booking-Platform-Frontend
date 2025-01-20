import axios from "axios";

const API_URL = "http://localhost:8080/Ticket-booking/api/v1/tickets";

class TicketService {
    constructor() {
        
    this.token =""; // Placeholder for the token
  }

  setToken(token) {
    this.token = token; // Dynamically set the token
  }

  getHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`, // Set the token in the Authorization header
      },
    };
  }

  async createTicket(ticketData) {
    try {
      const response = await axios.post(
        API_URL,
        ticketData,
        this.getHeaders() // Attach token as header here
      );
      console.log("Ticket created:", response.data);
    } catch (error) {
      console.error(
        "Error creating ticket:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async getTicketById(id) {
    try {
      const response = await axios.get(
        `${API_URL}/${id}`,
        this.getHeaders() // Attach token as header here
      );
      console.log("Ticket fetched:", response.data);
    } catch (error) {
      console.error(
        "Error fetching ticket:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async getAllTickets() {
    try {
      const response = await axios.get(API_URL, this.getHeaders()); // Attach token as header here
      console.log("All tickets:", response.data); 
      return response.data
      
    } catch (error) {
      console.error(
        "Error fetching all tickets:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async updateTicket(id, ticketData) {
    try {
      const response = await axios.put(
        `${API_URL}/${id}`,
        ticketData,
        this.getHeaders() // Attach token as header here
      );
      console.log("Ticket updated:", response.data);
    } catch (error) {
      console.error(
        "Error updating ticket:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async deleteTicket(id) {
    try {
      const response = await axios.delete(
        `${API_URL}/${id}`,
        this.getHeaders() // Attach token as header here
      );
      console.log("Ticket deleted:", response.data);
    } catch (error) {
      console.error(
        "Error deleting ticket:",
        error.response ? error.response.data : error.message
      );
    }
  }
}

// Example Usage
const ticketService = new TicketService();

// Set the token (e.g., after login)
ticketService.setToken(
  "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJzdWIiOiJzYWNoaUBnbWFpbC5jb20iLCJpYXQiOjE3MzQ5NjczNDEsImV4cCI6MTczNDk2OTc0MX0.97-lOPRwGMScmgWHSm3JjO-dbQTjpJw8Dc2_vhRx8Gw"
);

// Make API requests
(async () => {
  await ticketService.getAllTickets();
})();
export default ticketService;