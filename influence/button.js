var button = document.createElement("button");
button.innerHTML = "Option 1";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("You selected option 1");
});