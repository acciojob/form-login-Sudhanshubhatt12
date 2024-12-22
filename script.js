function getFormvalue() {
    //Write your code here
	/ Get the form element
  const form = document.getElementById("form1");

  // Retrieve the values of the First Name and Last Name fields
  const firstName = form.elements["fname"].value; // Access by the name attribute 'fname'
  const lastName = form.elements["lname"].value;  // Access by the name attribute 'lname'

  // Display the values using alert
  alert(`${firstName}\n${lastName}`);
}
