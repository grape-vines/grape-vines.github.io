import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


const host = 'https://parseapi.back4app.com';
api.settings.host = host;
api.settings.appId = 'EZBOoLlG9Khz9kSUVAhgwadNj682fny5ddwIxmqS';
api.settings.apiKey = 'yjJprqAIF7TwPFICcQuNMrBpcPaFEeq0PV9EBaAL';

api.settings.host = host;

export async function getAll(nameQuery='',typeQuery='') {
    const query = JSON.stringify({ name: {"$regex":`^${nameQuery}`},type: {"$regex":`^${typeQuery}`}});
    const response= await api.get(host + '/classes/Vine?where=' + encodeURIComponent(query));
    return response.results;
}

export async function createMessage(one) {
    return await api.post(host + '/classes/Message', one);
}
