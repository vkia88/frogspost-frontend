import { Box as BoxType } from "../../../../redux/feature/box";
import "./Box.css";
import classNames from "classnames";

interface Props {
  box: BoxType;
}

export default function Box({ box }: Props) {
  return (
    <span
      className={classNames(`box ${box.size}`, {
        empty: box.empty,
      })}
    >
      {box.size}
    </span>
  );
}
