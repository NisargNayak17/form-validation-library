
class MyFormValidationLibrary {  

    // Validate an email field with a specific domain
    validateEmail(email) {
      const validDomain = 'mohawkcollege.ca';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (emailRegex.test(email)) {
        const domain = email.split('@')[1];
        const isValid = domain === validDomain;
        const errorMessage = isValid ? '' : 'Invalid email domain. Please use mohawkcollege.ca';
        return { isValid, errorMessage };
      } else {
        return { isValid: false, errorMessage: 'Invalid email address' };
      }
    }

    validatePassword(password, firstName) {
        // Password must contain at least one special character
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
        // Password must be at least 8 characters long
        const isLengthValid = password.length >= 8;
    
        // Password must not contain the user's first name
        const doesNotContainFirstName = !password.toLowerCase().includes(firstName.toLowerCase());
    
        const isValid = hasSpecialCharacter && isLengthValid && doesNotContainFirstName;
    
        const errorMessage = isValid ? '' : 'Invalid password. Please follow the password requirements.';
        return { isValid, errorMessage };
      }

      validateTextArea(text, maxLength) {
        const isLengthValid = text.length <= maxLength;
    
        const isValid = isLengthValid;
    
        const errorMessage = isValid ? '' : `Text must be less than ${maxLength} characters long`;
    
        return { isValid, errorMessage };
      }
    }

  module.exports = MyFormValidationLibrary;
  