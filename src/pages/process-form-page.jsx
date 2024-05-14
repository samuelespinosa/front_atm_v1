import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { FormView} from 'src/sections/process-form/view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const { id } = useParams();
  return (
    <>
      <Helmet>
        <title> Nuevo Proceso</title>
      </Helmet>

      <FormView />
    </>
  );
}
