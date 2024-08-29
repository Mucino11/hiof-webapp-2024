import { Habit, CreateHabit } from "./../../spa-ts/types";
type ID = string;

const id: ID = "2";

type HabitObject = {
  id: ID;
  title: string;
  createdAt?: string | Date;
};

const object: HabitObject = {
  id: "1",
  title: "title here",
  // createdAt: new Date()
};

type HabitArray = HabitObject[];
const habitArray: HabitArray = [object];

type HabitTitile = Pick<HabitObject, "title">;

type CreateHabitDTO = Omit<HabitObject, "id">;

const createhabit = (data: CreateHabitDTO) => {
  return data;
};

createhabit({ title: "Test" });

type FancyID = `${string}-${string}-${string}`;

const fancyId: FancyID = "test-ny-streng";

type StudentMeta = { name: string; birthYear: number };
type StudentRecord = Record<FancyID, StudentMeta>;
type Student = string | StudentRecord;

const getStudent = async (
  students: Student[],
  id: FancyID
): Promise<StudentRecord | undefined | never> => {
  // A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation, either fulfilled with a value or rejected with an error. It allows handling of asynchronous tasks in a more manageable and readable way.
  if (students.every((s) => typeof s === "string"))
    throw new Error("Can not locate user when all are strings");
  return students
    .filter((student) => typeof student !== "string")
    .find((student) => student[id]);
};

const students: Student[] = [
  "Lars",
  { "a-b-c": { name: "Frida", birthYear: 1992 } },
];
getStudent(students, "a-b-c").then((data) => console.log(data));

console.log("Hey");

//fetch is a way we use to talk to a server
