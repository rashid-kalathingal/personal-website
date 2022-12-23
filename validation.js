function validatename(){  
    var myname=document.getElementById("name").value;
    var name=myname.trim()
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var nameformat = /^[a-zA-Z ]+$/;
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if (name==null || name==""){  
      alert("Name can't be blank");
      document.form.name.focus(); 
      return false;  }

     else if (!name.match(nameformat)) {
      alert("Please enter your full name properly!");
      document.form.name.focus();
      return false;}

     else if (email==null || email==""){  
          alert("email can't be blank");
          document.form.email.focus(); 
          return false;  }
          
        

     else if (!email.match(mailformat)) {
      alert("Invalid email address.");
      document.form.email.focus();
      return false;
    }


        else if (subject==null || subject==""){  
            alert("subject can't be blank");
            document.form.name.focus(); 
            return false;  }

     else if (Message.length<10){
        alert("message contain min 10 letters");
        document.form.name.focus();
        return false;
     }

            else {return true;}
         
            
    
      } 



     