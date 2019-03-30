import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Layout from '../components/MyLayout.js';
import LyricPad from '../components/LyricPad.js';

const lyricContent = (state={}, action) => {
  return Object.assign(state, action);
}

let store = createStore(lyricContent);

export default () => (
  <Provider store={store}>
    <Layout>
      <LyricPad lyric="abc"></LyricPad>
    </Layout>
  </Provider>
)
