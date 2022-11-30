var pipeline = [
    {$sort:{"price": -1}}, 
    {$limit:1}
]
db.shop.aggregate(pipeline);