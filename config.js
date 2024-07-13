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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_37_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgNixcbiAgICAgICAgNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyLFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICA2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDYzLFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDc0LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNmd5enlnWnl0RXdia05oMHhFR05hYkFrRUVEb254a29xQWpkNy9sR0hWTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVHhEWTFYQ2VRVS1uQkhkcEpTbVpoQVwiLFxuICBcInBob25lSWRcIjogXCJlZjM3ZjBjZi00ZjIyLTQ2NGEtYjhiYS01M2ZiODY3ZTY0MjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICA1MCxcbiAgICAgIDQ3LFxuICAgICAgMzAsXG4gICAgICAyMTcsXG4gICAgICA2LFxuICAgICAgMzUsXG4gICAgICAxMzIsXG4gICAgICAxMTIsXG4gICAgICA5MCxcbiAgICAgIDE2MCxcbiAgICAgIDE4NCxcbiAgICAgIDE5NSxcbiAgICAgIDYsXG4gICAgICA4MSxcbiAgICAgIDIzMixcbiAgICAgIDE1MSxcbiAgICAgIDE3NyxcbiAgICAgIDE4MixcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDExLFxuICAgICAgMTU1LFxuICAgICAgMTQyLFxuICAgICAgNDUsXG4gICAgICAxMjMsXG4gICAgICAxODAsXG4gICAgICAxNDAsXG4gICAgICAyNTQsXG4gICAgICA3NCxcbiAgICAgIDcsXG4gICAgICAyNDQsXG4gICAgICAxMzEsXG4gICAgICAzOCxcbiAgICAgIDIyNixcbiAgICAgIDIyNixcbiAgICAgIDE2OCxcbiAgICAgIDQ0LFxuICAgICAgMjksXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2UEdUN0hHR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzQzMzkxNTY2OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR29vZ2xlXCIsXG4gICAgXCJsaWRcIjogXCIxMTkwMTU4OTY2ODM2OjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056aHQzY1F6L2JLdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUFZVZUJYWGs0dEU2ZWl5aVdyVFdtUVJBMTRtNHB6UnEveStJN1A5dFZnaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPOURJTmZwWVR2MEp6ZkJTd1UwbjR4YVl4Y3gvNXBvMGNHd2xxVVZBNlJPcG9XY09CQVp2T2d6Smhpc3d5T2NEYmJXemxMSGFwSFRPamhxQUxtL25CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGWThIZ3ZMeUNJNEdLVHlBckdvR2FPL3N5cWJtYkFLOXJ4a0pPTzZBZlRyMFZZOGdFN0RVZm9RSUMvRGRjalNiVWgzeHpweUVhSm9YSUZnSnFuODZqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NDMzOTE1NjY6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg5MjI0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURFcFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREVwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM2ZqMUpxQU5iY3dHU3RqL09yTGhDNExRbXNqVkFQRzVOZ3ZQbE1pSXo0bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNTA0NzQ3MTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3NzgzMDEzMTNcIn0iCn0="  // PUT your SESSION_ID 


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
