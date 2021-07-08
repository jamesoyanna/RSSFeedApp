import React, { lazy, Suspense } from 'react';
import { Route, Switch} from 'react-router-dom';
import {
 
  DASHBOARD,
 
} from 'settings/constants';
import { InLineLoader } from 'components/InlineLoader/InlineLoader';
const AdminLayout = lazy(() => import('containers/Layout/Layout'));
const Dashboard = lazy(() => import('containers/Dashboard/Dashboard'));
const NotFound = lazy(() => import('containers/NotFound/NotFound'));


const Routes = () => {
  return (
  
     
       <Suspense fallback={<InLineLoader />}>
        <Switch>
          <Route exact={true} path={DASHBOARD}>
             <AdminLayout>
              <Suspense fallback={<InLineLoader />}>
                <Dashboard />
              </Suspense>
            </AdminLayout>
          </Route>
          <Route component={NotFound} />
        </Switch>
         
      </Suspense>
  
  
  );
};

export default Routes;
