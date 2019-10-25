import axios from "axios";
import { ImageData } from "../types";

export type ApiResponse = ImageData;

type ApiGet<T> = () => Promise<T>;

const apiGet = <T>(url: string): ApiGet<T> => async (): Promise<T> => {
  const { data } = await axios.get(url);
  return data;
};

export const images = {
  get: apiGet<ApiResponse>(
    "http://www.splashbase.co/api/v1/images/search?query=cars"
  )
};
