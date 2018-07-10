
var admin = require("firebase-admin")
    ,serviceAccount = require("./chrisjadetact-firebase-adminsdk-n2cn1-be5e001ba1.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chrisjadetact.firebaseio.com"
});


const db = admin.database();
const star = db.ref("/stars");

module.exports = {
    star
}