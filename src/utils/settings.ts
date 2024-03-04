let { VITE_ENDPOINT, VITE_THIRDWEB_CLIENT_ID } = import.meta.env;

const ENDPOINT_URL = VITE_ENDPOINT || "http://localhost:8085";
const THIRDWEB_CLIENT_ID = VITE_THIRDWEB_CLIENT_ID || "xxx";

export default { ENDPOINT_URL, THIRDWEB_CLIENT_ID };
