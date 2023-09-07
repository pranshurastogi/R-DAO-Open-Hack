import lighthouse from '@lighthouse-web3/sdk'

const apiKey = 'YOUR_API_KEY_HERE';
const uploadResponse = await lighthouse.upload(
  '/Users/pranshurastogi/Desktop/final.png', 
 'API KEY',
  false
);

console.log(uploadResponse);
