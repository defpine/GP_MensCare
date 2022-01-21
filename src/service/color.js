import http from '../http-common';
import httpDjango from '../http-django';

function setColor(userLoginId,persolnalColor,success,fail){
  http.put()
  .then(success)
  .catch(fail)
};



export {setColor,colorTest};