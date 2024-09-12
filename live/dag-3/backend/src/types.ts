export type WeatherType = "rain" | "sun" | "cloudy";

export type Weather = {
  id?: string;
  place: string;
  tomorrow: "rain" | "sun" | "cloudy";
  today: "rain" | "sun" | "cloudy";
  delete?: boolean;
  description?: string;
};
