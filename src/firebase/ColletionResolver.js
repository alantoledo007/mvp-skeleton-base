import firebase from 'firebase/app';

export default function CollectionResolver(collection) {
  this.collection = firebase.firestore().collection(collection);
}
