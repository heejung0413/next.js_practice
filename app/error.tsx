'use client';
interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log('Error', error);
  return (
    <>
      <div>예상하지 못한 오류가 발생했습니다.</div>
      <button className="btn" onClick={() => reset()}>
        retry
      </button>
    </>
  );
};

export default ErrorPage;
