import { Navigator } from './navigator';

enum Command {
  Left = 'left',
  Right = 'right',
  Forward = 'forward',
}

type RawCommand = 'L' | 'R' | 'F';

export class Rover {
  constructor(private navigator: Navigator) {}

  run(rawCommands: string) {
    this.ensureIsValidCommand(rawCommands);
    const commands = this.transformToCommands(rawCommands);
    return this.runCommands(commands);
  }

  private runCommands(commands: Command[]): string {
    commands.forEach(this.runSingleCommand);
    return this.formattedLocation();
  }

  private runSingleCommand = (command: Command) => {
    this.navigator = this.navigator[command]();
  };

  private ensureIsValidCommand(rawCommands: string) {
    if (!rawCommands || !rawCommands.match(/^[LRF]+$/)) {
      throw new Error('Invalid command');
    }
  }

  private transformToCommands(rawCommands: string) {
    return rawCommands.split('').map((command: RawCommand) => {
      if (command === 'L') return Command.Left;
      if (command === 'R') return Command.Right;
      if (command === 'F') return Command.Forward;
    });
  }

  private formattedLocation() {
    return this.navigator.formattedLocation();
  }
}
