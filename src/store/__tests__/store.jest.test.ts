import { StoreEnum } from "../entities/enums/store.enum";
import useLangStore from "../LangStore";
import useThemeStore from "../ThemeStore";

describe('ThemeStore', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('should initialize with the correct theme', () => {
    localStorage.setItem(StoreEnum.THEME, StoreEnum.DARK);
    const { theme } = useThemeStore.getState();
    expect(theme).toBe(StoreEnum.DARK);
  });

  it('should toggle theme correctly', () => {
    const { toggleTheme } = useThemeStore.getState();
    toggleTheme();
    const { theme } = useThemeStore.getState();
    expect(theme).toBe(StoreEnum.DARK);
    expect(localStorage.getItem(StoreEnum.THEME)).toBe(StoreEnum.DARK);
    expect(document.documentElement.className).toBe(StoreEnum.DARK);
  });
});

describe('LangStore', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with the correct language', () => {
    localStorage.setItem(StoreEnum.LANGUAGE, StoreEnum.ES);
    const { language } = useLangStore.getState();
    expect(language).toBe(StoreEnum.ES);
  });

  it('should toggle language correctly', () => {
    const { toggleLanguage } = useLangStore.getState();
    toggleLanguage();
    const { language } = useLangStore.getState();
    expect(language).toBe(StoreEnum.ES);
    expect(localStorage.getItem(StoreEnum.LANGUAGE)).toBe(StoreEnum.ES);
  });
});