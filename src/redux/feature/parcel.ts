import { BoxSize } from "../../constants/BoxSize";

export interface Parcel {
  username?: string,
  password?: string,
  until: string | null,
  size?: BoxSize
}