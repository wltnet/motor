import * as React from "react";
import { useSelector } from "react-redux";
import {
  Wrapper,
  CardWrapper,
  InnerWrapper,
  ButtonWrapper,
  Image
} from "./styled";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { ImageInfo } from "../../types";
import { ImageInfoProps, State, next, prev, enlarge, closeModal } from ".";

const ImagesDisplay = ({
  loadImageInfo
}: ImageInfoProps): React.ReactElement => {
  React.useEffect(() => {
    loadImageInfo();
  }, [loadImageInfo]);

  const images: ImageInfo[] = useSelector(
    (state: State) => state.images.data.images
  );

  const [activeImage, setActiveImage] = React.useState<number>(0);
  const [isOpen, setisOpen] = React.useState<boolean>(false);
  const [index, setIndex] = React.useState<number>(0);

  return (
    <Wrapper>
      {images && (
        <React.Fragment>
          <ButtonWrapper>
            <Button
              onClick={prev(activeImage, setActiveImage)}
              title="Prev"
              disabled={activeImage === 0}
            />
            <Button
              onClick={next(activeImage, setActiveImage)}
              title="Next"
              disabled={activeImage === images.length - 1}
            />
          </ButtonWrapper>
          <CardWrapper>
            <InnerWrapper activeImage={activeImage} length={images.length}>
              {images.map((image, index) => (
                <Card
                  key={image.id}
                  image={image}
                  activeImage={activeImage}
                  index={index}
                  onClick={enlarge(setisOpen, setIndex, index)}
                />
              ))}
            </InnerWrapper>
          </CardWrapper>
          <Modal isOpen={isOpen} closeModal={closeModal(setisOpen)}>
            <Image src={images[index].large_url || images[index].url} />
          </Modal>
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default ImagesDisplay;
