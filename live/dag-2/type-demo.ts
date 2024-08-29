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
  //promise is an async function
  if (students.every((s) => typeof s === "string"))
    throw new Error("Can not locate user when all are strings");
  return students
    .filter((student) => typeof student !== "string")
    .find((student) => student[id]);
};
