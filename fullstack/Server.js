// // console.log("Iam srever side javaScript")
// // //output methods
// // //pop output methods

// // // ---BUILT IN WINDOW FUNCTIONS-- IT IS ONLY WIRK WITH CLIENT SIDE(Browser),only working with client side js  or browser side js,these are all  comes under window object
// // // alert();
// // // confirm();
// // // prompt();
// // //window object is residing inside a browser and window is the global object for browser(parent)
// // //client side js is window object (parent object)
// // //server side js is global object(node js)
// // // window.alert("it is executing only in side browser"+(2+2));//alerts only working with window object,not working with global object,it has only on eoption "OK"
// // // confirm("Iam confirm here has two options are OK and Cancel");
// // // let age=10;
// // // if(age>21)
// // // {
// // //     alert("You are eligible for vote");
// // // }
// // // else
// // // {
// // //     alert("Not eligible for vote");
// // // }
// // function reverseString(str){
// //     return [...str].reverse().join("");
// // }
// // let user=prompt("give names");
// // document.write(reverseString(user));
// // //console is global and window object





// // //print content on web page use document.write();,it is only for testing,not for application purpose because it is override the all content
// // //The write() method writes html expressions os js code to a document,if it is used after html document is fully loaded,it will delete all
// // document.getElementById("name").innerText= "Kadapala";
// // //text will taking plain text ,innerHtml taking html tags
// // //documet is only for window object
// let User={
//     name:"sivaji",
//     details:()=>
//     {
//         console.log(this);
//     },
// };
// User.details();
let userobj={
    name:"sivaji",
    age:20,
    details:function()
        {
            console.log(`my name is ${this.name}`)
        },
    
};
userobj.details();