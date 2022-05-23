import request from '@/utils/request';
const baseURL = ''

export function getlogin(data) {
  return request({
    baseURL,
    url: 'login.tml',
    method: 'post',
    data
  });
}
