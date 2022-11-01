var createStore = Framework7.createStore;
const store = createStore({
  state: {
    reflections: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.',
        date: 'Mon Oct 31 2022 19:56:00 GMT-0600 (Mountain Daylight Time)'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        text: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!',
        date: 'Mon Oct 31 2022 19:56:00 GMT-0600 (Mountain Daylight Time)'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        text: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.',
        date: 'Mon Oct 31 2022 19:56:00 GMT-0600 (Mountain Daylight Time)'
      },
    ]
  },
  getters: {
    reflections({ state }) {
      return state.reflections;
    }
  },
  actions: {
    addReflection({ state }, reflection) {
      state.reflections = [...state.reflections, reflection];
    },
  },
})

