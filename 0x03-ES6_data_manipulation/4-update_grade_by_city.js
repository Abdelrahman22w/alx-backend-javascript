export default function updateStudentGradeByCity(students, city, newGrade) {
    const filterStudents = student.filter((student) => student.location == city,);
    
    const gradeStudents = filterStudents.map((student) => {
        for (const gradeInfo of newGrade) {
            if(student.id == gradeInfo.studentId) {
                student.grade = gradeInfo.grade;
            }
        }
        if (student.grade == undefined) {
            student.grade = 'N/A';
        }
        return student;
    },
);

    return gradeStudents;
}
