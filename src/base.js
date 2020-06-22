import Rebase from 're-base';
import firebase from 'firebase';
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCGBDcdtd_ybc8DoMUUnA31yCGw2iMpDZ0",
    authDomain: "catch-of-the-day-99d0d.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-99d0d.firebaseio.com",
    projectId: "catch-of-the-day-99d0d",
    storageBucket: "catch-of-the-day-99d0d.appspot.com",
    messagingSenderId: "365257701202",
    appId: "1:365257701202:web:4c40a8ab93ab1c1db1ac8b"
})
const base=Rebase.createClass(firebaseApp.database());

export {firebaseApp};
export default base;