import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AxiosRequestConfig } from 'axios';
import { v4 } from 'uuid';

import { Button, DataFormat, DataTable } from 'components';
import API from 'utils/api';

import type { TDataVacancyResponse } from '@vacancies/config/types';
import './styles.scss';

const ResponsesDetails: React.FC = () => {
  const [data, setData] = useState<TDataVacancyResponse>();
  const { uuid = 'unknown' } = useParams();

  useEffect(() => {
    API.request<TDataVacancyResponse>({ url: `/vacancies/responses/${uuid}` })
      .then((response) => setData(response.data))
      .catch(() => setData(undefined));

    return () => setData(undefined);
  }, [uuid]);

  const download = () => {
    const config: AxiosRequestConfig = {
      url: `/media/${data?.file.uuid || 'unknown'}/download`,
      responseType: 'blob',
    };

    API.request<string>(config)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'true');
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  const rows = data ? [
    ['Кандидат', data.fullName],
    ['E-Mail', data.email],
    ['Телефон', data.phone],
    ['Дата размещения', data.workflow
      ? <DataFormat format="datetime" value={data.workflow.createdAt} />
      : <em>не известна</em>],
  ] : [];

  return (
    <>
      <h2>{`Отклик на вакансию "${data ? data.vacancy.title : ''}"`}</h2>
      <DataTable variant="response">
        {rows.map(([label, value]) => (
          <tr key={v4()}>
            <th className="data-table__cell">{label}</th>
            <td className="data-table__cell">{value}</td>
          </tr>
        ))}
      </DataTable>
      <div className="buttons">
        {data && <a href={`mailto:${data.email}`} className="btn btn--primary">Ответить кандидату</a>}
        {data && <Button onClick={download} isDisabled={!data.file}>Скачать резюме</Button>}
      </div>
    </>
  );
};

export default ResponsesDetails;
