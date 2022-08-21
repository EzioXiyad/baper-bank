document.getElementById('btn-deposite').addEventListener('click',function(){
    const deposite=document.getElementById('user-deposite');
    const newDepositeString=deposite.value;
    const newDeposite=parseFloat(newDepositeString);
    
    const depositeElement=document.getElementById('deposite-total');
    const previousDepositeString=depositeElement.innerText;
    const previousDeposite=parseFloat(previousDepositeString);
    const currentDeposite=previousDeposite+newDeposite;
    depositeElement.innerText=currentDeposite;

    const previousBalance=document.getElementById('balance-total');
    const balanceString=previousBalance.innerText;

    const balance=parseFloat(balanceString);

    const totalBalance=newDeposite+balance;
    previousBalance.innerText=totalBalance;

    deposite.value='';
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdraw=document.getElementById('user-withdraw');
    const newWithdrawString= withdraw.value;
    const newWithdraw=parseFloat(newWithdrawString);

    const withdrawElement=document.getElementById('withdraw-total');
    const previousWithdrawString=withdrawElement.innerText;
    const previousWithdraw=parseFloat(previousWithdrawString);
    
    const totalWithdraw= previousWithdraw+newWithdraw;
    withdrawElement.innerText=totalWithdraw;

    const previousBalance=document.getElementById('balance-total');
    const previousBalanceString=previousBalance.innerText;
    const Balance=parseFloat(previousBalanceString);

    const totalBalance=Balance-newWithdraw;
    previousBalance.innerText=totalBalance;

    withdraw.value='';
})