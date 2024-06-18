module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // ฟีเจอร์ใหม่
        'fix', // แก้บัค
        'docs', // ปรับปรุงเอกสาร
        'style', // การเปลี่ยนแปลงที่ไม่ส่งผลต่อโค้ด เช่น ฟอร์แมต
        'refactor', // การปรับปรุงโค้ดที่ไม่ส่งผลต่อฟีเจอร์หรือบัค
        'perf', // การปรับปรุงประสิทธิภาพ
        'test', // เพิ่มหรือปรับปรุงเทส
        'chore', // งานที่ไม่เกี่ยวกับโค้ด เช่น การสร้างไฟล์ build
      ],
    ],
    'subject-case': [2, 'always', 'sentence-case'], // บังคับให้หัวข้อเป็น Sentence Case
  },
};
