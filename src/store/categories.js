import { getCategory, getCategories } from "../services/categories.service";

const state = {
  category: {},
  categories: [],
  categoryError: null,
};
const getters = {
  category: ({ category }) => category,
  categories: ({ categories }) => categories,
  categoryError: ({ categoryError }) => categoryError,
};
const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
  setCategory(state, category) {
    state.category = category;
  },
  setCategoryError(state, error) {
    state.categoryError = error;
  },
};
const actions = {
  async fetchCategory({ commit }) {
    try {
      const category = await getCategory(id);
      commit("setCategory", category);
    } catch (error) {
      commit("setCategoryError");
    }
  },
  async fetchCategories({ commit }) {
    try {
      const categories = await getCategories();
      commit("setCategories", categories);
    } catch (error) {
      commit("setCategoryError");
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
