const { transform } = require("typescript");

const studentName = "Lars";
const lars = {
  name: studentName,
  birthYear: 1992,
  isNew: false,
  role: "student",
};

const students = [
  lars,
  {
    name: "Trude",
    birthYear: 1991,
    isNew: true,
    role: "admin",
  },
  {
    name: "Ali",
    birthYear: 1989,
    isNew: true,
    role: "superadmin",
  },
  {
    name: "Simone",
    birthYear: 2001,
    isNew: true,
    role: "student",
  },
];

const getStudentAboveBirthYar = (students = [], birthYear) => {
  return students.filter((student) => student.birthYear > birthYear);
};

const studentsAbove = getStudentAboveBirthYar(students, 1991);

const transFormStudent = (students) =>
  students.map((student) => ({
    ...student,
    age: new Date().getFullYear() - student.birthYear,
  }));

const studentsWithAge = transFormStudent(students);

const findStudent = (students, name) => {
  return students.find(
    (student) => student.name.toLowerCase() === name?.toLowerCase()
  );
};

// find return just one value
const studentFound = findStudent(studentName, "lars");

const roles = ["admin", "superadmin"];

const hasAccess = (roles, students) => {
  return students.filter((student) => {
    return roles.includes(student.role);
  });
};

const adminRoles = hasAccess(["admin"], students);
const studentRoles = hasAccess(["admin"], students);
const adminOrSuperAdmins = hasAccess(["admin", "superadmin"], students);

const omitName = (students) => {
  return students.map((student) => {
    const { name, isNew, ...rest } = student;
    return rest;
  });
};

// this code make a copy of student list
const studentCopy = [...students];
studentCopy[1].name = "Name changed";

const larsCopy = { ...lars };
larsCopy.name = "Lars changes";

const hiofLocation = {
  name: "HIOF",
  street: "Haldenveien 1",
  postal: "1520",
  contact: {
    email: "halden@email.no",
  },
};

hiofLocationCopy.contact.email = "demo";

const hiofLocationDeep = structuredClone(hiofLocation);
hiofLocation.contact.email = "demo";

const studentWithHiofData = {
  ...lars,
  location: hiofLocation,
};
