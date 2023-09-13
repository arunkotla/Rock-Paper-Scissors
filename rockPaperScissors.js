let user = prompt("enter ur number")
let cpuI = Math.floor(Math.random()*3)
let cpu = ["S", "W", "G"][cpuI]

const answer = (user, cpu)=>{
   if(user === cpu){
    return "No one is winner"
   }
   else if(user === "S" && cpu === "W"){
    return "user is winner"
   }
   else if(user === "S" && cpu === "G"){
    return "cpu is winner"
   }
   else if(user === "W" && cpu === "G"){
    return "user is winner"
   }
   else if(user === "W" && cpu === "S"){
    return "cpu is winner"
   }
   else if(user === "G" && cpu === "S"){
    return "user is winner"
   }
   else if(user === "G" && cpu === "W"){
    return "cpu is winner"
   }
}
let result= answer(user, cpu)

console.log(`cpu value is ${cpu}, user value is ${user} and the result is ${result}`)


