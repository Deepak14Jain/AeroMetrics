# AeroMetrics Postman Collection
This Postman collection provides a set of API requests to interact with the AeroMetrics service. It includes examples for performing various operations(GET, POST & DELETE).

---
## 🚀 Getting Started
### Prerequisites
- **Postman**: Ensure you have Postman installed. You can download it from [Postman](https://www.postman.com/downloads/).
- **API Endpoint**: Replace the {{base_url}} variable in the collection with your actual API endpoint.

---
## 📂 Collection Overview
The collection includes the following requests:

**Get All Records**

- Method: GET
- Endpoint: {{base_url}}/AeroMetricsService/Airports
- Description: Retrieves all airport records.
- Tests: Verifies that the response status code is 200.

**Create a New Record in Draft**

- Method: POST
- Endpoint: `{{base_url}}/AeroMetricsService/Airports`
- Description: Creates a new airport record in draft mode.
- Body:
```
{
  "icaoCode": "AAAK",                       # Unique & Mandatory
  "iataCode": null,
  "name": "Lowell Field",                   # Mandatory
  "city": "Anchor Point",
  "state": "Alaska",                        # Mandatory
  "country_code": "US",                     # Mandatory
  "elevation": 450000,                      # Mandatory
  "latitude": 59.949200,
  "longitude": -151.695999,
  "timezone_code": "America/Anchorage"      # Mandatory
}
```
- Tests: Verifies that the response status code is 200 or 201.

**Save the Draft**

- Method: POST
- Endpoint: `{{base_url}}/AeroMetricsService/Airports(icaoCode='AAAK',IsActiveEntity=false)/AeroMetricsService.draftActivate`
- Description: Activates and saves the draft record.

**Delete Data**

- Method: DELETE
- Endpoint: `{{base_url}}/AeroMetricsService/Airports(icaoCode='00AK',IsActiveEntity=true)`
Description: Deletes an airport record by its icaoCode.
- Tests: Verifies that the response status code is 200, 202, or 204.

---
## 🛠️ How to Use

**Step 1:** Import the Collection
- Open Postman.
- Click on Import in the top-left corner.
- Select the AeroMetrics.postman_collection.json file and import it.

**Step 2:** Set the Variables
- Go to the Variables tab in the collection.
- Replace the {{base_url}} variable with your actual API endpoint (e.g., http://<your-api-endpoint>).

**Step 3:** Send Requests
- Open any request in the collection.
- Click Send to execute the request.
- View the response in the Postman interface.