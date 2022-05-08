// 寫法 1
function add (a, b){
    let result = a + b;
    return result;
}

add(1, 2);

// 寫法 2
// 箭頭函式
let add = (a, b) =>{
    let result = a + b;
    return result;
}

// 寫法 3 
let add = (a, b) =>{
    return a + b;
}


// -------------------
// 如果你的箭頭函式只有一行return，可以這樣寫
let add = (a, b) => a + b;



// -------------------
let add2 = function(a){
    return a + 2;
}

let add2 = a => a + 2;

let showName = function(){
    return "ashley";
}

let showName = () => "ashley"
