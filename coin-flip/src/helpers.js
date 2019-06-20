function choice(arr){
    var randSide = Math.floor(Math.random() * arr.length);
    return arr[randSide];
}

export {choice};