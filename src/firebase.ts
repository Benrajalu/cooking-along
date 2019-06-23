import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from './firebaseConfig.js';

const config = {
  ...firebaseConfig,
};

// Initialize Firebase
firebase.initializeApp(config);

const remoteStore = firebase.firestore();

export default remoteStore;