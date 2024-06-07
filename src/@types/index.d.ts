type AppContextProps = {
    isMounting: boolean;
    isAuthenticated: boolean;
    isAuthenticating: boolean;
    setIsAuthenticating: React.Dispatch<React.SetStateAction<boolean>>;
    user?: TonFrensUser;
    login: (user: TonFrensUser) => void;
    logout: () => void;
    getUser(params?: { access_token: string; refresh_token: string }): Promise<void>;
};

type ModalContextProps = {
    displayModal: boolean;
    canCloseModal: boolean;
    modalBody?: React.JSX.Element;
    title?: string;
    setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
    closeModal: () => void;
    openModal: () => void;
    setModalBody: React.Dispatch<React.SetStateAction<React.JSX.Element | undefined>>;
};

type IconProps = {
    fill?: string;
    className?: string;
    width?: number;
    height?: number;
};

type AnchorLinkProps = {
    to: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    handleClick?: () => void;
    title?: string;
    target?: string;
};

type Session = Base & {
    user: string;
    device?: string | null;
    isActive: boolean;
};

type Bookmark = Base &
    NftItem & {
        user: string;
        address: string;
    };

type User = Base & {
    tg?: {
        id?: number | null;
        username?: string | null;
        firstName?: string | null;
        lastName?: string | null;
        languageCode?: string | null;
        photoUrl?: string | null;
    };
    username: string;
    hasBlueTick: boolean;
    address: string;
    did: string;
    pfp?: string | null;
    bio?: string | null;
    socials?: {
        x?: string | null;
        yt?: string | null;
        tg?: string | null;
        other?: string | null;
    };
};

type Base = {
    readonly _id: string;
    createdAt: string;
    updatedAt: string;
    _v: number;
};

type AccountAddress = {
    address: string;
    name?: string;
    is_scam: boolean;
    icon?: string;
    is_wallet: boolean;
};

type NftItemPrice = {
    value: string;
    token_name: string;
};

type NftItemSale = {
    address: string;
    market: AccountAddress;
    owner?: AccountAddress;
    price: NftItemPrice;
};

type NftItem = {
    address: string;
    index: number;
    owner?: AccountAddress;
    collection?: {
        address: string;
        name: string;
        description: string;
    };
    verified: boolean;
    metadata: Record<string, any>;
    sale?: NftItemSale;
    previews?: [{ resolution: string; url: string }];
    dns?: string;
    approved_by: 'getgems' | 'tonkeeper' | 'ton.diamonds';
    include_cnft?: boolean;
    trust: 'whitelist' | 'graylist' | 'blacklist' | 'none';
};

type Nft = NftItem & {
    bookmarks: number;
    isBookmarked: boolean;
    nft_owner?: User;
};
