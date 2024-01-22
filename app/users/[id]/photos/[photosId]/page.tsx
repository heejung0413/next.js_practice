import React from 'react';

interface Props {
  params: { id: number; photoId: number };
}

const PotoPage = (props: Props) => {
  return (
    <div>
      photopage {props.params.id} {props.params.photoId}
    </div>
  );
};

export default PotoPage;
