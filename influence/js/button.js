// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Button 1";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("You Selected Button 1");
});
