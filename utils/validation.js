const colors=require("colors");

const checker=(input)=>{
    if(input===''){
        return `API key must be a non-empty string.`.red;
    }

    return true;

}

module.exports=checker;