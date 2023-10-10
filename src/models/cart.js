const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
    {
        total_items:{
            type : Number,
            default : 0
        },
        total_price:{
            type : Number,
            default : 0
        },
        product : {
            type: mongoose.Types.ObjectId,
            ref: "Product"
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
    }
);

const Cart = mongoose.model("Cart" , cartSchema);
module.exports = Cart;