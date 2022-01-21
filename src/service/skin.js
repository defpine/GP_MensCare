import http from '../http-common';

function skinSet(user_id,skin_type,success,fail){
  http.put()
  .then(success)
  .catch(fail)
};

function skinTest(formData,success,fail){
  httpDjango.post()
  .then(success)
  .catch(fail)
};

export {skinSet,skinTest};