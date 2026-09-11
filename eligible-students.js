// Grade 11 Physics — Eligible Students
// Chapter 3: Pressure
// Exam: 50 MCQs · 50 Marks · 1 Hour 30 Minutes

const ELIGIBLE_STUDENTS = {
  '11MM 001': 'မောင်မြင့်မြတ်',
  '11MM 002': 'မမေဖြိုးဦး',
  '11MM 003': 'နော်ခိုင်ဇာဝင့်သူ',
  '11MM 005': 'မောင်ခန့်လင်းလက်ပိုင်',
  '11MM 006': 'မနော်ပွင့်ဖူးမြိုင်',
  '11MM 007': 'မရွှေရည်ပြည့်ပြည့်',
  '11MM 008': 'မဝင်းလဲ့မှူးအိမ်',
  '11MM 009': 'မဆုမြတ်နဒီကျော်',
  '11MM 010': 'စောရှိုင်းလင်းခိုင်'
};

// Code → Name helper
function getEligibleStudent(code) {
  return ELIGIBLE_STUDENTS[code.trim().toUpperCase()] || null;
}

// Name → Code helper
function getStudentCode(name) {
  const entry = Object.entries(ELIGIBLE_STUDENTS)
    .find(([, studentName]) => studentName === name.trim());
  return entry ? entry[0] : null;
}

// Total eligible candidates
const ELIGIBLE_STUDENT_COUNT = Object.keys(ELIGIBLE_STUDENTS).length;
