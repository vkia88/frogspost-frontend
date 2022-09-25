import { Box as BoxType } from "../../../redux/feature/boxes";
import { useAppSelector } from "../../../redux/hooks";
import Box from "./Box/Box";

export default function Boxes() {
  const boxes = useAppSelector((state) => state.boxes.value);

  return (
    <>
      <h2>Boxes</h2>
      {boxes.map((box) => (
        <Box key={box.uuid} box={box as BoxType} />
      ))}
    </>
  );
}
