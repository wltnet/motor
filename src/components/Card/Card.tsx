import * as React from "react";
import { Wrapper, Image } from "./styled";
import { Props } from ".";

const Card = ({
  image,
  activeImage,
  index,
  onClick
}: Props): React.ReactElement => (
  <Wrapper activeImage={activeImage} index={index} onClick={onClick}>
    <Image src={image.url} />
    <div>&copy;{image.copyright}</div>
    <div>Site: {image.site}</div>
  </Wrapper>
);

export default Card;
