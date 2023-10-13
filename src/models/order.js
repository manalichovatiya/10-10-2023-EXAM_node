const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
    {
        ammount : {
            type : Number,
            trim : true,
        },
        order_address : {
            type : String,
            trim : true,
        },
        order_email : {
            type : String,
            trim : true,
        },
        order_date : {
            type : String,
            trim : true,
        },
        // ref user id
        Users : {
            type : mongoose.Types.ObjectId,
            ref : "Users"
        },
        Cart:{
            type:mongoose.Types.ObjectId,
            ref:"Cart"
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
const Order = mongoose.model("Order",orderSchema);
module.exports = Order;