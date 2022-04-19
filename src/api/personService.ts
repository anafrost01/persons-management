import apiClient from './api';
import { PersonByIdResponse, PersonsResponse } from './types';

const getAll = async () => {
  const response = await apiClient.get<PersonsResponse>('/persons', { params: { limit: 20 } });
  return response.data;
};

const getById = async (id: string) => {
  const response = await apiClient.get<PersonByIdResponse>(`/persons/${id}`);
  return response.data;
};

const search = async (query: string) => {
  const response = await apiClient.get<PersonsResponse>('/persons/search', {
    params: { term: query, fields: ['name'], limit: 20 },
  });
  return response.data;
};

const PersonService = {
  getAll,
  getById,
  search,
};

export default PersonService;
