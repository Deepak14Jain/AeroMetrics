# AeroMetrics

**Precise airport data exploration and insights.**

AeroMetrics is a SAP CAP Java-based application designed to provide clean, filterable, and insightful airport data powered by a modern UI5 frontend. The project includes scripting tools for data analysis.

---

## 🧩 Tech Stack

The AeroMetrics project is built using the following technologies:

| Component           | Technology / Version                    |
|---------------------|------------------------------------------|
| **Backend Framework** | SAP CAP (Cloud Application Programming) in Java |
| **UI Framework**     | SAPUI5 v1.134.0                         |
| **OData Protocol**   | OData V4                                |
| **Java Runtime**     | SapMachine 23.0.2 (OpenJDK)             |
| **Node.js**          | v22.9.0           |
| **API Testing**      | Postman (collection provided)           |

---

## 🛠️ Prerequisites

### 📦 Node.js

Ensure Node.js `v22.9.0` is installed. You can use `nvm` to switch between various Node.js version. `nvm use 22`.

### ☕ JDK Version

Make sure you’re using SapMachine Java `23.0.2`
```
java -version
# Expected:
# openjdk version "23.0.2" 2025-01-21
# OpenJDK Runtime Environment SapMachine (build 23.0.2+7)
# OpenJDK 64-Bit Server VM SapMachine (build 23.0.2+7, mixed mode, sharing)
```
You can download it from: https://sap.github.io/SapMachine/

---
## 📂 Project Structure
```
AeroMetrics/
├── app/airports/                           # UI5 frontend
├── srv/                                    # CAP Java services (OData)
├── db/                                     # Data models(Schema)
├── scripts/                                # Scripts for analytics
├── AeroMetrics.postman_collection          # Postman collection for API testing
├── package.json                            # npm scripts
└── README.md
```

---
## 🚀 Running the Project Locally

### Clone the Repo

```
git clone [https://github.tools.sap/I529010/AeroMetrics.git](https://github.com/Deepak14Jain/AeroMetrics.git)
```

### Install project dependencies
```
# Make sure to change to node 22
nvm use 22

# This will install all Node.js dependencies in the root and app folder.
npm run prepare-server
```

### Start the server
```
# Use mockserver for production-like data.
npm run mockserver

# Use test-server for testing purposes.
npm run test-server
```
There’s no separate start script for UI5. Simply run the mock/test server (as configured) and open: `http://localhost:8080/airports/webapp/index.html`.

### Run UI-Integration Tests (OPA)
To run OPA tests, start the test-server
```
npm run test-server
```
then run the OPA test using
```
npm run opa-test
```

---
## 📜 Scripting Capabilities
Each task lives under the `scripts` in the root folder.

✅ Tasks Included:
- Average elevation per country
- Identify airports missing IATA codes
- Top 10 most common time zones

Run `npm run scripts` command to execute all the scripts, the results are stored in `/scripts/target/` folder in `CSV` format.

---
## 📬 API Testing
A complete Postman Collection `AeroMetrics.postman_collection.json` is included in the root folder for exploring and testing available API services.

---
## 🙋 Contact
For any questions, suggestions, or issues, feel free to reach out directly via project channels, GitHub. `I’m happy to help and eager to learn!`

My mail ID: [deepak.jain04@sap.com](deepak.jain05@sap.com) or [jaindeepak1401+git@gmail.com](jaindeepak1401+git@gmail.com)



