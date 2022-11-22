import axios from "axios";
import { SOAP_SERVICE_URL } from "../config/vars.config";
import { transform } from "camaro";


export function soapConsumer(xmls: string) {
  return new Promise((resolve, reject) => {
    axios
      .post(SOAP_SERVICE_URL, xmls, {
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
        },
      })
      .then((response) => {
        resolve({
          response: {
            headers: response.headers,
            body: response.data,
            statusCode: response.status,
          },
        });
      })
      .catch((error) => {
        if (error.response) {
          console.error(`SOAP FAIL: ${error}`);
          reject(error.response.data);
        } else {
          console.error(`SOAP FAIL: ${error}`);
          reject(error);
        }
      });
  });
}

export async function getAsJson(xmls: string, template : object) {  
      const result = await soapConsumer(xmls);
      let jsonResult = await transform((<any>result).response.body, template);
      return JSON.stringify(jsonResult, null, 2);  
}
