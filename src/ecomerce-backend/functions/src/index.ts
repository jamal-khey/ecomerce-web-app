const functions = require("firebase-functions");
const escapeHtml = require("escape-html");


// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https
    .onRequest((req : any, response: any) => {
      response.set("Access-Control-Allow-Origin", "*");
      const data = req.body;
      functions.logger.info(`value recieved  ${data}.`, {structuredData: true});

      response.status(200).json({data: "data from firebase"});
    });



/**
 * Responds to an HTTP request using data from the request body parsed according
 * to the "content-type" header.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.helloContent = functions.https.onRequest(async (req: any, res: any) => {
  let name;
  res.set("Access-Control-Allow-Origin", "*");

  switch (req.get("content-type")) {
    // '{"name":"John"}'
    case "application/json":
      // ({name} = req.body);
      name = req.body.name;
      break;

    // 'John', stored in a Buffer
    case "application/octet-stream":
      name = req.body.toString(); // Convert buffer to a string
      break;

    // 'John'
    case "text/plain":
      name = req.body;
      break;

    // 'name=John' in the body of a POST request (not the URL)
    case "application/x-www-form-urlencoded":
      ({name} = req.body);
      break;
  }

  const obj = {
    message: escapeHtml(name || "World"),
  };
  res.status(200).json({data: obj});
});


exports.postDevis = functions.https.onRequest( async (req: any, res: any) => {
  functions.logger.info("------- starting postDevis");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods",
  //                "POST,GET,OPTIONS,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Accept");

  const devisData = req.body;
  if ( devisData !== undefined) {
    
    // Push the new message into Firestore using the Firebase Admin SDK.
    if (devisData.data != undefined){
      const writeResult = await admin.firestore()
          .collection("devis").add(devisData.data);
      // Send back a message that we've successfully written the message
      const result : any = {
        data: {
          success: true,
          message: `Message with ID: ${writeResult.id} added.`,
        },
      };
      res.status(200).json(result);
    }
    else{
      const result : any = {
        data: {
          success: false,
          message: `empty data , nothing saved in the data base`,
        },
      };
      res.status(200).json(result);
    }
    
  } else {
    res.status(301).json({
      data: {
        success: false,
        message: "sauve garde du devis a echoue",
      },
    });
  }
});
