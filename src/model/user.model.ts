import { RowDataPacket } from "mysql2"

export interface IUser extends RowDataPacket {
  user_id   : number
  email     : string
  password  : string
  name      : string
  isAdmin   : boolean
}