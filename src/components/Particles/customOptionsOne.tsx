const lineLinkedColor = '#fff'
const particlesColor = '#fff'
const numberOfNodes = 120
const opacityOfDot = 0.1
const movingSpeed = 1
const numberOfPolygonSides = 30
const colorOfBackground = 'transparent'

export const customOptionsOne: any = {
  fps_limit: 60,
  interactivity: {
    detect_on: 'canvas',
    events: {
      onclick: { enable: true, mode: 'push' },
      onhover: {
        enable: true,
        mode: 'attract',
        parallax: { enable: false, force: 60, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      push: { quantity: 2 },
      attract: { distance: 50, duration: 0.4, factor: 3 },
    },
  },
  particles: {
    color: { value: particlesColor },
    line_linked: {
      color: lineLinkedColor,
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 2,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: false,
      speed: movingSpeed,
      straight: false,
    },
    number: {
      density: { enable: true, value_area: 700 },
      value: numberOfNodes,
    },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: opacityOfDot,
    },
    shape: {
      character: {
        fill: false,
        font: 'Verdana',
        style: '',
        value: '*',
        weight: '400',
      },
      polygon: { nb_sides: numberOfPolygonSides },
      stroke: { color: '#000000', width: 0 },
      type: 'circle',
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5,
    },
  },
  polygon: {
    draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
    move: { radius: 180 },
    scale: 5,
    type: 'none',
    url: '',
  },
  background: {
    color: colorOfBackground,
    image:
      'https://diamondscraft.io/wp-content/uploads/2022/03/diamondslogo.png',
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  retina_detect: true,
}
