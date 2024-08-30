# college-form-validator

A library to validate forms with precision and security. This library specializes in seamless checks for common fields - `email`, `password`, and `text areas`.

## Features
- Emails: Exclusive to "mohawkcollege.ca" domains for a targeted user base.
- Passwords: Robust security—8 characters, special characters, numbers. Unique: User's first name is restricted.
- Text Areas: Set maximum length characters as per your needs for validation.

Enhance user experience with thorough and effective form validation.

## Installation 
You can install this package using npm: 
`npm install college-form-validator`

## Usage

1. How to use
First include the library in your HTML file
  ```html
  <!-- Yout HTML File -->
  <script src="node_modules/college-form-validator/index.js"></script>

2. Set Up Form
You can access the example files in the installed package directory.
Once the installation is complete, navigate to the installed package directory:
- cd node_modules/form-validation-library

- You will find the following files 
  - `example.css`: Example CSS styles for the form 
  - `example.html`: Example HTML form with the applied styles and form validation
- Open the `example.html` file in a web browser to see the basic form as an example.  

3. Customize for your needs:
Modify the example files and add or remove fields according to your own requirements. And, call your custom JavaScript file to handle form submissions and any additional functionality.

4. Implement in your project
Create your custom JavaScript file (e.g., mycustom.js) where you will handle the form submission and interact with the validation library (installed package).
In your HTML file, include both the library and your custom JavaScript file:

<!-- Include the package from node_modules -->
<script src="node_modules/college-form-validator/index.js"></script>

<!-- Include your custom script -->
<script src="index.js"></script>

## License
This project is licensed under the [ISC License](LICENSE)

## Contact
For questions or feedback, you can reach me at [nisarg1708nayak@gmail.com](mailto:nisarg1708nayak@gmail.com)
