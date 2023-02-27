import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStyleView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // home 처럼 위쪽에서 import하고 빌드하면 app.js에 전부 포함되서 한번에 로딩이 되고 아래처럼 직접 import하면 눌렀을때 로딩이 되는 형식
    // webpackPrefetch:ture옵션을 주석으로 넣어놓으면 처음 로딩될때 브라우저 캐시에 import될 js 파일을 캐싱해놓음

    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventKeyView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
