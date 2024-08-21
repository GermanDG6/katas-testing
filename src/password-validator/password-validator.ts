export class PasswordValidator {
  static isValid(password: string) {
    if (
      PasswordValidator.isValidLength(password) &&
      PasswordValidator.containNumbers(password) &&
      PasswordValidator.containsUppercase(password) &&
      PasswordValidator.containsLowercase(password) &&
      PasswordValidator.containsUnderScore(password)
    )
      return true;
    return false;
  }

  private static containsUnderScore(password: string) {
    return password.split('').find((char) => char === '_');
  }

  private static containsUppercase(password: string): boolean {
    return password !== password.toLowerCase();
  }

  private static containsLowercase(password: string): boolean {
    return password !== password.toUpperCase();
  }

  private static containNumbers(password: string) {
    return password.split('').some((char) => !isNaN(Number(char)));
  }

  private static isValidLength(password: string) {
    return password.length >= 6;
  }
}
