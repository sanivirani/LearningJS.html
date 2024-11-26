function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // this is own refrance by createuser

  this.email = email;
  this.password = password;
}

const sani = new createUser("sani", "sani@.com", "1272");
console.log(sani);
