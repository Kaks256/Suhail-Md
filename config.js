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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_09_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk0LFxuICAgICAgICA0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDgsXG4gICAgICAgIDUyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5icVZ4YjZSY3hXcXFnZXZsR0xTWTdGQjhRSGtGNGhpVWRpUTJza1hsbWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRHNEFXN0k1UUxtZnA3QUhEemJJZ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTMwMjc2NzUtZDA4Zi00MTdjLWE4NGEtNzRhNWMzNjdkNWIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgNTIsXG4gICAgICAyNDAsXG4gICAgICAxMTUsXG4gICAgICAyNDYsXG4gICAgICAxMzAsXG4gICAgICAxNTksXG4gICAgICAxNDcsXG4gICAgICAxOTQsXG4gICAgICA0MyxcbiAgICAgIDI1MixcbiAgICAgIDE1NyxcbiAgICAgIDMyLFxuICAgICAgMTAxLFxuICAgICAgMTkzLFxuICAgICAgNDYsXG4gICAgICAxMDUsXG4gICAgICAxMzUsXG4gICAgICAyOCxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICA0MSxcbiAgICAgIDEsXG4gICAgICAyMzgsXG4gICAgICAxNDksXG4gICAgICAyMjgsXG4gICAgICAyMzIsXG4gICAgICAyMTMsXG4gICAgICAyNDMsXG4gICAgICAyNDMsXG4gICAgICAxOTksXG4gICAgICAzMSxcbiAgICAgIDI0MyxcbiAgICAgIDg0LFxuICAgICAgMjA5LFxuICAgICAgMTksXG4gICAgICAxNDQsXG4gICAgICAxNzUsXG4gICAgICA0NixcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBMQUFHRkZUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NDMzOTE1NjY6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJHb29nbGVcIixcbiAgICBcImxpZFwiOiBcIjExOTAxNTg5NjY4MzY6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi9odDNjUTdPL2p0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQVlVlQlhYazR0RTZlaXlpV3JUV21RUkExNG00cHpScS95K0k3UDl0VmdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlI5aEd5WnhsRDJpdTFCK25tMVF4UUVTMkZ1VEtqUmtIKzExS3JtdlN6Ni94V0Jsdk0zaGtLWk5leUVPbHhLVnduVVVlZUUwMkdkSEtyTzl5Y1Y1NkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhoUitpV2lIQldaa3FPUU8yU2lIMmxyblNSSTNBS0dWdnNkWUUvYXVqd2pTY3VLVHc0UmRoZE1UZW9NZDNkT0tuRUZTUUhBMmc5ODVaOTZOWlRCNmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc0MzM5MTU2NjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzAwOTc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBREVwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFERXAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzZmoxSnFBTmJjd0dTdGovT3JMaEM0TFFtc2pWQVBHNU5ndlBsTWlJejRvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MDQ3NDcxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDc3ODMwMTMxM1wifSIKfQ=="  // PUT your SESSION_ID 


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
