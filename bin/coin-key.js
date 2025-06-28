const {program}=require("commander");
const commands=require("../commands/key");


program.command('set').description('Set the API KEY').action(()=>{
    commands.set();
})


program.command('show').description('Show the API KEY').action(()=>{
    commands.show();
})


program.command('delete').description('Delete the API KEY').action(()=>{
    commands.del();
})

program.parse(process.argv);