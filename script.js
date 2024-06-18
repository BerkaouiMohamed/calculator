const buttonsValues = ["AC", '*', "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]
const buttonsContainer=document.getElementsByClassName('buttons')[0]
for(let i=0;i<buttonsValues.length;i++){
    const button = document.createElement('button')
    button.id=buttonsValues[i]
    button.innerHTML=buttonsValues[i]
    buttonsContainer.appendChild(button)
}
document.getElementById('0').style.gridColumn="1/3"
document.getElementById('0').style.borderRadius="50px"

buttons=document.getElementsByTagName('button')
var screen=document.getElementsByClassName('screen')[0]

for (let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener('click',function(){
  
    if(buttons[i].id!="AC"&&buttons[i].id!="="){
       
        screen.innerHTML+=buttons[i].id
    }
    else{

        if (buttons[i].id=="=") {
            // const eq=screen.innerHTML
        //     let number=""
        //     let arr=[]
        //     for(let j=0;j<=eq.length;j++){
                
        //         if (isNumber(eq[j])){
        //             number+=eq[j]
        //         }
        //         else{
        //             if(number){
        //                 arr.push(number)
        //                 number=""
        //             }
        //             arr.push(eq[j])
        //         }

        //     }
        //     console.log(arr);
        //     var result=+arr[0]
        //    for(let j=1;j<arr.length;j++){
        //     if(arr[j]=='+'){
        //         result=result+ +arr[j+1]
        //         j+=1
        //     }
        //     if(arr[j]=='-'){
        //         result=result-arr[j+1]
        //         j+=1
        //     }
        //     if(arr[j]=='*'){
        //         result=result*arr[j+1]
        //         j+=1
        //     }
        //     if(arr[j]=='/'){
        //         result=result/arr[j+1]
        //         j+=1
        //     }
        //     if(arr[j]=='%'){
        //         result=result%arr[j+1]
        //         j+=1
        //     }

        //    }
        let result=eval(screen.innerHTML)
        
           screen.innerHTML=result
        }
        else{
            screen.innerHTML=""
        }

    }
  })
    
}

// function isNumber(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//   }