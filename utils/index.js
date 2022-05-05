import fs from 'fs/promises';

export const getWebsites = async () => JSON.parse(await fs.readFile('./data.json', 'utf-8'));
export const updateWebsites = data => fs.writeFile('./data.json', JSON.stringify(data));
