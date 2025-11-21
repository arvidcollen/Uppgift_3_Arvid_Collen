//Schrödingers cat, lyckades inte få 50-50 chansen när jag skrev den

/*let cat = {alive:true, name:"Gustav"};

function showcat(){
    
}*/

let cat = {
alive: Math.random( ) < 0.5 ? " är levande" : " är död!!!" ,
name:"Shady"
}
alert(  "Katten heter: "+cat.name  + " och"+ cat.alive)
