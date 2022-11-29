import { Router } from "express";
import path from "path";
import {
  authenticateToken,
} from "../middleware/auth.middleware";

const router = Router();

router.post('/upload', authenticateToken, (req, res) => {
    
    if (!req.files){
      return res.json({msg: "Please upload mp4 file"});
    }

    let uploadFile = (<any>req).files.file;
    const name = uploadFile.name;
    const ext = path.extname(uploadFile.name) 
    
    if (ext.toLowerCase() !== ".mp3"){
        return res.json({msg: "Please upload mp4 file"});
    }
    
    // const md5 = uploadFile.md5();
    const saveAs = `${name}`;
    const url = `public/${saveAs}`

    uploadFile.mv( "src/" + url, function(err: any) {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json({ status: 'uploaded', saveAs , url });
    });
  });

export { router as upload};
