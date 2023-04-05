import { useState, useEffect } from 'react';
import { columnURL, schoolboyURL } from '../hooks/useAllData';


const useSecondaryData = () => {
   const [columns, setColumns] = useState([]);
   const [schoolboyQty, setSchoolboyQty] = useState(0);

   useEffect(() => {
      const dataFetch = async () => {
         const result = (
            await Promise.all([
               fetch(columnURL),
               fetch(schoolboyURL),
            ])
         ).map(res => res.json());

         const [columnResult, schoolboyResult] = await Promise.all(result);

         setColumns(columnResult.Items);
         setSchoolboyQty(schoolboyResult.Quantity);
      };

      dataFetch();
   }, []);

   return { columns, schoolboyQty };
};

export default useSecondaryData;