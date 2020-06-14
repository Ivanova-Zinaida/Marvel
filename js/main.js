let imgAvatars = [
    {
        img : 'player-1.jpg',
        name: 'Капитан Америка'
    },
    {
        img : 'player-2.jpg',
        name: 'Железный человек'
    },
    {
        img : 'player-3.jpg',
        name: 'Черная вдова'
    },
    {
        img : 'player-4.jpg',
        name: 'Халк'
    },
    {
        img : 'player-5.jpg',
        name: 'Соколиный глаз'
    },
    {
        img : 'player-6.jpg',
        name: 'Тор'
    },
];
let srcImg = {
    src:'img',
    nameImg:'img',
    nameBackFase: 'back-face',
    imgExpantion:'png',
    number:19,    
}
let playrDescritpion = {
    description: `Агенты Гидры захватили скипетр Локи и прячут его на одной из своих баз. Мстителям нужна твоя помощь, что бы вернуть опасный артефакт.  Твоя задача пробраться в логово гидры, для этого необходимо пройти ряд испытаний. Только человек с феноменальной памятью может справится с этой миссией.`,
    label: `Выберите себе псевдоним`,
    titlePlayers:`Или вы можете выбрать персонажа`,
}
let textWinModal={
    textStop:'Поздравляю вы нашли скипетр Локи и вернули его мстителям.',
    textWin:' Вы успешно прошли миссию, но агенты гидры успели перепрятать артефакт '
}

let player = new Player('form-gamer','game-wrap', imgAvatars, playrDescritpion, '.info-game');


let gamePairedPictures = new GamePairedPictures('#game-wrap',srcImg, '.info-game', '.modul-wrap', textWinModal); 


