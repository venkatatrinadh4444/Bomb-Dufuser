let defuserEl=document.getElementById('defuser')
let timerEl=document.getElementById('timer')

let count=10;
let timerInterval=setInterval((timer)=> {
    count-=1;
    timerEl.textContent=count;
    if(count===0){
        timerEl.textContent="BOOM"
        clearInterval(timerInterval)
    }    
},1000)

defuserEl.addEventListener('keydown',(e)=>{
    if(e.key==='Enter' && count>0) {
        if(defuserEl.value==='defuser'){
            timerEl.textContent="Hey,You Did It"
            clearInterval(timerInterval)
        }
    }
});


