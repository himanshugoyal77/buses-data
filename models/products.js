const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        "bus_no": {
          "type": "String"
        },
        "origin": {
          "type": "String"
        },
        "destination": {
          "type": "String"
        },
        "journney_distance": {
          "type": "String"
        },
        "departure_from_origin": {
          "type": [
            "String"
          ]
        }
      
})

module.exports = mongoose.model('Product', productSchema);



