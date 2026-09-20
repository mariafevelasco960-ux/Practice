import "../css/ClassInfo.css";

function ClassInfo() {
  return (
    <section className="class-info">
      <h2>Class Information</h2>

      <div className="info-grid">
        <div>
          <h3>Subject</h3>
          <p>Web Development</p>
        </div>

        <div>
          <h3>Section</h3>
          <p>BSIT 3C</p>
        </div>

        <div>
          <h3>Schedule</h3>
          <p>Monday & Wednesday</p>
        </div>
      </div>
    </section>
  );
}

export default ClassInfo;