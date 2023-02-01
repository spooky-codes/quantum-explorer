import { Gate } from './gate';
import { Qubit } from './qubit';

/**
 * Quantum circuit class.
 *
 * ## Introduction
 * Quantum circuits are collections of quantum gates interconnected by quantum wires. The actual structure of a quantum
 * circuit, the number and the types of gates, as well as the interconnection scheme are dictated by the unitary
 * transformation, U, carried out by the circuit.
 * Though in our description of quantum circuits we use the concepts input and output registers of qubits, we should be
 * aware that physically, the input and the output of a quantum circuit are not separated as their classical counterparts
 * are. This convention allows us to describe the effect of unitary transformation carried out by the circuit in a more
 * coherent fashion.
 * In all descriptions of quantum circuits in addition to gates, we see quantum wires that move qubits and allow us to
 * compose more complex circuits from simpler ones that, in turn, are composed of quantum gates. We compose components
 * by connecting the output of one to the input of another. We also compose operations when the results of an operation
 * are used as input to another. The composition does not affect the quantum states. The quantum wires do not perform
 * any transformations in a computational sense (sometimes we can view them as transformations carried out by the Pauli
 * identity operator ∑I).
 * In other words a quantum circuit is a model for a quantum computation that is represented as a sequence of quantum
 * operations (i.e. gates and measurements, qubits initialisations).
 * The quantum logic gates are reversible unitary transformations on at least one qubit.
 *
 * ## Quantum circuit diagrams
 * In a quantum circuit diagram, each (usually horizontal) solid line represents a qubit, more generally, a qubit register.
 * The top line represents qubit register with index 0, and the subsequent registers are indexed sequentially. The ket
 * at the left of each line is the name of the qubit or its initial state (or sometimes both).
 * The diagram is separated into columns (though invisible), where each column represents a step in the quantum
 * algorithm's sequence. In a quantum circuit, time flows from left to right. Quantum gates are ordered in chronological
 * order with the left-most gate as the gate first applied to the qubits.
 *
 *
 * ## See also
 * https://learn.microsoft.com/en-us/azure/quantum/concepts-circuits
 */
export interface Circuit {
  /** Array of qubit resources. */
  qubits: Qubit[];

  /** List of gates (or operations) */
  gates: Gate[];

  /** Registers */
  registers: Gate[];
}
