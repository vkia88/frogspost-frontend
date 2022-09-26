import { BoxSize } from "../../constants/BoxSize";

export interface Box {
  uuid: string,
  size: BoxSize,
  empty: boolean,
}