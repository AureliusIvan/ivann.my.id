"use client"

import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';

type SoundContextType = {
  isSoundOn: boolean;
  toggleSound: (state: boolean) => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

const SoundProvider = ({children}: { children: ReactNode }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  useEffect(() => {
    // save state in local storage
    const sound = localStorage.getItem('sound');
    if (sound) {
      setIsSoundOn(JSON.parse(sound));
    }
  }, [isSoundOn]);

  const toggleSound = (state: boolean) => {
    // setIsSoundOn((prev) => !prev);
    setIsSoundOn(state);
  };

  return (
      <SoundContext.Provider value={{isSoundOn, toggleSound}}>
        {children}
      </SoundContext.Provider>
  );
};

const useSound = (): SoundContextType => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};

export {SoundProvider, useSound};