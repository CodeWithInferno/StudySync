// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SpotifyPlayer = () => {
//   const [player, setPlayer] = useState(null);

//   useEffect(() => {
//     const getAccessToken = async () => {
//       try {
//         const response = await axios.get('/getAccessToken');
//         const accessToken = response.data.accessToken;
//         return accessToken;
//       } catch (error) {
//         console.error('Error getting access token:', error);
//         throw error;
//       }
//     };

//     // Initialize the Spotify Web Playback SDK
//     window.onSpotifyWebPlaybackSDKReady = async () => {
//       const newPlayer = new Spotify.Player({
//         name: 'StudySync',
//         getOAuthToken: async (callback) => {
//           try {
//             const accessToken = await getAccessToken();
//             callback(accessToken);
//           } catch (error) {
//             // Handle error
//             console.error('Error getting access token:', error);
//           }
//         },
//       });

//       // Error handling
//       newPlayer.addListener('initialization_error', ({ message }) => {
//         console.error(message);
//       });
//       newPlayer.addListener('authentication_error', ({ message }) => {
//         console.error(message);
//       });
//       newPlayer.addListener('account_error', ({ message }) => {
//         console.error(message);
//       });
//       newPlayer.addListener('playback_error', ({ message }) => {
//         console.error(message);
//       });

//       // Ready
//       newPlayer.addListener('ready', ({ device_id }) => {
//         console.log('Ready with Device ID', device_id);
//       });

//       // Connect to the player
//       newPlayer.connect().then((success) => {
//         if (success) {
//           console.log('The Web Playback SDK successfully connected to Spotify!');
//         }
//       });

//       setPlayer(newPlayer);
//     };

//     // Load the Spotify Web Playback SDK script
//     const script = document.createElement('script');
//     script.src = 'https://sdk.scdn.co/spotify-player.js';
//     script.async = true;
//     document.body.appendChild(script);

//     // Cleanup function
//     return () => {
//       if (player) {
//         player.disconnect();
//       }
//     };

//   }, []);

//   const playPlaylist = async () => {
//     // Add logic to play a prefetched playlist
//     const playlistUri = 'spotify:playlist:37i9dQZF1DX8NTLI2TtZa6';
//     if (player) {
//       player
//         .play({
//           uris: [playlistUri],
//         })
//         .then(() => {
//           console.log('Playback started!');
//         })
//         .catch((error) => {
//           console.error('Error starting playback:', error);
//         });
//     }
//   };

//   const playNext = () => {
//     // Add logic to play the next track
//     if (player) {
//       player.nextTrack().then(() => {
//         console.log('Playing next track');
//       });
//     }
//   };

//   const playPrevious = () => {
//     // Add logic to play the previous track
//     if (player) {
//       player.previousTrack().then(() => {
//         console.log('Playing previous track');
//       });
//     }
//   };

//   return (
//     <div>
//       <button onClick={playPlaylist}>Play Prefetched Playlist</button>
//       <button onClick={playNext}>Play Next Track</button>
//       <button onClick={playPrevious}>Play Previous Track</button>
//     </div>
//   );
// };

// export default SpotifyPlayer;


import React from 'react';

const SpotifyPlayer = () => {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0 , marginLeft: '20px', marginBottom: '20px'}}>
      <iframe
        title="Spotify Player"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6"
        width="300"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SpotifyPlayer;
