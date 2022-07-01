// import {fPNews} from './models/models';
// import persistPlugin from '@rematch/persist';
// import {init} from '@rematch/core';
// import AsyncStorage from '@react-native-community/async-storage';

// const rootPersistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// export const store = init({
//   models: {fPNews},
//   plugins: [persistPlugin(rootPersistConfig)],
// });

import {fPNews} from './models/models';
import persistPlugin from '@rematch/persist';
import {init} from '@rematch/core';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = init({
  models: {fPNews},
  plugins: [persistPlugin(persistConfig)],
});

// import {init} from '@rematch/core';
// import {model} from './models/models';

// const models = {model};

// const store = init({models});

// export default store;
