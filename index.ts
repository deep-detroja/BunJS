// 01- files import 

// import  info  from "./01_Read File/info.txt";
// import user from "./01_Read File/user.json"
// import { makeName } from "./01_Read File/module";

// console.log(info);
// console.log(user);
// console.log(makeName("Deep","Detroja"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 02- Bun Environment => "env file", "env.ts file",

// way-1
// const PORT=process.env.PORT
// console.log(PORT)

// way-2
// const PORT=Bun.env.PORT
// console.log(PORT)

// way-3
// const PORT=import.meta.env.PORT
// console.log(PORT)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//03 - file i/o


const file = Bun.file("./02-File-IO/user.txt");
console.log(file.size); // size of file in bits
console.log(file.type)
console.log(file.name);
const isFileExist = await file.exists();
console.log(isFileExist);

//write content in file
const data = "Hii Deep Welcome back";
const fileSize = await Bun.write("./02-File-IO/user2.txt",data);
console.log(fileSize);

//copy file

const oldFile= Bun.file("./02-File-IO/user2.txt");
const newFile = Bun.file("./02-File-IO/copy-user2.txt");

await Bun.write(newFile,oldFile);

// ----------------------------------// ----------------------------------// ----------------------------------

// File IO API

import fs from "fs";

fs.mkdir("03-File-API",(err)=>{
if(err){
    console.log(err);
}
console.log("File Created")
})

//Get files

fs.readdir("03-File-API",(err,file)=>{
    if(err){
        console.log(err)
    }
    console.log(file);
})
