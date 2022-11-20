import { Router } from "express";
import { soapConsumer } from "../helper/soapConsumer.helper";
import {
  authenticateToken,
  authorizeRole,
} from "../middleware/auth.middleware";

const router = Router();

router.get("/subscription", async (req, res) => {
  /* CODE HERE */
  let xmls =
    '\
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.binotifysoap.com/">\
        <soapenv:Header/>\
        <soapenv:Body>\
          <ser:addSubscription>\
            <arg0>1</arg0>\
            <arg1>2</arg1>\
          </ser:addSubscription>\
      </soapenv:Body>\
    </soapenv:Envelope>';

  const result = await soapConsumer(xmls);
  console.log(result);
  

  return res.send(result);
});

export { router as subscription };
