import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA826OXFuEarE3kVuSHNiWfb3OD0jJVUtc",
  authDomain: "wesboscatchoftheday.firebaseapp.com",
  databaseURL: "https://wesboscatchoftheday.firebaseio.com",
  appId: "1:317345288196:web:c79ed80013db88d4"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
