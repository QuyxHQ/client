//@ts-nocheck
import {
    Cell,
    Slice,
    Address,
    Builder,
    beginCell,
    ComputeError,
    TupleItem,
    TupleReader,
    Dictionary,
    contractAddress,
    ContractProvider,
    Sender,
    Contract,
    ContractABI,
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue,
} from 'ton-core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
};

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        },
    };
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
};

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return {
        $$type: 'Context' as const,
        bounced: _bounced,
        sender: _sender,
        value: _value,
        raw: _raw,
    };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return {
        $$type: 'Context' as const,
        bounced: _bounced,
        sender: _sender,
        value: _value,
        raw: _raw,
    };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        },
    };
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) {
            b_0.storeBit(true).storeRef(src.body);
        } else {
            b_0.storeBit(false);
        }
        if (src.code !== null && src.code !== undefined) {
            b_0.storeBit(true).storeRef(src.code);
        } else {
            b_0.storeBit(false);
        }
        if (src.data !== null && src.data !== undefined) {
            b_0.storeBit(true).storeRef(src.data);
        } else {
            b_0.storeBit(false);
        }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return {
        $$type: 'SendParameters' as const,
        bounce: _bounce,
        to: _to,
        value: _value,
        mode: _mode,
        body: _body,
        code: _code,
        data: _data,
    };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return {
        $$type: 'SendParameters' as const,
        bounce: _bounce,
        to: _to,
        value: _value,
        mode: _mode,
        body: _body,
        code: _code,
        data: _data,
    };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        },
    };
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
};

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) {
        throw Error('Invalid prefix');
    }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        },
    };
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) {
        throw Error('Invalid prefix');
    }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        },
    };
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) {
        throw Error('Invalid prefix');
    }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        },
    };
}

export type NftCollectionData = {
    $$type: 'NftCollectionData';
    next_item_index: bigint;
    collection_content: Cell;
    owner_address: Address;
};

export function storeNftCollectionData(src: NftCollectionData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.next_item_index, 257);
        b_0.storeRef(src.collection_content);
        b_0.storeAddress(src.owner_address);
    };
}

export function loadNftCollectionData(slice: Slice) {
    let sc_0 = slice;
    let _next_item_index = sc_0.loadIntBig(257);
    let _collection_content = sc_0.loadRef();
    let _owner_address = sc_0.loadAddress();
    return {
        $$type: 'NftCollectionData' as const,
        next_item_index: _next_item_index,
        collection_content: _collection_content,
        owner_address: _owner_address,
    };
}

function loadTupleNftCollectionData(source: TupleReader) {
    let _next_item_index = source.readBigNumber();
    let _collection_content = source.readCell();
    let _owner_address = source.readAddress();
    return {
        $$type: 'NftCollectionData' as const,
        next_item_index: _next_item_index,
        collection_content: _collection_content,
        owner_address: _owner_address,
    };
}

function storeTupleNftCollectionData(source: NftCollectionData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.next_item_index);
    builder.writeCell(source.collection_content);
    builder.writeAddress(source.owner_address);
    return builder.build();
}

function dictValueParserNftCollectionData(): DictionaryValue<NftCollectionData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeNftCollectionData(src)).endCell());
        },
        parse: (src) => {
            return loadNftCollectionData(src.loadRef().beginParse());
        },
    };
}

export type RoyaltyParams = {
    $$type: 'RoyaltyParams';
    numerator: bigint;
    denominator: bigint;
    destination: Address;
};

export function storeRoyaltyParams(src: RoyaltyParams) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(src.numerator, 16);
        b_0.storeUint(src.denominator, 16);
        b_0.storeAddress(src.destination);
    };
}

export function loadRoyaltyParams(slice: Slice) {
    let sc_0 = slice;
    let _numerator = sc_0.loadUintBig(16);
    let _denominator = sc_0.loadUintBig(16);
    let _destination = sc_0.loadAddress();
    return {
        $$type: 'RoyaltyParams' as const,
        numerator: _numerator,
        denominator: _denominator,
        destination: _destination,
    };
}

function loadTupleRoyaltyParams(source: TupleReader) {
    let _numerator = source.readBigNumber();
    let _denominator = source.readBigNumber();
    let _destination = source.readAddress();
    return {
        $$type: 'RoyaltyParams' as const,
        numerator: _numerator,
        denominator: _denominator,
        destination: _destination,
    };
}

function storeTupleRoyaltyParams(source: RoyaltyParams) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.numerator);
    builder.writeNumber(source.denominator);
    builder.writeAddress(source.destination);
    return builder.build();
}

function dictValueParserRoyaltyParams(): DictionaryValue<RoyaltyParams> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRoyaltyParams(src)).endCell());
        },
        parse: (src) => {
            return loadRoyaltyParams(src.loadRef().beginParse());
        },
    };
}

export type PriceRangeConfig = {
    $$type: 'PriceRangeConfig';
    start: bigint;
    end: bigint;
};

export function storePriceRangeConfig(src: PriceRangeConfig) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.start, 257);
        b_0.storeInt(src.end, 257);
    };
}

export function loadPriceRangeConfig(slice: Slice) {
    let sc_0 = slice;
    let _start = sc_0.loadIntBig(257);
    let _end = sc_0.loadIntBig(257);
    return { $$type: 'PriceRangeConfig' as const, start: _start, end: _end };
}

function loadTuplePriceRangeConfig(source: TupleReader) {
    let _start = source.readBigNumber();
    let _end = source.readBigNumber();
    return { $$type: 'PriceRangeConfig' as const, start: _start, end: _end };
}

function storeTuplePriceRangeConfig(source: PriceRangeConfig) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.start);
    builder.writeNumber(source.end);
    return builder.build();
}

function dictValueParserPriceRangeConfig(): DictionaryValue<PriceRangeConfig> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storePriceRangeConfig(src)).endCell());
        },
        parse: (src) => {
            return loadPriceRangeConfig(src.loadRef().beginParse());
        },
    };
}

export type AuctionInfo = {
    $$type: 'AuctionInfo';
    max_bid_address: Address | null;
    max_bid_amount: bigint;
    auction_end_time: bigint;
};

export function storeAuctionInfo(src: AuctionInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.max_bid_address);
        b_0.storeCoins(src.max_bid_amount);
        b_0.storeUint(src.auction_end_time, 64);
    };
}

export function loadAuctionInfo(slice: Slice) {
    let sc_0 = slice;
    let _max_bid_address = sc_0.loadMaybeAddress();
    let _max_bid_amount = sc_0.loadCoins();
    let _auction_end_time = sc_0.loadUintBig(64);
    return {
        $$type: 'AuctionInfo' as const,
        max_bid_address: _max_bid_address,
        max_bid_amount: _max_bid_amount,
        auction_end_time: _auction_end_time,
    };
}

function loadTupleAuctionInfo(source: TupleReader) {
    let _max_bid_address = source.readAddressOpt();
    let _max_bid_amount = source.readBigNumber();
    let _auction_end_time = source.readBigNumber();
    return {
        $$type: 'AuctionInfo' as const,
        max_bid_address: _max_bid_address,
        max_bid_amount: _max_bid_amount,
        auction_end_time: _auction_end_time,
    };
}

function storeTupleAuctionInfo(source: AuctionInfo) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.max_bid_address);
    builder.writeNumber(source.max_bid_amount);
    builder.writeNumber(source.auction_end_time);
    return builder.build();
}

function dictValueParserAuctionInfo(): DictionaryValue<AuctionInfo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeAuctionInfo(src)).endCell());
        },
        parse: (src) => {
            return loadAuctionInfo(src.loadRef().beginParse());
        },
    };
}

export type NftItemData = {
    $$type: 'NftItemData';
    is_initialized: boolean;
    index: bigint;
    collection_address: Address;
    owner: Address;
    content: Cell;
};

export function storeNftItemData(src: NftItemData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.is_initialized);
        b_0.storeUint(src.index, 256);
        b_0.storeAddress(src.collection_address);
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.content);
    };
}

export function loadNftItemData(slice: Slice) {
    let sc_0 = slice;
    let _is_initialized = sc_0.loadBit();
    let _index = sc_0.loadUintBig(256);
    let _collection_address = sc_0.loadAddress();
    let _owner = sc_0.loadAddress();
    let _content = sc_0.loadRef();
    return {
        $$type: 'NftItemData' as const,
        is_initialized: _is_initialized,
        index: _index,
        collection_address: _collection_address,
        owner: _owner,
        content: _content,
    };
}

function loadTupleNftItemData(source: TupleReader) {
    let _is_initialized = source.readBoolean();
    let _index = source.readBigNumber();
    let _collection_address = source.readAddress();
    let _owner = source.readAddress();
    let _content = source.readCell();
    return {
        $$type: 'NftItemData' as const,
        is_initialized: _is_initialized,
        index: _index,
        collection_address: _collection_address,
        owner: _owner,
        content: _content,
    };
}

function storeTupleNftItemData(source: NftItemData) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.is_initialized);
    builder.writeNumber(source.index);
    builder.writeAddress(source.collection_address);
    builder.writeAddress(source.owner);
    builder.writeCell(source.content);
    return builder.build();
}

function dictValueParserNftItemData(): DictionaryValue<NftItemData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeNftItemData(src)).endCell());
        },
        parse: (src) => {
            return loadNftItemData(src.loadRef().beginParse());
        },
    };
}

export type GetRoyaltyParams = {
    $$type: 'GetRoyaltyParams';
    query_id: bigint;
};

export function storeGetRoyaltyParams(src: GetRoyaltyParams) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1765620048, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadGetRoyaltyParams(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1765620048) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    return { $$type: 'GetRoyaltyParams' as const, query_id: _query_id };
}

function loadTupleGetRoyaltyParams(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'GetRoyaltyParams' as const, query_id: _query_id };
}

function storeTupleGetRoyaltyParams(source: GetRoyaltyParams) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

function dictValueParserGetRoyaltyParams(): DictionaryValue<GetRoyaltyParams> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeGetRoyaltyParams(src)).endCell());
        },
        parse: (src) => {
            return loadGetRoyaltyParams(src.loadRef().beginParse());
        },
    };
}

export type ReportRoyaltyParams = {
    $$type: 'ReportRoyaltyParams';
    query_id: bigint;
    numerator: bigint;
    denominator: bigint;
    destination: Address;
};

export function storeReportRoyaltyParams(src: ReportRoyaltyParams) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2831876269, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeUint(src.numerator, 16);
        b_0.storeUint(src.denominator, 16);
        b_0.storeAddress(src.destination);
    };
}

export function loadReportRoyaltyParams(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2831876269) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    let _numerator = sc_0.loadUintBig(16);
    let _denominator = sc_0.loadUintBig(16);
    let _destination = sc_0.loadAddress();
    return {
        $$type: 'ReportRoyaltyParams' as const,
        query_id: _query_id,
        numerator: _numerator,
        denominator: _denominator,
        destination: _destination,
    };
}

function loadTupleReportRoyaltyParams(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _numerator = source.readBigNumber();
    let _denominator = source.readBigNumber();
    let _destination = source.readAddress();
    return {
        $$type: 'ReportRoyaltyParams' as const,
        query_id: _query_id,
        numerator: _numerator,
        denominator: _denominator,
        destination: _destination,
    };
}

function storeTupleReportRoyaltyParams(source: ReportRoyaltyParams) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.numerator);
    builder.writeNumber(source.denominator);
    builder.writeAddress(source.destination);
    return builder.build();
}

function dictValueParserReportRoyaltyParams(): DictionaryValue<ReportRoyaltyParams> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeReportRoyaltyParams(src)).endCell());
        },
        parse: (src) => {
            return loadReportRoyaltyParams(src.loadRef().beginParse());
        },
    };
}

export type FillUp = {
    $$type: 'FillUp';
    query_id: bigint;
};

export function storeFillUp(src: FillUp) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(923790417, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadFillUp(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 923790417) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    return { $$type: 'FillUp' as const, query_id: _query_id };
}

function loadTupleFillUp(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'FillUp' as const, query_id: _query_id };
}

function storeTupleFillUp(source: FillUp) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

function dictValueParserFillUp(): DictionaryValue<FillUp> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFillUp(src)).endCell());
        },
        parse: (src) => {
            return loadFillUp(src.loadRef().beginParse());
        },
    };
}

export type NftItemDeploy = {
    $$type: 'NftItemDeploy';
    query_id: bigint;
    owner: Address;
    domain: string;
};

export function storeNftItemDeploy(src: NftItemDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1481937446, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.owner);
        b_0.storeStringRefTail(src.domain);
    };
}

export function loadNftItemDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1481937446) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    let _owner = sc_0.loadAddress();
    let _domain = sc_0.loadStringRefTail();
    return {
        $$type: 'NftItemDeploy' as const,
        query_id: _query_id,
        owner: _owner,
        domain: _domain,
    };
}

function loadTupleNftItemDeploy(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _owner = source.readAddress();
    let _domain = source.readString();
    return {
        $$type: 'NftItemDeploy' as const,
        query_id: _query_id,
        owner: _owner,
        domain: _domain,
    };
}

function storeTupleNftItemDeploy(source: NftItemDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.owner);
    builder.writeString(source.domain);
    return builder.build();
}

function dictValueParserNftItemDeploy(): DictionaryValue<NftItemDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeNftItemDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadNftItemDeploy(src.loadRef().beginParse());
        },
    };
}

export type OutbidNotification = {
    $$type: 'OutbidNotification';
    query_id: bigint;
};

export function storeOutbidNotification(src: OutbidNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1434249760, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadOutbidNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1434249760) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    return { $$type: 'OutbidNotification' as const, query_id: _query_id };
}

function loadTupleOutbidNotification(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'OutbidNotification' as const, query_id: _query_id };
}

function storeTupleOutbidNotification(source: OutbidNotification) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

function dictValueParserOutbidNotification(): DictionaryValue<OutbidNotification> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeOutbidNotification(src)).endCell());
        },
        parse: (src) => {
            return loadOutbidNotification(src.loadRef().beginParse());
        },
    };
}

export type CompleteAuction = {
    $$type: 'CompleteAuction';
    query_id: bigint;
};

export function storeCompleteAuction(src: CompleteAuction) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1878586964, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadCompleteAuction(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1878586964) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    return { $$type: 'CompleteAuction' as const, query_id: _query_id };
}

function loadTupleCompleteAuction(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'CompleteAuction' as const, query_id: _query_id };
}

function storeTupleCompleteAuction(source: CompleteAuction) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

function dictValueParserCompleteAuction(): DictionaryValue<CompleteAuction> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCompleteAuction(src)).endCell());
        },
        parse: (src) => {
            return loadCompleteAuction(src.loadRef().beginParse());
        },
    };
}

export type Transfer = {
    $$type: 'Transfer';
    query_id: bigint;
    new_owner: Address;
    response_destination: Address;
    custom_payload: Cell | null;
    forward_amount: bigint;
    forward_payload: Cell;
};

export function storeTransfer(src: Transfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1607220500, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.new_owner);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) {
            b_0.storeBit(true).storeRef(src.custom_payload);
        } else {
            b_0.storeBit(false);
        }
        b_0.storeCoins(src.forward_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1607220500) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    let _new_owner = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_amount = sc_0.loadCoins();
    let _forward_payload = sc_0.asCell();
    return {
        $$type: 'Transfer' as const,
        query_id: _query_id,
        new_owner: _new_owner,
        response_destination: _response_destination,
        custom_payload: _custom_payload,
        forward_amount: _forward_amount,
        forward_payload: _forward_payload,
    };
}

function loadTupleTransfer(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _new_owner = source.readAddress();
    let _response_destination = source.readAddress();
    let _custom_payload = source.readCellOpt();
    let _forward_amount = source.readBigNumber();
    let _forward_payload = source.readCell();
    return {
        $$type: 'Transfer' as const,
        query_id: _query_id,
        new_owner: _new_owner,
        response_destination: _response_destination,
        custom_payload: _custom_payload,
        forward_amount: _forward_amount,
        forward_payload: _forward_payload,
    };
}

function storeTupleTransfer(source: Transfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.new_owner);
    builder.writeAddress(source.response_destination);
    builder.writeCell(source.custom_payload);
    builder.writeNumber(source.forward_amount);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserTransfer(): DictionaryValue<Transfer> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadTransfer(src.loadRef().beginParse());
        },
    };
}

export type Excesses = {
    $$type: 'Excesses';
    query_id: bigint;
};

export function storeExcesses(src: Excesses) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3576854235, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadExcesses(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3576854235) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    return { $$type: 'Excesses' as const, query_id: _query_id };
}

function loadTupleExcesses(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'Excesses' as const, query_id: _query_id };
}

function storeTupleExcesses(source: Excesses) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

function dictValueParserExcesses(): DictionaryValue<Excesses> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeExcesses(src)).endCell());
        },
        parse: (src) => {
            return loadExcesses(src.loadRef().beginParse());
        },
    };
}

export type OwnershipAssigned = {
    $$type: 'OwnershipAssigned';
    query_id: bigint;
    prev_owner: Address;
    forward_payload: Cell;
};

export function storeOwnershipAssigned(src: OwnershipAssigned) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(85167505, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.prev_owner);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadOwnershipAssigned(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 85167505) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    let _prev_owner = sc_0.loadAddress();
    let _forward_payload = sc_0.asCell();
    return {
        $$type: 'OwnershipAssigned' as const,
        query_id: _query_id,
        prev_owner: _prev_owner,
        forward_payload: _forward_payload,
    };
}

function loadTupleOwnershipAssigned(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _prev_owner = source.readAddress();
    let _forward_payload = source.readCell();
    return {
        $$type: 'OwnershipAssigned' as const,
        query_id: _query_id,
        prev_owner: _prev_owner,
        forward_payload: _forward_payload,
    };
}

function storeTupleOwnershipAssigned(source: OwnershipAssigned) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.prev_owner);
    builder.writeSlice(source.forward_payload);
    return builder.build();
}

function dictValueParserOwnershipAssigned(): DictionaryValue<OwnershipAssigned> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeOwnershipAssigned(src)).endCell());
        },
        parse: (src) => {
            return loadOwnershipAssigned(src.loadRef().beginParse());
        },
    };
}

export type EditContent = {
    $$type: 'EditContent';
    query_id: bigint;
    content: Cell;
};

export function storeEditContent(src: EditContent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(436968785, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeRef(src.content);
    };
}

export function loadEditContent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 436968785) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    let _content = sc_0.loadRef();
    return { $$type: 'EditContent' as const, query_id: _query_id, content: _content };
}

function loadTupleEditContent(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _content = source.readCell();
    return { $$type: 'EditContent' as const, query_id: _query_id, content: _content };
}

function storeTupleEditContent(source: EditContent) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeCell(source.content);
    return builder.build();
}

function dictValueParserEditContent(): DictionaryValue<EditContent> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeEditContent(src)).endCell());
        },
        parse: (src) => {
            return loadEditContent(src.loadRef().beginParse());
        },
    };
}

export type GetStaticData = {
    $$type: 'GetStaticData';
    query_id: bigint;
};

export function storeGetStaticData(src: GetStaticData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(801842850, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadGetStaticData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 801842850) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    return { $$type: 'GetStaticData' as const, query_id: _query_id };
}

function loadTupleGetStaticData(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'GetStaticData' as const, query_id: _query_id };
}

function storeTupleGetStaticData(source: GetStaticData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

function dictValueParserGetStaticData(): DictionaryValue<GetStaticData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeGetStaticData(src)).endCell());
        },
        parse: (src) => {
            return loadGetStaticData(src.loadRef().beginParse());
        },
    };
}

export type ReportStaticData = {
    $$type: 'ReportStaticData';
    query_id: bigint;
    index: bigint;
    collection: Address;
};

export function storeReportStaticData(src: ReportStaticData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2339837749, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeUint(src.index, 256);
        b_0.storeAddress(src.collection);
    };
}

export function loadReportStaticData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2339837749) {
        throw Error('Invalid prefix');
    }
    let _query_id = sc_0.loadUintBig(64);
    let _index = sc_0.loadUintBig(256);
    let _collection = sc_0.loadAddress();
    return {
        $$type: 'ReportStaticData' as const,
        query_id: _query_id,
        index: _index,
        collection: _collection,
    };
}

function loadTupleReportStaticData(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _index = source.readBigNumber();
    let _collection = source.readAddress();
    return {
        $$type: 'ReportStaticData' as const,
        query_id: _query_id,
        index: _index,
        collection: _collection,
    };
}

function storeTupleReportStaticData(source: ReportStaticData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.index);
    builder.writeAddress(source.collection);
    return builder.build();
}

function dictValueParserReportStaticData(): DictionaryValue<ReportStaticData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeReportStaticData(src)).endCell());
        },
        parse: (src) => {
            return loadReportStaticData(src.loadRef().beginParse());
        },
    };
}

type NftCollection_init_args = {
    $$type: 'NftCollection_init_args';
    protocol_address: Address;
    royalty_cell: Cell;
    content: Cell;
    burn_percent: bigint;
};

function initNftCollection_init_args(src: NftCollection_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.protocol_address);
        b_0.storeRef(src.royalty_cell);
        b_0.storeRef(src.content);
        b_0.storeInt(src.burn_percent, 257);
    };
}

async function NftCollection_init(
    protocol_address: Address,
    royalty_cell: Cell,
    content: Cell,
    burn_percent: bigint
) {
    const __code = Cell.fromBase64(
        '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'
    );
    const __system = Cell.fromBase64(
        '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'
    );
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initNftCollection_init_args({
        $$type: 'NftCollection_init_args',
        protocol_address,
        royalty_cell,
        content,
        burn_percent,
    })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const NftCollection_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
};

const NftCollection_types: ABIType[] = [
    {
        name: 'StateInit',
        header: null,
        fields: [
            { name: 'code', type: { kind: 'simple', type: 'cell', optional: false } },
            { name: 'data', type: { kind: 'simple', type: 'cell', optional: false } },
        ],
    },
    {
        name: 'Context',
        header: null,
        fields: [
            { name: 'bounced', type: { kind: 'simple', type: 'bool', optional: false } },
            { name: 'sender', type: { kind: 'simple', type: 'address', optional: false } },
            { name: 'value', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
            { name: 'raw', type: { kind: 'simple', type: 'slice', optional: false } },
        ],
    },
    {
        name: 'SendParameters',
        header: null,
        fields: [
            { name: 'bounce', type: { kind: 'simple', type: 'bool', optional: false } },
            { name: 'to', type: { kind: 'simple', type: 'address', optional: false } },
            { name: 'value', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
            { name: 'mode', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
            { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
            { name: 'code', type: { kind: 'simple', type: 'cell', optional: true } },
            { name: 'data', type: { kind: 'simple', type: 'cell', optional: true } },
        ],
    },
    {
        name: 'Deploy',
        header: 2490013878,
        fields: [
            {
                name: 'queryId',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
        ],
    },
    {
        name: 'DeployOk',
        header: 2952335191,
        fields: [
            {
                name: 'queryId',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
        ],
    },
    {
        name: 'FactoryDeploy',
        header: 1829761339,
        fields: [
            {
                name: 'queryId',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
            { name: 'cashback', type: { kind: 'simple', type: 'address', optional: false } },
        ],
    },
    {
        name: 'NftCollectionData',
        header: null,
        fields: [
            {
                name: 'next_item_index',
                type: { kind: 'simple', type: 'int', optional: false, format: 257 },
            },
            { name: 'collection_content', type: { kind: 'simple', type: 'cell', optional: false } },
            { name: 'owner_address', type: { kind: 'simple', type: 'address', optional: false } },
        ],
    },
    {
        name: 'RoyaltyParams',
        header: null,
        fields: [
            {
                name: 'numerator',
                type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
            },
            {
                name: 'denominator',
                type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
            },
            { name: 'destination', type: { kind: 'simple', type: 'address', optional: false } },
        ],
    },
    {
        name: 'PriceRangeConfig',
        header: null,
        fields: [
            { name: 'start', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
            { name: 'end', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
        ],
    },
    {
        name: 'AuctionInfo',
        header: null,
        fields: [
            { name: 'max_bid_address', type: { kind: 'simple', type: 'address', optional: true } },
            {
                name: 'max_bid_amount',
                type: { kind: 'simple', type: 'uint', optional: false, format: 'coins' },
            },
            {
                name: 'auction_end_time',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
        ],
    },
    {
        name: 'NftItemData',
        header: null,
        fields: [
            { name: 'is_initialized', type: { kind: 'simple', type: 'bool', optional: false } },
            { name: 'index', type: { kind: 'simple', type: 'uint', optional: false, format: 256 } },
            {
                name: 'collection_address',
                type: { kind: 'simple', type: 'address', optional: false },
            },
            { name: 'owner', type: { kind: 'simple', type: 'address', optional: false } },
            { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
        ],
    },
    {
        name: 'GetRoyaltyParams',
        header: 1765620048,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
        ],
    },
    {
        name: 'ReportRoyaltyParams',
        header: 2831876269,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
            {
                name: 'numerator',
                type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
            },
            {
                name: 'denominator',
                type: { kind: 'simple', type: 'uint', optional: false, format: 16 },
            },
            { name: 'destination', type: { kind: 'simple', type: 'address', optional: false } },
        ],
    },
    {
        name: 'FillUp',
        header: 923790417,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
        ],
    },
    {
        name: 'NftItemDeploy',
        header: 1481937446,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
            { name: 'owner', type: { kind: 'simple', type: 'address', optional: false } },
            { name: 'domain', type: { kind: 'simple', type: 'string', optional: false } },
        ],
    },
    {
        name: 'OutbidNotification',
        header: 1434249760,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
        ],
    },
    {
        name: 'CompleteAuction',
        header: 1878586964,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
        ],
    },
    {
        name: 'Transfer',
        header: 1607220500,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
            { name: 'new_owner', type: { kind: 'simple', type: 'address', optional: false } },
            {
                name: 'response_destination',
                type: { kind: 'simple', type: 'address', optional: false },
            },
            { name: 'custom_payload', type: { kind: 'simple', type: 'cell', optional: true } },
            {
                name: 'forward_amount',
                type: { kind: 'simple', type: 'uint', optional: false, format: 'coins' },
            },
            {
                name: 'forward_payload',
                type: { kind: 'simple', type: 'slice', optional: false, format: 'remainder' },
            },
        ],
    },
    {
        name: 'Excesses',
        header: 3576854235,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
        ],
    },
    {
        name: 'OwnershipAssigned',
        header: 85167505,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
            { name: 'prev_owner', type: { kind: 'simple', type: 'address', optional: false } },
            {
                name: 'forward_payload',
                type: { kind: 'simple', type: 'slice', optional: false, format: 'remainder' },
            },
        ],
    },
    {
        name: 'EditContent',
        header: 436968785,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
            { name: 'content', type: { kind: 'simple', type: 'cell', optional: false } },
        ],
    },
    {
        name: 'GetStaticData',
        header: 801842850,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
        ],
    },
    {
        name: 'ReportStaticData',
        header: 2339837749,
        fields: [
            {
                name: 'query_id',
                type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
            },
            { name: 'index', type: { kind: 'simple', type: 'uint', optional: false, format: 256 } },
            { name: 'collection', type: { kind: 'simple', type: 'address', optional: false } },
        ],
    },
];

const NftCollection_getters: ABIGetter[] = [
    {
        name: 'get_collection_data',
        arguments: [],
        returnType: { kind: 'simple', type: 'NftCollectionData', optional: false },
    },
    {
        name: 'get_index',
        arguments: [{ name: 'domain', type: { kind: 'simple', type: 'string', optional: false } }],
        returnType: { kind: 'simple', type: 'int', optional: false, format: 257 },
    },
    {
        name: 'get_nft_address_by_index',
        arguments: [
            { name: 'index', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
        ],
        returnType: { kind: 'simple', type: 'address', optional: false },
    },
    {
        name: 'get_nft_content',
        arguments: [
            { name: 'index', type: { kind: 'simple', type: 'int', optional: false, format: 257 } },
            { name: 'individual_content', type: { kind: 'simple', type: 'cell', optional: false } },
        ],
        returnType: { kind: 'simple', type: 'cell', optional: false },
    },
    {
        name: 'get_royalty_params',
        arguments: [],
        returnType: { kind: 'simple', type: 'RoyaltyParams', optional: false },
    },
];

const NftCollection_receivers: ABIReceiver[] = [
    { receiver: 'internal', message: { kind: 'empty' } },
    { receiver: 'internal', message: { kind: 'typed', type: 'GetRoyaltyParams' } },
    { receiver: 'internal', message: { kind: 'text' } },
    { receiver: 'internal', message: { kind: 'typed', type: 'FillUp' } },
    { receiver: 'internal', message: { kind: 'typed', type: 'Deploy' } },
];

export class NftCollection implements Contract {
    static async init(
        protocol_address: Address,
        royalty_cell: Cell,
        content: Cell,
        burn_percent: bigint
    ) {
        return await NftCollection_init(protocol_address, royalty_cell, content, burn_percent);
    }

    static async fromInit(
        protocol_address: Address,
        royalty_cell: Cell,
        content: Cell,
        burn_percent: bigint
    ) {
        const init = await NftCollection_init(
            protocol_address,
            royalty_cell,
            content,
            burn_percent
        );
        const address = contractAddress(0, init);
        return new NftCollection(address, init);
    }

    static fromAddress(address: Address) {
        return new NftCollection(address);
    }

    readonly address: Address;
    readonly init?: { code: Cell; data: Cell };
    readonly abi: ContractABI = {
        types: NftCollection_types,
        getters: NftCollection_getters,
        receivers: NftCollection_receivers,
        errors: NftCollection_errors,
    };

    private constructor(address: Address, init?: { code: Cell; data: Cell }) {
        this.address = address;
        this.init = init;
    }

    async send(
        provider: ContractProvider,
        via: Sender,
        args: { value: bigint; bounce?: boolean | null | undefined },
        message: null | GetRoyaltyParams | string | FillUp | Deploy
    ) {
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (
            message &&
            typeof message === 'object' &&
            !(message instanceof Slice) &&
            message.$$type === 'GetRoyaltyParams'
        ) {
            body = beginCell().store(storeGetRoyaltyParams(message)).endCell();
        }
        if (typeof message === 'string') {
            body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
        }
        if (
            message &&
            typeof message === 'object' &&
            !(message instanceof Slice) &&
            message.$$type === 'FillUp'
        ) {
            body = beginCell().store(storeFillUp(message)).endCell();
        }
        if (
            message &&
            typeof message === 'object' &&
            !(message instanceof Slice) &&
            message.$$type === 'Deploy'
        ) {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) {
            throw new Error('Invalid message type');
        }

        await provider.internal(via, { ...args, body: body });
    }

    async getGetCollectionData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_collection_data', builder.build())).stack;
        const result = loadTupleNftCollectionData(source);
        return result;
    }

    async getGetIndex(provider: ContractProvider, domain: string) {
        let builder = new TupleBuilder();
        builder.writeString(domain);
        let source = (await provider.get('get_index', builder.build())).stack;
        let result = source.readBigNumber();
        return result;
    }

    async getGetNftAddressByIndex(provider: ContractProvider, index: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(index);
        let source = (await provider.get('get_nft_address_by_index', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }

    async getGetNftContent(provider: ContractProvider, index: bigint, individual_content: Cell) {
        let builder = new TupleBuilder();
        builder.writeNumber(index);
        builder.writeCell(individual_content);
        let source = (await provider.get('get_nft_content', builder.build())).stack;
        let result = source.readCell();
        return result;
    }

    async getGetRoyaltyParams(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_royalty_params', builder.build())).stack;
        const result = loadTupleRoyaltyParams(source);
        return result;
    }
}
