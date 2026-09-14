export const SCHOOL_START='2026-08-10';
export const SCHOOL_END='2026-09-14';
export const STUDENT_ATTENDANCE={
  '11MM 002':{presentAll:true,leave:[]},
  '11MM 003':{presentAll:true,leave:[]},
  '11MM 005':{presentAll:true,leave:['2026-09-05']},
  '11MM 006':{presentAll:true,leave:['2026-09-10','2026-09-11']},
  '11MM 008':{presentAll:true,leave:[]},
  '11MM 009':{presentAll:true,leave:['2026-09-05']},
  '11MM 010':{presentAll:true,leave:['2026-09-09','2026-09-10','2026-09-11','2026-09-14']}
};
export const HOMEWORK_DAILY=['11MM 002','11MM 003','11MM 006','11MM 008','11MM 009'];
export function schoolDates(){
  const out=[];let d=new Date(SCHOOL_START+'T00:00:00');const end=new Date(SCHOOL_END+'T00:00:00');
  while(d<=end){const day=d.getDay();if(day!==0&&day!==6)out.push(d.toISOString().slice(0,10));d.setDate(d.getDate()+1)}
  return out;
}
export function historicalAttendance(id){
  const p=STUDENT_ATTENDANCE[id]||{presentAll:false,leave:[]};
  return schoolDates().map(date=>({id,date,status:p.leave.includes(date)?'Leave':p.presentAll?'Present':'Absent',historical:true}));
}
export function historicalHomework(id){
  if(!HOMEWORK_DAILY.includes(id))return [];
  return schoolDates().map(date=>({id,date,completed:true,historical:true}));
}
