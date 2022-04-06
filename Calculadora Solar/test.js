var requestOptions = {
  method: 'GET',
  headers: {
    "x-access-token": "9b42b95b299741645f1c1db83e39d1da"
  },
  redirect: 'follow'
};

fetch("https://api.openuv.io/api/v1/forecast?lat=-19.897480&lng=-43.962586&dt=2022-04-20", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));