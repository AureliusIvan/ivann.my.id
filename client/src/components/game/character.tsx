'use server'
// Character component

import React from 'react';
import {GameObject} from './object';
import CharacterImage from '@/static/svg/monster.svg';
import Lottie from "lottie-react";
import UfoLottie from '@/static/lotties/ufo-lotties.json';
import Image from 'next/image';

export async function Character() {
    return (
        <GameObject>
            {/*<Image*/}
            {/*    id={'character'}*/}
            {/*    src={CharacterImage}*/}
            {/*    alt="Character"*/}
            {/*    className="w-12 h-12"*/}
            {/*/>*/}
            <Lottie
                className={'w-12 h-12'}
                animationData={UfoLottie}
            />
        </GameObject>
    )
}