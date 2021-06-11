import React from 'react';
import { Alphabeth } from '../LenSenas/letters';
import {
    DivKeyboard,
    ImgBigLetters,
    ImgSmallLetters,
    DivFirstLine,
    DivSecondLine,
    DivThirtLine,
    DivIMG,


} from "./lenkeyStyled";

export const LenKeyboard = () => {
    return (
        <DivKeyboard>
            <DivFirstLine>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.q} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.w} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.e} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.r} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.t} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.y} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.u} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.i} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.o} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.p} /></DivIMG>
            </DivFirstLine>
            <DivSecondLine>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.a} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.s} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.d} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.f} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.g} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.h} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.j} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.k} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.l} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.nn} /></DivIMG>
            </DivSecondLine>

            <DivThirtLine>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.z} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src="https://media.tenor.com/images/6e190eb7b580983ce09c7ccf0c91519d/tenor.gif" /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.c} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.v} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.b} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.n} /></DivIMG>
            <DivIMG> <ImgSmallLetters alt="" src={Alphabeth.m} /></DivIMG>
            
            </DivThirtLine>
        </DivKeyboard>
    )
}
