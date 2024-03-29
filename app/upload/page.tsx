'use client';

import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

interface CloudinaryResults {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');
  return (
    <>
      {publicId && <CldImage src={publicId} width={270} height={180} alt="upload image not found" />}
      <CldUploadWidget
        uploadPreset="s9wepdle"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
          styles: {},
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResults;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
