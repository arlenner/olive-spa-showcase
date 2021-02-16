import { ACTIONS, data } from '../../env'
import { html } from 'olive-spa'
import { Container } from '../Container'
import { StepText } from '../Text'
import './Projects.css'

const { projects } = data

const ProjectPanel = ({name, url, desc}) => 
    html()
        .section().class('project-panel')
        .subscribe(
            ACTIONS.NEXT_PROJ, 
            (hx, {projectIdx}) => hx.timer(2000, hy => hy.replace(ProjectPanel(projects[projectIdx])))
        )
        .open()
            .concat(
                StepText({
                    str: name,
                    time: 5000,
                    selector: 'caret',
                    size: 1.6
                })
            )
            .div().class('project-inner').open()
                .p()
                    .text(desc)
                    .transition({
                        type: 'fade',
                        direction: 'right',
                        delay: .2,
                        curve: [.1, .2, .4, 1]
                    })
                    .subscribe(
                        ACTIONS.NEXT_PROJ, 
                        hx => hx.css({transitionDelay: '.5s', transform: 'translatex(500px)', opacity: 0})
                    )
                .a().href(url).open()
                .div()
                    .class('project-picture', name)
                    .transition({
                        type: 'fade',
                        direction: 'right',
                        velocity: 500,
                        curve: [.1, .2, .4, 1],
                    })
                    .subscribe(
                        ACTIONS.NEXT_PROJ,
                        hx => hx.css({ transitionDelay: '0s', transform: 'translatex(500px)', opacity: 0 })
                    )

const ProjectButton = () =>
    html()
        .button()
            .disabled()
            .text('=>')
            .class('bio-button')
            .timer(2000, hx => hx.removeAttr('disabled'))
            .on('click', hx => hx.dispatch(ACTIONS.NEXT_PROJ))
            .subscribe(
                ACTIONS.NEXT_PROJ, 
                ha => ha.disabled().timer(
                    3000, 
                    hb => hb.removeAttr('disabled')
                )
            )



export const Projects = ({projectIdx}) => 
    Container(
        ProjectPanel(projects[projectIdx]),
        ProjectButton()
    )