import $api from '../requester';

export const fetchTodoList = async (params) => {
  const { data } = await $api.get('/todos', { params });
  return data;
};

export const fetchTodoById = async (id) => {
  const { data } = await $api.get(`/todos/${id}`);
  return data;
};