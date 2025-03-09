import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_KEY)),
  });
}

export const verifyIdToken = async (token) => {
  try {
    return await admin.auth().verifyIdToken(token);
  } catch (error) {
    console.log("Error in Authentication");
    return null;
  }
};
