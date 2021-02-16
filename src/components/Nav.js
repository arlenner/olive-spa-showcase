import { html, navigate } from 'olive-spa'
import { ACTIONS, ROUTES, BLOG, HOME, data } from '../env'
const { links } = data

const linkSelectedStyle = (path, rt) => 
  path === rt                 ? { boxShadow: `0 -.25em 0em 0em orangered inset` }
: rt === HOME && path === '/' ? { boxShadow: `0 -.25em 0 0 orangered inset` }
:                               { boxShadow: '' }

export const Nav = () =>
  html()
    .nav()
    .open()
      .each(ROUTES, (hx, rt, i) => 
        rt === BLOG 
          ? hx.a().text(rt.slice(1))
            .href(rt === BLOG ? links.blog : '#')
            .transition({
              type: 'fade',
              time: 2,
              curve: [0, .3, .6, 1],
              direction: 'center',
              baseTransition: 'box-shadow .3s ease-in' //preserve styles, base transitions get overwritten by internal funcs
            })
          : hx.a()
              .subscribe(ACTIONS.SELECT_PATH, (htmlx, {path}) => htmlx.css(linkSelectedStyle(path, rt)))
              .on('click', htmlx => htmlx.dispatch(ACTIONS.SELECT_PATH, rt))
              .text(rt.slice(1))
              .href(rt === BLOG ? links.blog : '#')
              .transition({
                type: 'fade',
                time: 2,
                curve: [0, .3, .6, 1],
                direction: 'center',
                baseTransition: 'box-shadow .3s ease-in' //preserve styles, base transitions get overwritten by internal funcs
              })
      )
