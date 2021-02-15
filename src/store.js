import { navigate, makeStore, pipeMiddleware } from 'olive-spa'
import { HOME, ACTIONS, data, BIO } from './env.js'
const { projects, pages } = data

// Application Store

const DEFAULT = {
    path: HOME,
    projectIdx: 0,
    project: projects[0],
    bioIdx: 0,
    bio: pages[0],
}

const rxSelectPath = (model, data) => ({
    ...model,   
    path: data
})

const rxNextBio = model => ({
        ...model,
        bio: pages[(model.bioIdx + 1) % pages.length],
        bioIdx: (model.bioIdx + 1) % pages.length
    })

const rxNextProject = model => ({
        ...model,
        project: projects[(model.projectIdx + 1) % projects.length],
        projectIdx: (model.projectIdx + 1) % projects.length
    })

const rx = (model, [k, data]) =>
        k === ACTIONS.NEXT_BIO      ? rxNextBio(model)
    :   k === ACTIONS.NEXT_PROJ     ? rxNextProject(model)
    :   k === ACTIONS.SELECT_PATH   ? rxSelectPath(model, data)
    :   /*else*/                      model


//Side Effects

const fxNavigate = (model, action) => {
    const noop = () => {}
    const [k,] = action
    const {path} = model
        k === ACTIONS.SELECT_PATH ? store.dispatch([ACTIONS.NAVIGATE])
    :   k === ACTIONS.NAVIGATE    ? navigate(path, model)
    :                               noop()

    return action
} 

const pipeline = pipeMiddleware(fxNavigate)
  
export const store = makeStore(DEFAULT, rx, pipeline)

window.state = store.state
  
  