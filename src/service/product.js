import httpDjango from '../http-django';

function getGoodProd(user_id,success,fail){
  httpDjango.get()
  .then(success)
  .catch(fail)
};

function getBadProd(user_id,success,fail){
  httpDjango.get()
  .then(success)
  .catch(fail)
};

function setLike(user_id,item_id,success,fail){
  httpDjango.put()
  .then(success)
  .catch(fail)
};

function unsetLike(user_id,item_id,success,fail){
  httpDjango.delete()
  .then(success)
  .catch(fail)
};

function getLikeList(user_id,success,fail){
  httpDjango.get()
  .then(success)
  .catch(fail)
};

export {getGoodProd, getBadProd, setLike, unsetLike, getLikeList};