import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const vendorSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    address: { type: String, required: true },
    licenceName: { type: String, required: true },
    licenceNumber: { type: String, required: true },
    file: { type: String, required: true },
    selectedServices: [{ type: String, required: true }],
    selectedSubcategories: { type: Map, of: [String], required: true },
  },
  { timestamps: true },
);

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
