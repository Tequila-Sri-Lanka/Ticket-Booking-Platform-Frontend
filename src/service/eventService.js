import axios from "axios";

const API_URL = "https://www.dev.ticketbooking.tequilasl.com/Ticket-booking/events";

class EventService {
  constructor() {
    this.token = ""; 
  }

  setToken(token) {
    this.token = token; 
  }

  getHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.token}`, 
      },
    };
  }

  async createEvent(eventData) {
    try {
      const response = await axios.post(
        API_URL,
        eventData,
        this.getHeaders() 
      );
      console.log("Event created:", response.data);
    } catch (error) {
      console.error(
        "Error creating event:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async getEventById(id) {
    try {
      const response = await axios.get(
        `${API_URL}/${id}`,
        this.getHeaders() 
      );
      console.log("Event fetched:", response.data);
    } catch (error) {
      console.error(
        "Error fetching event:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async getAllEvents() {
    try {
      const response = await axios.get(API_URL, this.getHeaders()); 
      console.log("All events:", response.data);
    } catch (error) {
      console.error(
        "Error fetching all events:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async updateEvent(id, eventData) {
    try {
      const response = await axios.put(
        `${API_URL}/${id}`,
        eventData,
        this.getHeaders() 
      );
      console.log("Event updated:", response.data);
    } catch (error) {
      console.error(
        "Error updating event:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async deleteEvent(id) {
    try {
      const response = await axios.delete(
        `${API_URL}/${id}`,
        this.getHeaders() 
      );
      console.log("Event deleted:", response.data);
    } catch (error) {
      console.error(
        "Error deleting event:",
        error.response ? error.response.data : error.message
      );
    }
  }
}

// Example Usage
const eventService = new EventService();

// Set the token (e.g., after login)
eventService.setToken(
  "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJzdWIiOiJzYWNoaUBnbWFpbC5jb20iLCJpYXQiOjE3MzQ5NjczNDEsImV4cCI6MTczNDk2OTc0MX0.97-lOPRwGMScmgWHSm3JjO-dbQTjpJw8Dc2_vhRx8Gw"
);

// Make API requests
(async () => {
  await eventService.getAllEvents();
})();
