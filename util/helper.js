// import { insightsExcerpts } from "@/util/data";

// export const getOtherInsights = (path) => insightsExcerpts.reduce((accum, insight) => {    
//   if (insight.link !== path && accum.length < 3 ) { accum = [...accum, insight]; }
//   return accum
// }, []);

export const getRandomItems = (arr, num) => {
  // Create a copy so we don't mutate the original array
  const shuffled = [...arr].filter((_, index) => index > 0);
  const selectedItems = [];

  // Loop 'num' times to pick the required number of items
  for (let i = 0; i < num; i++) {
    // Generate a random index based on the *remaining* length of the shuffled array
    const randomIndex = Math.floor(Math.random() * shuffled.length);
    
    // Remove the item at that index and add it to our result array
    // splice() returns an array, so we use [0] to get the item itself
    const randomItem = shuffled.splice(randomIndex, 1)[0]; 
    selectedItems.push(randomItem);
  }

  return selectedItems;
};
