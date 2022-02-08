

// console.log( a.getHours() );
// console.log( a.getMinutes() );
// console.log( a.getSeconds() );




// b = setInterval(c,1000)
// console.log(b)
//  let b = setInterval(,1000)
let a ;
let c ;
let d;
let e;
let date ;

setInterval(() => {

    a = new Date();
    date = a.toLocaleDateString();

    if( a.getHours() > 12){
        d = "pm";
        e = a.getHours()-12;
     } 
     else{
         d = "am";
         e = a.getHours();
     }

    c =a.getMinutes() + ":" + a.getSeconds();

    document.getElementById('displaytime').innerHTML = e + ":" + c + " " +  d +" on " + date ;

}, 1000);