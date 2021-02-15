    import { ACTIONS, data } from '../../env'
import { html } from 'olive-spa'
import { Container } from '../Container'
import { StepText } from '../Text'
import './Bio.css'

const { pages } = data

const BioPanel = ({header, subtitle, content}) => 
    html()
        .section().class('bio-panel')
        .subscribe(ACTIONS.NEXT_BIO, (hx, {bio}) => hx.timer(2000, hy => hy.replace(BioPanel(bio))))
        .open()
            .div()
            .concat(
                StepText({
                    str: header,
                    time: 5000,
                    selector: 'caret',
                    size: 1.6
                })
            ).subscribe(ACTIONS.NEXT_BIO, hx => hx.css({opacity: 0}))
            .div()
            .h2().text(subtitle)
                .subscribe(
                    ACTIONS.NEXT_BIO, 
                    hx => hx.css({transitionDelay: '0s', transform: 'translateX(500px)', opacity: 0})
                )
                .transition({
                    time: 1,
                    delay: 1,
                    type: 'fade',
                    direction: 'center',
                    curve: [0, .1, .4, 1],
                    velocity: 500,
                })
            .each(content, (hx, str, i) => 
                hx.li().text(str)
                    .subscribe(
                        ACTIONS.NEXT_BIO, 
                        hx => hx.css({ transitionDelay: `${.33+(.33*i)}s`, transform: 'translateX(500px)', opacity: 0})
                    )
                    .transition({
                        time: 1,
                        delay: 1.33+ (.33*i),
                        type: 'fade',
                        direction: 'center',
                        curve: [0, .1, .4, 1],
                        velocity: 500
                    })        
            )

const BioButton = () =>
    html()
        .button()
            .disabled()
            .text('=>')
            .class('bio-button')
            .timer(3000, hx => hx.removeAttr('disabled'))
            .on('click', hx => hx.dispatch(ACTIONS.NEXT_BIO))
            .subscribe(ACTIONS.NEXT_BIO, ha => ha.disabled().timer(5000, hb => hb.removeAttr('disabled')))

export const Bio = ({bioIdx}) => 
    Container(
        BioPanel(pages[bioIdx]),
        BioButton()
    )
    