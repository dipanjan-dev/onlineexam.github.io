function Setname(){
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var exam = document.getElementById('examsel').value;
    localStorage.setItem("email" , email);
    localStorage.setItem("name" , name);
    localStorage.setItem("exam" , exam);

}

// fetch data form local server
var username = localStorage.getItem("name");
var useremail = localStorage.getItem("email");
var exam = localStorage.getItem("exam")
document.getElementById('username').innerHTML = username;
document.getElementById('useremail').innerHTML = useremail;
document.getElementById('exam').innerHTML = exam;




// send data to modal : 
document.getElementById('modalname').value = username;
document.getElementById('modalemail').value = useremail;
