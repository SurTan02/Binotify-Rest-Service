import { RowDataPacket } from "mysql2"

export interface ISong extends RowDataPacket {
  song_id      : number
  judul        : string
  penyanyi_id  : number
  audio_path   : string
}