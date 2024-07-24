import Vendor from '../models/Vendor.js';
import VendorService from '../models/VendorService.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import configs from '../configs/env.config.js';


export const registerVendor = async (req, res, next) => {
    const { name, email, password, number, address, licenceName, licenceNumber, selectedServices, selectedSubcategories } = req.body;

    const newVendor = new Vendor({
      name,
      email,
      password,
      number,
      address,
      licenceName,
      licenceNumber,
      file: req.file.path,
      selectedServices,
      selectedSubcategories: JSON.parse(selectedSubcategories)
    });
  
    try {
      await newVendor.save();
      res.status(201).json({ message: 'Vendor registered successfully!' });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Registration failed. Please try again.', error });
    }
};


export const loginVendor = async (req, res, next) => {

  const { email, password } = req.body;
  try {
      const vendor = await Vendor.findOne({ email });
      if (!vendor) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, vendor.password);
      if (!isMatch) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      const payload = {
          vendor: {
              id: vendor.id,
          },
      };

      jwt.sign(
          payload,
          configs.JWT_SECRET,
          (err, token) => {
              if (err) throw err;
              res.json({ token, vendor:payload.vendor });
          }
      );
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
  }
};

export const addService = async (req, res) => {
    const { name, stars, address, vendorId } = req.body;
    try {
      const newService = new VendorService({
        name,
        stars,
        address,
        vendor: vendorId,
      });
  
      await newService.save();
      res.status(201).json({ message: 'Service added successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to add service. Please try again.', error });
    }
};

export const getVendorServices = async (req, res) => {
    try {
      const vendorId = req.query.vendorId;
      const services = await VendorService.find({ vendor: vendorId });
  
      if (!services || services.length === 0) {
        return res.status(404).json({ message: 'No services found for this vendor' });
      }
  
      res.json(services);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };