const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        "route_no": {
          "type": "String"
        },
        "origin": {
          "type": "String"
        },
        "destination": {
          "type": "String"
        },
        "distance": {
          "type": "String"
        },
        "departure_origin": {
          "type": [
            "String"
          ]
        }
      
})

module.exports = mongoose.model('Product', productSchema);



