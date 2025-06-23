//var -> Global and function scoping
//let and const -> Block level scoping -> {}
var age =17 // global scoping

voting() //function hoisting


function voting(){
   // let voterApplicationStatus='Not Eligible' //block scoped
 //var isEligibleToVote=true
    if(age===18){ //true
        var isEligibleToVote=true // function scoped

        let voterApplicationStatus='Eligible for voter ID' //block scoped
        //const val=234 //block scoped
        //console.log(val)
       // console.log(age)
        console.log("He/She is eligible to apply: "+ voterApplicationStatus)
    }else{
        let voterApplicationStatus='not eligible for voter id'
        console.log("He/She is not eligible to apply :"+voterApplicationStatus)
    }
    
    console.log(isEligibleToVote)
}
console.log(age)
//console.log(isEligibleToVote)

//call the function 
//voting()