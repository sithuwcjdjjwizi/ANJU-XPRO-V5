//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hHOVBlVkdBazNnYlVraFNndFlOUXp1cjN4YmpZZzd1MjJSRm1NV29sWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG8reFhTRWUrU0ZZWWFCb3dWODhXeklMT3p6R2tMRmI2R0xVbGdmUnFFaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSE9NVWl2SGo4SjVpVWxHQkd1aTV3aGtBdzFaL3lFQjNLTUVlekFETUdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1WmVVR3lFdEpqTWtmcjI3ajVJd2cvQzFIL2loa1VaVnpRTEczcVl5c2pzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNJK2JJbTVSbWxqeEFLZDVabytoUmhKUkF2ekQ2U3o3RHBnZGs5TUE1bEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdvVG5oaS9aQktRR3R4NkdnMTMxREh5L29aRzdUK3dHNnZ1RTNnRG5kVlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUh4Skh3WEFBZGdZSkZyY1ovc2tRV042ZEd3c0d3ckNNS0hjUHZCdzcxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkJoUmhleTNIbXh1bGlURG9pNzJuMGVaNXZhUXRZamhjeFNCRE5qWXIzQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNNzhuemtQVlp6MjhXNFdXQ0d5TzNtS0hFeWNLZGppM0laNXVvWlJMWjl6clZ5dnNsNk9VYlE1clBpVUFnS1o1SWVFV1FFWUtNSVdjbTJIakZlbUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODgsImFkdlNlY3JldEtleSI6IkE0Y2xiM3hzczh0SDdKaU1CQUw2NzlXTlJjeGpkYnJjRDl6RVMwRHMyZWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InZkQ1RvSTBCUnllRElpZTM2WVN1VHciLCJwaG9uZUlkIjoiMzNkMDI3MWYtYzljNi00ZjBiLWIxOTQtNDJlMjQxMTYxOTZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB0SkZIL293WU9FQWo1OTRxZmdPWmEvZWdQST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJET2UwN0VHRjAxclpyRUxmUXJncmJpZ0Z1UVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSk5RRVNEOVQiLCJtZSI6eyJpZCI6Ijk0NzQwMDI2NTk5OjY4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ItGVzrnRgtC9z4UuLi4uIiwibGlkIjoiMjczNzc0NTM2NjE4MDIxOjY4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3VPc3FnQ0VKaTdnTU1HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib0VxcjN5VWRLZUFWY0w4V08xMmd0ckdZL0c2MTJzVCtSWXdTSThObmoyUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRFFjMExOTkl5bEh6OTZMQjM2WUVDdEE1ZUUxc1l0aS95ODBoMytNeUV5M3VCbEhVTzNkbVNQYStUV2RCZ0tMMGtEVDdVY084Y2FsQTE2Ti8xQjczQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InBENVBjL2dXWVZtZWxUZGV2WWZIZGZocTBJZEVoQTNacE5yNXladnFZSEl5TlJ6OUJDL3FteSt4UGhiTnlza0tzZWxHVjgvYWxwN25raFIyakZhdkNnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDAwMjY1OTk6NjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUJLcTk4bEhTbmdGWEMvRmp0ZG9MYXhtUHh1dGRyRS9rV01FaVBEWjQ5ayJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMTI5NTA5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURtSiJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94764246070",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
