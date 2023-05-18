const studentOneGrades = [90, 86, 100, 85]
const studentTwoGrades = [65, 81, 96, 100]
const studentThreeGrades = [79, 94, 85, 95]

const studentGrades = [studentOneGrades, studentTwoGrades, studentThreeGrades]

console.log("all student grades", studentGrades)
// What did student three get on the first exam?
console.log("student 3 exam 1 grade", studentGrades[2][0])

// What did student two get on the third exam?
console.log("student 2 exam 3 grade", studentGrades[1][2])

// What did student one get on the last exam?
console.log("length student one grades array", studentOneGrades.length)

const lastExamIndex = studentOneGrades.length - 1
console.log("last exam index", lastExamIndex)
// console.log("student 1 last exam grade", studentGrades[0][3])
console.log("student 1 last exam grade", studentGrades[0][lastExamIndex])

// Refactor the above into a function, `getStudentExamGrade`
const getStudentExamGrade = (studentNumber, examNumber) => {
  console.log("student", studentNumber)
  console.log("exam", examNumber)
  return studentGrades[studentNumber - 1][examNumber - 1]
}

// What did student three get on the first exam?
// const studentThreeExamOneGrade = getStudentExamGrade(3, 1)
// console.log(studentThreeExamOneGrade)
console.log(getStudentExamGrade(3, 1))

// What did student two get on the third exam?
console.log(getStudentExamGrade(2, 3))

// What did student one get on the last exam?
const lastExam = studentOneGrades.length
console.log(getStudentExamGrade(1, lastExam))

// What is student 2's average?
let sum = 0
let numExams = studentTwoGrades.length
// studentTwoGrades.forEach(grade => sum += grade)

studentTwoGrades.forEach((grade) => {
  // return sum = sum + grade
  // console.log(grade)
  return (sum += grade)
})
const average = sum / numExams
console.log("student 2 average", average)

// Create a new array of all third exam grades

const thirdExamGrades = () => {
  const arrayOfThirdExams = []

  studentGrades.forEach((student) => {
    // console.log(student)
    arrayOfThirdExams.push(student[2])
  })

  return arrayOfThirdExams
}

console.log("third exam grades", thirdExamGrades())
// => [100, 96, 85]

// What was the average grade on exam 1?
const avgExam1Grade = () => {
  let sumOfFirstExams = 0
  let numOfExams = 0

  studentGrades.forEach((student) => {
    sumOfFirstExams += student[0]
    numOfExams++
    // numOfExams += 1
  })

  const averageGrade = sumOfFirstExams / numOfExams

  return averageGrade
}

console.log("average of exam 1: ", avgExam1Grade())
// => 78

// What was the worst score on exam 2?
const lowestExam2Grade = () => {
  let lowestGrade = 100

  studentGrades.forEach((student) => {
    // console.log(student[1])
    const studentGrade = student[1]
    // console.log("current lowest grade", lowestGrade)
    // console.log("student grade", studentGrade)
    if (lowestGrade > studentGrade) {
      lowestGrade = studentGrade
    }
  })

  return lowestGrade
}

console.log("lowest grade for exam 2: ", lowestExam2Grade())
// => 81

// What is the aggregate average test score?
const averageTestScore = (arrayOfStudentGrades) => {
  let sum = 0
  let numOfExams = 0

  arrayOfStudentGrades.forEach((student) => {
    console.log("student", student)

    student.forEach((studentGrade) => {
      console.log("student grade", studentGrade)
      sum += studentGrade
      numOfExams++
    })
  })

  const average = sum / numOfExams
  return average
}

console.log("average exam grade: ", averageTestScore(studentGrades))
// => 88
