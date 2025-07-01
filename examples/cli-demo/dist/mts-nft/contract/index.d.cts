import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<T> = {
}

export type ImpureCircuits<T> = {
  mint(context: __compactRuntime.CircuitContext<T>,
       name_0: Uint8Array,
       symbol_0: { is_some: boolean, value: Uint8Array },
       description_0: { is_some: boolean, value: Uint8Array },
       image_0: { is_some: boolean, value: Uint8Array },
       mediaType_0: { is_some: boolean, value: Uint8Array }): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type PureCircuits = {
}

export type Circuits<T> = {
  mint(context: __compactRuntime.CircuitContext<T>,
       name_0: Uint8Array,
       symbol_0: { is_some: boolean, value: Uint8Array },
       description_0: { is_some: boolean, value: Uint8Array },
       image_0: { is_some: boolean, value: Uint8Array },
       mediaType_0: { is_some: boolean, value: Uint8Array }): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type Ledger = {
  readonly projectName: string;
  metadata: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): { name: Uint8Array,
                                 symbol: { is_some: boolean, value: Uint8Array },
                                 decimals: { is_some: boolean, value: bigint },
                                 description: { is_some: boolean,
                                                value: Uint8Array
                                              },
                                 image: { is_some: boolean, value: Uint8Array },
                                 mediaType: { is_some: boolean,
                                              value: Uint8Array
                                            },
                                 version: bigint
                               };
    [Symbol.iterator](): Iterator<[Uint8Array, { name: Uint8Array,
  symbol: { is_some: boolean, value: Uint8Array },
  decimals: { is_some: boolean, value: bigint },
  description: { is_some: boolean, value: Uint8Array },
  image: { is_some: boolean, value: Uint8Array },
  mediaType: { is_some: boolean, value: Uint8Array },
  version: bigint
}]>
  };
  totalSupply: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): bigint;
    [Symbol.iterator](): Iterator<[Uint8Array, bigint]>
  };
  readonly isProgrammable: boolean;
  readonly nonceCounter: bigint;
  readonly nonce: Uint8Array;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>,
               _nonce_0: Uint8Array,
               _project_name_0: string): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
