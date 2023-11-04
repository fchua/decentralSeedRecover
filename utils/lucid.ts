import { Blockfrost, Lucid } from 'lucid-cardano';

const initLucid = async (wallet: string) => {
    console.log(`wallet = ${wallet}`);
    const walletApi = await window.cardano[wallet.toLocaleLowerCase()].enable();
    const url = 'https://cardano-preprod.blockfrost.io/api/v0';
    const projectId = getProjectId();
    const network = 'Preprod';
    const lucid = await Lucid.new(new Blockfrost(url, projectId), network);
    lucid.selectWallet(walletApi);
    return lucid;
}

export const getProjectId = () : string => {
  return 'preprodav5tVxKEeXJoJt82FZTqds5osl34ePPB';
}

export const fetchBlockFrostApi = async () => {
    try {
      const response = await fetch('/api/getData');
      const data = await response.json();
      if (data.seed[0]) {
        const blockfrostApi = data.seed[2].description;
        console.log("api = ", blockfrostApi)
        return blockfrostApi; // Return the value
      }      
    } catch (error) {
      console.error('Error fetching secret data:', error);
    }
    return null; // Return null if there was an error or no data was found
  }; 

export default initLucid;
