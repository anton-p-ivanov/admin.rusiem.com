import React, { useContext, useEffect, useState } from 'react';

import Context, { FILE_INFO_INITIAL_STATE } from '../../context';
import useHandlers from '../../hooks/useHandlers';

import type { TFileInput } from './types';

const FileInput: React.FC<TFileInput> = ({ field }) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const { fileInfo, setFileInfo, ref } = useContext(Context);
  const handlers = useHandlers(fileInfo);

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => (
    target.files && setSelectedFile(target.files[0])
  );

  useEffect(() => {
    if (selectedFile) {
      handlers.getImageProps(selectedFile);
      handlers.uploadFile(selectedFile, field);
    }

    return () => {
      setFileInfo({ ...fileInfo, ...FILE_INFO_INITIAL_STATE });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile]);

  useEffect(() => {
    if (field.value) {
      if (field.value.uuid) {
        (async () => {
          const src = await handlers.requestImagePreview(field);
          const image = { ...fileInfo.image, ...field.value?.image, src };
          setFileInfo({ ...fileInfo, ...field.value, image });
        })();
      } else {
        setFileInfo({ ...fileInfo, ...field.value });
      }
    } else {
      setFileInfo({ ...fileInfo, ...FILE_INFO_INITIAL_STATE });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value]);

  return (
    <input
      type="file"
      name={field.name}
      onChange={onChangeHandler}
      className="form__input form__input--file"
      disabled={field.isDisabled}
      ref={ref}
    />
  );
};

export default FileInput;
