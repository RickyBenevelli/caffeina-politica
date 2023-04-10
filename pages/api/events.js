import path from 'path';
import fsPromises from 'fs/promises';

async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'json/events.json');
  
  const fileContents = await fsPromises.readFile(filePath);
  
  // const objectData = JSON.parse(fileContents);
  // return objectData


  res.status(200).json(JSON.parse(fileContents));

}
export default handler;
