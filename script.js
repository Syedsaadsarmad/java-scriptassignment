
// ******Question 1 *********/

 var itemsArray=[
     {
         name:"Juice",
         price: 50,
         Quantity: 3,
     },
     {
         name:"Cookies",
         price: 30,
         Quantity: 9,
     },
     {
         name:"Shirt",
         price: 880,
         Quantity: 1,
     },
     {
         name:"Pen",
         price: 110,
         Quantity: 2,
     }
 ]



 for (var i=0;i<itemsArray.length;i++){
     var tot=itemsArray[i].price*itemsArray[i].Quantity
     console.log("Total cost of "+itemsArray[i].name+" is "+tot)
   

 }

 console.log("Net cost is "+(itemsArray[0].price+itemsArray[1].price+itemsArray[2].price+itemsArray[3].price))




//******Question 3 *********/

 function Detail(name,email,age,gender,city,country){
     this.name=name
     this.email=email
     this.age=age
     this.gender=gender
     this.city=city
     this.country=country
 }

 var students=[
 new Detail("saad","syedsaad@gmail.com","26","male","karachi","Pakistan"),
 new Detail("sarmad","sarmad9919@gmail.com","21","male","karachi","Pakistan"),
 new Detail("Ali","aliahmedrind@gmail.com","29","male","karachi","Pakistan")

 ]

 for(i=0;i<=students.length;i++){
 console.log(students[i])}




 
//******Question 2 *********/

var data={
    name:"sarmad",
    email:"sarmad@gmail.com",
    password:"***",
    age:"21",
    gender:"Male",
    City:"Karachi",
    Country:"Pakistan"
}

console.log("age" in data)
console.log("Country" in data)
console.log("firstName" in data)
console.log("lastName" in data)

//******Question 4 ***********/




function Person(name,gender,address,educattion,profession,){
    this.name=name;
    this.gender=gender;
    this.address=address;
    this.educattion=educattion;
    this.profession=profession;
    
    
    }
    
    let Person01 = new Person(); 
    

