const fs = require('fs');
const generatePage = require('./src/page-template');
const profileDataArgs = process.argv.slice(2);
const [named, gitHub] = profileDataArgs;

fs.writeFile('./index.html',generatePage(named,gitHub), err => {
    if(err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!')
});