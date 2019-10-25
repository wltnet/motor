import { Dispatch } from "redux";
import { connect } from "react-redux";
import { requestImageInfo } from "../../actions/images";
import { ImageInfoState } from "../../types";
import ImagesDisplay from "./ImagesDisplay";

export interface ImageInfoProps {
  loadImageInfo: () => void;
}

export interface State {
  images: ImageInfoState;
}

export const next = (
  activeImage: number,
  setActiveImage: (index: number) => void
) => () => {
  setActiveImage(activeImage + 1);
};

export const prev = (
  activeImage: number,
  setActiveImage: (index: number) => void
) => () => {
  setActiveImage(activeImage - 1);
};

export const enlarge = (
  setisOpen: (isOpen: boolean) => void,
  setIndex: (index: number) => void,
  index: number
) => () => {
  setisOpen(true);
  setIndex(index);
};

export const closeModal = (setisOpen: (isOpen: boolean) => void) => () => {
  setisOpen(false);
};

export const mapDispatch = (dispatch: Dispatch): ImageInfoProps => ({
  loadImageInfo: () => {
    dispatch(requestImageInfo());
  }
});

export default connect(
  null,
  mapDispatch
)(ImagesDisplay);
