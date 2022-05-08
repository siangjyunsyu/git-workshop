let input = [
    { id: 1, title: 'AAAA', price: 100, count: 2 },
    { id: 2, title: 'BBBB', price: 300, count: 1 },
    { id: 3, title: 'CCCC', price: 200, count: 1 },
    { id: 4, title: 'DDDD', price: 500, count: 2 },
];

// let output = {1: 100, 2: 300, 3: 200, 4: 500}
// 找出每個商品的價格，以 id 為 key

let output = input.reduce(function(acc, item){
    // 第一回合: acc = {}, item = {id: 1, title: 'AAAA', price: 100, count: 2}
    // 第二回合: acc = {}, item = {id: 2, title: 'BBBB', price: 300, count: 1}
    // 第三回合: acc = {}, item = {id: 3, title: 'CCCC', price: 200, count: 1}
    // 第四回合: acc = {}, item = {id: 4, title: 'DDDD', price: 500, count: 2}
    console.log('acc', acc);
    acc[item.id] = item.price;
    return acc;
},{});

    console.log(output);

    // acc {}
    // acc {1: 100}
    // acc {1: 100, 2: 300}
    // acc {1: 100, 2: 300, 3: 200}
    // {1: 100, 2: 300, 3: 200, 4: 500}
