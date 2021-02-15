// Application Data
export const HOME       = '/home',
             BIO        = '/bio',
             PROJECTS   = '/projects',
             BLOG       = '/blog'

export const ROUTES = [HOME, BIO, PROJECTS, BLOG]

export const ACTIONS = {
  NEXT_BIO:    'Next Bio',
  NEXT_PROJ:   'Next Proj',
  SELECT_PATH: 'Select Path',
  NAVIGATE:    'Navigate',
}

const projects = [
  {
    name: 'olivejs', 
    url: 'https://github.com/arlenner/olivejs', 
    image: './assets/olivejs.png',
    desc: 'An extremely lightweight minimalsts vanilla SPA framework. I used it to build this webpage!'
  },
  {
    name: 'matchjs',
    url: 'https://github.com/arlenner/matchjs',
    image: './assets/matchjs.png',
    desc: 'A tiny library for adding Sum Types and Pattern Matching to JS.'
  },
  {
    name: 'hexys',
    url: 'https://hexys.netlify.app',
    image: './assets/hexys-main.png',
    desc: 'A strategy game of attrition, a web remaster of the SEGA classic Hexagonos. Open two browsers and you can play by yourself, thanks to websockets.'
  },
  {
    name: "c-gen",
    url: 'https://arlenner.github.io/cgen',
    image: './assets/c-gen-main.png',
    desc: 'A color ramp generator for helping artists and designers build palettes.'
  }
]

const pages = [
  {
    header: 'My Mission',
    subtitle: 'Uniting Business & Design',
    content: [
      'Bringing great design and meaningful products together.',
      'Carrying a professional and positive attitude into my work.',
      'Creating great user experiences.'
    ]
  },
  {
    header: 'My Goal',
    subtitle: 'Why Design Beautiful Content?',
    content: [
      'Using my talents to unite customers to businesses.',
      'Creating elegant web solutions that suit client custom needs.',
      'Building my skills and career experiences.'
    ]
  },
  {
    header: 'My Passion',
    subtitle: 'Writing Code, Learning Always',
    content: [
      'Writing clean, functional code.',
      'CANI - Constant And Never-Ending Improvement',
      'Dedicating myself to learning.'
    ]
  },
  {
    header: 'My Skills',
    subtitle: 'What Do I Bring to the Table?',
    content: [
      'Front-End |> Angular | React | vanilla | CSS | HTML | Redux | SEO',
      'Back-End  |> Express | Node  | MongoDB | socket.io',
      'Languages |> JS 90%  | Rust 80% | C# 80%  | Java 65%  | C 65%',
      'Other     |> Unity3D | Blender | Photoshop | Pixel Art'
    ]
  }
]

const links = {
    blog: 'https://rossketeer.medium.com'
}

export const data = {
    projects,
    pages,
    links
}
