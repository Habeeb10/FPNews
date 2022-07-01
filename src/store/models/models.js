import axios from 'axios';

const baseUrl =
  'https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en';

export const fPNews = {
  state: {
    articles: [],
    title: {},
    topic: {},
    published_date: {},
    summary: {},
    author: {},
    loading: false,
  }, // initial state
  reducers: {
    SETLOADING: (state, payload) => {
      return {
        ...state,
        loading: payload,
      };
    },

    FETCH_TITLE: (state, payload) => {
      return {
        ...state,
        title: payload,
      };
    },
    FETCH_TOPIC: (state, payload) => {
      return {
        ...state,
        topic: payload,
      };
    },
    FETCH_DATE: (state, payload) => {
      return {
        ...state,
        published_date: payload,
      };
    },
    FETCH_SUMMARY: (state, payload) => {
      return {
        ...state,
        summary: payload,
      };
    },
    FETCH_AUTHOR: (state, payload) => {
      return {
        ...state,
        author: payload,
      };
    },

    // GET_IMAGES: (state, payload) => {
    //   const data = payload.map(item => item.media);
    //   return {
    //     ...state,
    //     media: [...data],
    //   };
    // },
  },
  effects: () => ({
    loadData() {
      this.SETLOADING(true);
      axios({
        url: `${baseUrl}`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        },
      })
        .then(res => {
          this.FETCH_TITLE(res.data);
          console.log(res.data);
          this.SETLOADING(false);
        })
        .catch(err => {
          console.log(err);
          this.SETLOADING(false);
        });
    },

    topic() {
      this.SETLOADING(true);
      axios({
        url: `${baseUrl}/topic`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        },
      }).then(res => {
        this.FETCH_TOPIC(res.data);
        this.SETLOADING(false);
      });
    },
    published_date() {
      this.SETLOADING(true);
      axios({
        url: `${baseUrl}/published_date`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        },
      }).then(res => {
        this.FETCH_DATE(res.data);
        this.SETLOADING(false);
      });
    },
    summary() {
      this.SETLOADING(true);
      axios({
        url: `${baseUrl}/summary`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        },
      }).then(res => {
        this.FETCH_SUMMARY(res.data);
        this.SETLOADING(false);
      });
    },
    author() {
      this.SETLOADING(true);
      axios({
        url: `${baseUrl}/author`,
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
          'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        },
      }).then(res => {
        this.FETCH_AUTHOR(res.data);
        this.SETLOADING(false);
      });
    },
  }),
};

// import axios from 'axios';
// import {Alert} from 'react-native';

// const baseUrl = 'https://free-news.p.rapidapi.com/v1/search';

// export const model = {
//   state: {
//     title: {},
//     topic: {},
//     published_date: {},
//     summary: {},
//     author: {},
//     loading: false,
//   }, // initial state
//   reducers: {
//     // handle state changes with pure functions
//     //loading state controllers
//     IS_LOADING(state) {
//       return {
//         ...state,
//         loading: true,
//       };
//     },
//     NOT_LOADING(state) {
//       return {
//         ...state,
//         loading: false,
//       };
//     },
//     FETCH_TITLE(state, payload) {
//       return {
//         ...state,
//         title: payload,
//       };
//     },
//     FETCH_TOPIC(state, payload) {
//       return {
//         ...state,
//         topic: payload,
//       };
//     },
//     FETCH_DATE(state, payload) {
//       return {
//         ...state,
//         published_date: payload,
//       };
//     },
//     FETCH_SUMMARY(state, payload) {
//       return {
//         ...state,
//         summary: payload,
//       };
//     },
//     FETCH_AUTHOR(state, payload) {
//       return {
//         ...state,
//         author: payload,
//       };
//     },
//   },

//   effects: dispatch => ({
//     async fetchTitle() {
//       dispatch.model.IS_LOADING();
//       await axios({
//         method: 'GET',
//         params: {q: 'Elon Musk', lang: 'en'},
//         headers: {
//           'X-RapidAPI-Key':
//             '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
//           'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
//         },
//         get: `${baseUrl}`,
//       })
//         .then(response => {
//           dispatch.model.FETCH_TITLE(response.data);
//         })
//         .catch(() => Alert.alert('Error', 'Unable to fetch your request'))
//         .finally(() => dispatch.model.NOT_LOADING());
//     },

//     async fetchTopic() {
//       dispatch.model.IS_LOADING();
//       await axios({
//         method: 'GET',
//         params: {q: 'Elon Musk', lang: 'en'},
//         headers: {
//           'X-RapidAPI-Key':
//             '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
//           'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
//         },
//         get: `${baseUrl}`,
//       })
//         .then(response => {
//           dispatch.model.FETCH_TOPIC(response.data);
//         })
//         .catch(() => Alert.alert('Error', 'Unable to fetch your request'))
//         .finally(() => dispatch.model.NOT_LOADING());
//     },

//     async published_date() {
//       dispatch.model.IS_LOADING();
//       await axios({
//         method: 'GET',
//         params: {q: 'Elon Musk', lang: 'en'},
//         headers: {
//           'X-RapidAPI-Key':
//             '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
//           'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
//         },
//         get: `${baseUrl}`,
//       })
//         .then(response => {
//           dispatch.model.FETCH_DATE(response.data);
//         })
//         .catch(() => Alert.alert('Error', 'Unable to fetch your request'))
//         .finally(() => dispatch.model.NOT_LOADING());
//     },

//     async summary() {
//       dispatch.model.IS_LOADING();
//       await axios({
//         method: 'GET',
//         params: {q: 'Elon Musk', lang: 'en'},
//         headers: {
//           'X-RapidAPI-Key':
//             '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
//           'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
//         },
//         get: `${baseUrl}`,
//       })
//         .then(response => {
//           dispatch.model.FETCH_SUMMARY(response.data);
//         })
//         .catch(() => Alert.alert('Error', 'Unable to fetch your request'))
//         .finally(() => dispatch.model.NOT_LOADING());
//     },

//     async author() {
//       dispatch.model.IS_LOADING();
//       await axios({
//         method: 'GET',
//         params: {q: 'Elon Musk', lang: 'en'},
//         headers: {
//           'X-RapidAPI-Key':
//             '9d37e5b69cmsh7bb8af13d291c11p1a9659jsndc49ea92a05f',
//           'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
//         },
//         get: `${baseUrl}`,
//       })
//         .then(response => {
//           dispatch.model.FETCH_AUTHOR(response.data);
//         })
//         .catch(() => Alert.alert('Error', 'Unable to fetch your request'))
//         .finally(() => dispatch.model.NOT_LOADING());
//     },
//   }),
// };

// export default model;
