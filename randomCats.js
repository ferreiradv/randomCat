const urlCat = 'https://aws.random.cat/meow';

const imgCat1 = document.querySelectorAll('#img')[0]
const imgCat2 = document.querySelectorAll('#img')[1]
const imgCat3 = document.querySelectorAll('#img')[2]
const imgCat4 = document.querySelectorAll('#img')[3]
const imgCat5 = document.querySelectorAll('#img')[4]
const imgCat6 = document.querySelectorAll('#img')[5]



function catRandom1(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat1.setAttribute('src',date.file)
    })
}

function catRandom2(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat2.setAttribute('src',date.file)
    })
}

function catRandom3(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat3.setAttribute('src',date.file)
    })
}

function catRandom4(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat4.setAttribute('src',date.file)
    })
}


function catRandom5(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat5.setAttribute('src',date.file)
    })
}

function catRandom6(){
    fetch(urlCat).then((res)=>{
        return res.json();
    }).then((date)=>{
        imgCat6.setAttribute('src',date.file)
    })
}


document.querySelector("#btn").addEventListener('click', ()=>{
    setTimeout(catRandom1,1000)
    setTimeout(catRandom2,1000)
    setTimeout(catRandom3,1000)
    setTimeout(catRandom4,1000)
    setTimeout(catRandom5,1000)
    setTimeout(catRandom6,1000)
});

setTimeout(catRandom1,1000)
setTimeout(catRandom2,1000)
setTimeout(catRandom3,1000)
setTimeout(catRandom4,1000)
setTimeout(catRandom5,1000)
setTimeout(catRandom6,1000)






