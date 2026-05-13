import { uploadFile } from './lib/storage';

async function testStorage() {
  console.log('🧪 Testing Tigris storage...');
  
  try {
    const testBuffer = Buffer.from('test image content');
    const testKey = 'test/test.jpg';
    const url = await uploadFile(testKey, testBuffer, 'image/jpeg');
    console.log('✅ Upload successful:', url);
  } catch (error) {
    console.error('❌ Upload failed:', error);
    console.log('🔍 Check these environment variables:');
    console.log('TIGRIS_ENDPOINT:', process.env.TIGRIS_ENDPOINT);
    console.log('TIGRIS_ACCESS_KEY_ID:', process.env.TIGRIS_ACCESS_KEY_ID ? '✅ Set' : '❌ Missing');
    console.log('TIGRIS_SECRET_ACCESS_KEY:', process.env.TIGRIS_SECRET_ACCESS_KEY ? '✅ Set' : '❌ Missing');
    console.log('TIGRIS_BUCKET:', process.env.TIGRIS_BUCKET);
  }
}

testStorage().catch(console.error);
