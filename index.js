// try {
//     alert("How are you");
//     alert(x);
   
// } catch (error) {
    
//     alert("error in catch block");
// }

// finally{
//     alert("Hey");
// }



document.getElementById("checkButton").addEventListener("click", function(){
var num = document.querySelector("#numTextfield").value;

try {
    if(num<5){
        throw "input is too low"
    }
    else if(num>10){
        throw "input is too high"
    }
} catch (error) {
    console.log(error);
}
})