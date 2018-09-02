import React from 'react'
import Layout from '../layout/layout'
import DataTables from '../dashboard/datatables';
import Table from '../tabelas/table'
import BreadCrumbs from '../dashboard/breadcrumbs';

export default props => (
   
   <div>
     <Layout>
        <BreadCrumbs/>
        <Table/>
     </Layout> 
   </div>
   
)