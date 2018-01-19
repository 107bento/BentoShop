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

  function updateShopInfo(data) {

    const request = fetch(`${env.baseUrl}/shops/me/info`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    });

    return _requestHandle(request);
  }

  // add meal
  function addMeal(data) {
    const request = fetch(`${env.baseUrl}/shops/me/menu`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    });

    return _requestHandle(request);
  }

  // edit meal
  function editMeal(data) {
    const request = fetch(`${env.baseUrl}/shops/me/menu/${data.meal_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    });

    return _requestHandle(request);
  }

  // delete meal
  function deleteMeal(meal_id) {
    const request = fetch(`${env.baseUrl}/shops/me/menu/${meal_id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    return _requestHandle(request);
  }

  // 拿到某店家所擁有的訂單
  function getShopOrders() {
    const request = fetch(`${env.baseUrl}/shops/me/orders`, {
      method: 'get',
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
    updateShopInfo,
    addMeal,
    editMeal,
    deleteMeal,
    getShopOrders,
  }

})();

export {
  API
};
