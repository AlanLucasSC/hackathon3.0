import React from 'react'
import Layout from '../layout/layout'
import DataTables from '../dashboard/datatables';
import BreadCrumbs from '../dashboard/breadcrumbs';

export default props => (
   
   <div>
     <Layout>
        <BreadCrumbs/>
        <DataTables/>
     </Layout> 
   </div>
   
)