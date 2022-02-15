document.getElementById('buttonDelete').addEventListener('click',function(){
    const dName=document.getElementById('name');
    dName.style.display='none';
})

document.getElementById('input-fild').addEventListener('keyup',function(even){
    const inputFild=document.getElementById('buttonDelete');
    if(even.target.value == 'Delete'){
        inputFild.removeAttribute('disabled',true);
    }else{
        inputFild.setAttribute('disabled',false);
    }
    
})

