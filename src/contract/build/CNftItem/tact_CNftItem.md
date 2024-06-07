# TACT Compilation Report
Contract: CNftItem
BOC Size: 2783 bytes

# Types
Total Types: 30

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## RoyaltyParams
TLB: `_ numerator:int257 denominator:int257 destination:address = RoyaltyParams`
Signature: `RoyaltyParams{numerator:int257,denominator:int257,destination:address}`

## CollectionData
TLB: `_ next_item_index:int257 collection_content:^cell owner_address:address = CollectionData`
Signature: `CollectionData{next_item_index:int257,collection_content:^cell,owner_address:address}`

## ItemData
TLB: `_ is_initialized:bool index:int257 collection_address:address owner_address:address individual_content:^cell = ItemData`
Signature: `ItemData{is_initialized:bool,index:int257,collection_address:address,owner_address:address,individual_content:^cell}`

## PriceRangeConfig
TLB: `_ start:int257 end:int257 = PriceRangeConfig`
Signature: `PriceRangeConfig{start:int257,end:int257}`

## GetCardLinkStatus
TLB: `get_card_link_status#b47e1ddb query_id:uint64 item_index:int257 initiator:address payload:^cell = GetCardLinkStatus`
Signature: `GetCardLinkStatus{query_id:uint64,item_index:int257,initiator:address,payload:^cell}`

## ReportCardLinkStatus
TLB: `report_card_link_status#6227bd3a query_id:uint64 item_index:int257 is_linked_to_card:Maybe bool initiator:address payload:^cell = ReportCardLinkStatus`
Signature: `ReportCardLinkStatus{query_id:uint64,item_index:int257,is_linked_to_card:Maybe bool,initiator:address,payload:^cell}`

## Transfer
TLB: `transfer#4e33fd18 query_id:uint64 new_owner:address response_destination:address custom_payload:Maybe ^cell forward_amount:coins forward_payload:remainder<slice> = Transfer`
Signature: `Transfer{query_id:uint64,new_owner:address,response_destination:address,custom_payload:Maybe ^cell,forward_amount:coins,forward_payload:remainder<slice>}`

## Excesses
TLB: `excesses#33d58e72 query_id:uint64 = Excesses`
Signature: `Excesses{query_id:uint64}`

## OwnershipAssigned
TLB: `ownership_assigned#e1cbed05 query_id:uint64 prev_owner:address forward_payload:remainder<slice> = OwnershipAssigned`
Signature: `OwnershipAssigned{query_id:uint64,prev_owner:address,forward_payload:remainder<slice>}`

## GetStaticData
TLB: `get_static_data#8d0242f5 query_id:uint64 = GetStaticData`
Signature: `GetStaticData{query_id:uint64}`

## ReportStaticData
TLB: `report_static_data#4194b291 query_id:uint64 index:uint256 collection:address = ReportStaticData`
Signature: `ReportStaticData{query_id:uint64,index:uint256,collection:address}`

## GetUsernameData
TLB: `get_username_data#3030429e query_id:uint64 initiator:address payload:^cell = GetUsernameData`
Signature: `GetUsernameData{query_id:uint64,initiator:address,payload:^cell}`

## ReportUsernameData
TLB: `report_username_data#48ffb6ab query_id:uint64 item_index:uint256 token_name:^cell initiator:address payload:^cell = ReportUsernameData`
Signature: `ReportUsernameData{query_id:uint64,item_index:uint256,token_name:^cell,initiator:address,payload:^cell}`

## GetRoyaltyParams
TLB: `get_royalty_params#19eee57c query_id:uint64 = GetRoyaltyParams`
Signature: `GetRoyaltyParams{query_id:uint64}`

## ReportRoyaltyParams
TLB: `report_royalty_params#25d7cf7a query_id:uint64 numerator:uint16 denominator:uint16 destination:address = ReportRoyaltyParams`
Signature: `ReportRoyaltyParams{query_id:uint64,numerator:uint16,denominator:uint16,destination:address}`

## UnlinkCard
TLB: `unlink_card#4ee94867 query_id:uint64 index:int257 initiator:address = UnlinkCard`
Signature: `UnlinkCard{query_id:uint64,index:int257,initiator:address}`

## UpdateUsernameLinkedStatus
TLB: `update_username_linked_status#cf6807da query_id:uint64 index:int257 initiator:address status:bool = UpdateUsernameLinkedStatus`
Signature: `UpdateUsernameLinkedStatus{query_id:uint64,index:int257,initiator:address,status:bool}`

## UpdateAllowedContract
TLB: `update_allowed_contract#bc6af03f allowed_contract:address = UpdateAllowedContract`
Signature: `UpdateAllowedContract{allowed_contract:address}`

## MintCard
TLB: `mint_card#19616745 query_id:uint64 username_address:address bio:^string pfp:^string = MintCard`
Signature: `MintCard{query_id:uint64,username_address:address,bio:^string,pfp:^string}`

## CardMetadata
TLB: `_ bio:^cell pfp:^cell username:^cell = CardMetadata`
Signature: `CardMetadata{bio:^cell,pfp:^cell,username:^cell}`

## Initialize
TLB: `initialize#d4af7495 query_id:uint64 new_owner:address response_destination:address authority:address payload:^cell = Initialize`
Signature: `Initialize{query_id:uint64,new_owner:address,response_destination:address,authority:address,payload:^cell}`

## ProveOwnership
TLB: `prove_ownership#ebd6cb23 query_id:uint64 dest:address forward_payload:^cell with_content:bool = ProveOwnership`
Signature: `ProveOwnership{query_id:uint64,dest:address,forward_payload:^cell,with_content:bool}`

## OwnershipProof
TLB: `ownership_proof#70375b58 query_id:uint64 item_id:int257 owner:address data:^cell revoked_at:int257 content:Maybe ^cell = OwnershipProof`
Signature: `OwnershipProof{query_id:uint64,item_id:int257,owner:address,data:^cell,revoked_at:int257,content:Maybe ^cell}`

## RequestOwner
TLB: `request_owner#81c7de98 query_id:uint64 dest:address forward_payload:^cell with_content:bool = RequestOwner`
Signature: `RequestOwner{query_id:uint64,dest:address,forward_payload:^cell,with_content:bool}`

## OwnerInfo
TLB: `owner_info#d7a01df0 query_id:uint64 item_id:int257 initiator:address owner:address data:^cell revoked_at:int257 content:Maybe ^cell = OwnerInfo`
Signature: `OwnerInfo{query_id:uint64,item_id:int257,initiator:address,owner:address,data:^cell,revoked_at:int257,content:Maybe ^cell}`

## Destroy
TLB: `destroy#1c3404ff query_id:uint64 = Destroy`
Signature: `Destroy{query_id:uint64}`

## Revoke
TLB: `revoke#a1a10043 query_id:uint64 = Revoke`
Signature: `Revoke{query_id:uint64}`

# Get Methods
Total Get Methods: 4

## get_metadata

## get_nft_data

## get_authority_address

## get_revoked_time

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract