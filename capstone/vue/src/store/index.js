import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/*
 * The authorization header is set for axios when you login but what happens when you come back or
 * the page is refreshed. When that happens you need to check for the token in local storage and if it
 * exists you should set the header so that it will be attached to each request
 */
const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default new Vuex.Store({
  state: {
    token: currentToken || '',
    user: currentUser || {},
    band: {},
    notifications: [],
    bandsFollowing: [],
    genreOptions: [],
    
  },
  mutations: {
    SET_GENRE_OPTIONS(state, genres){
      state.genreOptions = genres;
    },
    ADD_GENRE_OPTION(state, genre){
      state.genreOptions.push(genre)
    },
    REMOVE_GENRE_OPTION(state, genreToDelete){
      state.genreOptions = state.genreOptions.filter(genre => {
        return genre !== genreToDelete;
      })
    },
    
    SET_BANDS_FOLLOWING(state, bands){
      state.bandsFollowing = bands;
    },
    SET_CURRENT_NOTIFICATIONS(state, notifications) {
      state.notifications = notifications;
    },
    SET_CURRENT_BAND(state, band) {
      state.band= band;
    } ,
    REMOVE_BAND_FOLLOWING(state, bandToDelete) {
      state.bandsFollowing = state.bandsFollowing.filter(band => {
        return band !== bandToDelete
      })
    },
    SET_AUTH_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem('user',JSON.stringify(user));
    },
    LOGOUT(state) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.token = '';
      state.user = {};
      axios.defaults.headers.common = {};
    }
  }
})
