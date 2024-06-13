import { createAsyncLocalStorage } from './async.storage';

const { BASE_URL, PROD, VITE_API_ENDPOINT, VITE_NETWORK, VITE_CONTRACT_ADDR } = import.meta.env;

const API_ENDPOINT = VITE_API_ENDPOINT || 'http://localhost:3000/';
const CONTRACT_ADDR = VITE_CONTRACT_ADDR || 'EQBGYC-l0cA_Y-8JjxsLEWdJ1RrBdwzZVcbbkzTEE4pJWcpV';
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
