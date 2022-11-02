
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/reflectionList/',
    componentUrl: './pages/reflectionList.html'
  },
  {
    path: '/newReflection/',
    componentUrl: './pages/newReflection.html'
  },
  {
    path: '/settings/',
    componentUrl: './pages/settings.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
