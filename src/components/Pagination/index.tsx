import React from 'react';

import Button from 'components/Button';
import Icon from 'components/Icon';

import { TPaginationProps } from './types';
import './styles.scss';

const Pagination: React.FC<TPaginationProps> = (props) => {
  const {
    page = 1,
    resultsPerPage = 10,
    resultsTotal,
    navigate,
  } = props;

  const paginator = {
    firstIndex: resultsPerPage * (page - 1) + 1,
    lastIndex: resultsTotal < (resultsPerPage * page) ? resultsTotal : (resultsPerPage * page),
    pagesTotal: Math.ceil(resultsTotal / resultsPerPage),
  };

  return (
    <div className="pagination">
      <div className="pagination__item pagination__item--previous">
        <Button size="small" isDisabled={page === 1} onClick={() => navigate(page - 1)}>
          <Icon name="arrow-left" />
        </Button>
      </div>
      <div className="pagination__item pagination__item--next">
        <Button size="small" isDisabled={page === paginator.pagesTotal} onClick={() => navigate(page + 1)}>
          <Icon name="arrow-right" />
        </Button>
      </div>
      <div className="pagination__item pagination__item--text">
        {`Показаны ${paginator.firstIndex} — ${paginator.lastIndex} из ${resultsTotal} элементов`}
      </div>
    </div>
  );
};

export default Pagination;
