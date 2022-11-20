import { Router } from "express";
import { soapConsumer } from "../helper/soapConsumer.helper";
import {
  authenticateToken,
  authorizeRole,
} from "../middleware/auth.middleware";

const router = Router();

router.get("/example", authenticateToken, authorizeRole, async (req, res) => {
  /* CODE HERE */
  let xmls =
    '\
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\
      <soap:Body>\
        <createSubscriptionDatabase xmlns="http://service.binotifysoap.com/">\
        </createSubscriptionDatabase>\
      </soap:Body>\
    </soap:Envelope>';

  const result = await soapConsumer(xmls);
  console.log(result);

  return res.send(result);
});

export { router as example };
