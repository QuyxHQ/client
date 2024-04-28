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
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

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
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

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
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
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
        }
    }
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
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
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
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
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
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
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
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
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
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

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
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
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
        }
    }
}

export type RoyaltyParams = {
    $$type: 'RoyaltyParams';
    numerator: bigint;
    denominator: bigint;
    destination: Address;
}

export function storeRoyaltyParams(src: RoyaltyParams) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.numerator, 257);
        b_0.storeInt(src.denominator, 257);
        b_0.storeAddress(src.destination);
    };
}

export function loadRoyaltyParams(slice: Slice) {
    let sc_0 = slice;
    let _numerator = sc_0.loadIntBig(257);
    let _denominator = sc_0.loadIntBig(257);
    let _destination = sc_0.loadAddress();
    return { $$type: 'RoyaltyParams' as const, numerator: _numerator, denominator: _denominator, destination: _destination };
}

function loadTupleRoyaltyParams(source: TupleReader) {
    let _numerator = source.readBigNumber();
    let _denominator = source.readBigNumber();
    let _destination = source.readAddress();
    return { $$type: 'RoyaltyParams' as const, numerator: _numerator, denominator: _denominator, destination: _destination };
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
        }
    }
}

export type CollectionData = {
    $$type: 'CollectionData';
    next_item_index: bigint;
    collection_content: Cell;
    owner_address: Address;
}

export function storeCollectionData(src: CollectionData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.next_item_index, 257);
        b_0.storeRef(src.collection_content);
        b_0.storeAddress(src.owner_address);
    };
}

export function loadCollectionData(slice: Slice) {
    let sc_0 = slice;
    let _next_item_index = sc_0.loadIntBig(257);
    let _collection_content = sc_0.loadRef();
    let _owner_address = sc_0.loadAddress();
    return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

function loadTupleCollectionData(source: TupleReader) {
    let _next_item_index = source.readBigNumber();
    let _collection_content = source.readCell();
    let _owner_address = source.readAddress();
    return { $$type: 'CollectionData' as const, next_item_index: _next_item_index, collection_content: _collection_content, owner_address: _owner_address };
}

function storeTupleCollectionData(source: CollectionData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.next_item_index);
    builder.writeCell(source.collection_content);
    builder.writeAddress(source.owner_address);
    return builder.build();
}

function dictValueParserCollectionData(): DictionaryValue<CollectionData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCollectionData(src)).endCell());
        },
        parse: (src) => {
            return loadCollectionData(src.loadRef().beginParse());
        }
    }
}

export type ItemData = {
    $$type: 'ItemData';
    is_initialized: boolean;
    index: bigint;
    collection_address: Address;
    owner_address: Address;
    individual_content: Cell;
}

export function storeItemData(src: ItemData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.is_initialized);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.collection_address);
        b_0.storeAddress(src.owner_address);
        b_0.storeRef(src.individual_content);
    };
}

export function loadItemData(slice: Slice) {
    let sc_0 = slice;
    let _is_initialized = sc_0.loadBit();
    let _index = sc_0.loadIntBig(257);
    let _collection_address = sc_0.loadAddress();
    let _owner_address = sc_0.loadAddress();
    let _individual_content = sc_0.loadRef();
    return { $$type: 'ItemData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}

function loadTupleItemData(source: TupleReader) {
    let _is_initialized = source.readBoolean();
    let _index = source.readBigNumber();
    let _collection_address = source.readAddress();
    let _owner_address = source.readAddress();
    let _individual_content = source.readCell();
    return { $$type: 'ItemData' as const, is_initialized: _is_initialized, index: _index, collection_address: _collection_address, owner_address: _owner_address, individual_content: _individual_content };
}

function storeTupleItemData(source: ItemData) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.is_initialized);
    builder.writeNumber(source.index);
    builder.writeAddress(source.collection_address);
    builder.writeAddress(source.owner_address);
    builder.writeCell(source.individual_content);
    return builder.build();
}

function dictValueParserItemData(): DictionaryValue<ItemData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeItemData(src)).endCell());
        },
        parse: (src) => {
            return loadItemData(src.loadRef().beginParse());
        }
    }
}

export type PriceRangeConfig = {
    $$type: 'PriceRangeConfig';
    start: bigint;
    end: bigint;
}

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
        }
    }
}

export type GetCardLinkStatus = {
    $$type: 'GetCardLinkStatus';
    query_id: bigint;
    item_index: bigint;
    initiator: Address;
    payload: Cell;
}

export function storeGetCardLinkStatus(src: GetCardLinkStatus) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3028164059, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeInt(src.item_index, 257);
        b_0.storeAddress(src.initiator);
        b_0.storeRef(src.payload);
    };
}

export function loadGetCardLinkStatus(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3028164059) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _item_index = sc_0.loadIntBig(257);
    let _initiator = sc_0.loadAddress();
    let _payload = sc_0.loadRef();
    return { $$type: 'GetCardLinkStatus' as const, query_id: _query_id, item_index: _item_index, initiator: _initiator, payload: _payload };
}

function loadTupleGetCardLinkStatus(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _item_index = source.readBigNumber();
    let _initiator = source.readAddress();
    let _payload = source.readCell();
    return { $$type: 'GetCardLinkStatus' as const, query_id: _query_id, item_index: _item_index, initiator: _initiator, payload: _payload };
}

function storeTupleGetCardLinkStatus(source: GetCardLinkStatus) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.item_index);
    builder.writeAddress(source.initiator);
    builder.writeCell(source.payload);
    return builder.build();
}

function dictValueParserGetCardLinkStatus(): DictionaryValue<GetCardLinkStatus> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeGetCardLinkStatus(src)).endCell());
        },
        parse: (src) => {
            return loadGetCardLinkStatus(src.loadRef().beginParse());
        }
    }
}

export type ReportCardLinkStatus = {
    $$type: 'ReportCardLinkStatus';
    query_id: bigint;
    item_index: bigint;
    is_linked_to_card: boolean | null;
    initiator: Address;
    payload: Cell;
}

export function storeReportCardLinkStatus(src: ReportCardLinkStatus) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1646771514, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeInt(src.item_index, 257);
        if (src.is_linked_to_card !== null && src.is_linked_to_card !== undefined) { b_0.storeBit(true).storeBit(src.is_linked_to_card); } else { b_0.storeBit(false); }
        b_0.storeAddress(src.initiator);
        b_0.storeRef(src.payload);
    };
}

export function loadReportCardLinkStatus(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1646771514) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _item_index = sc_0.loadIntBig(257);
    let _is_linked_to_card = sc_0.loadBit() ? sc_0.loadBit() : null;
    let _initiator = sc_0.loadAddress();
    let _payload = sc_0.loadRef();
    return { $$type: 'ReportCardLinkStatus' as const, query_id: _query_id, item_index: _item_index, is_linked_to_card: _is_linked_to_card, initiator: _initiator, payload: _payload };
}

function loadTupleReportCardLinkStatus(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _item_index = source.readBigNumber();
    let _is_linked_to_card = source.readBooleanOpt();
    let _initiator = source.readAddress();
    let _payload = source.readCell();
    return { $$type: 'ReportCardLinkStatus' as const, query_id: _query_id, item_index: _item_index, is_linked_to_card: _is_linked_to_card, initiator: _initiator, payload: _payload };
}

function storeTupleReportCardLinkStatus(source: ReportCardLinkStatus) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.item_index);
    builder.writeBoolean(source.is_linked_to_card);
    builder.writeAddress(source.initiator);
    builder.writeCell(source.payload);
    return builder.build();
}

function dictValueParserReportCardLinkStatus(): DictionaryValue<ReportCardLinkStatus> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeReportCardLinkStatus(src)).endCell());
        },
        parse: (src) => {
            return loadReportCardLinkStatus(src.loadRef().beginParse());
        }
    }
}

export type Transfer = {
    $$type: 'Transfer';
    query_id: bigint;
    new_owner: Address;
    response_destination: Address;
    custom_payload: Cell | null;
    forward_amount: bigint;
    forward_payload: Cell;
}

export function storeTransfer(src: Transfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1312029976, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.new_owner);
        b_0.storeAddress(src.response_destination);
        if (src.custom_payload !== null && src.custom_payload !== undefined) { b_0.storeBit(true).storeRef(src.custom_payload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forward_amount);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1312029976) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _new_owner = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _forward_amount = sc_0.loadCoins();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'Transfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
}

function loadTupleTransfer(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _new_owner = source.readAddress();
    let _response_destination = source.readAddress();
    let _custom_payload = source.readCellOpt();
    let _forward_amount = source.readBigNumber();
    let _forward_payload = source.readCell();
    return { $$type: 'Transfer' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, custom_payload: _custom_payload, forward_amount: _forward_amount, forward_payload: _forward_payload };
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
        }
    }
}

export type Excesses = {
    $$type: 'Excesses';
    query_id: bigint;
}

export function storeExcesses(src: Excesses) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(869633650, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadExcesses(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 869633650) { throw Error('Invalid prefix'); }
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
        }
    }
}

export type OwnershipAssigned = {
    $$type: 'OwnershipAssigned';
    query_id: bigint;
    prev_owner: Address;
    forward_payload: Cell;
}

export function storeOwnershipAssigned(src: OwnershipAssigned) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3788238085, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.prev_owner);
        b_0.storeBuilder(src.forward_payload.asBuilder());
    };
}

export function loadOwnershipAssigned(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3788238085) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _prev_owner = sc_0.loadAddress();
    let _forward_payload = sc_0.asCell();
    return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
}

function loadTupleOwnershipAssigned(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _prev_owner = source.readAddress();
    let _forward_payload = source.readCell();
    return { $$type: 'OwnershipAssigned' as const, query_id: _query_id, prev_owner: _prev_owner, forward_payload: _forward_payload };
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
        }
    }
}

export type GetStaticData = {
    $$type: 'GetStaticData';
    query_id: bigint;
}

export function storeGetStaticData(src: GetStaticData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2365735669, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadGetStaticData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2365735669) { throw Error('Invalid prefix'); }
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
        }
    }
}

export type ReportStaticData = {
    $$type: 'ReportStaticData';
    query_id: bigint;
    index: bigint;
    collection: Address;
}

export function storeReportStaticData(src: ReportStaticData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1100264081, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeUint(src.index, 256);
        b_0.storeAddress(src.collection);
    };
}

export function loadReportStaticData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1100264081) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _index = sc_0.loadUintBig(256);
    let _collection = sc_0.loadAddress();
    return { $$type: 'ReportStaticData' as const, query_id: _query_id, index: _index, collection: _collection };
}

function loadTupleReportStaticData(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _index = source.readBigNumber();
    let _collection = source.readAddress();
    return { $$type: 'ReportStaticData' as const, query_id: _query_id, index: _index, collection: _collection };
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
        }
    }
}

export type GetUsernameData = {
    $$type: 'GetUsernameData';
    query_id: bigint;
    initiator: Address;
    payload: Cell;
}

export function storeGetUsernameData(src: GetUsernameData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(808469150, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.initiator);
        b_0.storeRef(src.payload);
    };
}

export function loadGetUsernameData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 808469150) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _initiator = sc_0.loadAddress();
    let _payload = sc_0.loadRef();
    return { $$type: 'GetUsernameData' as const, query_id: _query_id, initiator: _initiator, payload: _payload };
}

function loadTupleGetUsernameData(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _initiator = source.readAddress();
    let _payload = source.readCell();
    return { $$type: 'GetUsernameData' as const, query_id: _query_id, initiator: _initiator, payload: _payload };
}

function storeTupleGetUsernameData(source: GetUsernameData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.initiator);
    builder.writeCell(source.payload);
    return builder.build();
}

function dictValueParserGetUsernameData(): DictionaryValue<GetUsernameData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeGetUsernameData(src)).endCell());
        },
        parse: (src) => {
            return loadGetUsernameData(src.loadRef().beginParse());
        }
    }
}

export type ReportUsernameData = {
    $$type: 'ReportUsernameData';
    query_id: bigint;
    item_index: bigint;
    token_name: Cell;
    initiator: Address;
    payload: Cell;
}

export function storeReportUsernameData(src: ReportUsernameData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1224717995, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeUint(src.item_index, 256);
        b_0.storeRef(src.token_name);
        b_0.storeAddress(src.initiator);
        b_0.storeRef(src.payload);
    };
}

export function loadReportUsernameData(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1224717995) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _item_index = sc_0.loadUintBig(256);
    let _token_name = sc_0.loadRef();
    let _initiator = sc_0.loadAddress();
    let _payload = sc_0.loadRef();
    return { $$type: 'ReportUsernameData' as const, query_id: _query_id, item_index: _item_index, token_name: _token_name, initiator: _initiator, payload: _payload };
}

function loadTupleReportUsernameData(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _item_index = source.readBigNumber();
    let _token_name = source.readCell();
    let _initiator = source.readAddress();
    let _payload = source.readCell();
    return { $$type: 'ReportUsernameData' as const, query_id: _query_id, item_index: _item_index, token_name: _token_name, initiator: _initiator, payload: _payload };
}

function storeTupleReportUsernameData(source: ReportUsernameData) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.item_index);
    builder.writeCell(source.token_name);
    builder.writeAddress(source.initiator);
    builder.writeCell(source.payload);
    return builder.build();
}

function dictValueParserReportUsernameData(): DictionaryValue<ReportUsernameData> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeReportUsernameData(src)).endCell());
        },
        parse: (src) => {
            return loadReportUsernameData(src.loadRef().beginParse());
        }
    }
}

export type GetRoyaltyParams = {
    $$type: 'GetRoyaltyParams';
    query_id: bigint;
}

export function storeGetRoyaltyParams(src: GetRoyaltyParams) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(435086716, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadGetRoyaltyParams(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 435086716) { throw Error('Invalid prefix'); }
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
        }
    }
}

export type ReportRoyaltyParams = {
    $$type: 'ReportRoyaltyParams';
    query_id: bigint;
    numerator: bigint;
    denominator: bigint;
    destination: Address;
}

export function storeReportRoyaltyParams(src: ReportRoyaltyParams) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(634900346, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeUint(src.numerator, 16);
        b_0.storeUint(src.denominator, 16);
        b_0.storeAddress(src.destination);
    };
}

export function loadReportRoyaltyParams(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 634900346) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _numerator = sc_0.loadUintBig(16);
    let _denominator = sc_0.loadUintBig(16);
    let _destination = sc_0.loadAddress();
    return { $$type: 'ReportRoyaltyParams' as const, query_id: _query_id, numerator: _numerator, denominator: _denominator, destination: _destination };
}

function loadTupleReportRoyaltyParams(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _numerator = source.readBigNumber();
    let _denominator = source.readBigNumber();
    let _destination = source.readAddress();
    return { $$type: 'ReportRoyaltyParams' as const, query_id: _query_id, numerator: _numerator, denominator: _denominator, destination: _destination };
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
        }
    }
}

export type UnlinkCard = {
    $$type: 'UnlinkCard';
    query_id: bigint;
    index: bigint;
    initiator: Address;
}

export function storeUnlinkCard(src: UnlinkCard) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1323911271, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.initiator);
    };
}

export function loadUnlinkCard(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1323911271) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _index = sc_0.loadIntBig(257);
    let _initiator = sc_0.loadAddress();
    return { $$type: 'UnlinkCard' as const, query_id: _query_id, index: _index, initiator: _initiator };
}

function loadTupleUnlinkCard(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _index = source.readBigNumber();
    let _initiator = source.readAddress();
    return { $$type: 'UnlinkCard' as const, query_id: _query_id, index: _index, initiator: _initiator };
}

function storeTupleUnlinkCard(source: UnlinkCard) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.index);
    builder.writeAddress(source.initiator);
    return builder.build();
}

function dictValueParserUnlinkCard(): DictionaryValue<UnlinkCard> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeUnlinkCard(src)).endCell());
        },
        parse: (src) => {
            return loadUnlinkCard(src.loadRef().beginParse());
        }
    }
}

export type UpdateUsernameLinkedStatus = {
    $$type: 'UpdateUsernameLinkedStatus';
    query_id: bigint;
    index: bigint;
    initiator: Address;
    status: boolean;
}

export function storeUpdateUsernameLinkedStatus(src: UpdateUsernameLinkedStatus) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3479701466, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeInt(src.index, 257);
        b_0.storeAddress(src.initiator);
        b_0.storeBit(src.status);
    };
}

export function loadUpdateUsernameLinkedStatus(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3479701466) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _index = sc_0.loadIntBig(257);
    let _initiator = sc_0.loadAddress();
    let _status = sc_0.loadBit();
    return { $$type: 'UpdateUsernameLinkedStatus' as const, query_id: _query_id, index: _index, initiator: _initiator, status: _status };
}

function loadTupleUpdateUsernameLinkedStatus(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _index = source.readBigNumber();
    let _initiator = source.readAddress();
    let _status = source.readBoolean();
    return { $$type: 'UpdateUsernameLinkedStatus' as const, query_id: _query_id, index: _index, initiator: _initiator, status: _status };
}

function storeTupleUpdateUsernameLinkedStatus(source: UpdateUsernameLinkedStatus) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.index);
    builder.writeAddress(source.initiator);
    builder.writeBoolean(source.status);
    return builder.build();
}

function dictValueParserUpdateUsernameLinkedStatus(): DictionaryValue<UpdateUsernameLinkedStatus> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeUpdateUsernameLinkedStatus(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateUsernameLinkedStatus(src.loadRef().beginParse());
        }
    }
}

export type UpdateAllowedContract = {
    $$type: 'UpdateAllowedContract';
    allowed_contract: Address;
}

export function storeUpdateAllowedContract(src: UpdateAllowedContract) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3161124927, 32);
        b_0.storeAddress(src.allowed_contract);
    };
}

export function loadUpdateAllowedContract(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3161124927) { throw Error('Invalid prefix'); }
    let _allowed_contract = sc_0.loadAddress();
    return { $$type: 'UpdateAllowedContract' as const, allowed_contract: _allowed_contract };
}

function loadTupleUpdateAllowedContract(source: TupleReader) {
    let _allowed_contract = source.readAddress();
    return { $$type: 'UpdateAllowedContract' as const, allowed_contract: _allowed_contract };
}

function storeTupleUpdateAllowedContract(source: UpdateAllowedContract) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.allowed_contract);
    return builder.build();
}

function dictValueParserUpdateAllowedContract(): DictionaryValue<UpdateAllowedContract> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeUpdateAllowedContract(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateAllowedContract(src.loadRef().beginParse());
        }
    }
}

export type MintCard = {
    $$type: 'MintCard';
    query_id: bigint;
    username_address: Address;
    bio: string;
    pfp: string;
}

export function storeMintCard(src: MintCard) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(425813829, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.username_address);
        b_0.storeStringRefTail(src.bio);
        b_0.storeStringRefTail(src.pfp);
    };
}

export function loadMintCard(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 425813829) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _username_address = sc_0.loadAddress();
    let _bio = sc_0.loadStringRefTail();
    let _pfp = sc_0.loadStringRefTail();
    return { $$type: 'MintCard' as const, query_id: _query_id, username_address: _username_address, bio: _bio, pfp: _pfp };
}

function loadTupleMintCard(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _username_address = source.readAddress();
    let _bio = source.readString();
    let _pfp = source.readString();
    return { $$type: 'MintCard' as const, query_id: _query_id, username_address: _username_address, bio: _bio, pfp: _pfp };
}

function storeTupleMintCard(source: MintCard) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.username_address);
    builder.writeString(source.bio);
    builder.writeString(source.pfp);
    return builder.build();
}

function dictValueParserMintCard(): DictionaryValue<MintCard> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeMintCard(src)).endCell());
        },
        parse: (src) => {
            return loadMintCard(src.loadRef().beginParse());
        }
    }
}

export type CardMetadata = {
    $$type: 'CardMetadata';
    bio: Cell;
    pfp: Cell;
    username: Cell;
}

export function storeCardMetadata(src: CardMetadata) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.bio);
        b_0.storeRef(src.pfp);
        b_0.storeRef(src.username);
    };
}

export function loadCardMetadata(slice: Slice) {
    let sc_0 = slice;
    let _bio = sc_0.loadRef();
    let _pfp = sc_0.loadRef();
    let _username = sc_0.loadRef();
    return { $$type: 'CardMetadata' as const, bio: _bio, pfp: _pfp, username: _username };
}

function loadTupleCardMetadata(source: TupleReader) {
    let _bio = source.readCell();
    let _pfp = source.readCell();
    let _username = source.readCell();
    return { $$type: 'CardMetadata' as const, bio: _bio, pfp: _pfp, username: _username };
}

function storeTupleCardMetadata(source: CardMetadata) {
    let builder = new TupleBuilder();
    builder.writeCell(source.bio);
    builder.writeCell(source.pfp);
    builder.writeCell(source.username);
    return builder.build();
}

function dictValueParserCardMetadata(): DictionaryValue<CardMetadata> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCardMetadata(src)).endCell());
        },
        parse: (src) => {
            return loadCardMetadata(src.loadRef().beginParse());
        }
    }
}

export type Initialize = {
    $$type: 'Initialize';
    query_id: bigint;
    new_owner: Address;
    response_destination: Address;
    authority: Address;
    payload: Cell;
}

export function storeInitialize(src: Initialize) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3568268437, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.new_owner);
        b_0.storeAddress(src.response_destination);
        b_0.storeAddress(src.authority);
        b_0.storeRef(src.payload);
    };
}

export function loadInitialize(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3568268437) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _new_owner = sc_0.loadAddress();
    let _response_destination = sc_0.loadAddress();
    let _authority = sc_0.loadAddress();
    let _payload = sc_0.loadRef();
    return { $$type: 'Initialize' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, authority: _authority, payload: _payload };
}

function loadTupleInitialize(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _new_owner = source.readAddress();
    let _response_destination = source.readAddress();
    let _authority = source.readAddress();
    let _payload = source.readCell();
    return { $$type: 'Initialize' as const, query_id: _query_id, new_owner: _new_owner, response_destination: _response_destination, authority: _authority, payload: _payload };
}

function storeTupleInitialize(source: Initialize) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.new_owner);
    builder.writeAddress(source.response_destination);
    builder.writeAddress(source.authority);
    builder.writeCell(source.payload);
    return builder.build();
}

function dictValueParserInitialize(): DictionaryValue<Initialize> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInitialize(src)).endCell());
        },
        parse: (src) => {
            return loadInitialize(src.loadRef().beginParse());
        }
    }
}

export type ProveOwnership = {
    $$type: 'ProveOwnership';
    query_id: bigint;
    dest: Address;
    forward_payload: Cell;
    with_content: boolean;
}

export function storeProveOwnership(src: ProveOwnership) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3956722467, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.dest);
        b_0.storeRef(src.forward_payload);
        b_0.storeBit(src.with_content);
    };
}

export function loadProveOwnership(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3956722467) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _dest = sc_0.loadAddress();
    let _forward_payload = sc_0.loadRef();
    let _with_content = sc_0.loadBit();
    return { $$type: 'ProveOwnership' as const, query_id: _query_id, dest: _dest, forward_payload: _forward_payload, with_content: _with_content };
}

function loadTupleProveOwnership(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _dest = source.readAddress();
    let _forward_payload = source.readCell();
    let _with_content = source.readBoolean();
    return { $$type: 'ProveOwnership' as const, query_id: _query_id, dest: _dest, forward_payload: _forward_payload, with_content: _with_content };
}

function storeTupleProveOwnership(source: ProveOwnership) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.dest);
    builder.writeCell(source.forward_payload);
    builder.writeBoolean(source.with_content);
    return builder.build();
}

function dictValueParserProveOwnership(): DictionaryValue<ProveOwnership> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeProveOwnership(src)).endCell());
        },
        parse: (src) => {
            return loadProveOwnership(src.loadRef().beginParse());
        }
    }
}

export type OwnershipProof = {
    $$type: 'OwnershipProof';
    query_id: bigint;
    item_id: bigint;
    owner: Address;
    data: Cell;
    revoked_at: bigint;
    content: Cell | null;
}

export function storeOwnershipProof(src: OwnershipProof) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1882676056, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeInt(src.item_id, 257);
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.data);
        b_0.storeInt(src.revoked_at, 257);
        if (src.content !== null && src.content !== undefined) { b_0.storeBit(true).storeRef(src.content); } else { b_0.storeBit(false); }
    };
}

export function loadOwnershipProof(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1882676056) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _item_id = sc_0.loadIntBig(257);
    let _owner = sc_0.loadAddress();
    let _data = sc_0.loadRef();
    let _revoked_at = sc_0.loadIntBig(257);
    let _content = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'OwnershipProof' as const, query_id: _query_id, item_id: _item_id, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}

function loadTupleOwnershipProof(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _item_id = source.readBigNumber();
    let _owner = source.readAddress();
    let _data = source.readCell();
    let _revoked_at = source.readBigNumber();
    let _content = source.readCellOpt();
    return { $$type: 'OwnershipProof' as const, query_id: _query_id, item_id: _item_id, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}

function storeTupleOwnershipProof(source: OwnershipProof) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.item_id);
    builder.writeAddress(source.owner);
    builder.writeCell(source.data);
    builder.writeNumber(source.revoked_at);
    builder.writeCell(source.content);
    return builder.build();
}

function dictValueParserOwnershipProof(): DictionaryValue<OwnershipProof> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeOwnershipProof(src)).endCell());
        },
        parse: (src) => {
            return loadOwnershipProof(src.loadRef().beginParse());
        }
    }
}

export type RequestOwner = {
    $$type: 'RequestOwner';
    query_id: bigint;
    dest: Address;
    forward_payload: Cell;
    with_content: boolean;
}

export function storeRequestOwner(src: RequestOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2177359512, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeAddress(src.dest);
        b_0.storeRef(src.forward_payload);
        b_0.storeBit(src.with_content);
    };
}

export function loadRequestOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2177359512) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _dest = sc_0.loadAddress();
    let _forward_payload = sc_0.loadRef();
    let _with_content = sc_0.loadBit();
    return { $$type: 'RequestOwner' as const, query_id: _query_id, dest: _dest, forward_payload: _forward_payload, with_content: _with_content };
}

function loadTupleRequestOwner(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _dest = source.readAddress();
    let _forward_payload = source.readCell();
    let _with_content = source.readBoolean();
    return { $$type: 'RequestOwner' as const, query_id: _query_id, dest: _dest, forward_payload: _forward_payload, with_content: _with_content };
}

function storeTupleRequestOwner(source: RequestOwner) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeAddress(source.dest);
    builder.writeCell(source.forward_payload);
    builder.writeBoolean(source.with_content);
    return builder.build();
}

function dictValueParserRequestOwner(): DictionaryValue<RequestOwner> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRequestOwner(src)).endCell());
        },
        parse: (src) => {
            return loadRequestOwner(src.loadRef().beginParse());
        }
    }
}

export type OwnerInfo = {
    $$type: 'OwnerInfo';
    query_id: bigint;
    item_id: bigint;
    initiator: Address;
    owner: Address;
    data: Cell;
    revoked_at: bigint;
    content: Cell | null;
}

export function storeOwnerInfo(src: OwnerInfo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3617594864, 32);
        b_0.storeUint(src.query_id, 64);
        b_0.storeInt(src.item_id, 257);
        b_0.storeAddress(src.initiator);
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.data);
        let b_1 = new Builder();
        b_1.storeInt(src.revoked_at, 257);
        if (src.content !== null && src.content !== undefined) { b_1.storeBit(true).storeRef(src.content); } else { b_1.storeBit(false); }
        b_0.storeRef(b_1.endCell());
    };
}

export function loadOwnerInfo(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3617594864) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    let _item_id = sc_0.loadIntBig(257);
    let _initiator = sc_0.loadAddress();
    let _owner = sc_0.loadAddress();
    let _data = sc_0.loadRef();
    let sc_1 = sc_0.loadRef().beginParse();
    let _revoked_at = sc_1.loadIntBig(257);
    let _content = sc_1.loadBit() ? sc_1.loadRef() : null;
    return { $$type: 'OwnerInfo' as const, query_id: _query_id, item_id: _item_id, initiator: _initiator, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}

function loadTupleOwnerInfo(source: TupleReader) {
    let _query_id = source.readBigNumber();
    let _item_id = source.readBigNumber();
    let _initiator = source.readAddress();
    let _owner = source.readAddress();
    let _data = source.readCell();
    let _revoked_at = source.readBigNumber();
    let _content = source.readCellOpt();
    return { $$type: 'OwnerInfo' as const, query_id: _query_id, item_id: _item_id, initiator: _initiator, owner: _owner, data: _data, revoked_at: _revoked_at, content: _content };
}

function storeTupleOwnerInfo(source: OwnerInfo) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    builder.writeNumber(source.item_id);
    builder.writeAddress(source.initiator);
    builder.writeAddress(source.owner);
    builder.writeCell(source.data);
    builder.writeNumber(source.revoked_at);
    builder.writeCell(source.content);
    return builder.build();
}

function dictValueParserOwnerInfo(): DictionaryValue<OwnerInfo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeOwnerInfo(src)).endCell());
        },
        parse: (src) => {
            return loadOwnerInfo(src.loadRef().beginParse());
        }
    }
}

export type Destroy = {
    $$type: 'Destroy';
    query_id: bigint;
}

export function storeDestroy(src: Destroy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(473171199, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadDestroy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 473171199) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    return { $$type: 'Destroy' as const, query_id: _query_id };
}

function loadTupleDestroy(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'Destroy' as const, query_id: _query_id };
}

function storeTupleDestroy(source: Destroy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

function dictValueParserDestroy(): DictionaryValue<Destroy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDestroy(src)).endCell());
        },
        parse: (src) => {
            return loadDestroy(src.loadRef().beginParse());
        }
    }
}

export type Revoke = {
    $$type: 'Revoke';
    query_id: bigint;
}

export function storeRevoke(src: Revoke) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2711683139, 32);
        b_0.storeUint(src.query_id, 64);
    };
}

export function loadRevoke(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2711683139) { throw Error('Invalid prefix'); }
    let _query_id = sc_0.loadUintBig(64);
    return { $$type: 'Revoke' as const, query_id: _query_id };
}

function loadTupleRevoke(source: TupleReader) {
    let _query_id = source.readBigNumber();
    return { $$type: 'Revoke' as const, query_id: _query_id };
}

function storeTupleRevoke(source: Revoke) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.query_id);
    return builder.build();
}

function dictValueParserRevoke(): DictionaryValue<Revoke> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeRevoke(src)).endCell());
        },
        parse: (src) => {
            return loadRevoke(src.loadRef().beginParse());
        }
    }
}

 type CNftCollection_init_args = {
    $$type: 'CNftCollection_init_args';
    collection_uri: string;
}

function initCNftCollection_init_args(src: CNftCollection_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.collection_uri);
    };
}

async function CNftCollection_init(collection_uri: string) {
    const __code = Cell.fromBase64('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');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initCNftCollection_init_args({ $$type: 'CNftCollection_init_args', collection_uri })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const CNftCollection_errors: { [key: number]: { message: string } } = {
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
}

const CNftCollection_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"RoyaltyParams","header":null,"fields":[{"name":"numerator","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"denominator","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"CollectionData","header":null,"fields":[{"name":"next_item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection_content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"owner_address","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ItemData","header":null,"fields":[{"name":"is_initialized","type":{"kind":"simple","type":"bool","optional":false}},{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"collection_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"owner_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"PriceRangeConfig","header":null,"fields":[{"name":"start","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"end","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"GetCardLinkStatus","header":3028164059,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"initiator","type":{"kind":"simple","type":"address","optional":false}},{"name":"payload","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"ReportCardLinkStatus","header":1646771514,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"is_linked_to_card","type":{"kind":"simple","type":"bool","optional":true}},{"name":"initiator","type":{"kind":"simple","type":"address","optional":false}},{"name":"payload","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Transfer","header":1312029976,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"new_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"custom_payload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forward_amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"Excesses","header":869633650,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"OwnershipAssigned","header":3788238085,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"prev_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"GetStaticData","header":2365735669,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ReportStaticData","header":1100264081,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"index","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"collection","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"GetUsernameData","header":808469150,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"initiator","type":{"kind":"simple","type":"address","optional":false}},{"name":"payload","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"ReportUsernameData","header":1224717995,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"item_index","type":{"kind":"simple","type":"uint","optional":false,"format":256}},{"name":"token_name","type":{"kind":"simple","type":"cell","optional":false}},{"name":"initiator","type":{"kind":"simple","type":"address","optional":false}},{"name":"payload","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"GetRoyaltyParams","header":435086716,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ReportRoyaltyParams","header":634900346,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"numerator","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"denominator","type":{"kind":"simple","type":"uint","optional":false,"format":16}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"UnlinkCard","header":1323911271,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"initiator","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"UpdateUsernameLinkedStatus","header":3479701466,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"initiator","type":{"kind":"simple","type":"address","optional":false}},{"name":"status","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"UpdateAllowedContract","header":3161124927,"fields":[{"name":"allowed_contract","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"MintCard","header":425813829,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"username_address","type":{"kind":"simple","type":"address","optional":false}},{"name":"bio","type":{"kind":"simple","type":"string","optional":false}},{"name":"pfp","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"CardMetadata","header":null,"fields":[{"name":"bio","type":{"kind":"simple","type":"cell","optional":false}},{"name":"pfp","type":{"kind":"simple","type":"cell","optional":false}},{"name":"username","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Initialize","header":3568268437,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"new_owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"response_destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"authority","type":{"kind":"simple","type":"address","optional":false}},{"name":"payload","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"ProveOwnership","header":3956722467,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"dest","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"cell","optional":false}},{"name":"with_content","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"OwnershipProof","header":1882676056,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"item_id","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}},{"name":"revoked_at","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"content","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"RequestOwner","header":2177359512,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"dest","type":{"kind":"simple","type":"address","optional":false}},{"name":"forward_payload","type":{"kind":"simple","type":"cell","optional":false}},{"name":"with_content","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"OwnerInfo","header":3617594864,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"item_id","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"initiator","type":{"kind":"simple","type":"address","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}},{"name":"revoked_at","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"content","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Destroy","header":473171199,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"Revoke","header":2711683139,"fields":[{"name":"query_id","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
]

const CNftCollection_getters: ABIGetter[] = [
    {"name":"get_nft_content","arguments":[{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"individual_content","type":{"kind":"simple","type":"cell","optional":false}}],"returnType":{"kind":"simple","type":"cell","optional":false}},
    {"name":"get_collection_data","arguments":[],"returnType":{"kind":"simple","type":"CollectionData","optional":false}},
    {"name":"get_nft_address_by_index","arguments":[{"name":"item_index","type":{"kind":"simple","type":"int","optional":false,"format":257}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"get_allowed_contract","arguments":[],"returnType":{"kind":"simple","type":"address","optional":false}},
]

const CNftCollection_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"UpdateAllowedContract"}},
    {"receiver":"internal","message":{"kind":"typed","type":"MintCard"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ReportUsernameData"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ReportCardLinkStatus"}},
    {"receiver":"internal","message":{"kind":"typed","type":"UnlinkCard"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class CNftCollection implements Contract {
    
    static async init(collection_uri: string) {
        return await CNftCollection_init(collection_uri);
    }
    
    static async fromInit(collection_uri: string) {
        const init = await CNftCollection_init(collection_uri);
        const address = contractAddress(0, init);
        return new CNftCollection(address, init);
    }
    
    static fromAddress(address: Address) {
        return new CNftCollection(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  CNftCollection_types,
        getters: CNftCollection_getters,
        receivers: CNftCollection_receivers,
        errors: CNftCollection_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: null | UpdateAllowedContract | MintCard | ReportUsernameData | ReportCardLinkStatus | UnlinkCard | Deploy) {
        
        let body: Cell | null = null;
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'UpdateAllowedContract') {
            body = beginCell().store(storeUpdateAllowedContract(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'MintCard') {
            body = beginCell().store(storeMintCard(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ReportUsernameData') {
            body = beginCell().store(storeReportUsernameData(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ReportCardLinkStatus') {
            body = beginCell().store(storeReportCardLinkStatus(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'UnlinkCard') {
            body = beginCell().store(storeUnlinkCard(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetNftContent(provider: ContractProvider, item_index: bigint, individual_content: Cell) {
        let builder = new TupleBuilder();
        builder.writeNumber(item_index);
        builder.writeCell(individual_content);
        let source = (await provider.get('get_nft_content', builder.build())).stack;
        let result = source.readCell();
        return result;
    }
    
    async getGetCollectionData(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_collection_data', builder.build())).stack;
        const result = loadTupleCollectionData(source);
        return result;
    }
    
    async getGetNftAddressByIndex(provider: ContractProvider, item_index: bigint) {
        let builder = new TupleBuilder();
        builder.writeNumber(item_index);
        let source = (await provider.get('get_nft_address_by_index', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getGetAllowedContract(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('get_allowed_contract', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
}