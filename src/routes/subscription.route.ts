import { Router } from "express";
import { getAsJson, soapConsumer } from "../helper/soapConsumer.helper";
import {
  authenticateToken,
  authorizeRole,
} from "../middleware/auth.middleware";
import { subscription_template } from "../config/template.config";


const router = Router();

// Get subscribe request
router.get("/subscription", async (req, res) => {
  /* CODE HERE */
  let xmls =
    '\
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.binotifysoap.com/">\
        <soapenv:Header/>\
        <soapenv:Body>\
          <ser:getSubscription>\
          </ser:getSubscription>\
      </soapenv:Body>\
    </soapenv:Envelope>';

  const result = await getAsJson(xmls, subscription_template);
  return res.send(result);
});

export { router as subscription };


// ADD Request, tar dipake di php
// '\
//     <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.binotifysoap.com/">\
//         <soapenv:Header/>\
//         <soapenv:Body>\
//           <ser:addSubscription>\
//             <arg0>1</arg0>\
//             <arg1>2</arg1>\
//           </ser:addSubscription>\
//       </soapenv:Body>\
//     </soapenv:Envelope>';