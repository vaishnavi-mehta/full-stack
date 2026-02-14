import React from "react";

class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }

  getRole() {
    return "Person";
  }
}

class Student extends Person {
  constructor(name, age, email, course, year, university) {
    super(name, age, email);
    this.course = course;
    this.year = year;
    this.university = university;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am pursuing ${this.course}.`;
  }

  getRole() {
    return "Student";
  }
}

class Teacher extends Person {
  constructor(name, age, email, subject, experience, department, qualification) {
    super(name, age, email);
    this.subject = subject;
    this.experience = experience;
    this.department = department;
    this.qualification = qualification;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }

  getRole() {
    return "Teacher";
  }
}

function App() {
  const people = [
    new Person("Alex Johnson", 30, "alex@example.com"),
    new Student(
      "Emma Watson",
      20,
      "emma@example.com",
      "Computer Science",
      "2nd Year",
      "Harvard University"
    ),
    new Teacher(
      "Dr. James Wilson",
      45,
      "james@example.com",
      "Mathematics",
      "18 Years",
      "Science Department",
      "PhD in Mathematics"
    ),
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Person Class Hierarchy System</h1>

      {people.map((person, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.title}>
            {person.name} ({person.getRole()})
          </h2>

          <p><strong>Age:</strong> {person.age}</p>
          <p><strong>Email:</strong> {person.email}</p>
          <p style={styles.intro}>{person.introduce()}</p>

          {person instanceof Student && (
            <>
              <p><strong>Course:</strong> {person.course}</p>
              <p><strong>Year:</strong> {person.year}</p>
              <p><strong>University:</strong> {person.university}</p>
            </>
          )}

          {person instanceof Teacher && (
            <>
              <p><strong>Subject:</strong> {person.subject}</p>
              <p><strong>Experience:</strong> {person.experience}</p>
              <p><strong>Department:</strong> {person.department}</p>
              <p><strong>Qualification:</strong> {person.qualification}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "30px",
  },
  card: {
    border: "1px solid #d0d7de",
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "20px",
    backgroundColor: "#f9fafb",
  },
  title: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "15px",
  },
  intro: {
    fontStyle: "italic",
    color: "#555",
    margin: "10px 0",
  },
};