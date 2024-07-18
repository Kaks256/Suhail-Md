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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256743391566";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_58_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICA1OSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICA4NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgMTY1LFxuICAgICAgICA3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVZZTNHR2N6V2l5TFN0QzdMTUtSdVBVUGhqLzZHekRSNm5ZVGRQUms5SEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpHNUZoWERUUjdPMW9pQjd2a1drdmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjI0Mjc2Y2UtYzdlYi00ZGE5LTljMzMtYWE3MGIzNDkyN2EzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OCxcbiAgICAgIDI1MCxcbiAgICAgIDk5LFxuICAgICAgMTIwLFxuICAgICAgMTQ3LFxuICAgICAgMTEsXG4gICAgICA0NSxcbiAgICAgIDExMixcbiAgICAgIDE2NyxcbiAgICAgIDM5LFxuICAgICAgNDEsXG4gICAgICAxMTcsXG4gICAgICAyMTIsXG4gICAgICAyMTcsXG4gICAgICA1LFxuICAgICAgMzQsXG4gICAgICA0NSxcbiAgICAgIDg2LFxuICAgICAgMTk3LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMjM5LFxuICAgICAgNTEsXG4gICAgICAxMjcsXG4gICAgICAxNjksXG4gICAgICAxNSxcbiAgICAgIDI1NCxcbiAgICAgIDMxLFxuICAgICAgMTc2LFxuICAgICAgMjA4LFxuICAgICAgMTU3LFxuICAgICAgNjAsXG4gICAgICAxMSxcbiAgICAgIDE0MixcbiAgICAgIDE4MyxcbiAgICAgIDIzNixcbiAgICAgIDE5NyxcbiAgICAgIDY0LFxuICAgICAgNDUsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaOVFTOE1RRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzQzMzkxNTY2OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR29vZ2xlXCIsXG4gICAgXCJsaWRcIjogXCIxMTkwMTU4OTY2ODM2OjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09MaHQzY1E2WWJrdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUFZVZUJYWGs0dEU2ZWl5aVdyVFdtUVJBMTRtNHB6UnEveStJN1A5dFZnaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHN1NZdC96dW9NNGFYaXAxRkVVK094czF4THQ3eHBlU2IwL000YzFWbGVKdHc2cGhtTmhKcXhQK21VWTJmeUZzZXBRZ1cwSGFHZTN6dWlGTHJ6ZG5CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyU0hJRzdrWlpEWHVndllwMTJDNCt5bzlORzZFNytvSTdjMDNubUQ5VGdvWWU0OTlIQ09Ibll1RUUzSThxc1FBcDE3QnNRV2xiWHpHZmpFR0JQL0ZnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NDMzOTE1NjY6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMwMzkyMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Google",


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
