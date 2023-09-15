function makeReserv() {

  let message;

  let username = prompt("What is your name?");
  
  let compare = prompt("Do you want to make a reservation? (Yes/No)");
  
    if (compare === "Yes") {
      message = "Table 5 Available!";
    } else if (compare === "No") {
      message = "Look at our Yummy Pastry";
    } else {
      message = "My friend, Let us know when you're HUNGRY!";
    }
  
    message = "Hello " + username + ". " + message;

    document.write(message);
}


function getRating() {

  let rating = prompt('Please rate me 1 - 5','5');

  for (let i = 0; i < rating; i++) {
    document.write("<img src='images/star.png'/>");
  }
}