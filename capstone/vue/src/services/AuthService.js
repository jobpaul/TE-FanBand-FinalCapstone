import axios from 'axios';

export default {

  login(user) {
    return axios.post('/login', user)
  },

  register(user) {
    return axios.post('/register', user)
  },

  createBand(band, genres) {
    return axios.post('/band', band, genres)
  },

  getBand(bandId) {
    return axios.get(`/band/${bandId}`)
  },

  getNotificationsByUser(userId) {
    return axios.get(`/notifications/${userId}`)
  },

  followBand(follower) {
    return axios.post('/followers', follower)
  },

  unfollowBand(follower) {
    return axios.delete('/followers', follower)
  },

  getFollowersByUser(userId) {
    return axios.get(`/followers/users/${userId}`)
  },

  addGenres(genres) {
    return axios.put('/genre', genres)
  },

  getGenres() {
    return axios.get('/genres')
  }

}
