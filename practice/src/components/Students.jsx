import "../css/Students.css";

function Students() {
  const students = [
    "Maria",
    "Angela",
    "John",
    "Mark",
    "Sofia"
  ];

  return (
    <section className="students">
      <h2>Students</h2>

      <div className="student-list">
        {students.map((student, index) => (
          <div className="student" key={index}>
            <span>{index + 1}</span>
            <p>{student}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Students;