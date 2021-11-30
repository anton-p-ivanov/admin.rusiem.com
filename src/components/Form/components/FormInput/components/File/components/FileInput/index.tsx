import React, { useContext, useEffect, useState } from 'react';

import Context, { FILE_INFO_INITIAL_STATE } from '../../context';
import { useUtils } from '../../hooks';

import type { TFileInputProps } from './types';

const FileInput: React.FC<TFileInputProps> = ({ field }) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const { fileInfo, setFileInfo, ref } = useContext(Context);
  const utils = useUtils();

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => (
    target.files && setSelectedFile(target.files[0])
  );

  useEffect(() => {
    if (selectedFile) {
      (async () => {
        setFileInfo({
          name: selectedFile.name,
          type: selectedFile.type,
          size: selectedFile.size,
          image: await utils.getImageProps(selectedFile),
        });
      })();
      utils.uploadFile(selectedFile, field);
    }

    return () => {
      setFileInfo({ ...fileInfo, ...FILE_INFO_INITIAL_STATE });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile]);

  useEffect(() => {
    if (field.value) {
      setFileInfo({ ...fileInfo, ...field.value });

      if (field.value.uuid) {
        (async (uuid: string) => {
          if (fileInfo.image) {
            const src = await utils.requestImagePreview(uuid);
            const image = { ...fileInfo.image, ...field.value?.image, src };
            setFileInfo({ ...fileInfo, image });
          }
        })(field.value.uuid);
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
