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
const CONTRACT_ADDR = VITE_CONTRACT_ADDR || 'EQDO6qwt0-_Tm7jDbdlRfwVN-KhW87NLzTFi--gIHp6x6ko4';

const MARKETPLACE_ADDR =
    VITE_MARKETPLACE_ADDR || 'EQBJKS1TMbYYSvlHXAfqE1D6sJDSl3VmHi0EYTpYw95_5rCz';
const MARKETPLACE_FEE_ADDR =
    VITE_MARKETPLACE_FEE_ADDR || 'UQDGmrGUPHfFLLkTOcK_8lex-Q8KKMo4rldx3LvFaOVG8SMA';

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
