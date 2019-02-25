/**
 * Created by Raphael Karanja on 2019-02-25.
 */
import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const eventsRef = databaseRef.child("events");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();