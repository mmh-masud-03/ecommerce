import mongoose from "mongoose";
const AddressSchema = new mongoose.Schema({
  zone: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
});

const Address =
  mongoose.models.Address || mongoose.model("Address", AddressSchema);
export default Address;
