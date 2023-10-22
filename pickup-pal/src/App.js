// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div class="App">
//       <h1>Hello, World!</h1>
//       <img src={logo} className="App-logo" alt="logo" width={250} height={450}/>
//     </div>
//   );
// }

// export default App;



// import React from 'react';

// const headerStyle = {
//   background: '#f0b962', // Change the background color to your desired color
//   color: 'white',    // Text color
//   textAlign: 'center',
//   padding: '20px 0',
//   fontfamily: 'Lato, sans-serif'
// };

// function App() {
//   return (
//     <div>
//       <header style={headerStyle}>
//         <h1>PickupPal</h1>
//       </header>
      
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 10,
  lng: 10,
};

//43°04'16.4"N 89°24'22.9"W
function App() {
  return (
    <div>
      <header style={{ background: 'blue', color: 'white', textAlign: 'center', padding: '20px 0', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to My React App</h1>
      </header>

      <LoadScript googleMapsApiKey="AIzaSyCTrIV0Kk1Bs6ckMxOL6UtC7vnroWQyNLk">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;
