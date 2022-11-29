import { Router } from "express";
import * as db from "../db/connection";
import { ISong } from "../model/song.model";
import { authenticateToken  } from "../middleware/auth.middleware";
import { getAsJson } from "../helper/soapConsumer.helper";
import { validate_template } from "../config/template.config";

const router = Router();

// read song
router.get("/song", authenticateToken, async (req, res) => {
    try {
        const penyanyi_id = (<any>req).user.user_id;
        var current_page = parseInt(req.query.page as string) || 1;

        let rows: number = await db.execute(
            `SELECT COUNT(*) as n_rows FROM Song WHERE penyanyi_id = ?`,[penyanyi_id]
        );
        
        const total_row = JSON.parse(JSON.stringify(rows))[0].n_rows;
        const total_pages : any = Math.ceil(total_row/10)
        const offset_number = (current_page-1)*10
        
        const listOfSong: ISong[] = await db.execute(
            `SELECT * FROM Song WHERE penyanyi_id = ? LIMIT 10 OFFSET ?`,[penyanyi_id, offset_number.toString()]
        );

        return res.json({"total_page" : total_pages , "list" : listOfSong});

    } catch (e) {
        return res.sendStatus(500);
    }
    }
);

// Song by ID
router.get("/song/:creator_id/:subscriber_id", async (req, res) => {
    try {
        const creator_id = req.params.creator_id;
        const subscriber_id = req.params.subscriber_id;
        
        let xmls = `\
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.binotifysoap.com/">\
            <soapenv:Header/>\
            <soapenv:Body>\
            <ser:ValidateSubscription>\
                <creator_id>${creator_id}</creator_id>\
                <subscriber_id>${subscriber_id}</subscriber_id>\
            </ser:ValidateSubscription>\
        </soapenv:Body>\
        </soapenv:Envelope>`;
        
        const soapResponse = await getAsJson(xmls, validate_template);
        
        const isValid : number = JSON.parse(soapResponse).result;
        
        if(isValid == 0){
            return res.sendStatus(401);
        }

        const listOfSong: ISong[] = await db.execute(
            `SELECT judul, audio_path, name FROM Song, User WHERE penyanyi_id = ? AND user_id=penyanyi_id`,[creator_id]
        );
        return res.json(listOfSong);
    } catch (e) {
        return res.sendStatus(500);
    }
    }
);

// add song
router.post("/song", authenticateToken, async (req, res) => {
    try {
        const { song_id, judul, audio_path } = req.body;
        const penyanyi_id = (<any>req).user.user_id;

        const listOfSong: ISong[] = await db.execute(
            `INSERT INTO Song (judul, penyanyi_id, audio_path) VALUES 
            (?,?,?)`, 
            [ judul, penyanyi_id, audio_path]
        );
        
        return res.sendStatus(200);
    } catch (e) {
        return res.sendStatus(500);
    }
});

// edit song
router.patch("/song", authenticateToken, async (req, res) => {
    try {
        const { song_id, judul, audio_path } = req.body;
        const penyanyi_id = (<any>req).user.user_id;
        
        const listOfSong: ISong[] = await db.execute(
            `UPDATE Song SET judul = ?, audio_path = ? WHERE song_id = ? and penyanyi_id = ?`, 
            [judul,  audio_path, song_id, penyanyi_id]
        );

        if ((<any>listOfSong).affectedRows > 0){
            return res.sendStatus(200);
        }else{
            return res.sendStatus(403)
        }

    } catch (e) {
        return res.sendStatus(500);
    }
});

//delete song
router.delete("/song", authenticateToken, async (req, res) => {
    try {
        const { song_id} = req.body;
        const penyanyi_id = (<any>req).user.user_id;
        
        const listOfSong: ISong[] = await db.execute(
            `DELETE FROM Song WHERE song_id = ? and penyanyi_id = ?`, 
            [song_id, penyanyi_id]
        );
        
        if ((<any>listOfSong).affectedRows > 0){
            return res.sendStatus(200);
        }else{
            return res.sendStatus(403)
        }
    } catch (e) {
        return res.sendStatus(500);
    }
});
export { router as song };
