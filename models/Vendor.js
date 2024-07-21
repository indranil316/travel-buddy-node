import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const vendorSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
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

vendorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
      return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
