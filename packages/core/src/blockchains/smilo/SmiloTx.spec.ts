import SmiloTx from './SmiloTx';

describe('SmiloTx', () => {
  it('should decode from raw hex rlp', () => {
    const tx = SmiloTx.fromRaw('0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f');
    expect(tx.getSenderAddress()).toEqual('be862AD9AbFe6f22BCb087716c7D89a26051f74C'.toLowerCase());
  })
});
