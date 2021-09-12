import CollectionResolver from '@/firebase/ColletionResolver';

export default function useCollection(collection) {
  const db = new CollectionResolver(collection);

  const get = () => {
    return db.collection.get().then((docs) => {
      const data = [];
      docs.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return data;
    });
  };

  const create = (data) => {
    return db.collection.create(data);
  };

  const update = (doc, data) => {
    return db.collection.update(doc, data);
  };

  const destroy = (doc) => {
    return db.collection.delete(doc);
  };

  const updateTransaction = (cb) => {
    return db.collection.updateTransaction(cb);
  };

  const onChanges = (cb) => {
    return db.collection.onChanges(cb);
  };

  return { get, create, update, destroy, updateTransaction, onChanges };
}
