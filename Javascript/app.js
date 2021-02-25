'use strict'
let workHour=['06:00 AM','07:00 AM','08:00 AM','09:00 AM','10:00 AM','11:00 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM','07:00 PM']
let totalArray =[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let obj_Arr=[]
let grandTotal=0;
function Location (locNmae,minNumOfCst,maxNumOfCst,avgCstCookeis) {
    this.locNmae=locNmae;
    this.maxNumOfCst=maxNumOfCst;
    this.minNumOfCst= minNumOfCst;
    this.avgCstCookeis=avgCstCookeis;
    this.cstSoldPerHour=[];
    this.cookiesSoldPerHour=[];
    this.total=0;
    obj_Arr.push(this);
    
    

  


}
Location.prototype.randomNumber =function(){
    let x = Math.floor(Math.random() * (this.maxNumOfCst - this.minNumOfCst + 1) + this.minNumOfCst);
    
            return Math.floor(Math.random() * (this.maxNumOfCst - this.minNumOfCst + 1) + this.minNumOfCst);
       }

 Location.prototype.randomFun = function(){
    
     for (let i =0 ;i < workHour.length ;i++)
     {
    this.cstSoldPerHour.push(this.randomNumber());

         this.cstSoldPerHour.push(this.randomNumber());
         
     }
}

Location.prototype.expResult =function()
{
    for(let i=0;i<this.cstSoldPerHour.length;i++)
    {
        this.cookiesSoldPerHour.push(this.cstSoldPerHour[i]*Math.floor(this.avgCstCookeis));
        totalArray[i]=totalArray[i]+ this.cookiesSoldPerHour[i];
    }
}
Location.prototype.totalfun =function(){
    for(let i=0;i<this.cookiesSoldPerHour.length;i++)
    {this.total=this.total+this.cookiesSoldPerHour[i];}
    grandTotal+=this.total;
}

let seatle= new Location('Seatle',65,3,6.3);
let tokeyo =new Location('Tokeyo',24,3,1.2);
let dubai =new Location('Dubai',38,11,3.8);
let paries =new Location('Paries',38,20,2.3);
let lima =new Location('Lima',16,2,4.6);


for (let i =0;i <obj_Arr.length;i++)
{
    obj_Arr[i].randomNumber();
    obj_Arr[i].randomFun();
    obj_Arr[i].expResult();
    obj_Arr[i].totalfun();
}


let divEl = document.getElementById('Newdiv');
let table =document.createElement('table');
divEl.appendChild(table);
function render_header()
{
    
    let trEl=document.createElement('tr');
        table.appendChild(trEl);

        let thEl=document.createElement('th')
        trEl.appendChild(thEl);
        thEl.textContent=' ';

    for (let i=0; i< workHour.length ;i++ ){
        let thEl=document.createElement('th')
        trEl.appendChild(thEl);
        thEl.textContent= workHour[i];


    }
    let thEl1=document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent= 'Daily Location Total';

}

Location.prototype.render_Table =function()
{
    
    let trEl=document.createElement('tr');
        table.appendChild(trEl);

        let tdEl=document.createElement('td')
        trEl.appendChild(tdEl);
        tdEl.textContent=this.locNmae;

    for (let i=0; i< workHour.length ;i++ ){
        let tdEl=document.createElement('td')
        trEl.appendChild(tdEl);
        tdEl.textContent= this.cookiesSoldPerHour[i];


    }
    let tdEl1=document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent= this.total;

}
function render_footer()
{
            let footer = table.createTFoot();
        let thEl = document.createElement('th');
        footer.appendChild(thEl)
        thEl.textContent="Total ";
 
    for (let i=0; i< workHour.length ;i++ ){
       
        let thEl = document.createElement('th');
        footer.appendChild(thEl)
        thEl.textContent=totalArray[i];
        


    }
    let thEl1 = document.createElement('th');
        footer.appendChild(thEl1)
        thEl1.textContent=grandTotal;

}
render_header();

for (let i =0;i <obj_Arr.length;i++)
{obj_Arr[i].render_Table();}





const form =document.getElementById('NewLocation');
form.addEventListener('submit',locationcreator);
function locationcreator(event){

    event.preventDefault();

    let name =event.target.locname.value;
    let max= event.target.mincst.value;
    parseInt(max);
    let min= event.target.maxcst.value;
    parseInt(min);
    let avg=event.target.avgcooke.value;
    parseFloat(avg);
    
    let  newLocation= new Location( name ,max,min,avg);
    newLocation.randomNumber();
    newLocation.randomFun();
    newLocation.expResult();
    newLocation.totalfun();
    newLocation.render_Table();
    
    
   


}
render_footer();









