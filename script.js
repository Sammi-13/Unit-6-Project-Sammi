// Declare your genre arrays here
let Oats = ["https://frommybowl.com/wp-content/uploads/2021/03/Creamy_Blueberry_Overnight_Oats_Vegan_GlutenFree_FromMyBowl-7-scaled.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzkHaOzQ1W4Y5yD1p8QeTSfsXajpexTLguQ&usqp=CAU", "https://bellyfull.net/wp-content/uploads/2022/05/Granola-recipe-blog-2.jpg"];
console.log(Oats);
let Eggs = ["https://fitfoodiefinds.com/wp-content/uploads/2018/05/baconeggcupssq.jpg", "https://publish.purewow.net/wp-content/uploads/sites/2/2019/11/waffle-breakfast-sandwich-with-chorizo-recipe.jpg?fit=680%2C860", "http://www.incredibleegg.org/wp-content/uploads/2020/06/d-poached-eggs-asparagus-tomatoes-2100x963-1.jpg"];
console.log(Eggs);
let Tacos = ["https://cdn.loveandlemons.com/wp-content/uploads/2018/09/IMG_13763-cropped2.jpg", "https://cdn.loveandlemons.com/wp-content/uploads/2018/09/IMG_13755-crop2.jpg", "https://cdn.loveandlemons.com/wp-content/uploads/2018/09/2.jpg"];
console.log(Tacos);
// Make sure to declare your HTML elements as variables! 
let result = document.querySelector(".result");
// Submit Button 
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");

b1.onclick = function() {
    let i1 = document.querySelector(".i1").value;
    let numBreakfasts = Oats.length;
    document.querySelector(".number").innerHTML = numBreakfasts;
    if (i1 === "Oats") {
        for (let oat of Oats) {
            let img = "<img alt='Pictures of Blueberry Overnight Oats, Blueberry Baked oatmeal, and Homemade Granola'src=" + oat + ">";
            result.insertAdjacentHTML("beforebegin", img);
        }
    } else if (i1 === "Eggs") {
        for (let eggs of Eggs) {
            let img = "<img  alt='Pictures of Blueberry Overnight Oats, Blueberry Baked oatmeal, and Homemade Granola' src=" + eggs + ">";
            result.insertAdjacentHTML("beforebegin", img);
        }
    } else if (i1 === "Tacos") {
        for (let tacos of Tacos) {
            let img = "<img alt='Pictures of Avocado Tomatillo Breakfast Tacos, Roasted Sweet Potato & Poblano Breakfast Tacos, and Bacon & Egg Breakfast Tacos with Shiitake Vegan Bacon' src=" + tacos + ">";
            result.insertAdjacentHTML("beforebegin", img);
        }
    } else {
        document.querySelector(".result").innerHTML = "Try entering something!";
    }
};

b2.onclick = function() {
    let i2 = document.querySelector(".i2").value;
    Oats.push(i2);
    let img = "<img alt='the picture of breakfast the user put into' src=" + i2 + ">";
    result.insertAdjacentHTML("beforebegin", img);
    let numBreakfasts = Oats.length;
    document.querySelector(".number").innerHTML = numBreakfasts;
};