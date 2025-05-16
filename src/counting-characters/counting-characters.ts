export class CharactersCounter {
  static count(string: string) {
    let count = {};
    if (string === '' || string === null) return count;

    const characters = string.split('');

    characters.forEach((character) => {
      if (count[character] !== undefined) {
        return (count = {
          ...count,
          [character]: count[character] + 1,
        });
      }
      return (count = { ...count, [character]: 1 });
    });

    return count;
  }
}
