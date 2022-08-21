document.getElementById('btn-deposite').addEventListener('click',function(){
    const deposite=document.getElementById('user-deposite');
    const newDepositeString=deposite.value;
    const newDeposite=parseFloat(newDepositeString);
    
    const depositeElement=document.getElementById('deposite-total');
    const previousDepositeString=depositeElement.innerText;
    const previousDeposite=parseFloat(previousDepositeString);
    const currentDeposite=previousDeposite+newDeposite;
    depositeElement.innerText=currentDeposite;

    deposite.value='';
})