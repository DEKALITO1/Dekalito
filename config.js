const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0721305655";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_17_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg1LFxuICAgICAgICA4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MSxcbiAgICAgICAgNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MixcbiAgICAgICAgMjA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk1LFxuICAgICAgICA0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5ML3lyOHhRRUFveThOMk9WSkw3eXNkTStuK281cGtMZEtycGtyS3Uwdnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzIxMzA1NjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQjZDMzI5QjU5NzlCOEI0MkExQUUwREQ5RTRGMkQ4OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkxMDU0NjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjEzMDU2NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE4MTIxMzFFNjVGOTc5MDgzQjEyODcxRUQ0QUY5RTVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTEwNTQ2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyMTMwNTY1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzU2RUY0MEQ4MUE2MDJFQzUzNUMyMDYwNjJCOUQ0M0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MTA1NDY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzIxMzA1NjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MDMzRUE2QURGRDVFM0JEREU1QjZCODA0RDEyNDFBMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkxMDU0NjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTFhNS014dlBTcS1QRWtDT3U2N2hOd1wiLFxuICBcInBob25lSWRcIjogXCI4MTVkZmJlNC1hYmQ5LTRkNDktYThlOC03NzcyN2U5YzY5YzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICAyMDcsXG4gICAgICA0MCxcbiAgICAgIDE4MSxcbiAgICAgIDEwNixcbiAgICAgIDIzMSxcbiAgICAgIDEyNyxcbiAgICAgIDE5OCxcbiAgICAgIDIzLFxuICAgICAgMjUsXG4gICAgICA1LFxuICAgICAgNDYsXG4gICAgICA0MyxcbiAgICAgIDY1LFxuICAgICAgNDAsXG4gICAgICAxOTQsXG4gICAgICAxNjIsXG4gICAgICAyMDcsXG4gICAgICA3MixcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDE3OSxcbiAgICAgIDE4NCxcbiAgICAgIDk2LFxuICAgICAgNTEsXG4gICAgICAzMSxcbiAgICAgIDIyOSxcbiAgICAgIDEzNixcbiAgICAgIDc4LFxuICAgICAgODMsXG4gICAgICAyMDQsXG4gICAgICAzNSxcbiAgICAgIDE0NSxcbiAgICAgIDIyNCxcbiAgICAgIDU1LFxuICAgICAgMTMsXG4gICAgICAxNDQsXG4gICAgICAyOSxcbiAgICAgIDE5NixcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5YSkNaQllIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjEzMDU2NTU6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgyNzY0MjgwMjQyMzA5OjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiREVLQUxJVE8gTklIQUzwn5iO8J+YjvCfmI7wn6SPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZpbWEwRUVMTHYzYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMQVE3emphSUFjUFV2Nk5zSDFYY3g2WWFJWWZvMEJQRHBoYldmYmFKQmtNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBlcEVxSkJVeHRKUXRKQ2ZoRVd4WkRNZWpJcGsvQllYWFp0b0lQUWgxS0c4OFNjMmJsQWJacXI5VjFrd21XUm0yaWhBYlJxSGFybVgxVFF2Nmh5SURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZaODhaZ3dXcVB1aUlIUTdWeDRNZVJrWWpkSkZueXpCL1BkU0VNa2FSU0NQay9xRWZRWStEVWxtUU9Yd0FQZWEvdmdWWXMrcUJjY25aZHJpM1RPdWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyMTMwNTY1NToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxMDU0NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHWUpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdZSi5qc29uIjogIntcImtleURhdGFcIjpcIm5LWExhQ0FLdnpOenAwUldETllXd2RObUp6N2hMemo2RkJ2NHBycnZ5VVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2ODUyNzYzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MTA1NDYzMzUyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
