require('dotenv').config();
const fs = require('fs');
const { color } = require('./lib/myfunc');

const toBool = (value) => value === "true";


global.owner = {"2250716961826"}process.env.OWNER_NUMBER;
global.nomerowner ={"𝑻𝑯𝑬 𝑩𝑰𝑮𝑾𝑰𝑵𝑵𝑬𝑹 㟼"} process.env.OWNER_NUMBERS;

global.menu_image = process.env.MENU_IMAGE;

global.ANTI_TEMU = true(process.env.ANTI_TEMU);
global.ANTI_TAG = true (process.env.ANTI_TAG);

global.bot_name ={𝑩𝑰𝑮𝑾𝑰𝑵𝑵𝑬𝑹㟼} process.env.BOT_NAME;

global.public = false (process.env.PUBLIC);


global.packname ={"𝑻𝑯𝑬 𝑩𝑰𝑮𝑾𝑰𝑵𝑵𝑬𝑹 㟼"} process.env.PACK_NAME;
global.author = process.env.AUTHOR;
global.ANTI_DELETE = false (process.env.ANTI_DELETE);
global.ANTI_CALL = false (process.env.ANTI_CALL);


global.unavailable = false(process.env.UNAVAILABLE);
global.available = true (process.env.AVAILABLE);
global.autoreadmessages = false (process.env.AUTO_READ_MESSAGES);
global.chatbot = true (process.env.CHATBOT);
global.autoreact = false (process.env.AUTO_REACT);
global.autoTyping = false (process.env.AUTO_TYPING);
global.autoViewStatus = true (process.env.AUTO_STATUS_VIEW);
global.autoStatusReact = false (process.env.AUTO_STATUS_REACT);
global.welcome = false (process.env.WELCOME);
global.anticall = false (process.env.ANTI_CALL);
global.autobio = false (process.env.AUTO_BIO);


global.prefix ={"´"} process.env.PREFIX;


let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(color(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});
