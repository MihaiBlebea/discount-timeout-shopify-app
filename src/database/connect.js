const firebase = require('firebase');

const apiKey = process.env.FIREBASE_API_KEY || process.env.LOCAL_FIREBASE_API_KEY;
const authDomain = process.env.FIREBASE_AUTH_DOMAIN || process.env.LOCAL_FIREBASE_AUTH_DOMAIN;
const databaseURL = process.env.FIREBASE_DATABASE_URL || process.env.LOCAL_FIREBASE_DATABASE_URL;
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || process.env.LOCAL_FIREBASE_STORAGE_BUCKET;

firebase.initializeApp({
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
    storageBucket: storageBucket
});

var database = firebase.database();

module.exports = database;
