import firebase from 'firebase/app';

export default function CollectionResolver(collection) {
  this.collection = firebase.firestore().collection(collection);
}

CollectionResolver.prototype.get = function () {
  return this.collection.get();
};

CollectionResolver.prototype.create = function (data, id) {
  if (id) return this.collection.doc(id).set(data);
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

CollectionResolver.prototype.onChanges = function (cb) {
  return this.collection.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      // if (change.type === 'added') {
      //   console.log('New city: ', change.doc.data());
      // }
      // if (change.type === 'modified') {
      //   console.log('Modified city: ', change.doc.data());
      // }
      // if (change.type === 'removed') {
      //   console.log('Removed city: ', change.doc.data());
      // }
      cb(change);
    });
  });
};
