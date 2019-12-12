// import Paho from 'paho-mqtt' ;

// BROKER_URL = 'mqtt.eclipse.org';
// CLIENT_ID = 'pi-mfrc522';
// RC522_READ_TOPIC =`${CLIENT_ID}/read`;

// export const getMqttClient = () => {
//   const client = new Paho.Client(BROKER_URL, 8080, CLIENT_ID);
//   client.connect({
//     onSuccess: (response) => {
//       console.log("onConnect", response);
//       client.subscribe(RC522_READ_TOPIC);
//     },
//     onFailure: (response) => {
//       console.log("onFailure", response);
//     } 
//   });
//   client.onMessageArrived = (message) => {
//     console.log("onMessageArrived:"+message.payloadString);
//   };
//   client.onConnectionLost = (responseObject) => {
//     if (responseObject.errorCode !== 0) {
//       console.log("onConnectionLost:"+responseObject.errorMessage);
//     }
//   };
//   return client;
// };
