import firebase from 'firebase/app';

export default function CollectionResolver(collection) {
  this.collection = firebase.firestore().collection(collection);
}

CollectionResolver.prototype.get = function () {
  return this.collection.get();
};

CollectionResolver.prototype.create = function (data) {
  return this.collection.set(data);
};

CollectionResolver.prototype.update = function (doc, data) {
  return this.collection.doc(doc).update(data);
};

CollectionResolver.prototype.updateTransaction = function (doc, cb) {
  return this.collection.doc(doc).transaction(cb);
};

CollectionResolver.prototype.delete = function (doc) {
  return this.collection.doc(doc).delete();
};
