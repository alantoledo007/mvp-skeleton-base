import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import config from './config';

if (firebase.apps.length === 0) firebase.initializeApp(config);
