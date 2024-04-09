'use client'
// Character component

import React from 'react';
import { GameObject } from './object';
import CharacterImage from '@/static/images/cake.png';
import Image from 'next/image';

export function Character() {
  return (
    <GameObject>
      <Image
        src={CharacterImage}
        alt="Character"
        className="w-12 h-12"
      />
    </GameObject>
  )
}