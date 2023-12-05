/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let map1 = new Map()
  for(let i = 0; i < transactions.length ; i++ ) {
    let category = transactions[i].category
    let price = transactions[i].price

    if(!map1.has(category)) {
      //if not , add category with its price
      map1.set(category,price)
    }
    //if its already present , update its value and add its total spent
    else {
      map1.set(category,map1.get(category) + price);
    }
  }
  let answer = [] // to store the final result

  //iterating map through the map using forEach to create result array
  map1.forEach((value,key) => {
    answer.push({category : key , totalSpent : value});

  });

  return answer;
}

module.exports = calculateTotalSpentByCategory;
