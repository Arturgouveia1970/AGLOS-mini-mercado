// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// // import { Icon } from '@iconify/react';

// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// function Map() {
//   const defaultProps = {
//     center: {
//       title: 'Agls-meu mercadinho',
//       lat: -9.05120,
//       lng: 13.05461,
//     },
//     zoom: 18,
//   };

//   // const renderMarkers = (map, maps) => {
//   //   let marker = new maps.Marker({
//   //     position (
//   //       lat='-9.05120',
//   //       lng='13.05461',
//   //       map,
//   //       title= 'Agls-meu mercadinho'
//   //   )}
//   // };

//   const renderMarkers = (map, maps) => {
//     const marker = new maps.Marker({
//       position: { lat: -9.05120, lng: 13.05461 },
//       map,
//       title: 'Hello World!',
//     });
//     return marker;
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: 'AIzaSyC6UsSp42bmjuzg3XQFHIDDCBLTh0Oogew' }}
//         // defaultCenter={defaultProps.center}
//         defaultCenter={{
//           lat: -9.05120,
//           lng: 13.05461,
//         }}
//         defaultZoom={defaultProps.zoom}
//         yesIWantToUseGoogleMapApiInternals
//         onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
//       >
//         {/* <Marker lat={-9.05120} lng={13.05461} /> */}
//       </GoogleMapReact>
//     </div>
//   );
// }

// export default Map;

import React from 'react';
import { GoogleMap } from 'react-google-maps';
import LocationPin from './LocationPin';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
     defaultCenter={{ lat: -9.05120, lng: 13.05461 }}>
      { /* We will render our data here */ }
    </GoogleMap>
  );
}

export default Map;