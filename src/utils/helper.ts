type truncateAddressProps = {
  address: string;
  suffixLength?: number;
  prefixLength?: number;
};

export function truncateAddress({
  address,
  prefixLength = 5,
  suffixLength = 4,
}: truncateAddressProps) {
  if (!address) return "null";

  if (address.length <= prefixLength + suffixLength) return address;

  const prefix = address.slice(0, prefixLength);
  const suffix = address.slice(-suffixLength);
  const truncated = `${prefix}....${suffix}`;

  return truncated;
}

export function isURL(string: string) {
  return /^(ftp|http|https):\/\/[^ "]+$/.test(string);
}

export function getCountForDashboard(data: { chainId: string; count: number }[], toMatch: number) {
  const _data = data.find((item) => item.chainId == String(toMatch));
  return _data ? _data.count : 0;
}

export function formatTime(time: number) {
  const years = Math.floor(time / (1000 * 60 * 60 * 24 * 365));
  time -= years * 1000 * 60 * 60 * 24 * 365;

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  time -= days * 1000 * 60 * 60 * 24;

  const hours = Math.floor(time / (1000 * 60 * 60));
  time -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(time / (1000 * 60));
  time -= minutes * 1000 * 60;

  const seconds = Math.floor(time / 1000);

  return `${years ? `${years}y ` : ""}${days ? `${days}d ` : ""}${hours ? `${hours}h ` : ""}${
    minutes ? `${minutes}m ` : ""
  }${seconds}s`;
}
