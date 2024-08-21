import { PasswordValidator } from './password-validator';
describe('Password Validator', () => {
  it('given a password with a length longer or equal than 6 characteres should return true', () => {
    const password = 'aB_456';

    const result = PasswordValidator.isValid(password);

    expect(result).toBeTruthy();
  });

  it('given a password with a length least than 6 characteres should return false', () => {
    const password = '13456';

    const result = PasswordValidator.isValid(password);

    expect(result).toBeFalsy();
  });

  it('given a password without numbers should return false', () => {
    const password = 'abcdef';

    const result = PasswordValidator.isValid(password);

    expect(result).toBeFalsy();
  });

  it('given a password without lowercase letter should return false', () => {
    const password = 'ABCDE4';

    const result = PasswordValidator.isValid(password);

    expect(result).toBeFalsy();
  });

  it('given a password without uppercase letter should return false', () => {
    const password = 'abcde4';

    const result = PasswordValidator.isValid(password);

    expect(result).toBeFalsy();
  });

  it('given a password without "_" should return false', () => {
    const password = 'aBcde4';

    const result = PasswordValidator.isValid(password);

    expect(result).toBeFalsy();
  });
});
