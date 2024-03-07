import { BinanceTestnet } from "@thirdweb-dev/chains";

export const UNPROTECTED_ROUTES = [
  "/",
  "/about",
  "/marketplace",
  "/pricing",
  "/team",
  "/tags",
  "/report",
];

export const MOCK_EMPTY_API_RESPONSE = {
  status: true,
  message: "empty result",
  data: [],
  pagination: {
    page: 1,
    limit: 12,
    skip: 0,
    total: 0,
  },
};

export const DEFAULT_CHAIN = BinanceTestnet;
