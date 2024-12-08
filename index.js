let userNames = ["Star", "Moon", "Galaxy"];
function signup(str) {
  let filteredData = userNames.filter((el, i) => el == str);
  if (filteredData.length == 0) {
    userNames.push(str);
    console.log("signup Sucessful....");
  } else {
    console.log("Already Registered....");
  }
}

signup("Star");

function login(str, password) {
  let filteredData = userNames.filter((el, i) => el == str);
  if (filteredData.length == 0) {
    console.log("Use Not Found...Please Signup");
  } else {
    if (password == "Emp@123") {
      console.log("Login Sucessfull....");
    } else {
      console.log("Wrong Password");
    }
  }
}
login("Star", "emp@123");
