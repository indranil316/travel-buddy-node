# Vendor Registration API Documentation

This API allows vendors to register by providing necessary details including personal information, services offered, and license details.

## Endpoints

### Register Vendor

- **URL:** `/api/auth/vendor/register`
- **Method:** `POST`
- **Content-Type:** `multipart/form-data`

#### Request Body (form-data)

| Key                  | Type    | Description                                          | Required |
|----------------------|---------|------------------------------------------------------|----------|
| name                 | String  | Vendor Name or Organization Name                      | Yes      |
| email                | String  | Email Address                                        | Yes      |
| number               | String  | Contact Number                                       | Yes      |
| address              | String  | Address                                              | Yes      |
| licenceName          | String  | Licence Bearer's Name                                | Yes      |
| licenceNumber        | String  | Licence Number                                       | Yes      |
| selectedServices     | String  | Comma-separated list of selected services            | Yes      |
| selectedSubcategories| JSON    | JSON object with selected subcategories per service  | Yes      |
| file                 | File    | Uploaded file (e.g., PDF, DOC)                       | Yes      |

#### Example Request (using `curl`)

```sh
curl -X POST http://localhost:5000/api/auth/vendor/register \
-H "Content-Type: multipart/form-data" \
-F "name=Vendor Name" \
-F "email=vendor@example.com" \
-F "number=1234567890" \
-F "address=123 Vendor Street" \
-F "licenceName=Vendor Licence Name" \
-F "licenceNumber=123456789" \
-F "selectedServices=Accommodation, Transport" \
-F "selectedSubcategories={\"Accommodation\": [\"Hotel\", \"Villa\"], \"Transport\": [\"Car Rental\"]}" \
-F "file=@/path/to/your/file.pdf"
```

#### Response

 - Success Response: 200 OK
 - Error Response: 400 Bad Request

