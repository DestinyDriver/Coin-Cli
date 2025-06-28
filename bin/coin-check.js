const {program}=require('commander');
const colors=require("colors");

const {price}=require("../commands/check");

program.command('price').description("check the price of coins").option("--coin <type>","To check the price of coin","bitcoin,ethereum").option("--cur <cur>","Change the Currency","inr").action((args)=>{
    
    price(args);
})

program.parse(process.argv);