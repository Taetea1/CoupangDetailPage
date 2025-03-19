// 이미지 데이터 관리를 위한 파일
import blackOne from "./img/blackOne.jpg";
import blackTwo from "./img/blackTwo.jpg";
import pinkOne from "./img/pinkOne.jpg";
import pinkTwo from "./img/pinkTwo.png";
import pinkThree from "./img/pinkThree.png";
import pinkFour from "./img/pinkFour.png";
import pinkFive from "./img/pinkFive.png";
import silverOne from "./img/silverOne.png";
import silverTwo from "./img/silverTwo.png";
import silverThree from "./img/silverThree.png";
import silverFour from "./img/silverFour.png";
import silverFive from "./img/silverFive.png";
import silverSix from "./img/silverSix.png";
import silverSeven from "./img/silverSeven.png";

export const product = {
  black: {
    main: blackOne,
    lists: [blackOne, blackTwo],
    number: "6710871611 - 14799784162",
  },
  pink: {
    main: pinkOne,
    lists: [pinkOne, pinkTwo, pinkThree, pinkFour, pinkFive],
    number: "6710871611 - 15579560349",
  },
  silver: {
    main: silverOne,
    lists: [
      silverOne,
      silverTwo,
      silverThree,
      silverFour,
      silverFive,
      silverSix,
      silverSeven,
    ],
    number: "6710871611 - 15579560353",
  },
};

export const colors = {
  black: blackOne,
  pink: pinkOne,
  silver: silverOne,
};
