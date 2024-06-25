import { Helmet } from 'react-helmet-async';

import { BillView } from 'src/sections/bill/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Facturas</title>
      </Helmet>

      <BillView/>
    </>
  );
}
