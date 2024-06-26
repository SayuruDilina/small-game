// class Customer{
//     name;
//     age;
//     address;
    
//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }

//     setName(name){
//         this.name=name
//     }
//     setAge(age){
//         this.age=age;
//     }
//     setAddress(address){
//         this.address=address
//     }
//     getName(){
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
//     getAddress(){
//         return this.address;
//     }
// }

// let customer01=new Customer("Saman",21,"panadura")

// customer01.setName("Sayuru");
// console.log( customer01.getName());
let randomNumber=Math.floor(Math.random()*10+1);

let count=0;

function numberGuess(){
    let Numbers = document.getElementById("TxtNumber").value;

    if(randomNumber==Numbers){
        document.getElementById("message").innerHTML=(" Contagulations You Won 😃")
       
        count++;
    }
    else if(randomNumber<Numbers){
        document.getElementById("message").innerHTML=("Your number  is greater☹️ ")
       
        count++;
    }
    else if(randomNumber >Numbers){
        document.getElementById("message").innerHTML=("Your number  is Lower☹️ ")
       
        count++;
    }
        if(count==3){
             alert("Game over Try again!!!!")
            setNewNum();
            
        }
}
function setNewNum(){
    let randomNumber=Math.floor(Math.random()*10+1);
    
    count=0;
}
