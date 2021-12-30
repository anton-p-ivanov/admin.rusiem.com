import { useContext } from 'react';

import Context from '../context';

import type { TUseHandlers } from '../types';

const useHandlers: TUseHandlers = (data) => {
  const { toggleModal, toggleConfirm } = useContext(Context);

  return {
    update: () => toggleModal && toggleModal(true, { uuid: data && data.uuid }),
    delete: () => (
      toggleConfirm && toggleConfirm(true, {
        description: `Вы собираетесь удалить элемент "${data ? data.translations.ru.title : ''}".`,
        endpoint: 'remove',
      })
    ),
  };
};

export default useHandlers;
