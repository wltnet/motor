import Modal from "./Modal";

export interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export default Modal;
