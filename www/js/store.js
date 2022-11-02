var createStore = Framework7.createStore;
const store = createStore({
  state: {
    reflections: [
      {
        title: 'Midterm Today',
        text: 'I had a midterm today. I think it went <b>pretty well :).</b> It was in my CPSC4210 Advanced Software Engineering class. There were a few questions on topics that I had <s>not studied well</s> studied well, but the knowledge is fairly common sense. Not looking forward to the final :)',
        date: 'Wed Nov 2 2022 16:02:00 GMT-0600 (Mountain Daylight Time)'
      },
      {
        title: 'Thinking about framework7',
        text: 'After working with framework7 for the first assignment. I have <i>a lot</i> of thoughts about the framework... <br><ol><li>I dont understand the component architecture. Frameworks like Vue make this a lot easier, while it seems like theres 100 different ways to do the same thing in framework7.</li><li>Styling my application is a lot easier. I enjoy working on an app more if I can quickly make it look the way I want. The templated code from the documentation is a huge help</li></ol>',
        date: 'Mon Oct 31 2022 19:56:00 GMT-0600 (Mountain Daylight Time)'
      },
      {
        title: 'The Semester so far...',
        text: 'This is my second last semester. I am taking 5 classes. <ul><li>CPSC4210</li><li>CPSC4110</li><li>NMED3630</li><li>NEUR3690</li><li>MUSI3605</li></ul>',
        date: 'Mon Sep 22 2022 12:22:00 GMT-0600 (Mountain Daylight Time)'
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
      state.reflections = [reflection, ...state.reflections];
    },

    resetReflections({state}) {
      state.reflections = [];
    }
  },
})

