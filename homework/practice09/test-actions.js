import { Actions } from "./Actions.js"; // if it was default we do not need {}.

/*
Create a test method called as test1()
- Invoke visitUrl(), login() and validateTitle() synchronously in this method (use then() and catch() methods)
- Validate the output is as below

    OUTPUT:
    URL visited successfully
    Logged in successfully
    Title validated successfully
*/

function test1() {
  Actions.visitUrl("www.google.com")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

test1();
