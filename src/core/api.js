import agent from './fetch';

export const quests = {
  all: ()=> (agent.get('/quest', {auth: true})),
  single: (id)=>agent.get(`/quest/${id}`),
  create: (data)=>agent.put(`/quests`).send(data)
};

export const auth = {
  login: (login, password)=>agent.post(`/auth/login`, {auth: true}).send({login, password}),
  loginVK: (access_token, user_id)=>agent.post(`/auth/vk/authorize`, {auth: true}).send({access_token, user_id}),
  register: (data)=>agent.post(`/auth/registration`, {auth: true}).send(data)
}
