function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;
  let grade = '';
  if (average < 60) grade = 'F';
  else if (average < 70) grade = 'D';
  else if (average < 80) grade = 'C';
  else if (average < 90) grade = 'B';
  else grade = 'A';
  return grade;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"