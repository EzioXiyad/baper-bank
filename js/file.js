document.getElementById('btn-submit').addEventListener('click',function(){
    const mail=document.getElementById('user-email');
    const email=mail.value;
    const password=document.getElementById('user-password');
    const userPassword=password.value;
    window.location.href='inside-bank.html';
})