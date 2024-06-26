import { Helmet } from 'react-helmet-async';

import { FormView } from 'src/sections/process-form/view';

// ----------------------------------------------------------------------

export default function ProcessPage() {
  return (
    <>
      <Helmet>
        <title>Nuevo Proceso</title>
      </Helmet>

      <FormView/>
    </>
  );
}
