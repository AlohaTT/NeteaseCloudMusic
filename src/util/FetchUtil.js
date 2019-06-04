import { BASE_URL, } from '../api/Api';
import { ToastAndroid, } from 'react-native';

const DEFAULT_URL = BASE_URL;

const POST = 'POST';
const GET = 'GET';
export function fetchData(url, param = {}, method = GET) {
  return new Promise((resolve, reject) => {
    url = DEFAULT_URL + url;
    let res = {};
    if (method === POST) {
      (res = genPostBody(param));
    } else if (method === GET) {
      ({ url, res, } = genGetBody(param, url));
    }
    fetch(url, { ...res, method: method, })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((json) => {
        if (json.code === 200) {
          return resolve(json);
        } else {
          console.log(json.message);
          throw new Error(json.message);
          // return reject(json.message);
        }
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
        // return;
      });
  });
}

/**
 * 生成psot请求参数
 * @param {*} param
 */
function genPostBody(param) {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify(param);
  console.log(body);
  return { headers, body, };
}

/**
 * 生成get请求参数
 * @param {*} param
 * @param {*} url
 */
function genGetBody(param, url) {
  const headers = {
  };
  if (param) {
    const paramsArray = [];
    //拼接参数
    Object.keys(param).forEach(key => paramsArray.push(key + '=' + param[key]));
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    }
    else {
      url += '&' + paramsArray.join('&');
    }
  }
  return { url, headers, };
}