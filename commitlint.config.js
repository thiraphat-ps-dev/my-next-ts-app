module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'pascal-case'], // บังคับให้ type เป็น PascalCase
    'type-enum': [
      2,
      'always',
      [
        'Feat',
        'Fix',
        'Docs',
        'Style',
        'Refactor',
        'Perf',
        'Test',
        'Chore',
        'Build',
        'Ci',
        'Revert',
      ],
    ],
    'subject-case': [0, 'always'], // ปิดการบังคับใช้ subject-case
  },
};
