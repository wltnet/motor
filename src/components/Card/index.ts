import Card from "./Card";
import { ImageInfo } from "../../types";

export interface Props {
  image: ImageInfo;
  activeImage: number;
  index: number;
  onClick: () => void;
}

export default Card;
