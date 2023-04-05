const getMaximumSum = data => {
   let max = 0;
   data && Array.isArray(data) && data.forEach(elem => {
      const numsArr = elem.Title.split('/'); 
      const sum = numsArr.reduce((acc, next) => +acc + +next, 0);
      if (sum > max) {
         max = sum;
      }
   });
   return max;
};

export default getMaximumSum;