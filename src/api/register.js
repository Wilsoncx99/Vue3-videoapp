import request from '@/utils/request';
const baseURL = '/carnival_tbs_demo'

export function register(data) {
  return request({
    baseURL,
    url: 'user_register_jsons.tml',
    method: 'post',
    data
  });
}
