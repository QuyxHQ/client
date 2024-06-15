import { createAsyncLocalStorage } from './async.storage';

const {
    BASE_URL,
    PROD,
    VITE_API_ENDPOINT,
    VITE_NETWORK,
    VITE_CONTRACT_ADDR,
    VITE_MARKETPLACE_ADDR,
    VITE_MARKETPLACE_FEE_ADDR,
} = import.meta.env;

const API_ENDPOINT = VITE_API_ENDPOINT || 'http://localhost:3000/';
const CONTRACT_ADDR = VITE_CONTRACT_ADDR || 'EQBGYC-l0cA_Y-8JjxsLEWdJ1RrBdwzZVcbbkzTEE4pJWcpV';
const MARKETPLACE_ADDR =
    VITE_MARKETPLACE_ADDR || 'EQDad_tJzZZ87OnCZsFeiGi3Fh-baOowzliRvDCkE1joJ3VT';
const MARKETPLACE_FEE_ADDR =
    VITE_MARKETPLACE_FEE_ADDR || '0QDh9eI_Uqnu_ZcvsTZD1LKWsU4nhx-HRQAqvPVcJiNqs-ln';

const IS_TESTNET = !(VITE_NETWORK == 'mainnet');
const storage = createAsyncLocalStorage('app');

export default {
    BASE_URL,
    IS_PROD: PROD,
    API_ENDPOINT,
    IS_TESTNET,
    CONTRACT_ADDR,
    MARKETPLACE_ADDR,
    MARKETPLACE_FEE_ADDR,
    storage,
};
