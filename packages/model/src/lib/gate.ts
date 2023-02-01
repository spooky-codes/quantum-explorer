import { Register } from './register';

/**
 * Quantum logic gate resource.
 *
 * ## Overview
 * In quantum circuit model of computation, a quantum (logic) gate is a basic quantum circuit which operates on one or
 * more qubits. Gates represent operations. Quantum gates are like classical (logic) gates for classical processors (or
 * digital circuits). Unlike classical gates, quantum gates are reversible.
 *
 * ## Single-qubit (unary) gates
 * Much like classical processors do, quantum computers use an analog of classical logic gates, such as AND, NAND, NOT,
 * and so on, as their primitive qubit manipulation elements, that are called quantum logic gates. However, the comparison
 * stops here, insofar as they are different from classical logic gates in two main ways:
 *
 *  1.
 */
export interface Gate {
  /** List of target registers this gate is operating on */
  targets: Register[];

  /** List of control registers this gate is operating on */
  controls: Register[];
}
