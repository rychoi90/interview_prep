// write an algorithm that will calculate the most profit possible from the stock prices yesterday.
// stock prices are stored in an array, with the index referring to the time in minutes past opening.
// the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500.
// you must buy before selling, so if the highest price comes before the lowest you cannot use that price.
// most profit may be negative if prices fall continuously.


const findBestProfit = (stockPrices) => {
  var bestProfit = stockPrices[1] - stockPrices[0];
  var currentProfit;
  var lowest = stockPrices[0];

  stockPrices.slice(1).forEach((price) => {
    if(price < lowest) {
      lowest = price;
    }

    currentProfit = price - lowest;
    if(currentProfit > bestProfit) {
      bestProfit = currentProfit;
    }
  });

  return bestProfit;
}

//lowest to highest throughout day
console.log(findBestProfit([300, 400, 550, 500, 600]), ', should be 300');

// standard case
console.log(findBestProfit([500, 400, 550, 600, 500]), ', should be 200');

// lowest price in day does not correlate to largest profit
console.log(findBestProfit([300, 400, 550, 200, 300]), ', should be 250');

// price does not change
console.log(findBestProfit([100, 100, 100, 100, 100]), ', should be 0');

// price falls all day
console.log(findBestProfit([500, 400, 350, 300, 200]), ', should be -100');


// Essentially, youre looking for the greatest dy in the graph, given that the slope between the low and high is positive.

// iterate through the array, recording the lowest price, and the max profit we can get from selling
