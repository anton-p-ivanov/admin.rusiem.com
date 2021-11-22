import React, { useContext } from 'react';

import Button from 'components/Button';
import DataFormat from 'components/DataFormat';
import Icon from 'components/Icon';

import Context from '../../context';
import useHandlers from '../../hooks/useHandlers';

import './styles.scss';

const FileInfo: React.FC = () => {
  const { fileInfo } = useContext(Context);
  const handlers = useHandlers(fileInfo);

  return (
    <div className="file-info">
      <div className="file-info__text">
        <div>
          <div>
            Размер файла:&nbsp;
            <DataFormat format="filesize" value={fileInfo.size} />
          </div>
          {fileInfo.image && (
            <div>
              {`Изображение: ${fileInfo.image.width}x${fileInfo.image.height} пикселей`}
            </div>
          )}
        </div>
        <div>
          {fileInfo.uuid && (
            <>
              <Button size="small" variant="link" onClick={handlers.downloadFile}>
                <Icon name="download" title="Удалить файл" />
              </Button>
              <Button size="small" variant="link" onClick={handlers.deleteFile}>
                <Icon name="trash-2" title="Удалить файл" />
              </Button>
            </>
          )}
        </div>
      </div>
      {fileInfo.image && (
        <div className="file-info__image">
          {fileInfo.image.src && <img className="img img--fluid" src={fileInfo.image.src} alt="Preview" />}
        </div>
      )}
    </div>
  );
};

export default FileInfo;
