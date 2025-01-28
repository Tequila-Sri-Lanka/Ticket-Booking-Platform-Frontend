import axios from "axios";

const API_URL =
  "http://www.dev.ticketbooking.service.tequilasl.com/Ticket-booking/api/v1/movies";

class MovieService {
  constructor() {
    this.token = ""; // Placeholder for the token
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

  async createMovie(movieData) {
    try {
      const response = await axios.post(
        API_URL,
        movieData,
        this.getHeaders() // Attach token as header here
      );
      console.log("movie saved:", response.data);
    } catch (error) {
      console.error(
        "Error saving movie:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async getMovieById(id) {
    try {
      const response = await axios.get(
        `${API_URL}/${id}`,
        this.getHeaders() // Attach token as header here
      );
      console.log("Movie fetched:", response.data);
      return response.data
      
    } catch (error) {
      console.error(
        "Error fetching Movie:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async getAllMovies() {
    try {
      const response = await axios.get(API_URL, this.getHeaders()); // Attach token as header here
      console.log("All Movies:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching all movies:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async updateMovie(id, movieData) {
    try {
      const response = await axios.put(
        `${API_URL}/${id}`,
        movieData,
        this.getHeaders() // Attach token as header here
      );
      console.log("Movie updated:", response.data);
    } catch (error) {
      console.error(
        "Error updating Movie:",
        error.response ? error.response.data : error.message
      );
    }
  }

  async deleteMovie(id) {
    try {
      const response = await axios.delete(
        `${API_URL}/${id}`,
        this.getHeaders() // Attach token as header here
      );
      console.log("Movie deleted:", response.data);
    } catch (error) {
      console.error(
        "Error deleting Movie:",
        error.response ? error.response.data : error.message
      );
    }
  }
}

// Example Usage
const movieService = new MovieService();

// Set the token (e.g., after login)
movieService.setToken(
  "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJzdWIiOiJzYWNoaUBnbWFpbC5jb20iLCJpYXQiOjE3MzcyNjQ4NTksImV4cCI6MTczNzI2NzI1OX0.NaH9kBM-LgaKyiT1B6FyRBycKqnKmdRFB6NaVGZQN4w"
);

// Make API requests
(async () => {
  await movieService.getAllMovies();
})();
export default movieService;
