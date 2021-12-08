import { useStore } from 'views/FormView/store';

import type { TUseFields } from '../types';
import type { TDataTranslation } from 'config/types';

const useFields: TUseFields = (locales, fields) => {
  const { state, update } = useStore();

  return Object.fromEntries(locales.map((locale) => {
    const mappedFields = Object.entries(fields).map(([key, field]) => {
      const data = state.data as TDataTranslation;
      const t10n = data.translations && data.translations[locale.value];
      const extend = {
        value: (t10n && t10n[field.name]) || '',
        onChange: (value: string) => {
          const translation = { ...t10n, locale: locale.value, [key]: value };
          const translations = { ...(data.translations || {}), [locale.value]: translation };
          update({ ...state, data: { ...state.data, translations } });
        },
      };

      return [key, { ...field, ...extend }];
    });

    return [locale.value, Object.fromEntries(mappedFields)];
  }));
};

export default useFields;
