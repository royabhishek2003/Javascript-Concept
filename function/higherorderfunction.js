function a(b){
    console.log(b);
    b();
}
// here a is the higher function 

function sayhi(){
    console.log('Hiiii');;
}
a(sayhi);
