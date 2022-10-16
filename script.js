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
    document.getElementById("soda").classList.remove("out");

}

function openMenu(){
    let menu=document.getElementById("menu");
    menu.classList.add("open-menu");
}
function closeMenu(){
    let menu=document.getElementById("menu");
    menu.classList.remove("open-menu");
}

function option(item){
    switch(item){
        case 3:
            if(balance>=2.5){
                balance-=2.5;
                document.getElementById("balance").innerHTML="$"+ balance.toFixed(2);


                let item=document.getElementById("soda");
                item.classList.add("out");
            }
            else
            document.getElementById("less").classList.add("open-menu");
            
        break;
    }
}

function ok(){
    document.getElementById("less").classList.remove("open-menu");
}