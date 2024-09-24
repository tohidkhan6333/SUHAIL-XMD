const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu";
global.website=process.env.GURL || "https://chat.whatsapp.com/FPQYQkbqzqw8XOGdDWoxwu" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/042cd0b6121a7923fd5d2.jpg" || "https://telegra.ph/file/042cd0b6121a7923fd5d2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© TOHID-KHAN" 


global.devs = "918930358452" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918930358452";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/042cd0b6121a7923fd5d2.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_08_09_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExLFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICA0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICA4MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDc5LFxuICAgICAgICA2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvVmJMSE9oMTBRMERFQ0ZmSHZwWUtPeUY4MjdFN3VGS3BFeUg3SGpIOEh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODkzMDM1ODQ1MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjIyNUZCM0NDREM3NTE0MkEzMzUwRkRERkJBOTM5MTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3MTc2MTA0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImNrY2lwYkVkVGVTN3p4V3hJVkplUEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmU3NjQwNzQtODA4ZC00ZmQ1LWI0MTktMTBkODVmMDI2NDY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyMTgsXG4gICAgICAzOCxcbiAgICAgIDE3NSxcbiAgICAgIDExNCxcbiAgICAgIDE1LFxuICAgICAgMTgyLFxuICAgICAgMjI5LFxuICAgICAgMTIwLFxuICAgICAgNDcsXG4gICAgICA3OSxcbiAgICAgIDExNyxcbiAgICAgIDIxMCxcbiAgICAgIDM1LFxuICAgICAgMTEyLFxuICAgICAgMzEsXG4gICAgICAxMTMsXG4gICAgICA5NCxcbiAgICAgIDE2NCxcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAxNDksXG4gICAgICAxNTcsXG4gICAgICAyLFxuICAgICAgMTQ1LFxuICAgICAgNjYsXG4gICAgICAxNzksXG4gICAgICA4NCxcbiAgICAgIDc1LFxuICAgICAgMTQwLFxuICAgICAgMTIyLFxuICAgICAgMjU1LFxuICAgICAgMTY4LFxuICAgICAgNzQsXG4gICAgICA2OCxcbiAgICAgIDIzMCxcbiAgICAgIDcwLFxuICAgICAgMTk3LFxuICAgICAgODgsXG4gICAgICAxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3MjJWUTY3R1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4OTMwMzU4NDUyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWE4oSdXFxuXFxuXFxu8J2Vi1xcblxcblxcbvCdlYZcXG5cXG5cXG7ihI1cXG5cXG5cXG7wnZWAXFxuXFxuXFxu8J2Uu1wiLFxuICAgIFwibGlkXCI6IFwiMjQxODM3MTc2NTY1ODc4OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU95ejVrRUVKMjd5cmNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3VGtxT21TcUtuRUZodzIyWkkzMzd1UjF5Y0VUZm1ncW5icE96NXFHRXprPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjM2QUI2d0dhYzllVEhhWkNZemhVdnVzTnZGRmFIcVlEc0ZsUEJhdVExN2tmaTVkeUFCaHhma1ZsaTU5NEpxTnVlSFVBTnN3TWVNOXlldnJRckZWVkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhuRkpRNHVzVWZwbmRlMEI2K01lTlNoelpnVlM0YUgyajNwRG5NalFhbjdVQUVIalZWTWlhQ3RGTThuWWFRMGp6MktlQ2RuNTRvZ1BzZkRrL00wRGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODkzMDM1ODQ1Mjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MTc2MDk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0g4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLSDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyYSt0cmZ1QUJMc3E3aDB2Z05NVThaZVdrMk1TeitKTnBUK0ZjamNsTGhjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMjc0NzEzNjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzE3MTgyNzc1MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "`『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ TOHID-KHAN ® 』" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Mr-Tohid",
  packname: process.env.PACK_NAME || "Mr-Tohid",
  botname : process.env.BOT_NAME  || "Mr-Tohid",
  ownername:process.env.OWNER_NAME|| "Mr-Tohid",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "TOHID"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
