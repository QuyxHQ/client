import { Address, fromNano } from 'ton-core';
import toast from './toast';
import { TonClient } from 'ton';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import env from './env';
import { NftItem } from '../contract/artefacts/tact_NftItem';
import { AuctionContract } from '../contract/artefacts/tact_AuctionContract';
import { FixedSaleContract } from '../contract/artefacts/tact_FixedSaleContract';

type truncateAddressProps = {
    address: string;
    suffixLength?: number;
    prefixLength?: number;
};

export function isMemberofRoute(needle: string, haystack: string[]) {
    let isMember = false;

    for (let i of haystack) {
        if (i.endsWith('/*')) {
            const length = i.length - 2;

            if (needle.substring(0, length) == i.substring(0, length)) {
                isMember = true;
                break;
            }
        } else {
            if (needle == i) {
                isMember = true;
                break;
            }
        }
    }

    return isMember;
}

export function isValidAddress(address: string) {
    try {
        Address.parse(address);

        return true;
    } catch (e: any) {
        return false;
    }
}

export function getAvatar(pfp: string | null, username: string) {
    if (pfp) return pfp;
    return `https://api.dicebear.com/8.x/adventurer-neutral/svg?seed=${username}`;
}

export function approx(number: bigint | string | number) {
    return Number(fromNano(number)).toFixed(2);
}

export function calcCountdown(time: number) {
    const now = new Date().getTime();
    const distance = new Date(time).getTime() - now;

    if (distance < 0) {
        return {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        days: String(days),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
    };
}

export async function getFixedSaleInfo(address: string) {
    try {
        const addr = Address.parse(address);

        const client = new TonClient({
            endpoint: await getHttpEndpoint({
                network: env.IS_TESTNET ? 'testnet' : 'mainnet',
            }),
        });

        const fixedSaleContract = client.open(FixedSaleContract.fromAddress(addr));
        return await fixedSaleContract.getGetFixPriceData();
    } catch (e: any) {
        console.error(e.message);
        return;
    }
}

export async function getAuctionSaleInfo(address: string) {
    try {
        const addr = Address.parse(address);

        const client = new TonClient({
            endpoint: await getHttpEndpoint({
                network: env.IS_TESTNET ? 'testnet' : 'mainnet',
            }),
        });

        const auctionSaleContract = client.open(AuctionContract.fromAddress(addr));
        return await auctionSaleContract.getGetAuctionData();
    } catch (e: any) {
        console.error(e.message);
        return;
    }
}

export async function getSaleInfo(address: string) {
    try {
        const addr = Address.parse(address);

        const client = new TonClient({
            endpoint: await getHttpEndpoint({
                network: env.IS_TESTNET ? 'testnet' : 'mainnet',
            }),
        });

        const auctionContract = client.open(AuctionContract.fromAddress(addr));
        const fixedSaleContract = client.open(FixedSaleContract.fromAddress(addr));

        let sale, auction;

        try {
            sale = await fixedSaleContract.getGetFixPriceData();
        } catch (e: any) {
            console.error(e.message);
        }

        try {
            auction = await auctionContract.getGetAuctionData();
        } catch (e: any) {
            console.error(e.message);
        }

        return { sale, auction };
    } catch (e: any) {
        console.error(e.message);
        return undefined;
    }
}

export async function getNFTData(address: string) {
    try {
        const addr = Address.parse(address);

        const client = new TonClient({
            endpoint: await getHttpEndpoint({
                network: env.IS_TESTNET ? 'testnet' : 'mainnet',
            }),
        });

        const contract = client.open(NftItem.fromAddress(addr));
        return await contract.getGetNftData();
    } catch (e: any) {
        console.error(e.message);
        return undefined;
    }
}

export async function getNFTAuctionInfo(address: string) {
    try {
        const addr = Address.parse(address);

        const client = new TonClient({
            endpoint: await getHttpEndpoint({
                network: env.IS_TESTNET ? 'testnet' : 'mainnet',
            }),
        });

        const contract = client.open(NftItem.fromAddress(addr));
        return await contract.getGetAuctionInfo();
    } catch (e: any) {
        console.error(e.message);
        return undefined;
    }
}

export function getMinBid(bid: bigint, step: number) {
    return ((Number(fromNano(bid)) * (100 + step)) / 100).toFixed(2);
}

export function sleep(seconds: number) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const auction_start_time = 1713135600; // Sun Apr 14 2024 23:00:00 GMT+0000
const one_month = 60 * 60 * 24 * 30; // one month in seconds

function getPriceRange(len: number) {
    if (len == 4) return { start: 50, end: 500 };
    if (len == 5) return { start: 40, end: 400 };
    if (len == 6) return { start: 30, end: 300 };
    if (len == 7) return { start: 20, end: 200 };
    if (len == 8) return { start: 10, end: 100 };
    if (len == 9) return { start: 5, end: 50 };
    if (len == 10) return { start: 2, end: 20 };

    return { start: 1, end: 10 };
}

export function getUsernameMinPrice(username: string) {
    const len = username.length;
    let { start, end } = getPriceRange(len);

    const seconds = Date.now() / 1000 - auction_start_time;
    const months = seconds / one_month;

    if (months > 21) return start;

    for (let i = months; i >= months; i--) end = (end * 90) / 100;
    return end;
}

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
