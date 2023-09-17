function makeReserv() {

  let message;
  let username = prompt("What is your name?");
    while (!username || username.trim() === "") {
      username = prompt('Try again! Your name, please:');
    }

  let compare = prompt("Do you want to make a reservation? (Yes/No)");

    while (compare !== "Yes" && compare !== "No") {
      compare = prompt('Try again! Please enter "Yes" or "No":');
    }
  
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


function rateCookie() {

  let rating = prompt('Please rate my cookie : 1 - 5','5');

  while (!(rating > 0 && rating <=5)) {
    rating = prompt('Enter Number between 1 and 5')
  }

  for (let i = 0; i < rating; i++) {
    document.write("<img src='images/star.png'/>");
  }
}

function rateCroissant() {

  let rating = prompt('Please rate my croissant : 1 - 5','5');

  while (!(rating > 0 && rating <=5)) {
    rating = prompt('Enter Number between 1 and 5')
  }

  for (let i = 0; i < rating; i++) {
    document.write("<img src='images/star.png'/>");
  }
}