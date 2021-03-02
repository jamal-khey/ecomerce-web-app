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
      functions.logger.info("Hello logs!", {structuredData: true});
      // const original = req.query.text;
      functions.logger.info("----");
      const data = req.body;
      // let obj = JSON.parse(data);
      // functions.logger.info(obj);
      // const sanitizedMessage = sanitizer.sanitizeText(text);
      functions.logger.info(data);
      functions.logger.info(`value recieved  ${data}.`, {structuredData: true});

      response.status(200).json({data: "data from firebase"});
    });


// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req: any, res: any) => {
  res.set("Access-Control-Allow-Origin", "*");
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore()
      .collection("messages").add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
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
  let devisData;
  res.set("Access-Control-Allow-Origin", "*");
  switch (req.get("content-type")) {
    case "application/json":
      devisData = req.body;
      break;
    default:
      res.status(301).json({data: {message: "request is not json type"}});
      return;
  }

  // TODO check if all
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore()
      .collection("devis").add(devisData);
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});
