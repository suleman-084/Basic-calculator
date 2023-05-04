let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerHTML.trim());
    if (e.target.innerHTML.trim() == "=") {
      string = eval(string);
      // console.log("clicked");
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML.trim() === "AC") {
      console.log("clickedAC");
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML.trim();
      // console.log("clicked2");
      document.querySelector("input").value = string;
    }
  });
});
