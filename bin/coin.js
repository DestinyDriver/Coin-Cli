#!/usr/bin/env node
const {program}=require("commander");
const figlet = require('figlet');

const pkg=require("../package.json");
const colors=require("colors");

program.version(pkg.version)
.command('key',"Manage keys").command('check',`check the coin price info`);

program
  .command('about')
  .description('Show information about this CLI tool')
  .action(() => {
    console.log(
  figlet.textSync('Coin CLI', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
  }).cyan
);
    console.log('\n🪙 '+' Crypto Price Checker'.cyan.bold);
    console.log('---------------------------------------');
    console.log('🔧 This CLI fetches real-time cryptocurrency prices');
    console.log('   using the CoinGecko Pro API (demo version).');
    console.log('\n🔑 To use this tool, you must set an API key.');
    console.log('👉 Get your FREE demo API key here: '.yellow + 'https://www.coingecko.com/en/api'.green);
    console.log('\n💡 Example usage:');
    console.log('   coin key set               '.yellow + '# Set your API key');
    console.log('   coin check price --coin=bitcoin --cur=inr');
    console.log('\n---------------------------------------');
    console.log('👨‍💻  ' + 'Made with ❤️  by '.white + 'destinydriver'.magenta.bold);
    console.log('\n');
  });

  program
  .command('help')
  .description('Show help information')
  .action(() => {
    console.log('\n📖  ' + 'Coin CLI Help'.cyan.bold);
    console.log('---------------------------------------');
    console.log('🔧  Use this CLI to check real-time crypto prices using CoinGecko.');
    console.log('💡  Key Commands:');
    console.log('   ' + 'coin key set'.yellow + '        → Set your API key');
    console.log('   ' + 'coin key show'.yellow + '       → Show your current API key');
    console.log('   ' + 'coin key remove'.yellow + '     → Delete your saved API key');
    console.log('   ' + 'coin check price'.yellow + '    → Fetch price for one or more coins');
    console.log('   ' + 'coin about'.yellow + '          → Info about this CLI');
    console.log('   ' + 'coin help'.yellow + '           → Show this help screen');
    console.log('\n');
  });

  program
  .command('support')
  .description('Get help or report issues')
  .action(() => {
    console.log('\n🙋 Need help or want to report a bug?');
    console.log('👉 Open an issue at: ' + 'https://github.com/destinydriver/coin-cli/issues'.cyan);
    console.log('📧 Or contact: ' + 'destinydriverx@gmail.com\n'.yellow);
  });

  





program.parse(process.argv);


















































// console.log(process.argv);

