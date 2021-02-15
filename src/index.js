import { html, navigate } from "olive-spa";
import {
  HOME, BIO, PROJECTS,
  ACTIONS,
} from './env.js'
import { Home } from './components/Home/Home.js'
import { Nav } from './components/Nav.js'
import { Bio } from './components/Bio/Bio.js'
import { store } from './store.js'
import '../index.css'
import { Projects } from "./components/Projects/Projects.js";

//APPLICATION ================================================

const App = () =>
  html()
    .use(store)
    .concat(Nav())
    .router({
      '/'       : Home,
      [HOME]    : Home,
      [BIO]     : Bio,
      [PROJECTS]: Projects,
    })


App().mount('root')
html().dispatch(ACTIONS.SELECT_PATH, '/')

/*
 * Hot module replacment for development
 */
if (module.hot) {
  module.hot.accept(["../src/index.js"], () => {});
}
