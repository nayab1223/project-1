function calculate(num1,num2,op){
    if(op === "+")
    {
        console.log("num1 + num2 = ", num1+num2);
    }
    else if(op === "-")
        {
            console.log("num1 - num2 = ", num1-num2);
        }
    else if(op === "*")
        {
            console.log("num1 * num2 = ", num1*num2);
        }
    else if(op === "/")
        {
            if(num2.includes(0))
            {
                console.log("Error")
            }
            else{
                console.log("num1 - num2 = ", num1/num2);
            }
        }  
    else{
        console.log("Error Invalid operator");
    }    
}

let Add = calculate(5,2,"+");
let Substract = calculate(5,2,"-");
let Multiply = calculate(5,2,"*");
let Divide = calculate(5,2,"/");


