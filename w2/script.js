const dishes=
[
    {img:"img1.jpg",name:"Mutter Paneer",desc:"Green peas with cottage cheese, with a splash of our taste (serves 2 people)",price:"200/-"},
    {img:"img2.jpg",name:"Butter Chicken",desc:"Creamy and delicious butter chicken (serves 2 people)",price:"300/-"},
    {img:"img3.jpg",name:"Palak Paneer",desc:"Spinach and cottage cheese in a rich gravy (serves 2 people)",price:"250/-"},
    {img:"img4.jpg",name:"Dal Tadka",desc:"Lentils cooked with spices and tempered with ghee (serves 2 people)",price:"150/-"},
    {img:"img5.jpg",name:"Garlic Naan",desc:"Soft and fluffy bread infused with garlic (serves 2 people)",price:"100/-"},
    {img:"img6.jpg",name:"Gulab Jamun",desc:"Crispy and sweet milk balls in rose-flavored syrup (serves 2 people)",price:"120/-"},
    {img:"img7.jpg",name:"Rasgulla",desc:"Soft and spongy cottage cheese balls in sugar syrup (serves 2 people)",price:"110/-"},
    {img:"img8.jpg",name:"Kheer",desc:"Creamy rice pudding with nuts and dried fruits (serves 2 people)",price:"130/-"}
];



function displayDishes(){
    let tablebody=document.getElementById("tableBody");
    

    dishes.forEach(p=>{
        let row=`<tr>
        <td><img src="${p.img}"></td>
         <td>${p.name}</td>
          <td>${p.desc}</td>
           <td>₹${p.price}</td>
        </tr> `;
       tablebody.innerHTML +=row;
    });
}
displayDishes();
//function setupPage(){}
//function pageChange(page){}