// const fs = require('fs');
// const qr = require('qrcode');

// // Define the text you want to encode in the QR code
// const text = " hey ....miss  I found you cute  .. can we connect on  insta ...";

// // Generate QR code
// qr.toFile('./qrcode.png', text, {
//     color: {
//         dark: '#AA336A',  // Color of the QR code
//         light: '#FFC0CB' // Background color of the QR code
//     }
// }, (err) => {
//     if (err) throw err;
//     console.log('QR code generated successfully!');
// });


const qr = require('qrcode');
const http = require('http');

const PORT = 3000;

// Define the URL you want to encode in the QR code
const url = 'http://localhost:' + PORT + '/action';

// Generate QR code
qr.toFile('./qrcode.png', url, {
    color: {
        dark: '#000',  // Color of the QR code
        light: '#fff' // Background color of the QR code
    }
}, (err) => {
    if (err) throw err;
    console.log('QR code generated successfully!');
});

// Set up a simple server to handle the action
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Welcome! This is the action triggered by scanning the QR code.</h1></body></html>');
 
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
