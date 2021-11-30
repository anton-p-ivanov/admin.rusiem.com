import React, { useContext } from 'react';

import Context from '../../context';

const FileSelect: React.FC = () => {
  const { fileInfo, ref } = useContext(Context);

  const onClickHandler = () => (
    ref && ref.current && ref.current.click()
  );

  return (
    <div className="file-select-button">
      <button type="button" className="btn btn--default" onClick={onClickHandler}>
        Выберите файл
      </button>
      <input type="text" className="form__input form__input--text" value={fileInfo.name} readOnly />
    </div>
  );
};

export default FileSelect;
