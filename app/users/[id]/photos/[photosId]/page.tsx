import React from 'react';

interface Props {
  params: { id: number; photoId: number };
}

const PotoPage = (props: Props) => {
  return (
    <div>
      PhotoPage {props.params.id} {props.params.photoId}
    </div>
  );
};

export default PotoPage;
