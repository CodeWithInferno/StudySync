const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001; // or any other port you prefer

// Your Spotify API credentials
const clientId = '772d608b32184ad2ad041b8ce09622ed';
const clientSecret = '402edf242a97458f8705b2b9d756e60d';

// Spotify token endpoint
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

let accessToken = null;
let tokenExpirationTime = 0;

// Middleware to handle the token request
app.get('/getAccessToken', async (req, res) => {
  const currentTime = Date.now() / 1000; // Current time in seconds

  // Check if the token is not set or has expired
  if (!accessToken || currentTime >= tokenExpirationTime) {
    try {
      const response = await axios.post(
        tokenEndpoint,
        new URLSearchParams({
          grant_type: 'client_credentials',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: clientId,
            password: clientSecret,
          },
        }
      );

      accessToken = response.data.access_token;
      // Set the expiration time to one hour from now
      tokenExpirationTime = currentTime + 3600;
    } catch (error) {
      console.error('Error getting access token:', error);
      res.status(500).send('Error getting access token');
      return;
    }
  }

  // Send the current access token as a response
  res.send({ accessToken });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
