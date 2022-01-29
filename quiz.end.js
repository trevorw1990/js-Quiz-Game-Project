
const finalscore = document.getElementById('finalscore');
const mostrecentscore = localStorage.getItem('mostrecentscore');


finalscore.innerText = mostrecentscore;

if (mostrecentscore < 50) {
    alert("YOU LOSE 😵 ... PLEASE TRY AGAIN")
}
if (mostrecentscore >= 50) {
    alert("YOU WIN 😃 ")
}
