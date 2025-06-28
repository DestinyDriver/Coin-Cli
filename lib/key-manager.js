const ConfigStore=require("configstore");
const pkg=require("../package.json")

class keyManager{

    constructor(){
        this.conf=new ConfigStore(pkg.name)
    }

    setKey(apiKey){
        this.conf.set({'apiKey':apiKey});
    }

    getKey(){
        const key=this.conf.get('apiKey');

        if(!key){
            throw new Error("No Api Key Found ! - First Set the Key");
        }

        return key;
    }

    del(){
        const key=this.conf.get('apiKey');

        if(!key){
            throw new Error("No Api Key Found ! - First Set the Key");
        }

        this.conf.delete('apiKey');

        return;
    }



}

module.exports=keyManager;