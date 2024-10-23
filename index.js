// let heading= document.querySelector('h1');

// function change_color(color,time){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             let num= Math.floor(Math.random()*10)+1;
//             if(num>7) {
//                 console.log("promise was rejected");
//                 reject();

//             }
//             console.log(`color was changed to ${color}`)
//             heading.style.color=color;
//             resolve()

//         }, time);

//     })

// }

// async function  solver(){
// try{
//    await change_color("green",1000);
//    await change_color("red",1000);
//    await change_color("blue",1000);
//    await change_color("brown",1000);
// }
// catch (err){
//     console.log("error occured",err)
// }
// let a=5;
//    console.log(a);
//    console.log("new number is ",a+3);

// }

// solver();

// // change_color("red",1000,()=>{
// //     change_color("blue",1000,()=>{
// //         change_color("green",1000,()=>{
// //             change_color("brown",1000)
// //         })
// //     })
// // })

// // let heading= document.querySelector('h1');

// // function change_color(color,time){

// //     return new Promise((resolve,reject)=>{
// // let num=Math.floor(Math.random()*10)+1;

// //        if(num>5){

// //     setTimeout(() => {

// //         heading.style.color=color;
// //         resolve("color generation was successfull")
// //         // console.log()
// //         // callback();

// //     }, time)
// // }

// // else {

// //     reject(
// //     "color generation was failed"
// //     )
// // }
// // } )
// // }

// // change_color("green",1000).then(()=>{
// //     console.log(" green color changed successfully");
// //     return change_color("red",1000);
// // }).then(()=>{
// //     console.log(" red color changed successfully");
// //     return change_color("blue",1000);
// // }).then(()=>{
// //     console.log("blue color change was successfull");
// //     return change_color("blue",1000);

// // })

// // .catch(()=>{
// // console.log("color was not changed");
// // })

// // async function greet() {
// //     // throw ("error occured")
// //     return "hello";
// // }

// // greet().then((res)=>
// //     console.log("promise was resolved result is ",res)
// // )
// // .catch((err)=>{
// //     console.log("error occured in catch",err)
// // })
// // let demo= async ()=>{return 5};

// // function getNum(){
// //     return new Promise((resolve,reject)=>{
// //          setTimeout(() => {

// //             let num=Math.floor(Math.random()*10)+1;
// //             console.log(num);
// //         // console.log("5")
// //         resolve();

// //     }, (1000));

// //     })

// // }

// // async  function demo(){

// // await getNum();
// // await getNum();
// // await getNum();
// // await getNum();

// // }

// // demo();

// // change_color("red",1000,()=>{
// //     change_color("blue",1000,()=>{
// //         change_color("green",1000,()=>{
// //             change_color("brown",1000)
// //         })
// //     })
// // })

// // function saveToDb(data,success,failure){
// //     let internet_speed=Math.floor(Math.random()*10)+1;
// //     if(internet_speed>5) {
// //         // console.log("your data was saved");
// //         success();
// //     }

// //     else {

// //         // console.log("your internet connection is weak");
// //         failure();
// //     }
// // }

// // function saveToDb(data){
// //     let internet_speed=Math.floor(Math.random()*10)+1;

// //     return new Promise((resolve,reject)=>{
// //         if(internet_speed>5)  resolve("data save success");
// //         else reject("data save failed");

// //     })

// // }

// // // console.log(saveToDb("hello"))

// // let request=saveToDb("hello");
// // // console.log(request);

// // request.then((result)=>{
// //     console.log("result : ",result,"resultend");
// //     console.log("data save was successfull");
// //   return  saveToDb("data2")
// // }).then(()=>{
// // console.log("data2 was saved");
// // return saveToDb("data3");
// // }).then(()=>{
// //     console.log("data3 was saved");
// // })

// // // request.then(()=>{
// // //     console.log("data save was successfull");
// // //     saveToDb("data2").then(()=>{
// // //         console.log("data2 was saved");
// // //         saveToDb("data3").then(()=>{
// // //             console.log("data3 was saved");
// // //         })
// // //     })
// // // })

// // .catch((error)=>{
// //     console.log("error: ",error,'errorend');
// //     console.log("error in data save ");
// // })

// // saveToDb("pillanamhai",()=>{

// //     console.log("your data was saved")
// //     saveToDb("data2",()=>{
// //         console.log("data2 was saved");
// //         saveToDb("data3",()=>{
// //             console.log("data3 was saved");
// //         },()=>{
// //             console.log("error in data3 save");
// //         })
// //     },()=>{
// //         console.log("error in data2 save");
// //     })

// // },
// //     ()=>{

// //         console.log("your internet connection is poor")

// //     }
// //     );

// let json_data='{"message":"https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_1654.jpg","status":"success"}'
// console.log(json_data);
// let js_data=JSON.parse(json_data);
// console.log(js_data.message)

// let stud={
//     name:'alok',
//     marks:55
// }
// console.log(stud);
// let data=JSON.stringify(stud)
// console.log(data);

// let url="https://icanhazdadjoke.com/";

// fetch(url).then((res)=>{

//     console.log("data was fetched successfully")
//     return res.text()

// }).then((data)=>{
//     console.log(data.joke);
//     return fetch(url)
// })

// .catch((err)=>{
//     console.log("ERROR",err)
// })

// import axios from 'axios'
// let axios =require('axios')
// import axios from axios

// import axios from 'axios';

// let url = "https://catfact.ninja/fact";
// let url = "https://dogapi.dog/api/facts";
let url = "https://dog.ceo/api/breeds/image/random";

async function greet(params) {
  try {

    let res = await axios.get(url);
    // let final_data=res.data.fact;
    // let final_data=res.data.facts[0];
    let final_data=res.data.message;
        console.log(final_data)
    // console.log(final_data);
    // p.innerHTML=final_data;
    p.style.backgroundImage=`url(${final_data})`;
    // p.append(final_data);
    // let img=document.querySelector('img');
    // img.setAttribute("src",final_data);
    return final_data;
   
  } catch (err) {

    console.log("ERROR : ", err);

  }
  // console.log("hello");
}

let btn=document.querySelector('button');
let p= document.querySelector('#inner');
btn.addEventListener('click',function(){
greet();
})



// async function greet(params) {
//     try{
//     let res=await fetch(url)
//     let data= await res.json();
//     console.log(data);

//     }
//   catch(err){
//     console.log("ERROR : ",err)

//   }
//   console.log("hello");

// }

// greet();

// console.log("heloo world");

// console.log(url);
