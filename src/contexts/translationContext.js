import React from "react";
export const TranslationContext = React.createContext();
export const translations = {
  en: {
    rulesTitle: "Rules",
    rules:
      "After each move, a cell of denomination “2” (with a probability of 85%) or “4” (with a probability of 15%) appears. By pressing the arrow, you can throw all the cells of the playing field to one of 4 sides. If, when dropped, two cells of the same denomination bump into one another, then they turn into one, the denomination of which is equal to the sum of the connected cells. If in one line or in one column there are more than two cells of the same denomination, then when dropped, they begin to connect from the side to which they were directed. If the location of the cells or their denomination does not change when the button is pressed, the move is not made. To win, you need to collect the number 2048 in one cell (more is possible). The game ends in defeat if after the next move it is impossible to perform an action.",
    mobileRules:
      "After each move, a cell of denomination “2” (with a probability of 85%) or “4” (with a probability of 15%) appears. By swipe, you can throw all the cells of the playing field to one of 4 sides. If, when dropped, two cells of the same denomination bump into one another, then they turn into one, the denomination of which is equal to the sum of the connected cells. If in one line or in one column there are more than two cells of the same denomination, then when dropped, they begin to connect from the side to which they were directed. If the location of the cells or their denomination does not change after swipe, the move is not made. To win, you need to collect the number 2048 in one cell (more is possible). The game ends in defeat if after the next move it is impossible to perform an action.",
    gameOver: "Game over, thanks for taking part.",
    prestart: "Press any key (on keyboard) to start.",
    prestartMobile: "Tap on the playing field to start",
    win: "Congratulations on the victory!",
    thanxNo: "Thanks a lot",
    continue: "Continue game",
    restart: "Try again",
    loose: "I'm sorry, but you lost.",
    dayEnd: "The working day is almost over, maybe it's time to get home?",
    thanx: "Yes, thanks, stayed too long",
    score: "Score: ",
    background: "Change background:",
  },
  ru: {
    rulesTitle: "Правила",
    rules:
      "После каждого хода появляется ячейка номинала «2» (с вероятностью 85%) или «4» (с вероятностью 15%). Нажатием стрелки можно скинуть все ячейки игрового поля в одну из 4 сторон. Если при сбрасывании две ячейки одного номинала «налетают» одна на другую, то они превращаются в одну, номинал которой равен сумме соединившихся ячеек. Если в одной строчке или в одном столбце находится более двух ячеек одного номинала, то при сбрасывании они начинают соединяться с той стороны, в которую были направлены. Если при нажатии кнопки местоположение ячеек или их номинал не изменится, то ход не совершается. Для победы нужно собрать в одной ячейке число 2048(можно и больше). Игра заканчивается поражением, если после очередного хода невозможно совершить действие.",
    mobileRules:
      "После каждого хода появляется ячейка номинала «2» (с вероятностью 85%) или «4» (с вероятностью 15%). Свайпом можно скинуть все ячейки игрового поля в одну из 4 сторон. Если при сбрасывании две ячейки одного номинала «налетают» одна на другую, то они превращаются в одну, номинал которой равен сумме соединившихся ячеек. Если в одной строчке или в одном столбце находится более двух ячеек одного номинала, то при сбрасывании они начинают соединяться с той стороны, в которую были направлены. Если при свайпе местоположение ячеек или их номинал не изменится, то ход не совершается. Для победы нужно собрать в одной ячейке число 2048(можно и больше). Игра заканчивается поражением, если после очередного хода невозможно совершить действие.",
    gameOver: "Игра окончена, спасибо за участие.",
    prestart: "Нажмите любую клавишу (на клавиатуре) чтобы начать.",
    prestartMobile: "Тапните по игровому полю чтобы начать",
    win: "Поздравляю с победой!",
    thanxNo: "Спасибо, наигрался",
    continue: "Продолжить игру",
    restart: "Попробовать еще раз",
    loose: "Сожалею, но вы проиграли.",
    score: "Счет: ",
    background: "Сменить фон:",
  },
};
