import useSecondaryData from '../hooks/useSecondaryData';
import Preloader from '../components/Preloader'
import getMaximumSum from '../helpers/getMaximumSum';
import { useMemo } from 'react';


const SecondaryPage = () => {
   const { columns, schoolboyQty } = useSecondaryData();

   const max = useMemo(() => getMaximumSum(columns), [columns]);

   return (
      <div>
         <h1>Secondary page</h1>
         {
            (!max || !schoolboyQty) ? (
               <Preloader />
            ) : (
               <>
                  <p>Total schoolboys quantity: {schoolboyQty}</p>
                  <p>The largest sum: {max}</p>
               </>
            )
         }
      </div>
   );
};

export default SecondaryPage;