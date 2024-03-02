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
