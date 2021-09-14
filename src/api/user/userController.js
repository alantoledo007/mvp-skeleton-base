const TABLA = 'user';

module.exports = function ( injectedStore ) {

  let store = injectedStore;

  if (!store) {
      store = require('../../../store/dummy');
  }
 
  async function userAll(req, res){
      let users = await store.list(TABLA);
      return res.status(200).json(users);
  }

  async function userById(req, res){
    let users = await store.get(TABLA, req.params.id);
    return res.status(200).json(users);
}

  return {
    userAll,
    userById
  };

};
