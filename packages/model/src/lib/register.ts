/**
 * Type of register.
 */
export enum RegisterType {
  Qubit,
  Classical,
}

/**
 * Represents a register resource.
 */
export interface Register {
  /** Type of register. If missing defaults to Qubit. */
  type?: RegisterType;
  /** Qubit or classical bit register ID. */
  identifier: number;
}
