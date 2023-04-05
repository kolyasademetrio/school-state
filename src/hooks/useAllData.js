import { useState, useEffect } from 'react';

export const columnURL = 'http://94.131.246.109:5555/v1/2/Column';
export const rateURL = 'http://94.131.246.109:5555/v1/2/Rate';
export const unrateURL = 'http://94.131.246.109:5555/v1/2/UnRate';
export const schoolboyURL = 'http://94.131.246.109:5555/v1/2/Schoolboy';


const useAllData = () => {
   const [columns, setColumns] = useState([]);
   const [rate, setRate] = useState([]);
   const [schoolboy, setSchoolboy] = useState([]);

   useEffect(() => {
      const dataFetch = async () => {
         const result = (
            await Promise.all([
               fetch(columnURL),
               fetch(rateURL),
               fetch(schoolboyURL),
            ])
         ).map(res => res.json());

         const [columnResult, rateResult, schoolboyResult] = await Promise.all(result);

         setColumns(columnResult.Items);
         setRate(rateResult.Items);
         setSchoolboy(schoolboyResult.Items);
      };

      dataFetch();
   }, []);

   return { columns, rate, schoolboy, setRate };
};

export default useAllData;