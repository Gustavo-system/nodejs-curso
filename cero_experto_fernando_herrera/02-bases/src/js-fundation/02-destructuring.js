//console.log(process.env)

const { ZSH, PWD, HOME } = process.env

//console.table({ ZSH, PWD, HOME })

const personajes = ['Batman', 'Superman', 'Cocodriloqui']

const [, , coco] = personajes

//console.table({ coco })