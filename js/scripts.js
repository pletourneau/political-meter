function hideResults() {
  document.getElementById("goofyGoober").setAttribute("class", "hidden");
  document.getElementById("moderate").setAttribute("class", "hidden");
  document.getElementById("lintLicker").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResults();

  document.querySelector("form").onsubmit = function(e) {
    e.preventDefault();
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
}