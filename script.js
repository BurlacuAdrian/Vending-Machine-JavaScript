var balance=0;

function oneDollar(){
    balance+=1
    document.getElementById("balance").innerHTML="$"+ balance.toFixed(2);

}

function fiveDollars(){
    balance+=5
    document.getElementById("balance").innerHTML="$"+ balance.toFixed(2);

}
function coin(){
    balance+=0.5
    document.getElementById("balance").innerHTML="$"+ balance.toFixed(2);

}

function reset(){
    balance=0;
    document.getElementById("balance").innerHTML="$"+ balance.toFixed(2);
    document.getElementById("chips").classList.remove("out2");
    document.getElementById("chocolate").classList.remove("out2");
    document.getElementById("water").classList.remove("out");
    document.getElementById("soda").classList.remove("out");

}

function openMenu(){
    document.getElementById("menu").classList.add("open-menu");
}
function closeMenu(){
    document.getElementById("menu").classList.remove("open-menu");
}

function option(item){
    let cost,tyopeOfOut="out2",itemId;
    switch(item){
        case 0:
            cost=3.5;
            itemId="chips";
        break;
        case 1:
            cost=11;
            itemId="chocolate";  
        break;
        case 2:
            cost=2;
            itemId="water";
            tyopeOfOut="out";    
        break;
        case 3:
            cost=2.5;
            itemId="soda";
            tyopeOfOut="out";  
        break;
    }

    if(balance>=cost){
        balance-=cost;
        document.getElementById("balance").innerHTML="$"+ balance.toFixed(2);

        document.getElementById(itemId).classList.add(tyopeOfOut);
    }
    else
    document.getElementById("less").classList.add("open-menu");
}

function ok(){
    document.getElementById("less").classList.remove("open-menu");
}