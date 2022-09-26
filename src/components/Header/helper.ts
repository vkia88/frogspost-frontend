import { BoxSize } from "../../constants/BoxSize";
import { Box } from "../../redux/feature/box";

export const defaultBoxes = [
  {
    uuid: 'alpha',
    size: BoxSize.A,
    empty: true
  },
  {
    uuid: 'beta',
    size: BoxSize.A,
    empty: true
  },
  {
    uuid: 'gamma',
    size: BoxSize.B,
    empty: true
  },
  {
    uuid: 'delta',
    size: BoxSize.B,
    empty: true
  },
  {
    uuid: 'epsilon',
    size: BoxSize.C,
    empty: true
  },
  {
    uuid: 'zeta',
    size: BoxSize.C,
    empty: true
  },
] as Box[];