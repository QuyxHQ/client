export const UNPROTECTED_ROUTES = ["/", "/about", "/marketplace", "/pricing", "/team", "/card"];

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
