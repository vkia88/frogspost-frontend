import { Box as BoxType } from "../../../redux/feature/box";
import { useAppSelector } from "../../../redux/hooks";
import Box from "./Box/Box";

export default function Boxes() {
  const boxes = useAppSelector((state) => state.boxes.value);

  return (
    <>
      <h2>Boxes</h2>
      {boxes.map((box) => (
        <Box key={box.id} box={box as BoxType} />
      ))}
    </>
  );
}
