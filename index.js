// Problem 1:
function sum(num1,num2){
    if(num1==15||num2==15||num1+num2==15){return true;
    } 
    else return false;
}
// console.log(sum(7,8));

// #################

// problem2:
function square(number){
    var b=0;
    for(var a=0; a<number; a++){
        if(a*a==number){
            b=1;
            console.log(true)
        }
    }
    if(b==0){console.log(false)}
}

// ##################

// problem3:

function five(x){
    for(var i=0;i < x.length;i++){
        if(x[i]!=i +1){
            console.log(i+1);
        }
    }
}
// five([1,2,0,4,5]);

// #############################

// problem4:

function str(string){
    let x=string;
    if (x===string.toLowerCase()){
        return x.toUpperCase();
    }
    else{return x.toLowerCase();}
}
// console.log(str('a'));
// console.log(str('A'));
// #############################

// problem5:

function calc(nu1,nu2){
    var a=0;
    for(var i=nu1;i<nu2;i++){
        if(i%2 !=0)
        {
            a+=i;
        }
    }
    return a;
}
// console.log(calc(10,30));

// ############################

// problem6:

function check(x) {
  let luckyFlag = false;

  for (let i = 0; i < x; i++) {
    let number = prompt("Enter a number:");
    if (number.includes("4") || number.includes("7")) {
      luckyFlag = true;
      break;
    }
  }

  if (luckyFlag) {
    console.log("It's your lucky day");
  } else {
    console.log("It's not your lucky day");
  }
}

// let y = +prompt("Enter the number of inputs:");
// check(parseInt(y));


