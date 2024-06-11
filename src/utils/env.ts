import { createAsyncLocalStorage } from './async.storage';

const { BASE_URL, PROD, VITE_API_ENDPOINT, VITE_NETWORK, VITE_CONTRACT_ADDR } = import.meta.env;

const API_ENDPOINT = VITE_API_ENDPOINT || 'http://localhost:3000/';
const CONTRACT_ADDR = VITE_CONTRACT_ADDR || 'kQAQuG1lyH4r2g8pJDRMN4EER4nD-iMa_9FIHJZ6JcT_MlQg';
const IS_TESTNET = !(VITE_NETWORK == 'mainnet');
const storage = createAsyncLocalStorage('app');

export default {
    BASE_URL,
    IS_PROD: PROD,
    API_ENDPOINT,
    IS_TESTNET,
    CONTRACT_ADDR,
    storage,
};
