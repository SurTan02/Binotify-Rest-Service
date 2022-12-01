import { Router } from "express";
import { getAsJson, soapConsumer } from "../helper/soapConsumer.helper";
import {
  authenticateToken,
  authorizeRole,
} from "../middleware/auth.middleware";
import { subscription_template, update_template } from "../config/template.config";

const router = Router();

// Get subscribe request
router.get("/subscription", authenticateToken, authorizeRole, async (req, res) => {
  /* CODE HERE */
  try {
    var current = 1;
    if (req.query.page) {
      current = parseInt(req.query.page as string);
    }
    let xmls = `\
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.binotifysoap.com/">\
          <soapenv:Header/>\
          <soapenv:Body>\
            <ser:GetSubscription>\
              <current_page>${current}</current_page>\
            </ser:GetSubscription>\
        </soapenv:Body>\
      </soapenv:Envelope>`;

    const result = await getAsJson(xmls, subscription_template);
    return res.status(200).send(result);
  } catch (error) {
    return res.sendStatus(401);
  }
  
});

// Update subscription
router.patch("/subscription", authenticateToken, authorizeRole, async (req, res) => {
  /* CODE HERE */
  const { creator_id, subscriber_id, status } = req.body;
  let xmls = `\
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.binotifysoap.com/">\
        <soapenv:Header/>\
        <soapenv:Body>\
          <ser:UpdateSubscription>\
            <creator_id>${creator_id}</creator_id>\
            <subscriber_id>${subscriber_id}</subscriber_id>\
            <status>${status}</status>\
          </ser:UpdateSubscription>\
      </soapenv:Body>\
    </soapenv:Envelope>`;

  const result = await getAsJson(xmls, update_template);
  return res.status(200).send(result);
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
