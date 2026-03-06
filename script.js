const foods = [
{ name:"Osh", calorie:250, protein:6, fat:10, carb:35 },
{ name:"Choyxona oshi", calorie:260, protein:7, fat:11, carb:36 },
{ name:"To‘y oshi", calorie:280, protein:8, fat:12, carb:38 },
{ name:"Somsa", calorie:300, protein:8, fat:15, carb:30 },
{ name:"Tandir somsa", calorie:320, protein:9, fat:16, carb:32 },
{ name:"Manti", calorie:220, protein:12, fat:7, carb:28 },
{ name:"Chuchvara", calorie:200, protein:10, fat:6, carb:25 },
{ name:"Lag'mon", calorie:180, protein:9, fat:5, carb:25 },
{ name:"Qovurma lag'mon", calorie:240, protein:11, fat:9, carb:30 },
{ name:"Shashlik", calorie:270, protein:20, fat:18, carb:0 },
{ name:"Norin", calorie:290, protein:15, fat:14, carb:20 },
{ name:"Dimlama", calorie:210, protein:13, fat:12, carb:15 },
{ name:"Basmasi", calorie:230, protein:14, fat:13, carb:17 },
{ name:"Mastava", calorie:190, protein:8, fat:6, carb:27 },
{ name:"Sho'rva", calorie:150, protein:10, fat:5, carb:10 },
{ name:"Qozon kabob", calorie:350, protein:22, fat:25, carb:5 },
{ name:"Tandir go'sht", calorie:330, protein:24, fat:22, carb:2 },
{ name:"Hasip", calorie:260, protein:18, fat:19, carb:4 },
{ name:"Kalla-pacha", calorie:400, protein:25, fat:35, carb:3 },
{ name:"Qiyma kabob", calorie:280, protein:19, fat:20, carb:1 },
{ name:"Jiz", calorie:370, protein:23, fat:30, carb:2 },
{ name:"Tuxum barak", calorie:210, protein:11, fat:8, carb:22 },
{ name:"Barak", calorie:220, protein:12, fat:9, carb:24 },
{ name:"Gumma", calorie:310, protein:7, fat:17, carb:35 },
{ name:"Non", calorie:260, protein:8, fat:2, carb:55 },
{ name:"Patir", calorie:300, protein:9, fat:10, carb:45 },
{ name:"Obi non", calorie:270, protein:8, fat:3, carb:58 },
{ name:"Katlama", calorie:330, protein:7, fat:18, carb:38 },
{ name:"Bo'g'irsoq", calorie:350, protein:6, fat:20, carb:40 },
{ name:"Chalpak", calorie:340, protein:7, fat:19, carb:39 },
{ name:"Qatlama somsa", calorie:360, protein:9, fat:21, carb:35 },
{ name:"Do'lma", calorie:180, protein:9, fat:7, carb:18 },
{ name:"Shivit oshi", calorie:210, protein:10, fat:6, carb:29 },
{ name:"Moshxo'rda", calorie:170, protein:9, fat:4, carb:26 },
{ name:"Moshkichiri", calorie:200, protein:10, fat:6, carb:30 },
{ name:"Halisa", calorie:240, protein:15, fat:10, carb:22 },
{ name:"Tovuq sho'rva", calorie:140, protein:12, fat:4, carb:5 },
{ name:"Baliq kabob", calorie:220, protein:21, fat:14, carb:0 },
{ name:"Qaynatma sho'rva", calorie:160, protein:13, fat:6, carb:8 },
{ name:"Achchiq-chuchuk", calorie:90, protein:2, fat:1, carb:15 },
{ name:"Baqlajon salati", calorie:120, protein:3, fat:8, carb:10 },
{ name:"Sabzavotli dimlama", calorie:150, protein:5, fat:6, carb:20 },
{ name:"Qaymoq", calorie:450, protein:3, fat:48, carb:2 },
{ name:"Suzma", calorie:110, protein:8, fat:6, carb:5 },
{ name:"Qatiq", calorie:60, protein:3, fat:3, carb:4 },
{ name:"Chakka", calorie:130, protein:9, fat:8, carb:6 },
{ name:"Navvot", calorie:380, protein:0, fat:0, carb:95 },
{ name:"Holvaytar", calorie:420, protein:5, fat:18, carb:60 },
{ name:"Sumalak", calorie:300, protein:6, fat:8, carb:55 },
{ name:"Parvarda", calorie:390, protein:0, fat:0, carb:97 }
];

let selectedFood = null;
let dailyCalories = 0;
const foodList = document.getElementById("foodList");

function showAllFoods(){
    document.getElementById("showBtn").style.display = "none";

    foods.forEach(food => {
        let li = document.createElement("li");
        li.textContent = food.name;
        li.onclick = () => showFood(food);
        foodList.appendChild(li);
    });
}

function showFood(food){
    selectedFood = food;

    document.getElementById("foodName").innerText = food.name;
    document.getElementById("calorie").innerText = food.calorie;
    document.getElementById("protein").innerText = food.protein;
    document.getElementById("fat").innerText = food.fat;
    document.getElementById("carb").innerText = food.carb;

    const img = document.getElementById("foodImage");
    img.style.display = "block";
    img.style.opacity = "0";

    img.src = `https://source.unsplash.com/featured/600x400/?${food.name},uzbek food`;

    img.onload = function(){
        img.style.opacity = "1";
    };
}

function calculatePortion(){
    let portion = document.getElementById("portion").value;
    if(!selectedFood) return;

    document.getElementById("calorie").innerText = (selectedFood.calorie * portion / 100).toFixed(1);
    document.getElementById("protein").innerText = (selectedFood.protein * portion / 100).toFixed(1);
    document.getElementById("fat").innerText = (selectedFood.fat * portion / 100).toFixed(1);
    document.getElementById("carb").innerText = (selectedFood.carb * portion / 100).toFixed(1);
}

function addToDaily(){
    let cal = parseFloat(document.getElementById("calorie").innerText);
    dailyCalories += cal;
    document.getElementById("dailyTotal").innerText = dailyCalories + " kcal";
}