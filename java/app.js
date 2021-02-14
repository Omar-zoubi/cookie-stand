'use strict'
let workHour=['06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM']

let seatle ={
    locNmae: 'seatle',
    maxNumOfCst: 65,
    minNumOfCst:23,
    avgCstCookeis:6.3,
    randomNumber:function(max,min){
       return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ,
    randomfun: function(){
        let randomArr=[];
        for(let i=0;i<=13;i++)
        {
            randomArr[i]=this.randomNumber(this.maxNumOfCst,this.minNumOfCst);
            
        }
        return randomArr;
    },

    expResult: function(){
       let randomArr= this.randomfun();
       let resArr=[];
      for (let i =0; i <=13 ;i ++)
      {
          resArr[i]=Math.floor(randomArr[i]*this.avgCstCookeis);
      } 
      return resArr;
    },
    totalfun: function(){
        let totalNum=0;
        for(let i=0; i< this.expResult().length; i++)
        {
            totalNum=totalNum+this.expResult()[i];
        }
        return Math.floor(totalNum);
    }

  


}

    

let tokeyo ={
    locNmae: 'Tokeye',
    maxNumOfCst: 24,
    minNumOfCst:3,
    avgCstCookeis:1.2,
    randomNumber:function(max,min){
       return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ,
    randomfun: function(){
        let randomArr=[];
        for(let i=0;i<=13;i++)
        {
            randomArr[i]= this.randomNumber(this.maxNumOfCst,this.minNumOfCst);
            
        }
        return randomArr;
    },

    expResult: function(){
       let randomArr= this.randomfun();
       let resArr=[];
      for (let i =0; i <=13 ;i ++)
      {
          resArr[i]=Math.floor(randomArr[i]*this.avgCstCookeis);
      } 
      return resArr;
    },
    totalfun: function(){
        let totalNum=0;
        for(let i=0; i< this.expResult().length; i++)
        {
            totalNum=totalNum+this.expResult()[i];
        }
        return Math.floor(totalNum);
    }

  


}

let dubai ={
     locNmae : 'Dubai',
    maxNumOfCst: 38,
    minNumOfCst:11,
    avgCstCookeis:3.7,
    randomNumber:function(max,min){
       return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ,
    randomfun: function(){
        let randomArr=[];
        for(let i=0;i<=13;i++)
        {
            randomArr[i]= this.randomNumber(this.maxNumOfCst,this.minNumOfCst);
            
        }
        return randomArr;
    },

    expResult: function(){
       let randomArr= this.randomfun();
       let resArr=[];
      for (let i =0; i <=13 ;i ++)
      {
          resArr[i]=Math.floor(randomArr[i]*this.avgCstCookeis);
      } 
      return resArr;
    },
    totalfun: function(){
        let totalNum=0;
        for(let i=0; i< this.expResult().length; i++)
        {
            totalNum+=this.expResult()[i];
        }
        return Math.floor( totalNum);
    }



}

let paris ={
    locNmae: 'Paris',
    maxNumOfCst: 38,
    minNumOfCst: 20,
    avgCstCookeis:2.3,
    randomNumber:function(max,min){
       return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ,
    randomfun: function(){
        let randomArr=[];
        for(let i=0;i<=13;i++)
        {
            randomArr[i]= this.randomNumber(this.maxNumOfCst,this.minNumOfCst);
            
        }
        return randomArr;
    },

    expResult: function(){
       let randomArr= this.randomfun();
       let resArr=[];
      for (let i =0; i <=13 ;i ++)
      {
          resArr[i]=Math.floor( randomArr[i]*this.avgCstCookeis);
      } 
      return resArr;
    },
    totalfun: function(){
        let totalNum=0;
        for(let i=0; i< this.expResult().length; i++)
        {
            totalNum+=this.expResult()[i];
        }
        return Math.floor( totalNum);
    }



}
let lima ={
    locNmae: 'Lima',
    maxNumOfCst: 16,
    minNumOfCst:2,
    avgCstCookeis:4.6,
    randomNumber:function(max,min){
       return Math.floor(Math.random() * (max - min + 1) + min);
    }
    ,
    randomfun: function(){
        let randomArr=[];
        for(let i=0;i<=13;i++)
        {
            randomArr[i]= this.randomNumber(this.maxNumOfCst,this.minNumOfCst);
            
        }
        return randomArr;
    },

    expResult: function(){
       let randomArr= this.randomfun();
       let resArr=[];
      for (let i =0; i <=13 ;i ++)
      {
          resArr[i]=Math.floor (randomArr[i]*this.avgCstCookeis);
      } 
      return resArr;
    },
    totalfun: function(){
        let totalNum=0;
        for(let i=0; i< this.expResult().length; i++)
        {
            totalNum+=this.expResult()[i];
        }
        
        return Math.floor(totalNum);
    }



}

function render_seatle (){
    let divEl = document.getElementById('Newdiv2');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=`${seatle.locNmae}`


    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0; i< seatle.expResult().length ;i++ ){
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${workHour[i]} : ${seatle.expResult()[i]} cookeis`
    }
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total : ${seatle.totalfun()} cookeis`

}


function render_tokeyo (){
    let divEl = document.getElementById('Newdiv2');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=`${tokeyo.locNmae}`


    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0; i< tokeyo.expResult().length ;i++ ){
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${workHour[i]} : ${tokeyo.expResult()[i]} cookeis`
    }
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total : ${tokeyo.totalfun()} cookeis`

}


function render_Dubai (){
    let divEl = document.getElementById('Newdiv3');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=`${dubai.locNmae}`

    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0; i< dubai.expResult().length ;i++ ){
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${workHour[i]} : ${dubai.expResult()[i]} cookeis`
    }
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total : ${dubai.totalfun()} cookeis`

}


function render_paris (){
    let divEl = document.getElementById('Newdiv4');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=`${paris.locNmae}`

    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0; i< paris.expResult().length ;i++ ){
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${workHour[i]} : ${paris.expResult()[i]} cookeis`
    }
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total : ${paris.totalfun()} cookeis`

}

function render_Lima (){
    let divEl = document.getElementById('Newdiv5');
    let h2El = document.createElement('h2');
    divEl.appendChild(h2El);
    h2El.textContent=`${lima.locNmae}`

    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    for (let i=0; i< lima.expResult().length ;i++ ){
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`${workHour[i]} : ${lima.expResult()[i]} cookeis`
    }
    let liEl =document.createElement('li')
    ulEl.appendChild(liEl)
    liEl.textContent=`Total : ${lima.totalfun()} cookeis`
    

}


render_seatle();
render_tokeyo();
render_Dubai();
render_paris();
render_Lima();