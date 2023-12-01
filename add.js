///Defiene class 

class Product_list{
    constructor(price,Products_name){
        this.price=price
        this.Products_name=Products_name

    }
 }
class New_list{
    constructor(){

    }
   
 
    AddTonew_list(List){
     
    let prc=document.querySelector(".Item_list")
    let tr=document.createElement('tr')
    tr.innerHTML=`
    <td>${List.Products_name}</td>
    <td>${List.price}</td>
    <td> <a href='#' class='delete'>x</a></td>

    `
    prc.appendChild(tr);
     
     
        

    }
    clearTheLsit(target){
        if (target.hasAttribute('href'))
        target.parentElement.parentElement.remove();
         
       
    }
}

//Define function 
let Add_product=(e)=>{
    
    if (e.target.classList.contains('addToCart')) {
        let item=e.target.closest('.item')
        let Price=item.querySelector('.price').textContent 
        let Name=item.querySelector('h2').textContent
        let new_list= new Product_list(Price,Name)
        //console.log(new_list)
        let list= new New_list()
        list.AddTonew_list(new_list)
        cart.push(new_list)
        //CartItem()
        CartItem()    

        
        //console.log(Total)
    }e.stopPropagation();
    
    
    
   
  
}
//Define  query selector 
let add_list= document.querySelector('.listproducts');
let table =document.querySelector(".Item_list")
//define addEventlistener
table.addEventListener('click',remove)
add_list.addEventListener('click',Add_product) 
let total_list=document.querySelector('#Total')



// Define function

function remove(e){
    let re= new New_list()
    re.clearTheLsit(e.target)
    Total--
    CartItem()
}

let cart= [];
//console.log(cart)
function CartItem(){
    //let cartItem=0
    let Total=cart.length
          
    total_list.innerHTML=Total

}