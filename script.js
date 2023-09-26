
document.addEventListener("DOMContentLoaded",function(){

    
    let display = document.getElementById('display');
    let buttons = document.getElementsByTagName('button')
    let curr=""; 

    function backspace()
    {
        display.value = display.value.slice(0, -1);
        curr = display.value;
    }

    function factorial(num) 
    {

        if (num === 0 || num === 1) 
        {
            return 1;
        }
        for (let i = num - 1; i >= 1; i--) 
        {
            num *= i;
        }
          return num;

    }


    function calc() 
    {
   
    
        console.log('currentValue:', curr);

        let newVal = curr
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/√(\d+)/g, 'Math.sqrt($1)')
        
        .replace(/\^/g, '**')
        .replace(/log10/g, 'Math.log10')
        .replace(/log2/g, 'Math.log2')
        .replace(/ln/g, 'Math.log')
        .replace(/e/g, 'Math.E')
        .replace(/sin\(/g, 'Math.sin( Math.PI/180 *') 
        .replace(/cos\(/g, 'Math.cos( Math.PI/180 *')
        .replace(/tan\(/g, 'Math.tan( Math.PI/180 *')
        .replace(/%/g, '*0.01')
        .replace(/π/g, 'Math.PI')
        .replace(/abs/g, 'Math.abs')


        console.log(newVal);

        // symbol (!)
        newVal = newVal.replace(/(\d+)!/g, function(match, p) {
            const num = parseInt(p.replace("!", ""));
            return factorial(num);
        });

        
        console.log("newVal");

        console.log(newVal);
        try
        {
            let output = eval(newVal);
            display.value = output ;
        }
        
        catch (error)
        {
                display.value = 'Invalid Expression, try again';
                
        }
    
       
    }


    for( i=0;i<buttons.length;i++)
    {
        let it = buttons[i];
        it.addEventListener('click',function()
        {
            console.log(it.innerText);
            if(it.innerText == "Clear" )
            {
                curr="";
                display.value = "";
            }else if(it.innerText=="=")
            {
                calc();
            }else if(it.innerText=="⌫")
            {
                backspace();
            }
            else
            {
                curr += it.innerText;
                display.value = curr;

            }
           
        });
    }

    
  
    
});











