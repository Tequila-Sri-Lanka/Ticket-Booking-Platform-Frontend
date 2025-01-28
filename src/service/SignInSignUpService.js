import axios from "axios";

const API_BASE_URL = "http://www.dev.ticketbooking.service.tequilasl.com/Ticket-booking/api/v1/auth"; 


async function signUp(userDetails) {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userDetails);
    console.log("Sign-Up Successful:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Sign-Up Error:", error.response.data);
    } else {
      console.error("Sign-Up Failed:", error.message);
    }
    throw error;
  }
}
function clearAuthToken() {
  localStorage.removeItem("authToken");
  console.log("authToken removed from localStorage");
}
async function signIn(credentials) {
  try {
    const response = await axios.post(`${API_BASE_URL}/signin`, credentials);
    console.log("Sign-In Successful:", response.data);
    clearAuthToken()
       localStorage.setItem("authToken", response.data.token);
       console.log("authToken saved to localStorage");
  
    console.log(response.data.token)
    
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Sign-In Error:", error.response.data);
    } else {
      console.error("Sign-In Failed:", error.message);
    }
    throw error;
  }
}

// test usage
// (async function demo() {
//   const newUser = {
//     id: 1,
//     name: "John Doe",
//     nic: "123456789V",
//     userName: "johndoe",
//     password: "password123",
//     email: "sachi@gmail.com",
//     role: "ADMIN",
//   };

    // const loginCredentials = {
    //   email: "sachi@gmail.com",
    //   password: "password123"
    // };

  // try {
    // Sign up 
    // const signUpResponse = await signUp(newUser);
    // console.log("Sign-Up Response:", signUpResponse);

    // Sign in 
   // const signInResponse = await signIn(loginCredentials);
   // console.log("Sign-In Response:", signInResponse);
//   } catch (error) {
//     console.error("Error in Authentication Flow:", error.message);
//   }
// })();

export default {
  signUp,
  signIn,
};