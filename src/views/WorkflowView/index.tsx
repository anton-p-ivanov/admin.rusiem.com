import React from 'react';

import { Icon } from 'components';

import { useStore } from '../FormView/store';
import { WorkflowCreated, WorkflowUpdated } from './components';

import type { TDataWorkflow } from 'config/types';

import './styles.scss';

const WorkflowView: React.FC = () => {
  const { state } = useStore();
  const workflow = state.data.workflow as TDataWorkflow;

  const defaults = {
    name: 'Джон Смит',
    date: 'Дата неизвестна',
  };

  return (
    <div className="workflow-view">
      <div className="workflow-view__item workflow-view__item--created">
        <div className="workflow-view__icon">
          <Icon name="clock" />
        </div>
        <div className="workflow-view__text">
          <WorkflowCreated workflow={workflow} defaults={defaults} />
        </div>
      </div>
      <div className="workflow-view__item workflow-view__item--updated">
        <div className="workflow-view__icon">
          <Icon name="clock" />
        </div>
        <div className="workflow-view__text">
          <WorkflowUpdated workflow={workflow} defaults={defaults} />
        </div>
      </div>
    </div>
  );
};

export default WorkflowView;
