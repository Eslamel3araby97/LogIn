var userName = document.querySelector("#name")
var userEmail = document.querySelector("#email")
var userPassword = document.querySelector("#password")




var users = []

if(localStorage.getItem("users")!=null){
    users = JSON.parse(localStorage.getItem("users"))
}




function signUp(){




    if(userName.value == '' || password.value == ''|| userEmail.value =='' ){
        document.querySelector("#error").classList.replace("d-none","d-block")
        console.log("wefwfe");
    
    }else if(isExist() == false && isAllValid()== true )
    {
         var user={
            name:userName.value,
            email:userEmail.value,
            pass:userPassword.value
        }

    users.push(user);
    localStorage.setItem("users",JSON.stringify(users)) 
    document.getElementById("signUpSucces").classList.replace("d-none","d-block")
    document.getElementById("signInBtn").classList.remove("disabled")
    
    }

}
var signIn = document.getElementById("signInBtn")

signIn.addEventListener("click",function(){
    window.location.href="login.html"
})





function isAllValid(){
    if(userNameValidate() == true && userEmailValidate() == true && passwordValidate() == true){
        return true
    }
}




userName.addEventListener("input",function(){
    userNameValidate()
    checkName()
    console.log("check");
})
userEmail.addEventListener("input",function(){
    userEmailValidate()
    checkEmail()
    console.log("check");
})

userPassword.addEventListener("input",function(){
    passwordValidate()
    console.log("check");
})

function  userNameValidate(){

    var userNameValidate = /^(?=.*[A-Z])[A-Za-z]{0,19}$/ ;

    if(userNameValidate.test(userName.value) == true){
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        document.getElementById("nameerror").classList.replace("d-block","d-none") 
        return true  

    }else if(userName.value==''){
        userName.classList.remove("is-valid")
        userName.classList.remove("is-invalid")
        document.getElementById("nameerror").classList.add("d-none")
        return false
    }
    
    else{
        userName.classList.remove("is-valid")
        userName.classList.add("is-invalid")
        document.getElementById("nameerror").classList.replace("d-none","d-block")
        return false
    }
}

function  userEmailValidate(){

    var userEmailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if(userEmailValidate.test(userEmail.value) == true){
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        document.getElementById("emailerror").classList.remove("d-block")
        document.getElementById("emailerror").classList.add("d-none")
        return true
        

    }else if(userEmail.value==''){
        userEmail.classList.remove("is-valid")
        userEmail.classList.remove("is-invalid")
        document.getElementById("emailerror").classList.add("d-none")
        return false
        
    }
    
    else{
        userEmail.classList.remove("is-valid")
        userEmail.classList.add("is-invalid")
        document.getElementById("emailerror").classList.remove("d-none")
        document.getElementById("emailerror").classList.add("d-block")
        return false
        

    }
}

function  passwordValidate(){

    var passwordValidate = /^(?=.*\d)[A-Za-z\d]{8,15}$/;

    if(passwordValidate.test(userPassword.value) == true){
        userPassword.classList.remove("is-invalid")
        userPassword.classList.add("is-valid")
        document.getElementById("passerror").classList.replace("d-block","d-none")
      
        return true

    }else if(userPassword.value==''){
        userPassword.classList.remove("is-valid")
        userPassword.classList.remove("is-invalid")
        document.getElementById("passerror").classList.add("d-none")
        return false
    }
    
    else{
        userPassword.classList.remove("is-valid")
        userPassword.classList.add("is-invalid")
        document.getElementById("passerror").classList.replace("d-none","d-block")
        return false

    }
}


function isExist(){
   if(checkName() == true && checkEmail() == true){
    return true
   }else{
    return false
   }

}


function checkName(){
    for(i=0; i<users.length;i++){
        if(userName.value.toLowerCase() == users[i].name.toLowerCase()){
            document.getElementById("nameExistError").classList.replace("d-none","d-block")
            return true
        }else{
            document.getElementById("nameExistError").classList.replace("d-block","d-none")
        }
    }    
    return false
}

function checkEmail(){
    for(i=0; i<users.length;i++){
        if(userEmail.value.toLowerCase() == users[i].email.toLowerCase()){
            document.getElementById("emailExistError").classList.replace("d-none","d-block")
            return true
        }else{
            document.getElementById("emailExistError").classList.replace("d-block","d-none")
        }
    }
    return false
    
}



// -----------------------------------------------------------------------------





var loggedUserName 

function Login(){
    var CurrentUserEmail = document.getElementById("LogEmail");
    var CurrentUserPass = document.getElementById("LogPassword");

for(var i =0;i<users.length;i++){

    if(CurrentUserEmail.value.toLowerCase() == users[i].email.toLowerCase() &&
    CurrentUserPass.value.toLowerCase() == users[i].pass.toLowerCase()
    ){
        console.log("succces");
        localStorage.setItem("loggedUserName",JSON.stringify(users[i].name))
        loggedUserName = users[i].name
        window.location.href="Home.html"
        return true

    }

}
document.getElementById("unknownUser").classList.replace("d-none","d-block")

}

// -------------------------------------------------------------------------------------


document.getElementById("hometitle").innerHTML=`<h1>Welcome ${loggedUserName}</h1>`