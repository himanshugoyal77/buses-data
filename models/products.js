const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        "route_no": {
          "type": "Date"
        },
        "origin": {
          "type": "String"
        },
        "destination": {
          "type": "String"
        },
        "distance": {
          "type": "Date"
        },
        "departure_origin": {
          "type": [
            "String"
          ]
        }
      
})

module.exports = mongoose.model('Product', productSchema);



