# REST API Integration

## Overview

The Automated Cloud Resource Management application integrates ServiceNow with an external REST endpoint to simulate cloud resource provisioning.

The project uses **HTTPBin** as a test endpoint. It receives the provisioning request and returns an HTTP response, allowing the ServiceNow integration to be tested without creating an actual AWS resource.

## REST Message

**Name:** Cloud Resource Provisioning API

**Endpoint:**

`https://httpbin.org/post`

**HTTP Method:** POST

**Content-Type:** application/json

## Request Payload

```json
{
  "number": "${number}",
  "resource_type": "${resource_type}"
}