import { create } from 'zustand';
import { StoreEnum } from './entities/enums/store.enum';
import { LangEnum } from '@/components/entities/components.enum';

export interface LangStore {
  language: LangEnum;
  toggleLanguage: () => void;
}

const useLangStore = create((set): LangStore => ({
  language: (
    localStorage.getItem(StoreEnum.LANGUAGE) === LangEnum.DE
      ? LangEnum.DE
      : localStorage.getItem(StoreEnum.LANGUAGE) === LangEnum.EN
        ? LangEnum.EN : LangEnum.ES
  ),

  toggleLanguage: () => {
    set((state: LangStore) => {
      const newLanguage =
        state.language === LangEnum.EN ? LangEnum.ES :
        state.language === LangEnum.ES ? LangEnum.DE : LangEnum.EN;
      localStorage.setItem(StoreEnum.LANGUAGE, newLanguage);
      return { language: newLanguage };
    });
  },
}));

export default useLangStore;