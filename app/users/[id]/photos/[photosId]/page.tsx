interface Props {
  params: { id: number; photoId: number };
}

const PhotoPage = (props: Props) => {
  return (
    <div>
      photopage {props.params.id} {props.params.photoId}
    </div>
  );
};

export default PhotoPage;
