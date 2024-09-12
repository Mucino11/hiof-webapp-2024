import { writeFile } from "node:fs/promises";
import { readFile } from "node:fs/promises";
import { WeatherType } from "./types";

export async function getWeatherData() {
  const data = await readFile("./data/weather.json", "utf-8");
  const parsedData = JSON.parse(data);
  return parsedData;
}

// getWeatherData();export a

export async function updateWeatherData(newData: Weather[]) {
  await writeFile("./data/weather.json", JSON.stringify(newData));
}
