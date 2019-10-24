function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y= document.forms["myForm"]["email"].value;
    var pass= document.forms["myForm"]["pswd"].value;
    var conf= document.forms["myForm"]["confrm"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }else if(y == ""){
        alert("Email must be filled out");
        return false;
    }else if(pass!=conf){
        alert("password do not match");
        return false;
    }
  }