// https://www.codewars.com/kata/55edf7644b1368e39400000b


function validate(username, password) {
    const checkUser = /[(){}[\]|;:'"\/?.,<>~\-=\+*&^%$@!]/;
    const checkPass = /^[A-Za-z0-9;:?.,<>~*^%$ @!_]+$/;
    const checkCapitalize = /[A-Z]/;
    const checkNumber = /[0-9]/;
  
    username = username.trim();
    password = password.trim();

    if (username.length > 12) throw ERRORS.usernameTooLong(username);
    if (username.length < 1) throw ERRORS.usernameTooShort(username);
    if (checkUser.test(username)) throw ERRORS.usernameInvalidCharacters(username);
  
    if (password.length > 24) throw ERRORS.passwordTooLong(password);
    if (password.length < 8) throw ERRORS.passwordTooShort(password);
    if (!checkPass.test(password)) throw ERRORS.passwordInvalidCharacters(password);
    if (!checkCapitalize.test(password)) throw ERRORS.passwordNoCapital(password);
    if (!checkNumber.test(password)) throw ERRORS.passwordNoNumber(password);
    if (password.includes(username)) throw ERRORS.passwordContainsUsername(password);
    return true;
}