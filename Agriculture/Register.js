function create_account(){  
    var name=document.getElementById("first").value;  
    var email=document.getElementById("second").value;  
    var password=document.getElementById("third").value;  
    var confirmPassword=document.getElementById("fourth").value;
    console.log(name);  
        var letters = /^[A-Za-z]+$/;  
        var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
    if(name==''||email==''||password==''||confirmPassword=='')
    {  
    alert("Fill out the empty fields");  
    }  
    else if(!letters.test(name))
    {  
        alert("Name must contain alphabets only");  
    }  
    else if (!email_val.test(email))  
    {  
        alert("Please enter valid email id");  
    }  
    else if(password!=confirmPassword)  
    {  
    alert("Incorrect Password");  
    }
    else if(document.getElementById("password").value.length < 6)  
    {  
    alert("Password minimum length is 6");  
    }  
    else if(document.getElementById("password").value.length > 12)  
    {  
    alert("Maximum length is 12");  
    }
    
    // let obj={
    //     name:
    // }
    
    else{  
    alert("Your account has been created successfully");  
    window.location="";  
    }
}  