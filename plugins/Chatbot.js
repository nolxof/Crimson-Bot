let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^كريمسون|crimson$/i.test(m.text)) { 
 responses = [ 
 'تحت امرك حبي'
 ]; 
 } else if (/^بوووت|بموووووووووت|بوت|بوتت|بوووت\بوتت|ببوت$/i.test(m.text)) { 
     responses = [ 
'تحت امرك اسمي كريمسون مش بوتتت'
     ]; 
   } else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
 }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       'شغال شغال تست',  
     ];
 }
   }else if (/^صلي علي النبي$/i.test(m.text)) { 
     responses = [ 
       'عليه افضل الصلاة واتم التسليم💞',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
