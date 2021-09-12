import MotionFadeIn from '@/components/shared/MotionFadeIn';
import { COLLECTION_STATES } from '@/constants';
import useCollection from '@/hooks/useCollection';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';
import { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

const withDocuments = (collection) => (Component) => (props) => {
  const { get } = useCollection(collection);
  const [documents, setDocuments] = useState({
    data: COLLECTION_STATES.LOADING,
    error: null,
  });

  const { addToast } = useToasts();

  useEffect(() => {
    get()
      .then((docs) => {
        setDocuments({ data: docs, error: false });
      })
      .catch((error) => {
        setDocuments((prev) => ({
          ...prev,
          data: Array.isArray(prev.data)
            ? prev.data
            : COLLECTION_STATES.NOT_LOADED,
          error: true,
        }));
        addToast(getErrorMessage(error?.code), getToastConfig('error'));
      });
  }, []);

  const isLoading =
    documents.data === COLLECTION_STATES.LOADING &&
    documents.data !== COLLECTION_STATES.NOT_LOADED;

  if (isLoading) {
    return <div>spiner...</div>;
  }

  return (
    <MotionFadeIn>
      {documents.error ? (
        <div>error</div>
      ) : (
        <>
          {documents.length === 0 && <div>No hay datos.</div>}
          <Component getter={get} documents={documents.data} {...props} />
        </>
      )}
    </MotionFadeIn>
  );
};

export default withDocuments;
