/**
 * Application module.
 *
 * @module
 */
import { Circuit, Gate, Qubit } from '@spooky-codes/quantum-explorer-model';

class SampleCircuit implements Circuit {
  qubits: Qubit[];
  gates: Gate[];
  registers: Gate[];

  constructor() {
    console.log('new SampleCircuit');
  }

  run(): void {
    console.log('SampleCircuit: run()');
  }
}

/*
 * Load application's metadata.
 *
 * Note that importing JSON modules is still an experimental Node feature (see https://nodejs.org/api/esm.html#json-modules).
 * It requires '--experimental-json-modules' flag for running a script that loads a JSON file as a module using the new ECMA
 * Script Module (or ESM) standard (see 'bin/run.js' script, for instance).
 * The 'assert' directive is mandatory (as explained in https://nodejs.org/api/esm.html#import-assertions).
 */
//import packageInfo from '@spooky-codes/quantum-explorer/package.json' assert { type: 'json' };

/**
 * Application's main command.
 *
 * Entry point of the command line interface (CLI). This class implements the root
 * command, to which other child commands are appended.
 *
 * ## Example
 * ```typescript
 * import { Application } from '@spooky-codes/application';
 *
 *  await new Application().run();
 * ```
 */
export class Application {
  /* Command description */
  private static readonly Name = 'explorer';
  private static readonly Description = 'Quantum circuits explorer';

  /**
   * Start application.
   *
   * The command-line arguments are parsed and requested command action is executed.
   *
   * @example:
   * ```typescript
   * import { Application } from '@centrifuge-commander/application';
   *
   * await new Application().run();
   * ```
   */
  public async run(): Promise<void> {
    this.checkCommandLineArguments();

    const sampleCircuit: SampleCircuit = new SampleCircuit();

    /* parse command-line arguments and run the requested command */
    //await this.parseAsync();

    console.log('Welcome to Quantum Explorer application');
    sampleCircuit.run();
  }

  /*
   * Perform seminal application setup (if not already done).
   *
   * When launching the application for the first time, this method is invoked in order
   * to set application's parameters and preferences up.
   */
  private installSignalHandlers() {
    /* trap termination signal */
    process.on('SIGTERM', () => {
      console.log('SIGTERM signal received... closing application gracefully');
    });

    /* trap Control-C interrupt signal */
    process.on('SIGINT', () => {
      console.log('SIGINT signal received... closing application gracefully');
    });
  }

  /*
   * Check sanity of command-line arguments.
   *
   * When executing this application from a run script, the list of
   * command-line arguments (i.e. 'process.argv' on Node) contains 'node'
   * and run script name as the first two parameters. This method erases
   * them from the list of arguments so that to only pass application
   * command arguments.
   * Moreover, the application uses (experimental) JSON file importation
   * support as EcmaScript Modules (ESMs), so that to import the application's
   * 'package.json' file, for instance, with the following code:
   *
   * ```typescript
   * import packageConfig from './package.json' assert { type: 'json' };
   * ```
   *
   * For doing so, Node engine must be launched with '--experimental-json-modules'
   * flag set to true (see https://nodejs.org/api/esm.html#json-modules and
   * https://nodejs.org/api/esm.html#import-assertions for more information). Take a
   * glance at 'bin/run.js' script.
   */
  private checkCommandLineArguments() {
    /* remove node and run script arguments */
    if (process.argv.length >= 2) {
      let sliceStartIndex = 0;
      if (process.argv[0].includes('node')) sliceStartIndex++;
      if (process.argv[1].includes('run')) sliceStartIndex++;

      /* remove the first two arguments */
      process.argv.slice(sliceStartIndex);
    }

    /* display application usage when no argument is passed at command-line */
    // if (process.argv.length === 0) {
    //   this.help();
    // }
  }
}
