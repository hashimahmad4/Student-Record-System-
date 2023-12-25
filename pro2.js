function submitForm() {
    // Fetch values from the form
    const fullName = document.getElementById('fullName').value;
    const registrationNumber = document.getElementById('registrationNumber').value;
    const department = document.getElementById('department').value;
    const semesterNumber = document.getElementById('semesterNumber').value;
    const gpa = document.getElementById('gpa').value;
    const fatherName = document.getElementById('fatherName').value;
    const nicNumber = document.getElementById('nicNumber').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const coursesEnrolled = document.getElementById('coursesEnrolled').value;
    const extracurricularActivities = document.getElementById('extracurricularActivities').value;

    // Display the collected information (you can modify this part based on your needs)
    alert(`
        Full Name: ${fullName}
        Registration Number: ${registrationNumber}
        Department: ${department}
        Semester Number: ${semesterNumber}
        GPA: ${gpa}
        Father's Name: ${fatherName}
        NIC Number: ${nicNumber}
        Gender: ${gender}
        Address: ${address}
        Blood Group: ${bloodGroup}
        Courses Enrolled: ${coursesEnrolled}
        Extracurricular Activities: ${extracurricularActivities}
    `);
}