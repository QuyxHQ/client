import toast from './toast';

type truncateAddressProps = {
    address: string;
    suffixLength?: number;
    prefixLength?: number;
};

export function truncateAddress(props: truncateAddressProps) {
    if (!props.address) return 'null';

    if (!props.prefixLength) props.prefixLength = 5;
    if (!props.suffixLength) props.suffixLength = 4;

    if (props.address.length <= props.prefixLength + props.suffixLength) return props.address;

    const prefix = props.address.slice(0, props.prefixLength);
    const suffix = props.address.slice(-props.suffixLength);
    const truncated = `${prefix}....${suffix}`;

    return truncated;
}

export function isURL(string: string) {
    return /^(ftp|http|https):\/\/[^ "]+$/.test(string);
}

export async function copyToClipboard(text: string) {
    if (!navigator.clipboard) {
        toast({
            type: 'error',
            message: 'Clipboard action not supported on device',
        });

        return;
    }

    try {
        await navigator.clipboard.writeText(text);

        toast({
            type: 'success',
            message: 'Copied to clipboard ✅',
        });
    } catch (e: any) {
        toast({
            type: 'error',
            message: 'Unable to copy to clipboard',
        });

        console.error('Unable to copy text to clipboard', e);
    }
}
