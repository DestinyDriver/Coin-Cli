const axios= require('axios');
const colors=require('colors');

class API{
    constructor(apikey){
        this.apiKey=apikey;
        this.baseURL=`https://api.coingecko.com/api/v3/simple/`;
    }

    async getprice(coins,cur){
        try{

            const res=await axios.get(`${this.baseURL}price?ids=${coins}&vs_currencies=${cur}&x_cg_demo_api_key=${this.apiKey}`);
            let output='';
            output+=`coin: `.green+coins.yellow+` |price: `.green+`${cur} ${res.data[coins][cur]}`.yellow;
            // console.log(res.data[coins][cur]);
            return output;
            
            

        }catch(err){
            errorHandler(err);
            
            return ;
            
        }
    }
}

const errorHandler=err=>{
    if(err.response.status===401){
                throw new Error("Your API Key is Invalid".red);
            }else if(err.response.status===404){
                throw new Error("API is not Responding".red);
            }else{
                throw new Error("Something is Wrong".red);


            }
}

module.exports={
    API,
};