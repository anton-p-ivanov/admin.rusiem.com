import React from 'react';

import { DataFormat } from 'components';

import type { TWorkflowUpdated } from './types';

const WorkflowUpdated: React.FC<TWorkflowUpdated> = (props) => {
  const { workflow, defaults } = props;

  return (
    <>
      <span>
        Изменено&nbsp;
        {(workflow && workflow.updatedBy) || defaults?.name}
      </span>
      <span>
        {
          (workflow && workflow.updatedAt)
            ? <DataFormat format="datetime" value={workflow.updatedAt} />
            : defaults?.date
        }
      </span>
    </>
  );
};

export default WorkflowUpdated;
