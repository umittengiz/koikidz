// import apolloClient from "../../vue-apollo";
// import gql from "graphql-tag";
// import * as g from "../../graphql";

const state = {
  bookings: [{}, {}],
};

const getters = {
  // getterValue: (state) => {
  //   return state.value;
  // },

  getBookings: (state) => state.bookings,

  // getSepetToplamFiyat: (state, getters) => {
  //   return getters.getSepet.reduce((sepetToplamFiyat, urun) => {
  //     return sepetToplamFiyat + urun.fiyat * urun.miktar;
  //   }, 0);
  // },
};

const mutations = {
  // updateValue: (state, payload) => {
  //   state.value = payload;
  // },

  SET_BOOKINGS: (state, bookings) => (state.bookings = bookings),
  // setBookings: (state, bookings) => (state.bookings = bookings),
};

const actions = {
  // updateActionValue({ commit }) {
  //   commit("updateValue", payload);
  // },
  // async fetchTumUrunler({ commit }) {
  //   const response = await apolloClient.query({
  //     query: gql`
  //       query Sepet($masaId: Int!) {
  //         orders(
  //           where: {
  //             masaId: { _eq: $masaId }
  //             _and: { isOdendi: { _eq: false } }
  //           }
  //           order_by: { created_at: asc }
  //         ) {
  //           id
  //           siparisId
  //           urunId
  //           kategoriId
  //           urunAd
  //           adisyonId
  //           masaId
  //           garsonId
  //           miktar
  //           fiyat
  //           toplamFiyat
  //           tempIncrement
  //           isOdendi
  //           isHazir
  //         }
  //       }
  //     `,
  //     variables: { masaId: state.masaId },
  //   });
  //   console.log(response);
  //   commit("SET_TUM_URUNLER", response.data.categories);
  // },
  // async fetchBookings({ commit}) {
  //   const response = await apolloClient.query({
  //     query: query,
  //   });
  //   commit("SET_BOOKINGS", response.data.bookings)
  // }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
