---
title: OrganizationApi
---
# platformClient.OrganizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getFieldconfig**](OrganizationApi.html#getFieldconfig) | **GET** /api/v2/fieldconfig | Fetch field config for an entity type
[**getOrganizationsMe**](OrganizationApi.html#getOrganizationsMe) | **GET** /api/v2/organizations/me | Get organization.
[**patchOrganizationsFeature**](OrganizationApi.html#patchOrganizationsFeature) | **PATCH** /api/v2/organizations/features/{featureName} | Update organization
[**putOrganizationsMe**](OrganizationApi.html#putOrganizationsMe) | **PUT** /api/v2/organizations/me | Update organization.
{: class="table table-striped"}

<a name="getFieldconfig"></a>

# [**FieldConfig**](FieldConfig.html) getFieldconfig(type)

GET /api/v2/fieldconfig

Fetch field config for an entity type



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationApi();

var type = "type_example"; // String | Field type

apiInstance.getFieldconfig(type)
  .then(function(data) {
    console.log(`getFieldconfig success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getFieldconfig');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **type** | **String** | Field type | <br />**Values**: person, group, org, externalContact |
{: class="table table-striped"}

### Return type

**FieldConfig**

<a name="getOrganizationsMe"></a>

# [**Organization**](Organization.html) getOrganizationsMe()

GET /api/v2/organizations/me

Get organization.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationApi();
apiInstance.getOrganizationsMe()
  .then(function(data) {
    console.log(`getOrganizationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getOrganizationsMe');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**Organization**

<a name="patchOrganizationsFeature"></a>

# [**OrganizationFeatures**](OrganizationFeatures.html) patchOrganizationsFeature(featureName, enabled)

PATCH /api/v2/organizations/features/{featureName}

Update organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationApi();

var featureName = "featureName_example"; // String | Organization feature

var enabled = new platformClient.FeatureState(); // FeatureState | New state of feature

apiInstance.patchOrganizationsFeature(featureName, enabled)
  .then(function(data) {
    console.log(`patchOrganizationsFeature success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchOrganizationsFeature');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **featureName** | **String** | Organization feature | <br />**Values**: realtimeCIC, purecloud, hipaa, ucEnabled, pci, purecloudVoice, xmppFederation, chat, informalPhotos, directory, contactCenter, unifiedCommunications, custserv |
 **enabled** | **FeatureState** | New state of feature |  |
{: class="table table-striped"}

### Return type

**OrganizationFeatures**

<a name="putOrganizationsMe"></a>

# [**Organization**](Organization.html) putOrganizationsMe(opts)

PUT /api/v2/organizations/me

Update organization.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.OrganizationApi();

var opts = { 
  'body': new platformClient.Organization() // Organization | Organization
};
apiInstance.putOrganizationsMe(opts)
  .then(function(data) {
    console.log(`putOrganizationsMe success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putOrganizationsMe');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Organization** | Organization | [optional]  |
{: class="table table-striped"}

### Return type

**Organization**

