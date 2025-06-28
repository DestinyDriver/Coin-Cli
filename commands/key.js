const inq=require("inquirer");
const colors=require("colors");

const keyManager=require("../lib/key-manager");
const checker=require("../utils/validation");



async function set(){
    const km=new keyManager();
    const input=await inq.prompt([{
        type:'input',
        name:'key',
        message:'Enter the API Key:'.green,
        validate: checker,
    }])

    km.setKey(input.key);
    console.log('Api Key is Succesfully set'.blue);
}

function show(){

    try{
        const km=new keyManager();
        const key=km.getKey('apiKey');

        if(!key){
            throw new error("Key is not Found");
        }

        console.log("Current Api Key is : ".blue+key.yellow);
    }catch(err){
        console.log(err.message.red);
    }
    
}

function del(){

    const km=new keyManager();

    try{
        const key=km.getKey('apiKey');
        if(!key){
            throw new Error("Key is not Found");
        }
        km.del();
        console.log("Api Key is deleted sucessfully".blue);
    }catch(err){
        console.log(err.message.red);
    }
    
    
}



module.exports={
    set,show,del
}