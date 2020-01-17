import axios from "axios";

let axiosConfig = {
   method: 'POST',
   url: 'https://fcm.googleapis.com/fcm/send',
   headers:{
      "Authorization": `key=AAAAqqpaaAE:APA91bH7lBjQfBN_5DSzzmDQjVohlWbQ2rLLDHeoms0oz5tg2dMAK_ZWhYpcPa_LVuVY5kgE2hRLL3iQ0GFMAlnfpkrNrDNoJSb_m8B7snIJ5rWJYkWKk2_U8HH43Sl2MmuqoBBRvA1l`,
      "Content-Type": "application/json"
   },
   crossDomain: true,
   dataType: "json",
   cache: false,
   processData: false,
   data: {
      "notification": {
         "title": "Firebase",
         "body": "Firebase is awesome",
         "click_action": "http://localhost:3000/"
      },
      "to": "fWPhICK0EVdNEM7IdpEpxn:APA91bFqU0yu3zuhRdWRpEc_tldc480A8QnjrtEVYvHNG5PGbmmo2LgtLv-HaFS48QAXJpU_PxwOIkeZvtmq13xvoudBR_EchESEIW6SbFmEDaK6LH8f7P8C_K0nA0PZoTc2n5P08vcF"
   },
}

let sendMessage = async (message) => {
   console.log('called axios');
   await axios(axiosConfig);
}

export {sendMessage}