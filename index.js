const textinput=document.getElementById('textinput')
const vowelCount=document.getElementById('vowelCount')
const consoCount=document.getElementById('consoCount')
const total=document.getElementById('total')
const totalspace=document.getElementById('totalspace')

// console.log(textinput,vowelCount,consoCount)
const vowels=['A','E','I','O','U','a','e','i','o','u']
const constn=['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
const number=['0','1','2','3','4','5','6','7','8','9']
const speChar=['!','@','#','$','%','^','&','*','(',')','_','-','+',',','<','>',"?",'/','[',']','{','}',"'",'"']
console.log(vowels.length)
textinput.addEventListener('input',function(event)
{
    let sum1=0
    let sum2=0
    // console.log(inpVowel.length)
    let inputV=event.target.value
    console.log(inputV.length)
     if(inputV.length>=50)
    {
        alert(`Limit Exceed of Text:('${inputV.length}/50')`)
        location.reload();
    }

    for(let char of inputV) {
        if (vowels.includes(char)) {
            sum1++;
        }
    }
    for (let char of inputV)
    {
        if(constn.includes(char))
        {
            sum2++;
        }
    }
 const mystring=inputV
  const noOfspace=mystring.split(" ").length-1
totalspace.innerText=noOfspace 
    vowelCount.innerText=sum1
    consoCount.innerText=sum2
    total.innerText=sum1+sum2
    //  if (inputV==/[0-9]/ || inputV==/[!@#$%^&*(){}<>;,.]/)
    //  {
    //     alert("😁Can You Enter Valid Character😁")
    //     location.reload();
        
    //  }
    for (let char of inputV)
    {
        if(number.includes(char))
        {
            alert(`😁 Hii buddy this ('${inputV}') character is Number `)
             location.reload();
             
        }

    };
    
    for (let char of inputV)
    {
        if(speChar.includes(char))
        {
            alert(`😁Hii visitor this ('${inputV}') character is specialCharacter`)
             location.reload();
        }
    };




    
       
        
        
    

});
