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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY090TGNPSDdoMktmMm5uZnFaTVduUHlxWVlreThZODdURnk2V3RtMDdVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG9IZWNHTitSSWNTR2hrdGFpQXVHZjlmQVMrU05SQ3ZUa09FRndnMm9DST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSXBqdWxzYUhsQU96NDFKeUc2SWNHM28yVFg5a2h3NW1vQm5kRW1OWVY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUUZYM1hKcE01NjF1ZFhJdFlWbWcreEFwSi91QTNhUmdBL3d6OHBrMmtnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLbTN0bWo4d2NyQ3hHc0xxVGVDaTBDNHkwZE5zRXRXZHlUQnZFdGVNbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFVamRvWHZkOGdKS3pMR0ZuMmQvbFArbkp5dWFKcEt6bkJXcWNielhMQk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5YZGdEVGpEODl4aWF2cDM2bE5tT0NrOE9zQUlYQ0RKdFpGMS94ZlVYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZldaUkNnWDlDV3R6QjIxaW9tZ2d5emVId1J5WWVKNHFQbEpNbEhzT2Z5bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUrU1ZVQ2pUN3Z1cUhydnYzODAxMHppM2pCTUFMaEF4L1BJNksrL1NVb2JmRUUrb0k2cHBrZk12eVdRK0tIWE1FL3RKY3FlVm1IelZRNEpQU0FkRUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6ImczRW9UejdJcDkyTHJYdFZMUXFCRjRVTHA2UWZEVmk3c1YyZzBxd2VnMXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjQyNDYwNzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUZBNzA1MzVGRTIzMkU0MzU2RTE4Qjk3QUVGQzhBREUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTEyNDI2MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSmZ6X0dWd3RTTy1GdnVNM2F4R0V6USIsInBob25lSWQiOiJmZjhkMzQ4My1hYTMwLTQwMDgtYmNiMC1kOWEyZWMxY2QyMWIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTG54MVh0YmlyL2M1NGV0MEFZVlgzQUxZeVZZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo4TXY3RzZtTDZJU012dGJOWUxwR2JWTlpVYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDMlRZNE03NCIsIm1lIjp7ImlkIjoiOTQ3NjQyNDYwNzA6MzFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNzkzNDk3NjQ0NDgyNzk6MzFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLbW94YWtFRUpLU2dNTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJS0xWek1KY0EwOGRmbFJ5NjViYTd3Y2h2Y2E4YkdweW9yOUdDS0hrQldRPSIsImFjY291bnRTaWduYXR1cmUiOiJkSnVNQjgxRlBhWWpqTFpGS3h1UU15aDJKQkVtQ1FWSUhKNC9iOStPWHRZTmxDV2FnY3ZKc3Q3Zld4ai9KMlRZbUdQTnFzRkszSHBHalRrRmU2KzdDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicWdBcFp1cTI0b2dMbHhTT3Q0SWhReFZ5dGl3QzdsWHZmWGk4K3ByMDhaNGpYQ21LQ0tDcUZSRmJTZ2JTZzY1NlpnTDdLU2gvZVR2Skh5ai9XVVdyQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NDI0NjA3MDozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTQ2kxY3pDWEFOUEhYNVVjdXVXMnU4SEliM0d2R3hxY3FLL1JnaWg1QVZrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVRQXhBQSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTExMjQyNTUsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnA1In0=",
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
