---
title: AuthorizationApi
---
# platformClient.AuthorizationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAuthorizationRole**](AuthorizationApi.html#deleteAuthorizationRole) | **DELETE** /api/v2/authorization/roles/{roleId} | Delete an organization role.
[**deleteUserRoles**](AuthorizationApi.html#deleteUserRoles) | **DELETE** /api/v2/users/{userId}/roles | Removes all the roles from the user.
[**getAuthorizationPermissions**](AuthorizationApi.html#getAuthorizationPermissions) | **GET** /api/v2/authorization/permissions | Get all permissions.
[**getAuthorizationProducts**](AuthorizationApi.html#getAuthorizationProducts) | **GET** /api/v2/authorization/products | Get the list of enabled products
[**getAuthorizationRole**](AuthorizationApi.html#getAuthorizationRole) | **GET** /api/v2/authorization/roles/{roleId} | Get a single organization role.
[**getAuthorizationRoleComparedefaultRightRoleId**](AuthorizationApi.html#getAuthorizationRoleComparedefaultRightRoleId) | **GET** /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId} | Get an org role to default role comparison comparison
[**getAuthorizationRoles**](AuthorizationApi.html#getAuthorizationRoles) | **GET** /api/v2/authorization/roles | Retrieve a list of all roles defined for the organization
[**getUserRoles**](AuthorizationApi.html#getUserRoles) | **GET** /api/v2/users/{userId}/roles | Returns a listing of roles and permissions for a user.
[**patchAuthorizationRole**](AuthorizationApi.html#patchAuthorizationRole) | **PATCH** /api/v2/authorization/roles/{roleId} | Patch Organization Role for needsUpdate Field
[**postAuthorizationRoleComparedefaultRightRoleId**](AuthorizationApi.html#postAuthorizationRoleComparedefaultRightRoleId) | **POST** /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId} | Get an unsaved org role to default role comparison
[**postAuthorizationRoles**](AuthorizationApi.html#postAuthorizationRoles) | **POST** /api/v2/authorization/roles | Create an organization role.
[**postAuthorizationRolesDefault**](AuthorizationApi.html#postAuthorizationRolesDefault) | **POST** /api/v2/authorization/roles/default | Restores all default roles
[**putAuthorizationRole**](AuthorizationApi.html#putAuthorizationRole) | **PUT** /api/v2/authorization/roles/{roleId} | Update an organization role.
[**putAuthorizationRoleUsersAdd**](AuthorizationApi.html#putAuthorizationRoleUsersAdd) | **PUT** /api/v2/authorization/roles/{roleId}/users/add | Sets the users for the role
[**putAuthorizationRoleUsersRemove**](AuthorizationApi.html#putAuthorizationRoleUsersRemove) | **PUT** /api/v2/authorization/roles/{roleId}/users/remove | Removes the users from the role
[**putAuthorizationRolesDefault**](AuthorizationApi.html#putAuthorizationRolesDefault) | **PUT** /api/v2/authorization/roles/default | Restore specified default roles
[**putUserRoles**](AuthorizationApi.html#putUserRoles) | **PUT** /api/v2/users/{userId}/roles | Sets the user&#39;s roles
{: class="table table-striped"}

<a name="deleteAuthorizationRole"></a>

# null deleteAuthorizationRole(roleId)

DELETE /api/v2/authorization/roles/{roleId}

Delete an organization role.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

apiInstance.deleteAuthorizationRole(roleId)
  .then(function() {
    console.log('deleteAuthorizationRole returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteAuthorizationRole');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String**| Role ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="deleteUserRoles"></a>

# null deleteUserRoles(userId)

DELETE /api/v2/users/{userId}/roles

Removes all the roles from the user.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var userId = "userId_example"; // String | User ID

apiInstance.deleteUserRoles(userId)
  .then(function() {
    console.log('deleteUserRoles returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteUserRoles');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| User ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getAuthorizationPermissions"></a>

# [**PermissionCollectionEntityListing**](PermissionCollectionEntityListing.html) getAuthorizationPermissions(opts)

GET /api/v2/authorization/permissions

Get all permissions.

Retrieve a list of all permission defined in the system.

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getAuthorizationPermissions(opts)
  .then(function(data) {
    console.log(`getAuthorizationPermissions success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAuthorizationPermissions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

[**PermissionCollectionEntityListing**](PermissionCollectionEntityListing.html)

<a name="getAuthorizationProducts"></a>

# [**OrganizationProductEntityListing**](OrganizationProductEntityListing.html) getAuthorizationProducts()

GET /api/v2/authorization/products

Get the list of enabled products

Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();
apiInstance.getAuthorizationProducts()
  .then(function(data) {
    console.log(`getAuthorizationProducts success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAuthorizationProducts');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

[**OrganizationProductEntityListing**](OrganizationProductEntityListing.html)

<a name="getAuthorizationRole"></a>

# [**DomainOrganizationRole**](DomainOrganizationRole.html) getAuthorizationRole(roleId)

GET /api/v2/authorization/roles/{roleId}

Get a single organization role.

Get the organization role specified by its ID.

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

apiInstance.getAuthorizationRole(roleId)
  .then(function(data) {
    console.log(`getAuthorizationRole success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAuthorizationRole');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String**| Role ID |  |
{: class="table table-striped"}

### Return type

[**DomainOrganizationRole**](DomainOrganizationRole.html)

<a name="getAuthorizationRoleComparedefaultRightRoleId"></a>

# [**DomainOrgRoleDifference**](DomainOrgRoleDifference.html) getAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId)

GET /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}

Get an org role to default role comparison comparison

Compares any organization role to a default role id and show differences

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var leftRoleId = "leftRoleId_example"; // String | Left Role ID

var rightRoleId = "rightRoleId_example"; // String | Right Role id

apiInstance.getAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId)
  .then(function(data) {
    console.log(`getAuthorizationRoleComparedefaultRightRoleId success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAuthorizationRoleComparedefaultRightRoleId');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **leftRoleId** | **String**| Left Role ID |  |
 **rightRoleId** | **String**| Right Role id |  |
{: class="table table-striped"}

### Return type

[**DomainOrgRoleDifference**](DomainOrgRoleDifference.html)

<a name="getAuthorizationRoles"></a>

# [**OrganizationRoleEntityListing**](OrganizationRoleEntityListing.html) getAuthorizationRoles(opts)

GET /api/v2/authorization/roles

Retrieve a list of all roles defined for the organization



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'permission': null, // [Object] | 
  'defaultRoleId': null, // [Object] | 
  'userCount': true // Boolean | 
};
apiInstance.getAuthorizationRoles(opts)
  .then(function(data) {
    console.log(`getAuthorizationRoles success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAuthorizationRoles');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number**| The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number**| The page number requested | [optional] [default to 1] |
 **sortBy** | **String**| variable name requested to sort by | [optional]  |
 **expand** | [**[Object]**](Object.html)| variable name requested by expand list | [optional]  |
 **nextPage** | **String**| next page token | [optional]  |
 **previousPage** | **String**| Previous page token | [optional]  |
 **permission** | [**[Object]**](Object.html)|  | [optional]  |
 **defaultRoleId** | [**[Object]**](Object.html)|  | [optional]  |
 **userCount** | **Boolean**|  | [optional] [default to true] |
{: class="table table-striped"}

### Return type

[**OrganizationRoleEntityListing**](OrganizationRoleEntityListing.html)

<a name="getUserRoles"></a>

# [**UserAuthorization**](UserAuthorization.html) getUserRoles(userId)

GET /api/v2/users/{userId}/roles

Returns a listing of roles and permissions for a user.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var userId = "userId_example"; // String | User ID

apiInstance.getUserRoles(userId)
  .then(function(data) {
    console.log(`getUserRoles success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getUserRoles');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| User ID |  |
{: class="table table-striped"}

### Return type

[**UserAuthorization**](UserAuthorization.html)

<a name="patchAuthorizationRole"></a>

# [**DomainOrganizationRole**](DomainOrganizationRole.html) patchAuthorizationRole(roleId, body)

PATCH /api/v2/authorization/roles/{roleId}

Patch Organization Role for needsUpdate Field

Patch Organization Role for needsUpdate Field

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

var body = new platformClient.DomainOrganizationRole(); // DomainOrganizationRole | Organization role

apiInstance.patchAuthorizationRole(roleId, body)
  .then(function(data) {
    console.log(`patchAuthorizationRole success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchAuthorizationRole');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String**| Role ID |  |
 **body** | [**DomainOrganizationRole**](DomainOrganizationRole.html)| Organization role |  |
{: class="table table-striped"}

### Return type

[**DomainOrganizationRole**](DomainOrganizationRole.html)

<a name="postAuthorizationRoleComparedefaultRightRoleId"></a>

# [**DomainOrgRoleDifference**](DomainOrgRoleDifference.html) postAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId, body)

POST /api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}

Get an unsaved org role to default role comparison

Allows users to compare their existing roles in an unsaved state to its default role

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var leftRoleId = "leftRoleId_example"; // String | Left Role ID

var rightRoleId = "rightRoleId_example"; // String | Right Role id

var body = new platformClient.DomainOrganizationRole(); // DomainOrganizationRole | Organization role

apiInstance.postAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId, body)
  .then(function(data) {
    console.log(`postAuthorizationRoleComparedefaultRightRoleId success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAuthorizationRoleComparedefaultRightRoleId');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **leftRoleId** | **String**| Left Role ID |  |
 **rightRoleId** | **String**| Right Role id |  |
 **body** | [**DomainOrganizationRole**](DomainOrganizationRole.html)| Organization role |  |
{: class="table table-striped"}

### Return type

[**DomainOrgRoleDifference**](DomainOrgRoleDifference.html)

<a name="postAuthorizationRoles"></a>

# [**DomainOrganizationRole**](DomainOrganizationRole.html) postAuthorizationRoles(body)

POST /api/v2/authorization/roles

Create an organization role.



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var body = new platformClient.DomainOrganizationRoleCreate(); // DomainOrganizationRoleCreate | Organization role

apiInstance.postAuthorizationRoles(body)
  .then(function(data) {
    console.log(`postAuthorizationRoles success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAuthorizationRoles');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**DomainOrganizationRoleCreate**](DomainOrganizationRoleCreate.html)| Organization role |  |
{: class="table table-striped"}

### Return type

[**DomainOrganizationRole**](DomainOrganizationRole.html)

<a name="postAuthorizationRolesDefault"></a>

# [**OrganizationRoleEntityListing**](OrganizationRoleEntityListing.html) postAuthorizationRolesDefault(opts)

POST /api/v2/authorization/roles/default

Restores all default roles

This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var opts = { 
  'force': false // Boolean | Restore default roles
};
apiInstance.postAuthorizationRolesDefault(opts)
  .then(function(data) {
    console.log(`postAuthorizationRolesDefault success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAuthorizationRolesDefault');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **force** | **Boolean**| Restore default roles | [optional] [default to false] |
{: class="table table-striped"}

### Return type

[**OrganizationRoleEntityListing**](OrganizationRoleEntityListing.html)

<a name="putAuthorizationRole"></a>

# [**DomainOrganizationRole**](DomainOrganizationRole.html) putAuthorizationRole(roleId, body)

PUT /api/v2/authorization/roles/{roleId}

Update an organization role.

Update

### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

var body = new platformClient.DomainOrganizationRoleUpdate(); // DomainOrganizationRoleUpdate | Organization role

apiInstance.putAuthorizationRole(roleId, body)
  .then(function(data) {
    console.log(`putAuthorizationRole success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putAuthorizationRole');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String**| Role ID |  |
 **body** | [**DomainOrganizationRoleUpdate**](DomainOrganizationRoleUpdate.html)| Organization role |  |
{: class="table table-striped"}

### Return type

[**DomainOrganizationRole**](DomainOrganizationRole.html)

<a name="putAuthorizationRoleUsersAdd"></a>

# **[&#39;String&#39;]** putAuthorizationRoleUsersAdd(roleId, body)

PUT /api/v2/authorization/roles/{roleId}/users/add

Sets the users for the role



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

var body = [new platformClient.[String]()]; // [String] | List of user IDs

apiInstance.putAuthorizationRoleUsersAdd(roleId, body)
  .then(function(data) {
    console.log(`putAuthorizationRoleUsersAdd success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putAuthorizationRoleUsersAdd');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String**| Role ID |  |
 **body** | **[String]**| List of user IDs |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="putAuthorizationRoleUsersRemove"></a>

# **[&#39;String&#39;]** putAuthorizationRoleUsersRemove(roleId, body)

PUT /api/v2/authorization/roles/{roleId}/users/remove

Removes the users from the role



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var roleId = "roleId_example"; // String | Role ID

var body = [new platformClient.[String]()]; // [String] | List of user IDs

apiInstance.putAuthorizationRoleUsersRemove(roleId, body)
  .then(function(data) {
    console.log(`putAuthorizationRoleUsersRemove success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putAuthorizationRoleUsersRemove');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roleId** | **String**| Role ID |  |
 **body** | **[String]**| List of user IDs |  |
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="putAuthorizationRolesDefault"></a>

# [**OrganizationRoleEntityListing**](OrganizationRoleEntityListing.html) putAuthorizationRolesDefault(body)

PUT /api/v2/authorization/roles/default

Restore specified default roles



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var body = [new platformClient.DomainOrganizationRole()]; // [DomainOrganizationRole] | Organization roles list

apiInstance.putAuthorizationRolesDefault(body)
  .then(function(data) {
    console.log(`putAuthorizationRolesDefault success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putAuthorizationRolesDefault');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**[DomainOrganizationRole]**](DomainOrganizationRole.html)| Organization roles list |  |
{: class="table table-striped"}

### Return type

[**OrganizationRoleEntityListing**](OrganizationRoleEntityListing.html)

<a name="putUserRoles"></a>

# [**UserAuthorization**](UserAuthorization.html) putUserRoles(userId, body)

PUT /api/v2/users/{userId}/roles

Sets the user&#39;s roles



### Example

~~~ javascript
var platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AuthorizationApi();

var userId = "userId_example"; // String | User ID

var body = [new platformClient.[String]()]; // [String] | List of roles

apiInstance.putUserRoles(userId, body)
  .then(function(data) {
    console.log(`putUserRoles success! data: ${data}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putUserRoles');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String**| User ID |  |
 **body** | **[String]**| List of roles |  |
{: class="table table-striped"}

### Return type

[**UserAuthorization**](UserAuthorization.html)
