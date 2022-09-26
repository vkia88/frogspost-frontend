import { BoxSize } from "../../constants/BoxSize";
import { Box } from "../../redux/feature/box";

export const defaultBoxes = [
  {
    id: 'alpha',
    size: BoxSize.A,
    empty: true
  },
  {
    id: 'beta',
    size: BoxSize.A,
    empty: true
  },
  {
    id: 'gamma',
    size: BoxSize.B,
    empty: true
  },
  {
    id: 'delta',
    size: BoxSize.B,
    empty: true
  },
  {
    id: 'epsilon',
    size: BoxSize.C,
    empty: true
  },
  {
    id: 'zeta',
    size: BoxSize.C,
    empty: true
  },
] as Box[];