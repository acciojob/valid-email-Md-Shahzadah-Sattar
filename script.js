function validEmail(str) {
  // Define a regular expression for a basic email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the email matches the regular expression
  return emailRegex.test(str);
}

// Uncomment the code below to prompt the user for an email address and display the result.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
