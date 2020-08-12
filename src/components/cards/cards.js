/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { ReactComponent as As } from "../../card_svgs/AS.svg";
import { ReactComponent as Ah } from "../../card_svgs/AH.svg";
import { ReactComponent as Ac } from "../../card_svgs/AC.svg";
import { ReactComponent as Ad } from "../../card_svgs/AD.svg";

import { ReactComponent as Ks } from "../../card_svgs/KS.svg";
import { ReactComponent as Kh } from "../../card_svgs/KH.svg";
import { ReactComponent as Kc } from "../../card_svgs/KC.svg";
import { ReactComponent as Kd } from "../../card_svgs/KD.svg";

import { ReactComponent as Qs } from "../../card_svgs/QS.svg";
import { ReactComponent as Qh } from "../../card_svgs/QH.svg";
import { ReactComponent as Qc } from "../../card_svgs/QC.svg";
import { ReactComponent as Qd } from "../../card_svgs/QD.svg";

import { ReactComponent as Js } from "../../card_svgs/JS.svg";
import { ReactComponent as Jh } from "../../card_svgs/JH.svg";
import { ReactComponent as Jc } from "../../card_svgs/JC.svg";
import { ReactComponent as Jd } from "../../card_svgs/JD.svg";

import { ReactComponent as Ts } from "../../card_svgs/TS.svg";
import { ReactComponent as Th } from "../../card_svgs/TH.svg";
import { ReactComponent as Tc } from "../../card_svgs/TC.svg";
import { ReactComponent as Td } from "../../card_svgs/TD.svg";

import { ReactComponent as Nine_s } from "../../card_svgs/9S.svg";
import { ReactComponent as Nine_h } from "../../card_svgs/9H.svg";
import { ReactComponent as Nine_c } from "../../card_svgs/9C.svg";
import { ReactComponent as Nine_d } from "../../card_svgs/9D.svg";

import { ReactComponent as Eight_s } from "../../card_svgs/8S.svg";
import { ReactComponent as Eight_h } from "../../card_svgs/8H.svg";
import { ReactComponent as Eight_c } from "../../card_svgs/8C.svg";
import { ReactComponent as Eight_d } from "../../card_svgs/8D.svg";

import { ReactComponent as Seven_s } from "../../card_svgs/7S.svg";
import { ReactComponent as Seven_h } from "../../card_svgs/7H.svg";
import { ReactComponent as Seven_c } from "../../card_svgs/7C.svg";
import { ReactComponent as Seven_d } from "../../card_svgs/7D.svg";

import { ReactComponent as Six_s } from "../../card_svgs/6S.svg";
import { ReactComponent as Six_h } from "../../card_svgs/6H.svg";
import { ReactComponent as Six_c } from "../../card_svgs/6C.svg";
import { ReactComponent as Six_d } from "../../card_svgs/6D.svg";

import { ReactComponent as Five_s } from "../../card_svgs/5S.svg";
import { ReactComponent as Five_h } from "../../card_svgs/5H.svg";
import { ReactComponent as Five_c } from "../../card_svgs/5C.svg";
import { ReactComponent as Five_d } from "../../card_svgs/5D.svg";

import { ReactComponent as Four_s } from "../../card_svgs/4S.svg";
import { ReactComponent as Four_h } from "../../card_svgs/4H.svg";
import { ReactComponent as Four_c } from "../../card_svgs/4C.svg";
import { ReactComponent as Four_d } from "../../card_svgs/4D.svg";

import { ReactComponent as Three_s } from "../../card_svgs/3S.svg";
import { ReactComponent as Three_h } from "../../card_svgs/3H.svg";
import { ReactComponent as Three_c } from "../../card_svgs/3C.svg";
import { ReactComponent as Three_d } from "../../card_svgs/3D.svg";

import { ReactComponent as Two_s } from "../../card_svgs/2S.svg";
import { ReactComponent as Two_h } from "../../card_svgs/2H.svg";
import { ReactComponent as Two_c } from "../../card_svgs/2C.svg";
import { ReactComponent as Two_d } from "../../card_svgs/2D.svg";
const cardSvgs = {
  As: <As className="card-svg"></As>,
  Ad: <Ad className="card-svg"></Ad>,
  Ac: <Ac className="card-svg"></Ac>,
  Ah: <Ah className="card-svg"></Ah>,
  Ks: <Ks className="card-svg"></Ks>,
  Kd: <Kd className="card-svg"></Kd>,
  Kc: <Kc className="card-svg"></Kc>,
  Kh: <Kh className="card-svg"></Kh>,
  Qs: <Qs className="card-svg"></Qs>,
  Qd: <Qd className="card-svg"></Qd>,
  Qc: <Qc className="card-svg"></Qc>,
  Qh: <Qh className="card-svg"></Qh>,
  Js: <Js className="card-svg"></Js>,
  Jd: <Jd className="card-svg"></Jd>,
  Jc: <Jc className="card-svg"></Jc>,
  Jh: <Jh className="card-svg"></Jh>,
  Ts: <Ts className="card-svg"></Ts>,
  Td: <Td className="card-svg"></Td>,
  Tc: <Tc className="card-svg"></Tc>,
  Th: <Th className="card-svg"></Th>,
  "9s": <Nine_s className="card-svg"></Nine_s>,
  "9d": <Nine_d className="card-svg"></Nine_d>,
  "9c": <Nine_c className="card-svg"></Nine_c>,
  "9h": <Nine_h className="card-svg"></Nine_h>,
  "8s": <Eight_s className="card-svg"></Eight_s>,
  "8d": <Eight_d className="card-svg"></Eight_d>,
  "8c": <Eight_c className="card-svg"></Eight_c>,
  "8h": <Eight_h className="card-svg"></Eight_h>,
  "7s": <Seven_s className="card-svg"></Seven_s>,
  "7d": <Seven_d className="card-svg"></Seven_d>,
  "7c": <Seven_c className="card-svg"></Seven_c>,
  "7h": <Seven_h className="card-svg"></Seven_h>,
  "6s": <Six_s className="card-svg"></Six_s>,
  "6d": <Six_d className="card-svg"></Six_d>,
  "6c": <Six_c className="card-svg"></Six_c>,
  "6h": <Six_h className="card-svg"></Six_h>,
  "5s": <Five_s className="card-svg"></Five_s>,
  "5d": <Five_d className="card-svg"></Five_d>,
  "5c": <Five_c className="card-svg"></Five_c>,
  "5h": <Five_h className="card-svg"></Five_h>,
  "4s": <Four_s className="card-svg"></Four_s>,
  "4d": <Four_d className="card-svg"></Four_d>,
  "4c": <Four_c className="card-svg"></Four_c>,
  "4h": <Four_h className="card-svg"></Four_h>,
  "3s": <Three_s className="card-svg"></Three_s>,
  "3d": <Three_d className="card-svg"></Three_d>,
  "3c": <Three_c className="card-svg"></Three_c>,
  "3h": <Three_h className="card-svg"></Three_h>,
  "2s": <Two_s className="card-svg"></Two_s>,
  "2d": <Two_d className="card-svg"></Two_d>,
  "2c": <Two_c className="card-svg"></Two_c>,
  "2h": <Two_h className="card-svg"></Two_h>,
};

export function CardSvg(props) {
  const { cardId } = props;

  return <div>{cardSvgs[cardId]}</div>;
  // return <div>{cardSvgs[cardId]}</div>;
}
