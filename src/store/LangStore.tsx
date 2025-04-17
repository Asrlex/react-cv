import { create } from 'zustand';
import { StoreEnum } from './entities/enums/store.enum';

export interface LangStore {
  language: StoreEnum.EN | StoreEnum.ES | StoreEnum.DE | string;
  toggleLanguage: () => void;
}

const useLangStore = create((set): LangStore => ({
  language: (
    localStorage.getItem(StoreEnum.LANGUAGE) === StoreEnum.DE
      ? StoreEnum.DE
      : localStorage.getItem(StoreEnum.LANGUAGE) === StoreEnum.EN
        ? StoreEnum.EN : StoreEnum.ES
  ),

  toggleLanguage: () => {
    set((state: LangStore) => {
      const newLanguage =
        state.language === StoreEnum.EN ? StoreEnum.ES :
        state.language === StoreEnum.ES ? StoreEnum.DE : StoreEnum.EN;
      localStorage.setItem(StoreEnum.LANGUAGE, newLanguage);
      return { language: newLanguage };
    });
  },
}));

export default useLangStore;