const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const conpass=document.getElementById('conpass');

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    varify();
    checkpass(password,6,8);
    checkpass(conpass,6,8);
})

function varify()
{
    const nameval=username.value.trim();
    const emailval=email.value.trim();
    
    
    if(nameval==='')
    {
        //error message
        seterror(username, 'pls enter name' );
    }
    else{
        setsuccess(username);
    }
    if(emailval==='')
    {
        seterror(email,"pls enter email")
    }
    else
    {
        setsuccess(email)
    }
   
}

function seterror(element,message)
{
    const formgroup=element.parentElement;
    formgroup.className = "form-group error"
    const div=formgroup.querySelector("div");
    div.innerHTML=message;
}
function setsuccess(element)
{
    const formgroup=element.parentElement;
    formgroup.className = "form-group success"
    const div=formgroup.querySelector("div");
    div.innerHTML="";
}

const min=6;
const max=8;
function checkpass(element,min,max)
{
    const conpassval=conpass.value.trim();
    const passwordval=password.value.trim(); 
    console.log(passwordval.length)
    console.log(conpassval.length)  
    if(passwordval.length < min)
    {
        seterror(password,"pls enter 6 above number or letter")
    }
    else if(passwordval.length > max)
    {
        seterror(password,"pls enter below 8 number or letters")

    }
    else
    {
        setsuccess(password)
    }
    if(conpassval.length < min)
        {
            seterror(conpass,"pls enter 6 above number or letter")
        }
        else if(conpassval.length > max)
        {
            seterror(conpass,"pls enter below 8 number or letters")
    
        }
        else
        {
            setsuccess(conpass)
        }
}