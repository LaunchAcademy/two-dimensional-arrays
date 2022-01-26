const studentOneGrades = [90, 86, 100, 85]
const studentTwoGrades = [65, 81, 96, 100]
const studentThreeGrades = [79, 94, 85, 95]

const studentGrades = [studentOneGrades, studentTwoGrades, studentThreeGrades]

// What did student three get on the first exam?
// console.log(studentGrades[2][0]);

// What did student two get on the third exam?
// console.log(studentGrades[1][2]);

//refactor with a function
// Create a function that takes in the student number and exam number and returns that exam's grade

const getStudentExamGrade = (studentNumber, examNumber) => {
  return studentGrades[studentNumber - 1][examNumber - 1]
}

console.log(" What did student three get on the first exam? ", getStudentExamGrade(3, 1));
console.log(" What did student two get on the third exam? ", getStudentExamGrade(2, 3));

// What did student one get on the last exam?
let studentOnesNumOfExams = studentGrades[0].length
let indexOfLastExam = studentOnesNumOfExams - 1
console.log(studentGrades[0][indexOfLastExam]);
// let studentOnesNumOfExams = studentOneGrades.length

// What is student 2's average?
// We need to add up all the elements in the studentGrades[1] array
// then divide by the number of exams there are

let sum = 0
let numOfExams = 0

studentGrades[1].forEach((grade) => {
  sum += grade
  numOfExams++
})

let student2Avg = sum / numOfExams

console.log("student 2 avg exam: ", student2Avg);

// Create a new array of all third exam grades

const thirdExamGrades = () => {
  let newArray = []

  studentGrades.forEach((individualStudentScores) => {
    //this is to get the third exam score for each student
    let thirdExamScore = individualStudentScores[2]
    
    newArray.push(thirdExamScore)
  })

  return newArray
}

console.log("third exam grades", thirdExamGrades())
// => [100, 96, 85]

// What was the average grade on exam 1?
const avgExam1Grade = () => {
  let sum = 0
  let numOfExams = 0

  studentGrades.forEach((individualStudentScores) => {
    sum += individualStudentScores[0]
    numOfExams++
  })

  return sum / numOfExams
}
console.log("average of exam 1: ", avgExam1Grade())
// => 78

// What was the worst score on exam 2?
const lowestExam2Grade = () => {
  let lowestNum = 100

  studentGrades.forEach((individualStudentScores) => {
    let exam2Grade = individualStudentScores[1]

    if (exam2Grade < lowestNum) {
      lowestNum = exam2Grade
    }
  })

  return lowestNum
}
console.log("lowest grade for exam 2: ", lowestExam2Grade())
// => 81

// What is the aggregate average test score?
// console.log("average exam grade: ", averageTestScore(studentGrades))
// => 88
