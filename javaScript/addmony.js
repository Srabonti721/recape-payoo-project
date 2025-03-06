

document.getElementById("cashout").style.display="none"
document.getElementById('add-mony-card').addEventListener('click',function(){
    document.getElementById('addmony').style.display="block";
    document.getElementById('cashout').style.display="none";
   
})
document.getElementById('cash-out-card').addEventListener('click',function(){
    document.getElementById('addmony').style.display="none";
    document.getElementById('cashout').style.display="block";
})

document.getElementById('add-mony').addEventListener('click',function(){
    GetInputValueById();
    const amount = document.getElementById("Amount").value;
    convertedAmount = parseFloat(amount);
   const pinNumber = document.getElementById("pin-number").value;
   convertedPinNumber = parseFloat(pinNumber)
   const mainBalance = document.getElementById("main-balance").innerText;
   const convertMainBalance = parseFloat(mainBalance);
  
   if(convertedPinNumber===1234){
const sum = convertMainBalance +  convertedAmount;
document.getElementById('main-balance').innerText=sum;
   }else{
    alert('pin number chack koro')
   }
})

document.getElementById('cash-out').addEventListener('click',function(){
    const amount = document.getElementById("cashout-Amount").value;
    convertedAmount = parseFloat(amount);
   const pinNumber = document.getElementById("cashout-pin-number").value;
   convertedPinNumber = parseFloat(pinNumber)
   const mainBalance = document.getElementById("main-balance").innerText;
   const convertMainBalance = parseFloat(mainBalance);
   if(convertedPinNumber===1234){
const add = convertMainBalance - convertedAmount;
document.getElementById('main-balance').innerText=add;
   }else{
    alert(' pin number chack koro')
   }
   const value =  GetInputValueById();
   console.log(value);
   
 
})