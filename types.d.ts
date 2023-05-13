/** @noSelfInFile * */

declare type ObjectData = import('war3-objectdata-th').ObjectData;

declare type ConstantsType = {
  abilities: import('war3-objectdata-th').Abilities;
  buffs: import('war3-objectdata-th').Buffs;
  destructables: import('war3-objectdata-th').Destructables;
  doodads: import('war3-objectdata-th').Doodads;
  items: import('war3-objectdata-th').Items;
  units: import('war3-objectdata-th').Units;
  upgrades: import('war3-objectdata-th').Upgrades;
}

declare interface CompiletimeContext {
  objectData: ObjectData;
  fourCC: (id: string) => number;
  log: (...any: any) => void;
  constants: ConstantsType;
}

declare type CompiletimeReturnType = object | string | number | boolean | undefined | null | void;

declare type CompiletimeFunction = (ctx: CompiletimeContext) => CompiletimeReturnType;
/**
 * @param fn Expression to be evaluated by Node.
 */
declare function compiletime(fn: CompiletimeFunction): CompiletimeReturnType;