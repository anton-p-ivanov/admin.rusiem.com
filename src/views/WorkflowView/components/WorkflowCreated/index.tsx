import React from 'react';

import { DataFormat } from 'components';

import type { TWorkflowCreated } from './types';

const WorkflowCreated: React.FC<TWorkflowCreated> = (props) => {
  const { workflow, defaults } = props;

  return (
    <>
      <span>
        Создано&nbsp;
        {(workflow && workflow.createdBy) || defaults?.name}
      </span>
      <span>
        {
          (workflow && workflow.createdAt)
            ? <DataFormat format="datetime" value={workflow.createdAt} />
            : defaults?.date
        }
      </span>
    </>
  );
};

export default WorkflowCreated;
