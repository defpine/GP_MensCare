import httpDjango from '../http-django';

function searchAll(user_id,keyword,success,fail){
  httpDjango.get()
  .then(success)
  .catch(fail)
};

function searchCat(user_id,category,keyword,success,fail){
  httpDjango.get()
  .then(success)
  .catch(fail)
};

export {searchAll,searchCat}