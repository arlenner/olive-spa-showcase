import { html } from 'olive-spa'

const STEP_RATE = 330

const Char = (ch, size, t = 0, deleteAfter = false) => {
    const char = html().div().text(ch).css({fontSize: size+'em'})
    if(deleteAfter) return char.timer(t, hx => hx.delete())
    return char
  }
  
const Whitespace = (t = 0, deleteAfter = false) => {
    const ws = html().div().css({margin: '.4em'})
    if(deleteAfter) return ws.timer(t, hx => hx.delete())
    return ws
}

export const StepTextCycler = (strs, size = 1) => {
    let cur = 0
    const nstep = (n) => 
        StepText({
            str: strs[n%strs.length], 
            selector: 'caret',
            time: 9000,
            deleteAfter: true,
            size
        })
        .timer(10000, hx => 
            hx.mapSelector('.step-text', stepper => 
                stepper.replace(nstep(++cur))
            )
        )             
    return nstep(0)
}
  
export const StepText = ({selector = 'caret', str, time = 0, deleteAfter = false, size = 1}) => {
    const chs = str.split('')
    let total = 0
    const nextR = () => {
        let r = Math.random()*.2
        total += r
        return total
    }

    const getTime = i => time === 0 ? 0 : time + chs.length - i * STEP_RATE

    return (
        html()
            .div().class('step-text').open()
                .div().class(selector)
                .each(chs, (hx, ch, i) => 
                    hx.timer(
                        nextR()*1000,
                        h1 => h1.mapSelector(`.${selector}`, caret =>
                            caret.insertBefore(ch === ' ' 
                                ? Whitespace(getTime(i), deleteAfter)
                                : Char(ch, size, getTime(i), deleteAfter)
                            )
                        )
                    )          
                )
    )
  }
  