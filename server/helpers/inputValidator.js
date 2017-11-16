import { isAlphanumeric, isEmail, isNumeric } from './utils';
/**
 *
 *
 * @export
 * @class InputValidator
 */
export default class InputValidator {
  /**
   *
   *
   * @static
   * @param {any} args
   * @returns {status} errors array
   * @memberof InputValidator
   */
  static signUp(args) {
    const fields = [
      'username',
      'lastName',
      'firstName',
      'email', 'password',
      'confirmpassword'
    ];
    const errors = [];
    fields.forEach((field) => {
      if (args[field] === undefined || args[field] === '') {
        errors.push({ path: field, message: `${field} is required` });
      }
    });
    if (args.password !== args.confirmpassword) {
      errors.push({
        path: 'password',
        message: 'Please ensure the passwords match'
      });
    }
    if (!isEmail(args.email)) {
      errors.push({
        path: 'email',
        message: 'Please enter a valid email'
      });
    }
    if (!isAlphanumeric(args.username)) {
      errors.push({
        path: 'username',
        message: 'Username can only contain alphabets and numbers'
      });
    }
    const isValid = errors.length === 0;
    return { errors, isValid };
  }
  /**
 *
 *
 * @static
 * @param {any} args
 * @memberof InputValidator
 * @returns {status} error array
 */
  static signIn(args) {
    const errors = [];
    const requiredFields = ['username', 'password'];
    requiredFields.forEach((field) => {
      if (args[field] === undefined || args[field] === '') {
        errors.push({ path: field, message: `${field} is required` });
      }
    });
    const isValid = errors.length === 0;
    return { errors, isValid };
  }
  /**
 *
 *
 * @static
 * @param {any} args
 * @returns {status} error array
 * @memberof InputValidator
 */
  static addBook(args) {
    const errors = [];
    const requiredFields = [
      'title', 'author', 'publishedYear',
      'isbn', 'quantity', 'description'
    ];
    requiredFields.forEach((field) => {
      if (args[field] === undefined || args[field] === '') {
        errors.push({ path: field, message: `${field} is required` });
      }
    });
    if (!isNumeric(args.publishedYear)) {
      errors.push({
        path: 'publishedYear',
        message: 'PublishedYear can only be a number'
      });
    }
    if (!isNumeric(args.isbn)) {
      errors.push({ path: 'isbn', message: 'isbn can only be a number' });
    }

    if (!isNumeric(args.quantity) || args.quantity <= 0) {
      errors.push({
        path: 'quantity',
        message: 'Quantity must be a number and greater than zero'
      });
    }
    const isValid = errors.length === 0;
    return { errors, isValid };
  }
}
