import { Router } from "express";
import { soapConsumer } from "../helper/soapConsumer.helper";
import {
  authenticateToken,
  authorizeRole,
} from "../middleware/auth.middleware";
import { transform } from "camaro";

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

  const result = await soapConsumer(xmls);
  
  const template = {
    subscription: ['//subscription', {
        creator_id: 'creatorId',
        subscriber_id: 'subscriberId',
        status: 'status'
    }]
  }

  let jsonResult = await transform((<any>result).response.body, template);
  return res.send(JSON.stringify(jsonResult, null, 2));
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