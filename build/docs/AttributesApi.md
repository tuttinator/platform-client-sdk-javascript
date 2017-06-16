---
title: AttributesApi
---
# platformClient.AttributesApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAttribute**](AttributesApi.html#deleteAttribute) | **DELETE** /api/v2/attributes/{attributeId} | Delete an existing Attribute.
[**getAttribute**](AttributesApi.html#getAttribute) | **GET** /api/v2/attributes/{attributeId} | Get details about an existing attribute.
[**getAttributes**](AttributesApi.html#getAttributes) | **GET** /api/v2/attributes | Gets a list of existing attributes.
[**postAttributes**](AttributesApi.html#postAttributes) | **POST** /api/v2/attributes | Create an attribute.
[**postAttributesQuery**](AttributesApi.html#postAttributesQuery) | **POST** /api/v2/attributes/query | Query attributes
[**putAttribute**](AttributesApi.html#putAttribute) | **PUT** /api/v2/attributes/{attributeId} | Update an existing attribute.
{: class="table table-striped"}

<a name="deleteAttribute"></a>

# null deleteAttribute(attributeId)

DELETE /api/v2/attributes/{attributeId}

Delete an existing Attribute.

This will remove attribute.

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AttributesApi();

var attributeId = "attributeId_example"; // String | Attribute ID

apiInstance.deleteAttribute(attributeId)
  .then(function() {
    console.log('deleteAttribute returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteAttribute');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **attributeId** | **String**| Attribute ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getAttribute"></a>

# [**Attribute**](Attribute.html) getAttribute(attributeId)

GET /api/v2/attributes/{attributeId}

Get details about an existing attribute.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AttributesApi();

var attributeId = "attributeId_example"; // String | Attribute ID

apiInstance.getAttribute(attributeId)
  .then(function(data) {
    console.log(`getAttribute success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAttribute');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **attributeId** | **String**| Attribute ID |  |
{: class="table table-striped"}

### Return type

[**Attribute**](Attribute.html)

<a name="getAttributes"></a>

# [**AttributeEntityListing**](AttributeEntityListing.html) getAttributes(opts)

GET /api/v2/attributes

Gets a list of existing attributes.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AttributesApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getAttributes(opts)
  .then(function(data) {
    console.log(`getAttributes success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAttributes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

[**AttributeEntityListing**](AttributeEntityListing.html)

<a name="postAttributes"></a>

# [**Attribute**](Attribute.html) postAttributes(body)

POST /api/v2/attributes

Create an attribute.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AttributesApi();

var body = new platformClient.Attribute(); // Attribute | Attribute

apiInstance.postAttributes(body)
  .then(function(data) {
    console.log(`postAttributes success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAttributes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**Attribute**](Attribute.html)| Attribute |  |
{: class="table table-striped"}

### Return type

[**Attribute**](Attribute.html)

<a name="postAttributesQuery"></a>

# [**AttributeEntityListing**](AttributeEntityListing.html) postAttributesQuery(body)

POST /api/v2/attributes/query

Query attributes



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AttributesApi();

var body = new platformClient.AttributeQueryRequest(); // AttributeQueryRequest | query

apiInstance.postAttributesQuery(body)
  .then(function(data) {
    console.log(`postAttributesQuery success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAttributesQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**AttributeQueryRequest**](AttributeQueryRequest.html)| query |  |
{: class="table table-striped"}

### Return type

[**AttributeEntityListing**](AttributeEntityListing.html)

<a name="putAttribute"></a>

# [**Attribute**](Attribute.html) putAttribute(attributeId, body)

PUT /api/v2/attributes/{attributeId}

Update an existing attribute.

Fields that can be updated: name, description. The most recent version is required for updates.

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AttributesApi();

var attributeId = "attributeId_example"; // String | Attribute ID

var body = new platformClient.Attribute(); // Attribute | Attribute

apiInstance.putAttribute(attributeId, body)
  .then(function(data) {
    console.log(`putAttribute success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putAttribute');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **attributeId** | **String**| Attribute ID |  |
 **body** | [**Attribute**](Attribute.html)| Attribute |  |
{: class="table table-striped"}

### Return type

[**Attribute**](Attribute.html)
