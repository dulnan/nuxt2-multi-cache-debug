export const state = () => ({
  currentEntityLangStatus: null,
});

export const mutations = {
  setCurrentEntityLangStatus(state, payload) {
    state.currentEntityLangStatus = payload;
  },
};

export const actions = {};

export const getters = {
  currentEntityLangStatus: (state) => state.currentEntityLangStatus,
};
