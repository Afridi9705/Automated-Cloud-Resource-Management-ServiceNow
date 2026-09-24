# Automated Cloud Resource Management — ServiceNow

A ServiceNow application that automates the cloud resource request lifecycle from request submission and manager approval to REST-based provisioning integration, logging, security, and monitoring.

## Project Overview

The **Automated Cloud Resource Management** application is designed to streamline the process of requesting and approving cloud resources within ServiceNow.

The application provides:

- Cloud resource request management
- Manager/approver workflow
- Automated approval and rejection routing
- REST API provisioning integration
- Server-side and client-side scripting
- Role-based access control and ACLs
- Error handling and system logging
- Monitoring dashboard
- Update Set deployment package

## Workflow

```text
User
  ↓
Cloud Resource Request
  ↓
Manager Approval
  ↓
Approved?
 ├── No → Rejected
 │
 └── Yes
      ↓
Status = Approved
      ↓
REST Provisioning API
      ↓
Provisioning Response
      ↓
System Logs
      ↓
Cloud Resource Record
      ↓
Monitoring Dashboard
Technologies Used
ServiceNow
JavaScript
GlideRecord
GlideAjax
Flow Designer
Business Rules
Script Includes
Client Scripts
REST API
ACLs
Update Sets
Main Components
1. Custom Table
x_2062699_automa_0_cloud_resource_request

The table stores cloud resource requests and their lifecycle information.

2. Flow Designer

The approval flow handles:

Request creation
Manager/approver approval
Approval decision
Provisioning action
Cloud resource record creation
Request status update
Rejection handling
3. Business Rules

Business Rules are used for:

Server-side validation
Preventing duplicate requests
Triggering provisioning integration
REST response handling
System logging
4. Script Includes

The project includes reusable server-side JavaScript such as:

CloudResourceUtils
CloudUserAjax
5. Client Scripts

Client-side functionality includes:

Production environment warning
Requester email retrieval using GlideAjax
Form-level dynamic behavior
6. REST API Integration

The application uses an outbound REST integration to simulate an external cloud provisioning service.

The current implementation uses:

https://httpbin.org/post

The API receives dynamic request information such as:

{
  "number": "${number}",
  "resource_type": "${resource_type}"
}

Note: The current project demonstrates REST-based provisioning integration using a simulated endpoint. It does not directly create AWS resources. The integration can be extended to a real cloud provisioning service.

Security

Role-based access control and ACLs are configured to protect cloud resource requests.

Key roles include:

x_2062699_automa_0.user
x_2062699_automa_0.manager_approver

Sensitive fields such as request status are protected from unauthorized modification.

Error Handling and Logging

The provisioning integration uses HTTP response validation and try-catch error handling.

ServiceNow logging methods include:

gs.info()
gs.error()

These logs help track successful API calls and provisioning failures.

Monitoring

A monitoring dashboard provides visibility into cloud resource requests and their current statuses.

Example report:

Cloud Requests by Status

Testing

End-to-end testing was performed by:

Creating a cloud resource request
Routing the request for approval
Approving the request
Triggering the provisioning REST integration
Verifying HTTP response status
Checking ServiceNow system logs
Verifying request status and dashboard updates
Deployment

The completed application was packaged using a ServiceNow Update Set.

Update Set:
Cloud Resource Management - Phase 8

State:
Complete

Format:
XML Update Set

The exported Update Set can be imported into another ServiceNow instance for deployment.

Project Structure
Automated-Cloud-Resource-Management-ServiceNow/
│
├── documentation/
├── scripts/
│   ├── Business-Rules/
│   ├── Script-Includes/
│   └── Client-Scripts/
├── update-set/
├── rest-api/
├── screenshots/
└── README.md
Project Skills Demonstrated

This project demonstrates practical experience with:

ServiceNow Application Development
ServiceNow Administration
Flow Designer
JavaScript
GlideRecord
GlideAjax
Business Rules
Script Includes
Client Scripts
ACLs and role-based security
REST API integration
Error handling
System logging
Monitoring and reporting
Update Set deployment
Author

Shaik Afridi

Computer Science Engineering Student
Gayatri Vidya Parishad College of Engineering


## Project Resources

### ServiceNow Scripts

- [Business Rule — Prevent Duplicate Requests](scripts/Business-Rules/Prevent-Duplicate-Requests.js)
- [Business Rule — Trigger Provisioning API](scripts/Business-Rules/Trigger-Provisioning-API.js)
- [Client Script — Warn on Production Environment](scripts/Client-Scripts/Warn-on-Production-Environment.js)
- [Client Script — Fetch Requester Email](scripts/Client-Scripts/Fetch-Requester-Email.js)
- [Script Include — CloudResourceUtils](scripts/Script-Includes/CloudResourceUtils.js)
- [Script Include — CloudUserAjax](scripts/Script-Includes/CloudUserAjax.js)

### Screenshots

All project screenshots are available in the [screenshots](screenshots/) folder.

### Documentation

Project documentation and deployment files are available in the [documentation](documentation/) and [update-set](update-set/) folders.