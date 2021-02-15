import { ACTIONS, data } from '../../env'
import { html } from 'olive-spa'
import { Container } from '../Container'
import { StepText } from '../Text'
import './Projects.css'

const { projects } = data

const exclude = arg => arr => arr.filter(i => i.name !== arg)

const ProjectPanel = ({name, url, desc}) => 
    html()
        .section().class('bio-panel')
        .subscribe(
            ACTIONS.NEXT_PROJ, 
            (hx, {projectIdx}) => hx.timer(2000, hy => hy.replace(ProjectPanel(projects[projectIdx])))
        )
        .open()
            .div()
            .concat(
                StepText({
                    str: name,
                    time: 5000,
                    selector: 'caret',
                    size: 1.6
                })
            )
            .div().class('project-picture').class(name)
            .a().href(url).on('click', () => {}, false)
            .p().text(desc)

const ProjectButton = () =>
    html()
        .button()
            .disabled()
            .text('=>')
            .class('bio-button')
            .timer(3000, hx => hx.removeAttr('disabled'))
            .on('click', hx => hx.dispatch(ACTIONS.NEXT_PROJ))
            .subscribe(
                ACTIONS.NEXT_PROJ, 
                ha => ha.disabled().timer(
                    4000, 
                    hb => hb.removeAttr('disabled')
                )
            )



export const Projects = ({projectIdx}) => 
    Container(
        ProjectPanel(projects[projectIdx]),
        ProjectButton()
    )