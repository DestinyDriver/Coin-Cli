const keyManager=require("../lib/key-manager");
const {API}=require("../lib/CryptoApi");

async function price(args){
    try{
        const km=new keyManager();
        const key=km.getKey();
        if(!key){
            throw new Error("Key Not Found");
        }

        const api=new API(key);
        const coins = args.coin.split(" ").map(c => c.trim());

        
        
        for(let i=0;i<coins.length;i++){
            let o=await api.getprice(coins[i],args.cur);
            if(!o){
                return;
            }
            console.log(o);
            
        }

    }catch(err){
        console.log(err.message.red);
    }
}

module.exports={
    price,
}