import { createAsyncLocalStorage } from './async.storage';

const { BASE_URL, PROD, VITE_API_ENDPOINT, VITE_NETWORK } = import.meta.env;

const API_ENDPOINT = VITE_API_ENDPOINT || 'http://localhost:3000/';
const IS_TESTNET = !(VITE_NETWORK == 'mainnet');
const storage = createAsyncLocalStorage('app');

export default {
    BASE_URL,
    IS_PROD: PROD,
    API_ENDPOINT,
    IS_TESTNET,
    storage,
};