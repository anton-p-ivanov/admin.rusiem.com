import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AxiosError, AxiosRequestConfig } from 'axios';

import { TDataForm } from '@forms/config/types';
import API from 'utils/api';
import PageView from 'views/PageView';

import StatusesList from '../views/StatusesList';

const ListPage: React.FC = () => {
  const { form = 'unknown' } = useParams();
  const [webForm, setWebForm] = useState<TDataForm>();
  const title = 'Контент :: Веб-формы :: Статусы';

  useEffect(() => {
    const config: AxiosRequestConfig = { url: `/forms/${form}` };

    API.request<TDataForm>(config)
      .then((response) => setWebForm(response.data))
      .catch((error: AxiosError) => error);
  }, [form]);

  return (
    <PageView title={title}>
      {webForm && (
        <>
          <h2>{`Список статусов веб-формы "${webForm.title}"`}</h2>
          <StatusesList />
        </>
      )}
    </PageView>
  );
};

export default ListPage;
