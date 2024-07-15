import Vendor from '../models/Vendor.js';

export const registerVendor = async (req, res, next) => {
    const { name, email, number, address, licenceName, licenceNumber, selectedServices, selectedSubcategories } = req.body;

    const newVendor = new Vendor({
      name,
      email,
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
      res.status(500).json({ message: 'Registration failed. Please try again.', error });
    }
};
