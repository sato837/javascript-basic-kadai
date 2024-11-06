let num = 675;

let mod1 = num % 3;
let mod2 = num % 5;

if(mod1 === 0 && mod2 === 0){
    console.log('3と5の倍数です');
}else if(mod1 === 0 && mod2 != 0){
    console.log('3の倍数です');
}else if(mod1 != 0 && mod2 === 0){
    console.log('5の倍数です');
}else{
    console.log(num);
}