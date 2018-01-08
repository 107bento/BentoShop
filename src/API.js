const env = require('./env.json');
const API = (() => {
  function login(username, password) {
    const data = {
      username,
      password,
    };

    const request = fetch(`${env.baseUrl}/login/shops`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: 'include'
    });

    return _requestHandle(request);
  }

  function getShopInfo() {

    const request = fetch(`${env.baseUrl}/shops/me/info`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    return _requestHandle(request);
  }


  // http request 的中介處理
  function _requestHandle(request) {
    return request.then(fetchResponse => {
      return fetchResponse.json().then(data => {
        return {
          ok: fetchResponse.ok,
          data,
          statusCode: fetchResponse.status
        };
      }).then(response => {
        // 錯誤時的處理

        // 沒錯閃邊去
        if (response.ok) {
          return response;
        }

        // 設定兩種錯誤類型（單行 string 跟原始 string array）
        response.errorMessages = response.data.error;

        return response;
      });
    });
  }

  return {
    login,
    getShopInfo,
  }

})();

export {
  API
};
