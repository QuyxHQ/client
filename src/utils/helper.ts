import toast from './toast';

type truncateAddressProps = {
    address: string;
    suffixLength?: number;
    prefixLength?: number;
};

export function toQs(obj: Object) {
    const qs = new URLSearchParams(Object.entries(obj)).toString();
    return qs;
}

export function checkUsername(username: string): string | undefined {
    if (username.length < 4) return 'Username should have atleast 4 chars';
    if (/^-/.test(username)) return 'Username cannot begin with a hyphen';
    if (/-$/.test(username)) return 'Username cannot end with a hyphen';
    if (/\s/.test(username)) return 'Username cannot have whitespace';
    if (/[^a-zA-Z0-9-]/.test(username)) {
        return 'Username can only contain alphanumeric characters and hyphen';
    }

    return;
}

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
