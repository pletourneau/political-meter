function hideResults() {
  document.getElementById("goofyGoober").setAttribute("class", "hidden");
  document.getElementById("moderate").setAttribute("class", "hidden");
  document.getElementById("lintLicker").setAttribute("class", "hidden");
}


function advertisement() {
  // let form = document.querySelector("form");
  window.alert("This is an advertisement.");
  document.querySelector("form").removeEventListener("submit", advertisement);
}

window.onload = function() {
  hideResults();

// let form = document.querySelector("form");
// form.addEventListener("submit", function(e) {

  //document.querySelector("form").onsubmit = function(event) {
  function getContent(event) {
    event.preventDefault();
    hideResults();
    const res = parseInt(document.querySelector("#q1").value) + parseInt(document.querySelector("#q2").value) + parseInt(document.querySelector("#q3").value) + parseInt(document.querySelector("#q4").value) + parseInt(document.querySelector("#q5").value);

    if (res > 3) {
      document.getElementById("goofyGoober").removeAttribute("class");
    } else if (res === 3) {
      document.getElementById("moderate").removeAttribute("class");
    } else if (res < 3) {
      document.getElementById("lintLicker").removeAttribute("class");
    }
  }



  
  document.querySelector("form").addEventListener("submit", getContent);
  document.querySelector("form").addEventListener("submit", advertisement);
  
  
}
