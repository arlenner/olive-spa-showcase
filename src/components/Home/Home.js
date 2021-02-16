import { html } from 'olive-spa'
import { StepTextCycler } from '../Text.js'
import { Container } from '../Container.js'
import './Home.css'

const Portrait = () =>
    html().div().class('portrait')
        .transition({
            type: 'fade',
            direction: 'center',
            delay: 1,
            curve: [0, .3, .6, 1],
            time: 3
        })


export const Home = () =>
    Container(
        html().div().class('step-container').open()
        .concat(
            StepTextCycler([
                "Howdy, Earthlings.", 
                "My name is Ross.",
                "I'm a Full Stack Dev.",
                "Take a look around!",
            ], 1.6)
        ),
        Portrait()
    )
