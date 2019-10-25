import Button from "./Button";

export interface Props {
  title: string;
  onClick: () => void;
  disabled: boolean;
}

export default Button;
