const functions = require("firebase-functions");


// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https
    .onRequest((req : any, response: any) => {
      functions.logger.info("Hello logs!", {structuredData: true});
      //const original = req.query.text;
      functions.logger.info('----');
      let data = req.body;
      //let obj = JSON.parse(data);
      //functions.logger.info(obj);
      //const sanitizedMessage = sanitizer.sanitizeText(text); 
      functions.logger.info(data);
      functions.logger.info(` value recieved =>> ${data}.`,  {structuredData: true});
      
      response.status(200).json({data: "data from firebase"});
    });


// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req: any, res: any) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore()
      .collection("messages").add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

