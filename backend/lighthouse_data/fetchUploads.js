// Import the Lighthouse SDK
import lighthouse from '@lighthouse-web3/sdk';

// Use the function to retrieve the list of uploads
const publicKey = '0xc0f6Acd92d1E42573C6e4002600d7AF65692c055'; // Make sure to replace with your public key
const uploads = await lighthouse.getUploads('API-Key');

// Display the list of uploaded files
console.log(uploads.data.fileList);