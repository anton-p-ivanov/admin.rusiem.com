import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

import { Form } from 'components/index';
import API from 'utils/api';

import useFields from './hooks/useFields';

import type { TLocaleViewProps } from './types';
import type { TFormField } from 'components/Form/types';
import type { TLookupResult } from 'config/types';

import './styles.scss';

const LocaleView: React.FC<TLocaleViewProps> = ({ fields, template }) => {
  const [locales, setLocales] = useState<TLookupResult[]>([]);
  const [activeTab, setActiveTab] = useState<string>('ru');
  const localeFields = useFields(locales, fields);

  const localeSwitch: TFormField<string> = {
    type: 'select',
    name: 'switch',
    label: 'Язык',
    attrs: { options: locales },
    value: activeTab,
    onChange: (value: string) => setActiveTab(value),
  };

  useEffect(() => {
    API.lookup<TLookupResult[]>('/locales/lookup')
      .then((response) => setLocales(response))
      .catch(() => setLocales([]));

    return () => setLocales([]);
  }, []);

  return (
    <div className="locale-view">
      <div className="locale-view__switch">
        <Form.Field field={localeSwitch} />
      </div>
      <div className="locale-view__content">
        {locales.map((locale) => {
          const className = classNames('locale-view__pane', locale.value === activeTab && 'locale-view__pane--active');
          return (
            <div className={className} key={`locale-view-pane-${locale.value}`}>
              {template
                ? template(localeFields[locale.value])
                : Object.entries(localeFields[locale.value]).map(([key, field]) => (
                  <Form.Field field={field} key={`locale-view-${locale.value}-${key}`} />
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocaleView;
