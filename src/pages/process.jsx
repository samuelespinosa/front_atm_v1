import { Helmet } from 'react-helmet-async';

import { ProcessView } from 'src/sections/process/view';

// ----------------------------------------------------------------------

export default function ProcessPage() {
  return (
    <>
      <Helmet>
        <title> Procesos</title>
      </Helmet>

      <ProcessView/>
    </>
  );
}
