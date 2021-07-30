<<<<<<< HEAD
function verify() {
    var pw = document.getElementById("pswd").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;


    if (pw.length < 8) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }

    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    } else {
        alert("Name: " + name + "\r\n" +
            "Email :" + email + "\r\n" +
            "Password :" + pw);
    }
=======
function verify() {
    var pw = document.getElementById("pswd").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;


    if (pw.length < 8) {
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";
        return false;
    }

    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";
        return false;
    } else {
        alert("Name: " + name + "\r\n" +
            "Email :" + email + "\r\n" +
            "Password :" + pw);
    }
>>>>>>> 705a2f3dd8b311cf84b90a4513f89cc0a7ab5ccc
}