export const state = () => ({
  currentProduct: null
})

export const getters = {
  currentProduct(state) {
    return state.currentProduct
  }
}

export const mutations = {
  setCurrentProduct(state, product) {
    state.currentProduct = product
  }
}

export const actions = {
  async get({ state, commit }, id) {
    const product = await this.$axios.$get('http://localhost:5555/get-product/' + id)
    console.log(`Fetching product with ID: ${id}`)
    commit('setCurrentProduct', product)
  }
}
