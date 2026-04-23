// initialization
let r = document.querySelector(':root');
//variables standing for fraction of the top bar
let leftfr   = 2;
let centerfr = 2;
let rightfr  = 2;
//combining list changefr
const listfr = ["2fr","2fr","2fr"];
const savedlistfr = [];

window.addEventListener('mousemove', function(){
    if (listfr !== savedListfr){
        r.style.setProperty("--leftfr",  listfr[0])
        r.style.setProperty("--centerfr",listfr[1])
        r.style.setProperty("--rightfr", listfr[2])
    }else if (listfr === savedListfr){
        r.style.setProperty("--leftfr",  "2fr")
        r.style.setProperty("--centerfr","2fr")
        r.style.setProperty("--rightfr", "2fr")
    }     
});



// takes the values, detects what wants to be changed, saves to listfr
function changefr(change){
    savedlistfr = listfr
    listfr = []
   
    leftfr   = 2;
    centerfr = 2;
    rightfr  = 2;

    // See the which one to change
    if (change == 0){
        leftfr = 3;
    }
    if (change == 1){
        centerfr = 3;
    }
    if (change == 2){
        rightfr = 3;
    }

    listfr.push(leftfr+"fr")
    listfr.push(centerfr+"fr")
    listfr.push(rightfr+"fr")

    //change

    return listfr
}