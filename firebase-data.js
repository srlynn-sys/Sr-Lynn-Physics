export const firebaseConfig={apiKey:'AIzaSyAT8dIH5Z9to6jkf9Gcrmawvcjo0hCyaE',authDomain:'sr-lynn-physics.firebaseapp.com',projectId:'sr-lynn-physics',storageBucket:'sr-lynn-physics.firebasestorage.app',messagingSenderId:'599123602390',appId:'1:599123602390:web:1ae6ba6a5130276efa1277'};
export const students={
  '11MM 002':'မမေဖြိုးဦး',
  '11MM 003':'နော်ခိုင်ဇင်ဝင့်သူ',
  '11MM 005':'မောင်ခန့်လင်းလက်ပိုင်',
  '11MM 006':'မနော်ပွင့်ဖူးမြိုင်',
  '11MM 008':'မဝင်းလဲ့မှူးအိမ်',
  '11MM 009':'မဆုမြတ်နဒီကျော်',
  '11MM 010':'မောင်စောရှိုင်းလင်းခိုင်'
};
export const studentIds=Object.keys(students);
export const TZ='Asia/Yangon';
export function myanmarParts(d=new Date()){
  return new Intl.DateTimeFormat('en-CA',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).formatToParts(d).reduce((o,x)=>(o[x.type]=x.value,o),{});
}
export function myanmarDateTime(d=new Date()){
  const p=myanmarParts(d); return {date:`${p.year}-${p.month}-${p.day}`,time:`${p.hour}:${p.minute}:${p.second}`};
}