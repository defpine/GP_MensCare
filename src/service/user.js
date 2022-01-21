import http from '../http-common';

function updateUser(user,success,fail) {
  http.put()
  .then(success)
  .catch(fail)
};

function chkName(nickname,success,fail){
  http.get()
  .then(success)
  .catch(fail)
};

function delUser(user_id,success,fail){
  http.delete()
  .then(success)
  .catch(fail)
};

function requestCert(phone_num,success,fail) {
  http.post()
  .then(success)
  .catch(fail)
};

function getCert(cert_num,success,fail){
  http.get()
  .then(success)
  .catch(fail)
};


export {updateUser,chkName,delUser,requestCert,getCert};