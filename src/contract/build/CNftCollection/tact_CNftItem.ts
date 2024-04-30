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
} from "ton-core";

export type StateInit = {
  $$type: "StateInit";
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
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
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
  $$type: "Context";
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
    $$type: "Context" as const,
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
    $$type: "Context" as const,
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
  $$type: "SendParameters";
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
    $$type: "SendParameters" as const,
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
    $$type: "SendParameters" as const,
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
  $$type: "Deploy";
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
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
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
  $$type: "DeployOk";
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
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
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
  $$type: "FactoryDeploy";
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
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return { $$type: "FactoryDeploy" as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return { $$type: "FactoryDeploy" as const, queryId: _queryId, cashback: _cashback };
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

export type RoyaltyParams = {
  $$type: "RoyaltyParams";
  numerator: bigint;
  denominator: bigint;
  destination: Address;
};

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
  return {
    $$type: "RoyaltyParams" as const,
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
    $$type: "RoyaltyParams" as const,
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

export type CollectionData = {
  $$type: "CollectionData";
  next_item_index: bigint;
  collection_content: Cell;
  owner_address: Address;
};

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
  return {
    $$type: "CollectionData" as const,
    next_item_index: _next_item_index,
    collection_content: _collection_content,
    owner_address: _owner_address,
  };
}

function loadTupleCollectionData(source: TupleReader) {
  let _next_item_index = source.readBigNumber();
  let _collection_content = source.readCell();
  let _owner_address = source.readAddress();
  return {
    $$type: "CollectionData" as const,
    next_item_index: _next_item_index,
    collection_content: _collection_content,
    owner_address: _owner_address,
  };
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
    },
  };
}

export type ItemData = {
  $$type: "ItemData";
  is_initialized: boolean;
  index: bigint;
  collection_address: Address;
  owner_address: Address;
  individual_content: Cell;
};

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
  return {
    $$type: "ItemData" as const,
    is_initialized: _is_initialized,
    index: _index,
    collection_address: _collection_address,
    owner_address: _owner_address,
    individual_content: _individual_content,
  };
}

function loadTupleItemData(source: TupleReader) {
  let _is_initialized = source.readBoolean();
  let _index = source.readBigNumber();
  let _collection_address = source.readAddress();
  let _owner_address = source.readAddress();
  let _individual_content = source.readCell();
  return {
    $$type: "ItemData" as const,
    is_initialized: _is_initialized,
    index: _index,
    collection_address: _collection_address,
    owner_address: _owner_address,
    individual_content: _individual_content,
  };
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
    },
  };
}

export type PriceRangeConfig = {
  $$type: "PriceRangeConfig";
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
  return { $$type: "PriceRangeConfig" as const, start: _start, end: _end };
}

function loadTuplePriceRangeConfig(source: TupleReader) {
  let _start = source.readBigNumber();
  let _end = source.readBigNumber();
  return { $$type: "PriceRangeConfig" as const, start: _start, end: _end };
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

export type GetCardLinkStatus = {
  $$type: "GetCardLinkStatus";
  query_id: bigint;
  item_index: bigint;
  initiator: Address;
  payload: Cell;
};

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
  if (sc_0.loadUint(32) !== 3028164059) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _item_index = sc_0.loadIntBig(257);
  let _initiator = sc_0.loadAddress();
  let _payload = sc_0.loadRef();
  return {
    $$type: "GetCardLinkStatus" as const,
    query_id: _query_id,
    item_index: _item_index,
    initiator: _initiator,
    payload: _payload,
  };
}

function loadTupleGetCardLinkStatus(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _item_index = source.readBigNumber();
  let _initiator = source.readAddress();
  let _payload = source.readCell();
  return {
    $$type: "GetCardLinkStatus" as const,
    query_id: _query_id,
    item_index: _item_index,
    initiator: _initiator,
    payload: _payload,
  };
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
    },
  };
}

export type ReportCardLinkStatus = {
  $$type: "ReportCardLinkStatus";
  query_id: bigint;
  item_index: bigint;
  is_linked_to_card: boolean | null;
  initiator: Address;
  payload: Cell;
};

export function storeReportCardLinkStatus(src: ReportCardLinkStatus) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1646771514, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeInt(src.item_index, 257);
    if (src.is_linked_to_card !== null && src.is_linked_to_card !== undefined) {
      b_0.storeBit(true).storeBit(src.is_linked_to_card);
    } else {
      b_0.storeBit(false);
    }
    b_0.storeAddress(src.initiator);
    b_0.storeRef(src.payload);
  };
}

export function loadReportCardLinkStatus(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1646771514) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _item_index = sc_0.loadIntBig(257);
  let _is_linked_to_card = sc_0.loadBit() ? sc_0.loadBit() : null;
  let _initiator = sc_0.loadAddress();
  let _payload = sc_0.loadRef();
  return {
    $$type: "ReportCardLinkStatus" as const,
    query_id: _query_id,
    item_index: _item_index,
    is_linked_to_card: _is_linked_to_card,
    initiator: _initiator,
    payload: _payload,
  };
}

function loadTupleReportCardLinkStatus(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _item_index = source.readBigNumber();
  let _is_linked_to_card = source.readBooleanOpt();
  let _initiator = source.readAddress();
  let _payload = source.readCell();
  return {
    $$type: "ReportCardLinkStatus" as const,
    query_id: _query_id,
    item_index: _item_index,
    is_linked_to_card: _is_linked_to_card,
    initiator: _initiator,
    payload: _payload,
  };
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
    },
  };
}

export type Transfer = {
  $$type: "Transfer";
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
    b_0.storeUint(1312029976, 32);
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
  if (sc_0.loadUint(32) !== 1312029976) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _new_owner = sc_0.loadAddress();
  let _response_destination = sc_0.loadAddress();
  let _custom_payload = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _forward_amount = sc_0.loadCoins();
  let _forward_payload = sc_0.asCell();
  return {
    $$type: "Transfer" as const,
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
    $$type: "Transfer" as const,
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
  $$type: "Excesses";
  query_id: bigint;
};

export function storeExcesses(src: Excesses) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(869633650, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadExcesses(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 869633650) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: "Excesses" as const, query_id: _query_id };
}

function loadTupleExcesses(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return { $$type: "Excesses" as const, query_id: _query_id };
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
  $$type: "OwnershipAssigned";
  query_id: bigint;
  prev_owner: Address;
  forward_payload: Cell;
};

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
  if (sc_0.loadUint(32) !== 3788238085) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _prev_owner = sc_0.loadAddress();
  let _forward_payload = sc_0.asCell();
  return {
    $$type: "OwnershipAssigned" as const,
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
    $$type: "OwnershipAssigned" as const,
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

export type GetStaticData = {
  $$type: "GetStaticData";
  query_id: bigint;
};

export function storeGetStaticData(src: GetStaticData) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2365735669, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadGetStaticData(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2365735669) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: "GetStaticData" as const, query_id: _query_id };
}

function loadTupleGetStaticData(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return { $$type: "GetStaticData" as const, query_id: _query_id };
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
  $$type: "ReportStaticData";
  query_id: bigint;
  index: bigint;
  collection: Address;
};

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
  if (sc_0.loadUint(32) !== 1100264081) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _index = sc_0.loadUintBig(256);
  let _collection = sc_0.loadAddress();
  return {
    $$type: "ReportStaticData" as const,
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
    $$type: "ReportStaticData" as const,
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

export type GetUsernameData = {
  $$type: "GetUsernameData";
  query_id: bigint;
  initiator: Address;
  payload: Cell;
};

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
  if (sc_0.loadUint(32) !== 808469150) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _initiator = sc_0.loadAddress();
  let _payload = sc_0.loadRef();
  return {
    $$type: "GetUsernameData" as const,
    query_id: _query_id,
    initiator: _initiator,
    payload: _payload,
  };
}

function loadTupleGetUsernameData(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _initiator = source.readAddress();
  let _payload = source.readCell();
  return {
    $$type: "GetUsernameData" as const,
    query_id: _query_id,
    initiator: _initiator,
    payload: _payload,
  };
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
    },
  };
}

export type ReportUsernameData = {
  $$type: "ReportUsernameData";
  query_id: bigint;
  item_index: bigint;
  token_name: Cell;
  initiator: Address;
  payload: Cell;
};

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
  if (sc_0.loadUint(32) !== 1224717995) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _item_index = sc_0.loadUintBig(256);
  let _token_name = sc_0.loadRef();
  let _initiator = sc_0.loadAddress();
  let _payload = sc_0.loadRef();
  return {
    $$type: "ReportUsernameData" as const,
    query_id: _query_id,
    item_index: _item_index,
    token_name: _token_name,
    initiator: _initiator,
    payload: _payload,
  };
}

function loadTupleReportUsernameData(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _item_index = source.readBigNumber();
  let _token_name = source.readCell();
  let _initiator = source.readAddress();
  let _payload = source.readCell();
  return {
    $$type: "ReportUsernameData" as const,
    query_id: _query_id,
    item_index: _item_index,
    token_name: _token_name,
    initiator: _initiator,
    payload: _payload,
  };
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
    },
  };
}

export type GetRoyaltyParams = {
  $$type: "GetRoyaltyParams";
  query_id: bigint;
};

export function storeGetRoyaltyParams(src: GetRoyaltyParams) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(435086716, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadGetRoyaltyParams(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 435086716) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: "GetRoyaltyParams" as const, query_id: _query_id };
}

function loadTupleGetRoyaltyParams(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return { $$type: "GetRoyaltyParams" as const, query_id: _query_id };
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
  $$type: "ReportRoyaltyParams";
  query_id: bigint;
  numerator: bigint;
  denominator: bigint;
  destination: Address;
};

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
  if (sc_0.loadUint(32) !== 634900346) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _numerator = sc_0.loadUintBig(16);
  let _denominator = sc_0.loadUintBig(16);
  let _destination = sc_0.loadAddress();
  return {
    $$type: "ReportRoyaltyParams" as const,
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
    $$type: "ReportRoyaltyParams" as const,
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

export type UnlinkCard = {
  $$type: "UnlinkCard";
  query_id: bigint;
  index: bigint;
  initiator: Address;
};

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
  if (sc_0.loadUint(32) !== 1323911271) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _index = sc_0.loadIntBig(257);
  let _initiator = sc_0.loadAddress();
  return {
    $$type: "UnlinkCard" as const,
    query_id: _query_id,
    index: _index,
    initiator: _initiator,
  };
}

function loadTupleUnlinkCard(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _index = source.readBigNumber();
  let _initiator = source.readAddress();
  return {
    $$type: "UnlinkCard" as const,
    query_id: _query_id,
    index: _index,
    initiator: _initiator,
  };
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
    },
  };
}

export type UpdateUsernameLinkedStatus = {
  $$type: "UpdateUsernameLinkedStatus";
  query_id: bigint;
  index: bigint;
  initiator: Address;
  status: boolean;
};

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
  if (sc_0.loadUint(32) !== 3479701466) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _index = sc_0.loadIntBig(257);
  let _initiator = sc_0.loadAddress();
  let _status = sc_0.loadBit();
  return {
    $$type: "UpdateUsernameLinkedStatus" as const,
    query_id: _query_id,
    index: _index,
    initiator: _initiator,
    status: _status,
  };
}

function loadTupleUpdateUsernameLinkedStatus(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _index = source.readBigNumber();
  let _initiator = source.readAddress();
  let _status = source.readBoolean();
  return {
    $$type: "UpdateUsernameLinkedStatus" as const,
    query_id: _query_id,
    index: _index,
    initiator: _initiator,
    status: _status,
  };
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
    },
  };
}

export type UpdateAllowedContract = {
  $$type: "UpdateAllowedContract";
  allowed_contract: Address;
};

export function storeUpdateAllowedContract(src: UpdateAllowedContract) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(3161124927, 32);
    b_0.storeAddress(src.allowed_contract);
  };
}

export function loadUpdateAllowedContract(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3161124927) {
    throw Error("Invalid prefix");
  }
  let _allowed_contract = sc_0.loadAddress();
  return { $$type: "UpdateAllowedContract" as const, allowed_contract: _allowed_contract };
}

function loadTupleUpdateAllowedContract(source: TupleReader) {
  let _allowed_contract = source.readAddress();
  return { $$type: "UpdateAllowedContract" as const, allowed_contract: _allowed_contract };
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
    },
  };
}

export type MintCard = {
  $$type: "MintCard";
  query_id: bigint;
  username_address: Address;
  bio: string;
  pfp: string;
};

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
  if (sc_0.loadUint(32) !== 425813829) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _username_address = sc_0.loadAddress();
  let _bio = sc_0.loadStringRefTail();
  let _pfp = sc_0.loadStringRefTail();
  return {
    $$type: "MintCard" as const,
    query_id: _query_id,
    username_address: _username_address,
    bio: _bio,
    pfp: _pfp,
  };
}

function loadTupleMintCard(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _username_address = source.readAddress();
  let _bio = source.readString();
  let _pfp = source.readString();
  return {
    $$type: "MintCard" as const,
    query_id: _query_id,
    username_address: _username_address,
    bio: _bio,
    pfp: _pfp,
  };
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
    },
  };
}

export type CardMetadata = {
  $$type: "CardMetadata";
  bio: Cell;
  pfp: Cell;
  username: Cell;
};

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
  return { $$type: "CardMetadata" as const, bio: _bio, pfp: _pfp, username: _username };
}

function loadTupleCardMetadata(source: TupleReader) {
  let _bio = source.readCell();
  let _pfp = source.readCell();
  let _username = source.readCell();
  return { $$type: "CardMetadata" as const, bio: _bio, pfp: _pfp, username: _username };
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
    },
  };
}

export type Initialize = {
  $$type: "Initialize";
  query_id: bigint;
  new_owner: Address;
  response_destination: Address;
  authority: Address;
  payload: Cell;
};

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
  if (sc_0.loadUint(32) !== 3568268437) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _new_owner = sc_0.loadAddress();
  let _response_destination = sc_0.loadAddress();
  let _authority = sc_0.loadAddress();
  let _payload = sc_0.loadRef();
  return {
    $$type: "Initialize" as const,
    query_id: _query_id,
    new_owner: _new_owner,
    response_destination: _response_destination,
    authority: _authority,
    payload: _payload,
  };
}

function loadTupleInitialize(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _new_owner = source.readAddress();
  let _response_destination = source.readAddress();
  let _authority = source.readAddress();
  let _payload = source.readCell();
  return {
    $$type: "Initialize" as const,
    query_id: _query_id,
    new_owner: _new_owner,
    response_destination: _response_destination,
    authority: _authority,
    payload: _payload,
  };
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
    },
  };
}

export type ProveOwnership = {
  $$type: "ProveOwnership";
  query_id: bigint;
  dest: Address;
  forward_payload: Cell;
  with_content: boolean;
};

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
  if (sc_0.loadUint(32) !== 3956722467) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _dest = sc_0.loadAddress();
  let _forward_payload = sc_0.loadRef();
  let _with_content = sc_0.loadBit();
  return {
    $$type: "ProveOwnership" as const,
    query_id: _query_id,
    dest: _dest,
    forward_payload: _forward_payload,
    with_content: _with_content,
  };
}

function loadTupleProveOwnership(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _dest = source.readAddress();
  let _forward_payload = source.readCell();
  let _with_content = source.readBoolean();
  return {
    $$type: "ProveOwnership" as const,
    query_id: _query_id,
    dest: _dest,
    forward_payload: _forward_payload,
    with_content: _with_content,
  };
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
    },
  };
}

export type OwnershipProof = {
  $$type: "OwnershipProof";
  query_id: bigint;
  item_id: bigint;
  owner: Address;
  data: Cell;
  revoked_at: bigint;
  content: Cell | null;
};

export function storeOwnershipProof(src: OwnershipProof) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1882676056, 32);
    b_0.storeUint(src.query_id, 64);
    b_0.storeInt(src.item_id, 257);
    b_0.storeAddress(src.owner);
    b_0.storeRef(src.data);
    b_0.storeInt(src.revoked_at, 257);
    if (src.content !== null && src.content !== undefined) {
      b_0.storeBit(true).storeRef(src.content);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadOwnershipProof(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1882676056) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _item_id = sc_0.loadIntBig(257);
  let _owner = sc_0.loadAddress();
  let _data = sc_0.loadRef();
  let _revoked_at = sc_0.loadIntBig(257);
  let _content = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: "OwnershipProof" as const,
    query_id: _query_id,
    item_id: _item_id,
    owner: _owner,
    data: _data,
    revoked_at: _revoked_at,
    content: _content,
  };
}

function loadTupleOwnershipProof(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _item_id = source.readBigNumber();
  let _owner = source.readAddress();
  let _data = source.readCell();
  let _revoked_at = source.readBigNumber();
  let _content = source.readCellOpt();
  return {
    $$type: "OwnershipProof" as const,
    query_id: _query_id,
    item_id: _item_id,
    owner: _owner,
    data: _data,
    revoked_at: _revoked_at,
    content: _content,
  };
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
    },
  };
}

export type RequestOwner = {
  $$type: "RequestOwner";
  query_id: bigint;
  dest: Address;
  forward_payload: Cell;
  with_content: boolean;
};

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
  if (sc_0.loadUint(32) !== 2177359512) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _dest = sc_0.loadAddress();
  let _forward_payload = sc_0.loadRef();
  let _with_content = sc_0.loadBit();
  return {
    $$type: "RequestOwner" as const,
    query_id: _query_id,
    dest: _dest,
    forward_payload: _forward_payload,
    with_content: _with_content,
  };
}

function loadTupleRequestOwner(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _dest = source.readAddress();
  let _forward_payload = source.readCell();
  let _with_content = source.readBoolean();
  return {
    $$type: "RequestOwner" as const,
    query_id: _query_id,
    dest: _dest,
    forward_payload: _forward_payload,
    with_content: _with_content,
  };
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
    },
  };
}

export type OwnerInfo = {
  $$type: "OwnerInfo";
  query_id: bigint;
  item_id: bigint;
  initiator: Address;
  owner: Address;
  data: Cell;
  revoked_at: bigint;
  content: Cell | null;
};

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
    if (src.content !== null && src.content !== undefined) {
      b_1.storeBit(true).storeRef(src.content);
    } else {
      b_1.storeBit(false);
    }
    b_0.storeRef(b_1.endCell());
  };
}

export function loadOwnerInfo(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 3617594864) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  let _item_id = sc_0.loadIntBig(257);
  let _initiator = sc_0.loadAddress();
  let _owner = sc_0.loadAddress();
  let _data = sc_0.loadRef();
  let sc_1 = sc_0.loadRef().beginParse();
  let _revoked_at = sc_1.loadIntBig(257);
  let _content = sc_1.loadBit() ? sc_1.loadRef() : null;
  return {
    $$type: "OwnerInfo" as const,
    query_id: _query_id,
    item_id: _item_id,
    initiator: _initiator,
    owner: _owner,
    data: _data,
    revoked_at: _revoked_at,
    content: _content,
  };
}

function loadTupleOwnerInfo(source: TupleReader) {
  let _query_id = source.readBigNumber();
  let _item_id = source.readBigNumber();
  let _initiator = source.readAddress();
  let _owner = source.readAddress();
  let _data = source.readCell();
  let _revoked_at = source.readBigNumber();
  let _content = source.readCellOpt();
  return {
    $$type: "OwnerInfo" as const,
    query_id: _query_id,
    item_id: _item_id,
    initiator: _initiator,
    owner: _owner,
    data: _data,
    revoked_at: _revoked_at,
    content: _content,
  };
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
    },
  };
}

export type Destroy = {
  $$type: "Destroy";
  query_id: bigint;
};

export function storeDestroy(src: Destroy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(473171199, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadDestroy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 473171199) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: "Destroy" as const, query_id: _query_id };
}

function loadTupleDestroy(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return { $$type: "Destroy" as const, query_id: _query_id };
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
    },
  };
}

export type Revoke = {
  $$type: "Revoke";
  query_id: bigint;
};

export function storeRevoke(src: Revoke) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2711683139, 32);
    b_0.storeUint(src.query_id, 64);
  };
}

export function loadRevoke(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2711683139) {
    throw Error("Invalid prefix");
  }
  let _query_id = sc_0.loadUintBig(64);
  return { $$type: "Revoke" as const, query_id: _query_id };
}

function loadTupleRevoke(source: TupleReader) {
  let _query_id = source.readBigNumber();
  return { $$type: "Revoke" as const, query_id: _query_id };
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
    },
  };
}

type CNftItem_init_args = {
  $$type: "CNftItem_init_args";
  collection_address: Address;
  owner: Address;
  index: bigint;
  individual_content: Cell;
};

function initCNftItem_init_args(src: CNftItem_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeAddress(src.collection_address);
    b_0.storeAddress(src.owner);
    b_0.storeInt(src.index, 257);
    b_0.storeRef(src.individual_content);
  };
}

async function CNftItem_init(
  collection_address: Address,
  owner: Address,
  index: bigint,
  individual_content: Cell
) {
  const __code = Cell.fromBase64(
    "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"
  );
  const __system = Cell.fromBase64(
    "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"
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initCNftItem_init_args({
    $$type: "CNftItem_init_args",
    collection_address,
    owner,
    index,
    individual_content,
  })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const CNftItem_errors: { [key: number]: { message: string } } = {
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

const CNftItem_types: ABIType[] = [
  {
    name: "StateInit",
    header: null,
    fields: [
      { name: "code", type: { kind: "simple", type: "cell", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Context",
    header: null,
    fields: [
      { name: "bounced", type: { kind: "simple", type: "bool", optional: false } },
      { name: "sender", type: { kind: "simple", type: "address", optional: false } },
      { name: "value", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "raw", type: { kind: "simple", type: "slice", optional: false } },
    ],
  },
  {
    name: "SendParameters",
    header: null,
    fields: [
      { name: "bounce", type: { kind: "simple", type: "bool", optional: false } },
      { name: "to", type: { kind: "simple", type: "address", optional: false } },
      { name: "value", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "mode", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "body", type: { kind: "simple", type: "cell", optional: true } },
      { name: "code", type: { kind: "simple", type: "cell", optional: true } },
      { name: "data", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "Deploy",
    header: 2490013878,
    fields: [
      { name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
    ],
  },
  {
    name: "DeployOk",
    header: 2952335191,
    fields: [
      { name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
    ],
  },
  {
    name: "FactoryDeploy",
    header: 1829761339,
    fields: [
      { name: "queryId", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "cashback", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "RoyaltyParams",
    header: null,
    fields: [
      { name: "numerator", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "denominator", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "destination", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "CollectionData",
    header: null,
    fields: [
      {
        name: "next_item_index",
        type: { kind: "simple", type: "int", optional: false, format: 257 },
      },
      { name: "collection_content", type: { kind: "simple", type: "cell", optional: false } },
      { name: "owner_address", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "ItemData",
    header: null,
    fields: [
      { name: "is_initialized", type: { kind: "simple", type: "bool", optional: false } },
      { name: "index", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "collection_address", type: { kind: "simple", type: "address", optional: false } },
      { name: "owner_address", type: { kind: "simple", type: "address", optional: false } },
      { name: "individual_content", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "PriceRangeConfig",
    header: null,
    fields: [
      { name: "start", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "end", type: { kind: "simple", type: "int", optional: false, format: 257 } },
    ],
  },
  {
    name: "GetCardLinkStatus",
    header: 3028164059,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "item_index", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "initiator", type: { kind: "simple", type: "address", optional: false } },
      { name: "payload", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "ReportCardLinkStatus",
    header: 1646771514,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "item_index", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "is_linked_to_card", type: { kind: "simple", type: "bool", optional: true } },
      { name: "initiator", type: { kind: "simple", type: "address", optional: false } },
      { name: "payload", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Transfer",
    header: 1312029976,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "new_owner", type: { kind: "simple", type: "address", optional: false } },
      { name: "response_destination", type: { kind: "simple", type: "address", optional: false } },
      { name: "custom_payload", type: { kind: "simple", type: "cell", optional: true } },
      {
        name: "forward_amount",
        type: { kind: "simple", type: "uint", optional: false, format: "coins" },
      },
      {
        name: "forward_payload",
        type: { kind: "simple", type: "slice", optional: false, format: "remainder" },
      },
    ],
  },
  {
    name: "Excesses",
    header: 869633650,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
    ],
  },
  {
    name: "OwnershipAssigned",
    header: 3788238085,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "prev_owner", type: { kind: "simple", type: "address", optional: false } },
      {
        name: "forward_payload",
        type: { kind: "simple", type: "slice", optional: false, format: "remainder" },
      },
    ],
  },
  {
    name: "GetStaticData",
    header: 2365735669,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
    ],
  },
  {
    name: "ReportStaticData",
    header: 1100264081,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "index", type: { kind: "simple", type: "uint", optional: false, format: 256 } },
      { name: "collection", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "GetUsernameData",
    header: 808469150,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "initiator", type: { kind: "simple", type: "address", optional: false } },
      { name: "payload", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "ReportUsernameData",
    header: 1224717995,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "item_index", type: { kind: "simple", type: "uint", optional: false, format: 256 } },
      { name: "token_name", type: { kind: "simple", type: "cell", optional: false } },
      { name: "initiator", type: { kind: "simple", type: "address", optional: false } },
      { name: "payload", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "GetRoyaltyParams",
    header: 435086716,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
    ],
  },
  {
    name: "ReportRoyaltyParams",
    header: 634900346,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "numerator", type: { kind: "simple", type: "uint", optional: false, format: 16 } },
      { name: "denominator", type: { kind: "simple", type: "uint", optional: false, format: 16 } },
      { name: "destination", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "UnlinkCard",
    header: 1323911271,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "index", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "initiator", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "UpdateUsernameLinkedStatus",
    header: 3479701466,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "index", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "initiator", type: { kind: "simple", type: "address", optional: false } },
      { name: "status", type: { kind: "simple", type: "bool", optional: false } },
    ],
  },
  {
    name: "UpdateAllowedContract",
    header: 3161124927,
    fields: [
      { name: "allowed_contract", type: { kind: "simple", type: "address", optional: false } },
    ],
  },
  {
    name: "MintCard",
    header: 425813829,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "username_address", type: { kind: "simple", type: "address", optional: false } },
      { name: "bio", type: { kind: "simple", type: "string", optional: false } },
      { name: "pfp", type: { kind: "simple", type: "string", optional: false } },
    ],
  },
  {
    name: "CardMetadata",
    header: null,
    fields: [
      { name: "bio", type: { kind: "simple", type: "cell", optional: false } },
      { name: "pfp", type: { kind: "simple", type: "cell", optional: false } },
      { name: "username", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "Initialize",
    header: 3568268437,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "new_owner", type: { kind: "simple", type: "address", optional: false } },
      { name: "response_destination", type: { kind: "simple", type: "address", optional: false } },
      { name: "authority", type: { kind: "simple", type: "address", optional: false } },
      { name: "payload", type: { kind: "simple", type: "cell", optional: false } },
    ],
  },
  {
    name: "ProveOwnership",
    header: 3956722467,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "dest", type: { kind: "simple", type: "address", optional: false } },
      { name: "forward_payload", type: { kind: "simple", type: "cell", optional: false } },
      { name: "with_content", type: { kind: "simple", type: "bool", optional: false } },
    ],
  },
  {
    name: "OwnershipProof",
    header: 1882676056,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "item_id", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "owner", type: { kind: "simple", type: "address", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
      { name: "revoked_at", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "content", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "RequestOwner",
    header: 2177359512,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "dest", type: { kind: "simple", type: "address", optional: false } },
      { name: "forward_payload", type: { kind: "simple", type: "cell", optional: false } },
      { name: "with_content", type: { kind: "simple", type: "bool", optional: false } },
    ],
  },
  {
    name: "OwnerInfo",
    header: 3617594864,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
      { name: "item_id", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "initiator", type: { kind: "simple", type: "address", optional: false } },
      { name: "owner", type: { kind: "simple", type: "address", optional: false } },
      { name: "data", type: { kind: "simple", type: "cell", optional: false } },
      { name: "revoked_at", type: { kind: "simple", type: "int", optional: false, format: 257 } },
      { name: "content", type: { kind: "simple", type: "cell", optional: true } },
    ],
  },
  {
    name: "Destroy",
    header: 473171199,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
    ],
  },
  {
    name: "Revoke",
    header: 2711683139,
    fields: [
      { name: "query_id", type: { kind: "simple", type: "uint", optional: false, format: 64 } },
    ],
  },
];

const CNftItem_getters: ABIGetter[] = [
  {
    name: "get_metadata",
    arguments: [],
    returnType: { kind: "simple", type: "CardMetadata", optional: true },
  },
  {
    name: "get_nft_data",
    arguments: [],
    returnType: { kind: "simple", type: "ItemData", optional: false },
  },
  {
    name: "get_authority_address",
    arguments: [],
    returnType: { kind: "simple", type: "address", optional: false },
  },
  {
    name: "get_revoked_time",
    arguments: [],
    returnType: { kind: "simple", type: "int", optional: false, format: 257 },
  },
];

const CNftItem_receivers: ABIReceiver[] = [
  { receiver: "internal", message: { kind: "typed", type: "Initialize" } },
  { receiver: "internal", message: { kind: "typed", type: "GetStaticData" } },
  { receiver: "internal", message: { kind: "typed", type: "ProveOwnership" } },
  { receiver: "internal", message: { kind: "typed", type: "RequestOwner" } },
  { receiver: "internal", message: { kind: "typed", type: "Transfer" } },
  { receiver: "internal", message: { kind: "typed", type: "Destroy" } },
  { receiver: "internal", message: { kind: "typed", type: "Revoke" } },
];

export class CNftItem implements Contract {
  static async init(
    collection_address: Address,
    owner: Address,
    index: bigint,
    individual_content: Cell
  ) {
    return await CNftItem_init(collection_address, owner, index, individual_content);
  }

  static async fromInit(
    collection_address: Address,
    owner: Address,
    index: bigint,
    individual_content: Cell
  ) {
    const init = await CNftItem_init(collection_address, owner, index, individual_content);
    const address = contractAddress(0, init);
    return new CNftItem(address, init);
  }

  static fromAddress(address: Address) {
    return new CNftItem(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: CNftItem_types,
    getters: CNftItem_getters,
    receivers: CNftItem_receivers,
    errors: CNftItem_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message:
      | Initialize
      | GetStaticData
      | ProveOwnership
      | RequestOwner
      | Transfer
      | Destroy
      | Revoke
  ) {
    let body: Cell | null = null;
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Initialize"
    ) {
      body = beginCell().store(storeInitialize(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "GetStaticData"
    ) {
      body = beginCell().store(storeGetStaticData(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "ProveOwnership"
    ) {
      body = beginCell().store(storeProveOwnership(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "RequestOwner"
    ) {
      body = beginCell().store(storeRequestOwner(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Transfer"
    ) {
      body = beginCell().store(storeTransfer(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Destroy"
    ) {
      body = beginCell().store(storeDestroy(message)).endCell();
    }
    if (
      message &&
      typeof message === "object" &&
      !(message instanceof Slice) &&
      message.$$type === "Revoke"
    ) {
      body = beginCell().store(storeRevoke(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getGetMetadata(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("get_metadata", builder.build())).stack;
    const result_p = source.readTupleOpt();
    const result = result_p ? loadTupleCardMetadata(result_p) : null;
    return result;
  }

  async getGetNftData(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("get_nft_data", builder.build())).stack;
    const result = loadTupleItemData(source);
    return result;
  }

  async getGetAuthorityAddress(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("get_authority_address", builder.build())).stack;
    let result = source.readAddress();
    return result;
  }

  async getGetRevokedTime(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("get_revoked_time", builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }
}
