const input = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];

const output = input.map(obj => {
  const studentName = Object.keys(obj)[0];
  const marks = Object.values(obj[studentName]);
  const avg = marks.reduce((sum, m) => sum + m, 0) / marks.length;

  return {
    [studentName]: {
      average: avg
    }
  };
});

console.log(output);