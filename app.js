function getNumber(num){
    var output1=document.getElementById("output1");
    output1.value += num;
    

}
function clearResult(){
    var output1=document.getElementById("output1");
    output1.value= "";

}
function backSpace(){
    var output1=document.getElementById("output1")
        output1= output1.toString().slice(0,length-1)
        printOutput(output1);
 }

function getResult(){
    var output1=document.getElementById("output1");
    output1.value = eval(output1.value);

}