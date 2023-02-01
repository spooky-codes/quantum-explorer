/**
 * Represents a qubit resource bit.
 */
export interface Qubit {
  /** Qubit identifier */

  identifier: number;

  /** Number of classical registers attached to quantum register. */
  numChildren?: number;

  /** Apply a given operation the qubit */
  //function apply(params:number);
}
