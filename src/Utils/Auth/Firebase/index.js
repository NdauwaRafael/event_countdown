/**
 * Created by Raphael Karanja on 2019-02-25.
 */
// import * as firebase from "firebase";
//
// import { FirebaseConfig } from "../FireBaseConfig.js";
// firebase.initializeApp(FirebaseConfig);
import firebase from 'expo-firebase-app';

const databaseRef = firebase.database().ref();
export const eventsRef = databaseRef.child("events");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();