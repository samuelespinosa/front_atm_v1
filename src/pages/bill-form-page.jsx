import { Helmet } from 'react-helmet-async';

import { FormView } from 'src/sections/bill-form/view';

// ----------------------------------------------------------------------

export default function ProcessPage() {
  return (
    <>
      <Helmet>
        <title>Nueva Factura</title>
      </Helmet>

      <FormView/>
    </>
  );
}
