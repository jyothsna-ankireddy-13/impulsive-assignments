 input = document.getElementById('userinput');

 
function press(val){

    input.value += val
    
    return val

}

function equal(){

    let x = input.value

    let y = eval(x);

    input.value = y

    return y

}

function erase(){

    input.value = ''

}

const res = document.getElementById('userInput');
//const res = pres(val);

function pres(val){

    res.value += val
    
    return val

}

function equa(){

    let x = res.value

    let y = eval(x);

    res.value = y

    return y

}

function eras(){

    res.value = ''

}




