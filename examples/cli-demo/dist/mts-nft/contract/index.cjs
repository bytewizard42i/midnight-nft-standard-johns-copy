'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.8.1';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _CoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_1.toValue(value_0.value)));
  }
}

const _descriptor_2 = new _CoinInfo_0();

const _descriptor_3 = new __compactRuntime.CompactTypeBoolean();

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_4 = new _ZswapCoinPublicKey_0();

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_5 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_4.alignment().concat(_descriptor_5.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_3.fromValue(value_0),
      left: _descriptor_4.fromValue(value_0),
      right: _descriptor_5.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_left).concat(_descriptor_4.toValue(value_0.left).concat(_descriptor_5.toValue(value_0.right)));
  }
}

const _descriptor_6 = new _Either_0();

const _descriptor_7 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_8 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_9 = new __compactRuntime.CompactTypeBytes(10);

class _Maybe_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_9.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_3.fromValue(value_0),
      value: _descriptor_9.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_some).concat(_descriptor_9.toValue(value_0.value));
  }
}

const _descriptor_10 = new _Maybe_0();

const _descriptor_11 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class _Maybe_1 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_11.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_3.fromValue(value_0),
      value: _descriptor_11.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_some).concat(_descriptor_11.toValue(value_0.value));
  }
}

const _descriptor_12 = new _Maybe_1();

const _descriptor_13 = new __compactRuntime.CompactTypeBytes(256);

class _Maybe_2 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_13.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_3.fromValue(value_0),
      value: _descriptor_13.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_some).concat(_descriptor_13.toValue(value_0.value));
  }
}

const _descriptor_14 = new _Maybe_2();

class _Maybe_3 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_0.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_3.fromValue(value_0),
      value: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_some).concat(_descriptor_0.toValue(value_0.value));
  }
}

const _descriptor_15 = new _Maybe_3();

class _Metadata_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_10.alignment().concat(_descriptor_12.alignment().concat(_descriptor_14.alignment().concat(_descriptor_14.alignment().concat(_descriptor_15.alignment().concat(_descriptor_8.alignment()))))));
  }
  fromValue(value_0) {
    return {
      name: _descriptor_0.fromValue(value_0),
      symbol: _descriptor_10.fromValue(value_0),
      decimals: _descriptor_12.fromValue(value_0),
      description: _descriptor_14.fromValue(value_0),
      image: _descriptor_14.fromValue(value_0),
      mediaType: _descriptor_15.fromValue(value_0),
      version: _descriptor_8.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.name).concat(_descriptor_10.toValue(value_0.symbol).concat(_descriptor_12.toValue(value_0.decimals).concat(_descriptor_14.toValue(value_0.description).concat(_descriptor_14.toValue(value_0.image).concat(_descriptor_15.toValue(value_0.mediaType).concat(_descriptor_8.toValue(value_0.version)))))));
  }
}

const _descriptor_16 = new _Metadata_0();

const _descriptor_17 = new __compactRuntime.CompactTypeField();

const _descriptor_18 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

const _descriptor_19 = new __compactRuntime.CompactTypeVector(3, _descriptor_17);

const _descriptor_20 = new __compactRuntime.CompactTypeBytes(6);

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_3.alignment().concat(_descriptor_0.alignment().concat(_descriptor_20.alignment())));
  }
  fromValue(value_0) {
    return {
      info: _descriptor_2.fromValue(value_0),
      data_type: _descriptor_3.fromValue(value_0),
      data: _descriptor_0.fromValue(value_0),
      domain_sep: _descriptor_20.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.info).concat(_descriptor_3.toValue(value_0.data_type).concat(_descriptor_0.toValue(value_0.data).concat(_descriptor_20.toValue(value_0.domain_sep))));
  }
}

const _descriptor_21 = new _CoinPreimage_0();

const _descriptor_22 = new __compactRuntime.CompactTypeOpaqueString();

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    this.witnesses = witnesses_0;
    this.circuits = {
      mint: (...args_1) => {
        if (args_1.length !== 6)
          throw new __compactRuntime.CompactError(`mint: expected 6 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const name_0 = args_1[1];
        const symbol_0 = args_1[2];
        const description_0 = args_1[3];
        const image_0 = args_1[4];
        const mediaType_0 = args_1[5];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('mint',
                                      'argument 1 (as invoked from Typescript)',
                                      'contracts/mts-nft.compact line 35, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(name_0.buffer instanceof ArrayBuffer && name_0.BYTES_PER_ELEMENT === 1 && name_0.length === 32))
          __compactRuntime.type_error('mint',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'contracts/mts-nft.compact line 35, char 1',
                                      'Bytes<32>',
                                      name_0)
        if (!(typeof(symbol_0) === 'object' && typeof(symbol_0.is_some) === 'boolean' && symbol_0.value.buffer instanceof ArrayBuffer && symbol_0.value.BYTES_PER_ELEMENT === 1 && symbol_0.value.length === 10))
          __compactRuntime.type_error('mint',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'contracts/mts-nft.compact line 35, char 1',
                                      'struct Maybe<is_some: Boolean, value: Bytes<10>>',
                                      symbol_0)
        if (!(typeof(description_0) === 'object' && typeof(description_0.is_some) === 'boolean' && description_0.value.buffer instanceof ArrayBuffer && description_0.value.BYTES_PER_ELEMENT === 1 && description_0.value.length === 256))
          __compactRuntime.type_error('mint',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'contracts/mts-nft.compact line 35, char 1',
                                      'struct Maybe<is_some: Boolean, value: Bytes<256>>',
                                      description_0)
        if (!(typeof(image_0) === 'object' && typeof(image_0.is_some) === 'boolean' && image_0.value.buffer instanceof ArrayBuffer && image_0.value.BYTES_PER_ELEMENT === 1 && image_0.value.length === 256))
          __compactRuntime.type_error('mint',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'contracts/mts-nft.compact line 35, char 1',
                                      'struct Maybe<is_some: Boolean, value: Bytes<256>>',
                                      image_0)
        if (!(typeof(mediaType_0) === 'object' && typeof(mediaType_0.is_some) === 'boolean' && mediaType_0.value.buffer instanceof ArrayBuffer && mediaType_0.value.BYTES_PER_ELEMENT === 1 && mediaType_0.value.length === 32))
          __compactRuntime.type_error('mint',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'contracts/mts-nft.compact line 35, char 1',
                                      'struct Maybe<is_some: Boolean, value: Bytes<32>>',
                                      mediaType_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(name_0).concat(_descriptor_10.toValue(symbol_0).concat(_descriptor_14.toValue(description_0).concat(_descriptor_14.toValue(image_0).concat(_descriptor_15.toValue(mediaType_0))))),
            alignment: _descriptor_0.alignment().concat(_descriptor_10.alignment().concat(_descriptor_14.alignment().concat(_descriptor_14.alignment().concat(_descriptor_15.alignment()))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_mint_0(context,
                                       partialProofData,
                                       name_0,
                                       symbol_0,
                                       description_0,
                                       image_0,
                                       mediaType_0);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = { mint: this.circuits.mint };
  }
  initialState(...args_0) {
    if (args_0.length !== 3)
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 3 arguments (as invoked from Typescript), received ${args_0.length}`);
    const constructorContext_0 = args_0[0];
    const _nonce_0 = args_0[1];
    const _project_name_0 = args_0[2];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!(_nonce_0.buffer instanceof ArrayBuffer && _nonce_0.BYTES_PER_ELEMENT === 1 && _nonce_0.length === 32))
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 1 (argument 2 as invoked from Typescript)',
                                  'contracts/mts-nft.compact line 29, char 1',
                                  'Bytes<32>',
                                  _nonce_0)
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('mint', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(0n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(''),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(1n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(2n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(3n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(false),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(4n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(5n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(5n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(_nonce_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(0n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue(_project_name_0),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(3n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(false),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  #_none_0(context, partialProofData) { return { is_some: false, value: 0n }; }
  #_left_0(context, partialProofData, value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  #_transient_hash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_19, value_0);
    return result_0;
  }
  #_persistent_hash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_21, value_0);
    return result_0;
  }
  #_persistent_commit_0(context, partialProofData, value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_18,
                                                       value_0,
                                                       rand_0);
    return result_0;
  }
  #_degrade_to_transient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.degradeToTransient(x_0);
    return result_0;
  }
  #_upgrade_from_transient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.upgradeFromTransient(x_0);
    return result_0;
  }
  #_own_public_key_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_4.toValue(result_0),
      alignment: _descriptor_4.alignment()
    });
    return result_0;
  }
  #_create_zswap_output_0(context, partialProofData, coin_0, recipient_0) {
    const result_0 = __compactRuntime.createZswapOutput(context,
                                                        coin_0,
                                                        recipient_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_token_type_0(context, partialProofData, domain_sep_0, contract_address_0) {
    return this.#_persistent_commit_0(context,
                                      partialProofData,
                                      [domain_sep_0, contract_address_0.bytes],
                                      new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 100, 101, 114, 105, 118, 101, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  }
  #_mint_token_0(context,
                 partialProofData,
                 domain_sep_0,
                 value_0,
                 nonce_0,
                 recipient_0)
  {
    const coin_0 = { nonce: nonce_0,
                     color:
                       this.#_token_type_0(context,
                                           partialProofData,
                                           domain_sep_0,
                                           _descriptor_5.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 2 } },
                                                                                    { idx: { cached: true,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_11.toValue(0n),
                                                                                                               alignment: _descriptor_11.alignment() } }] } },
                                                                                    { popeq: { cached: true,
                                                                                               result: undefined } }]).value)),
                     value: value_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_11.toValue(4n),
                                                alignment: _descriptor_11.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(domain_sep_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 1 } },
                     { dup: { n: 1 } },
                     'member',
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(value_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     'neg',
                     { branch: { skip: 4 } },
                     { dup: { n: 2 } },
                     { dup: { n: 2 } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [ { tag: 'stack' }] } },
                     'add',
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    this.#_create_zswap_output_0(context, partialProofData, coin_0, recipient_0);
    const cm_0 = this.#_coin_commitment_0(context,
                                          partialProofData,
                                          coin_0,
                                          recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_11.toValue(2n),
                                                alignment: _descriptor_11.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return coin_0;
  }
  #_evolve_nonce_0(context, partialProofData, index_0, nonce_0) {
    return this.#_upgrade_from_transient_0(context,
                                           partialProofData,
                                           this.#_transient_hash_0(context,
                                                                   partialProofData,
                                                                   [__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                  new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                    index_0,
                                                                    this.#_degrade_to_transient_0(context,
                                                                                                  partialProofData,
                                                                                                  nonce_0)]));
  }
  #_coin_commitment_0(context, partialProofData, coin_0, recipient_0) {
    return this.#_persistent_hash_0(context,
                                    partialProofData,
                                    { info: coin_0,
                                      data_type: recipient_0.is_left,
                                      data:
                                        recipient_0.is_left?
                                        recipient_0.left.bytes :
                                        recipient_0.right.bytes,
                                      domain_sep:
                                        new Uint8Array([109, 100, 110, 58, 99, 99]) });
  }
  #_mint_0(context,
           partialProofData,
           name_0,
           symbol_0,
           description_0,
           image_0,
           mediaType_0)
  {
    const token_metadata_0 = { name: name_0,
                               symbol: symbol_0,
                               decimals:
                                 this.#_none_0(context, partialProofData),
                               description: description_0,
                               image: image_0,
                               mediaType: mediaType_0,
                               version: 1n };
    const coin_info_0 = this.#_mint_token_0(context,
                                            partialProofData,
                                            _descriptor_0.fromValue(Contract._query(context,
                                                                                    partialProofData,
                                                                                    [
                                                                                     { dup: { n: 0 } },
                                                                                     { idx: { cached: false,
                                                                                              pushPath: false,
                                                                                              path: [
                                                                                                     { tag: 'value',
                                                                                                       value: { value: _descriptor_11.toValue(5n),
                                                                                                                alignment: _descriptor_11.alignment() } }] } },
                                                                                     { popeq: { cached: false,
                                                                                                result: undefined } }]).value),
                                            1n,
                                            _descriptor_0.fromValue(Contract._query(context,
                                                                                    partialProofData,
                                                                                    [
                                                                                     { dup: { n: 0 } },
                                                                                     { idx: { cached: false,
                                                                                              pushPath: false,
                                                                                              path: [
                                                                                                     { tag: 'value',
                                                                                                       value: { value: _descriptor_11.toValue(5n),
                                                                                                                alignment: _descriptor_11.alignment() } }] } },
                                                                                     { popeq: { cached: false,
                                                                                                result: undefined } }]).value),
                                            this.#_left_0(context,
                                                          partialProofData,
                                                          this.#_own_public_key_0(context,
                                                                                  partialProofData)));
    const tmp_0 = coin_info_0.color;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_11.toValue(1n),
                                                alignment: _descriptor_11.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_16.toValue(token_metadata_0),
                                                                            alignment: _descriptor_16.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_1 = coin_info_0.color;
    const tmp_2 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_11.toValue(2n),
                                                alignment: _descriptor_11.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_2),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_3 = this.#_evolve_nonce_0(context,
                                        partialProofData,
                                        _descriptor_7.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 0 } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_11.toValue(4n),
                                                                                                            alignment: _descriptor_11.alignment() } }] } },
                                                                                 { popeq: { cached: true,
                                                                                            result: undefined } }]).value),
                                        _descriptor_0.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 0 } },
                                                                                 { idx: { cached: false,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_11.toValue(5n),
                                                                                                            alignment: _descriptor_11.alignment() } }] } },
                                                                                 { popeq: { cached: false,
                                                                                            result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(5n),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_3),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_4 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_11.toValue(4n),
                                                alignment: _descriptor_11.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_8.toValue(tmp_4),
                                              alignment: _descriptor_8.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return coin_info_0.color;
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get projectName() {
      return _descriptor_22.fromValue(Contract._query(context,
                                                      partialProofData,
                                                      [
                                                       { dup: { n: 0 } },
                                                       { idx: { cached: false,
                                                                pushPath: false,
                                                                path: [
                                                                       { tag: 'value',
                                                                         value: { value: _descriptor_11.toValue(0n),
                                                                                  alignment: _descriptor_11.alignment() } }] } },
                                                       { popeq: { cached: false,
                                                                  result: undefined } }]).value);
    },
    metadata: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`is_empty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_11.toValue(1n),
                                                                                   alignment: _descriptor_11.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                               alignment: _descriptor_7.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_7.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_11.toValue(1n),
                                                                                   alignment: _descriptor_11.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'contracts/mts-nft.compact line 21, char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_11.toValue(1n),
                                                                                   alignment: _descriptor_11.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'contracts/mts-nft.compact line 21, char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_16.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_11.toValue(1n),
                                                                                    alignment: _descriptor_11.alignment() } }] } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_0.toValue(key_0),
                                                                                    alignment: _descriptor_0.alignment() } }] } },
                                                         { popeq: { cached: false,
                                                                    result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[1];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_16.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    totalSupply: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`is_empty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_11.toValue(2n),
                                                                                   alignment: _descriptor_11.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                               alignment: _descriptor_7.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_7.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_11.toValue(2n),
                                                                                   alignment: _descriptor_11.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'contracts/mts-nft.compact line 22, char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_11.toValue(2n),
                                                                                   alignment: _descriptor_11.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'contracts/mts-nft.compact line 22, char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_11.toValue(2n),
                                                                                   alignment: _descriptor_11.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[2];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_1.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    get isProgrammable() {
      return _descriptor_3.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_11.toValue(3n),
                                                                                 alignment: _descriptor_11.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get nonceCounter() {
      return _descriptor_7.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_11.toValue(4n),
                                                                                 alignment: _descriptor_11.alignment() } }] } },
                                                      { popeq: { cached: true,
                                                                 result: undefined } }]).value);
    },
    get nonce() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_11.toValue(5n),
                                                                                 alignment: _descriptor_11.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({ });
const pureCircuits = { };
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
