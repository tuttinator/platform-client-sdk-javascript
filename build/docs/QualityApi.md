---
title: QualityApi
---
# platformClient.QualityApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteQualityCalibration**](QualityApi.html#deleteQualityCalibration) | **DELETE** /api/v2/quality/calibrations/{calibrationId} | Delete a calibration by id.
[**deleteQualityConversationEvaluation**](QualityApi.html#deleteQualityConversationEvaluation) | **DELETE** /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId} | Delete an evaluation
[**deleteQualityForm**](QualityApi.html#deleteQualityForm) | **DELETE** /api/v2/quality/forms/{formId} | Delete an evaluation form.
[**deleteQualityKeywordset**](QualityApi.html#deleteQualityKeywordset) | **DELETE** /api/v2/quality/keywordsets/{keywordSetId} | Delete a keywordSet by id.
[**deleteQualityKeywordsets**](QualityApi.html#deleteQualityKeywordsets) | **DELETE** /api/v2/quality/keywordsets | Delete keyword sets
[**getQualityAgentsActivity**](QualityApi.html#getQualityAgentsActivity) | **GET** /api/v2/quality/agents/activity | Gets a list of Agent Activities
[**getQualityCalibration**](QualityApi.html#getQualityCalibration) | **GET** /api/v2/quality/calibrations/{calibrationId} | Get a calibration by id.
[**getQualityCalibrations**](QualityApi.html#getQualityCalibrations) | **GET** /api/v2/quality/calibrations | Get the list of calibrations
[**getQualityConversationAudits**](QualityApi.html#getQualityConversationAudits) | **GET** /api/v2/quality/conversations/{conversationId}/audits | Get audits for conversation or recording
[**getQualityConversationEvaluation**](QualityApi.html#getQualityConversationEvaluation) | **GET** /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId} | Get an evaluation
[**getQualityEvaluationsQuery**](QualityApi.html#getQualityEvaluationsQuery) | **GET** /api/v2/quality/evaluations/query | Queries Evaluations and returns a paged list
[**getQualityEvaluatorsActivity**](QualityApi.html#getQualityEvaluatorsActivity) | **GET** /api/v2/quality/evaluators/activity | Get an evaluator activity
[**getQualityForm**](QualityApi.html#getQualityForm) | **GET** /api/v2/quality/forms/{formId} | Get an evaluation form
[**getQualityFormVersions**](QualityApi.html#getQualityFormVersions) | **GET** /api/v2/quality/forms/{formId}/versions | Gets all the revisions for a specific evaluation.
[**getQualityForms**](QualityApi.html#getQualityForms) | **GET** /api/v2/quality/forms | Get the list of evaluation forms
[**getQualityKeywordset**](QualityApi.html#getQualityKeywordset) | **GET** /api/v2/quality/keywordsets/{keywordSetId} | Get a keywordSet by id.
[**getQualityKeywordsets**](QualityApi.html#getQualityKeywordsets) | **GET** /api/v2/quality/keywordsets | Get the list of keyword sets
[**getQualityPublishedform**](QualityApi.html#getQualityPublishedform) | **GET** /api/v2/quality/publishedforms/{formId} | Get the published evaluation forms.
[**getQualityPublishedforms**](QualityApi.html#getQualityPublishedforms) | **GET** /api/v2/quality/publishedforms | Get the published evaluation forms.
[**postAnalyticsEvaluationsAggregatesQuery**](QualityApi.html#postAnalyticsEvaluationsAggregatesQuery) | **POST** /api/v2/analytics/evaluations/aggregates/query | Query for evaluation aggregates
[**postQualityCalibrations**](QualityApi.html#postQualityCalibrations) | **POST** /api/v2/quality/calibrations | Create a calibration
[**postQualityConversationEvaluations**](QualityApi.html#postQualityConversationEvaluations) | **POST** /api/v2/quality/conversations/{conversationId}/evaluations | Create an evaluation
[**postQualityEvaluationsScoring**](QualityApi.html#postQualityEvaluationsScoring) | **POST** /api/v2/quality/evaluations/scoring | Score evaluation
[**postQualityForms**](QualityApi.html#postQualityForms) | **POST** /api/v2/quality/forms | Create an evaluation form.
[**postQualityKeywordsets**](QualityApi.html#postQualityKeywordsets) | **POST** /api/v2/quality/keywordsets | Create a Keyword Set
[**postQualityPublishedforms**](QualityApi.html#postQualityPublishedforms) | **POST** /api/v2/quality/publishedforms | Publish an evaluation form.
[**postQualitySpotability**](QualityApi.html#postQualitySpotability) | **POST** /api/v2/quality/spotability | Retrieve the spotability statistic
[**putQualityCalibration**](QualityApi.html#putQualityCalibration) | **PUT** /api/v2/quality/calibrations/{calibrationId} | Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
[**putQualityConversationEvaluation**](QualityApi.html#putQualityConversationEvaluation) | **PUT** /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId} | Update an evaluation
[**putQualityForm**](QualityApi.html#putQualityForm) | **PUT** /api/v2/quality/forms/{formId} | Update an evaluation form.
[**putQualityKeywordset**](QualityApi.html#putQualityKeywordset) | **PUT** /api/v2/quality/keywordsets/{keywordSetId} | Update a keywordSet to the specified keywordSet via PUT.
{: class="table table-striped"}

<a name="deleteQualityCalibration"></a>

# [**Calibration**](Calibration.html) deleteQualityCalibration(calibrationId, calibratorId)

DELETE /api/v2/quality/calibrations/{calibrationId}

Delete a calibration by id.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var calibrationId = "calibrationId_example"; // String | Calibration ID

var calibratorId = "calibratorId_example"; // String | calibratorId

apiInstance.deleteQualityCalibration(calibrationId, calibratorId)
  .then(function(data) {
    console.log(`deleteQualityCalibration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteQualityCalibration');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **calibrationId** | **String** | Calibration ID |  |
 **calibratorId** | **String** | calibratorId |  |
{: class="table table-striped"}

### Return type

**Calibration**

<a name="deleteQualityConversationEvaluation"></a>

# [**Evaluation**](Evaluation.html) deleteQualityConversationEvaluation(conversationId, evaluationId, opts)

DELETE /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}

Delete an evaluation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var conversationId = "conversationId_example"; // String | conversationId

var evaluationId = "evaluationId_example"; // String | evaluationId

var opts = { 
  'expand': "expand_example" // String | evaluatorId
};
apiInstance.deleteQualityConversationEvaluation(conversationId, evaluationId, opts)
  .then(function(data) {
    console.log(`deleteQualityConversationEvaluation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteQualityConversationEvaluation');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **evaluationId** | **String** | evaluationId |  |
 **expand** | **String** | evaluatorId | [optional]  |
{: class="table table-striped"}

### Return type

**Evaluation**

<a name="deleteQualityForm"></a>

# void deleteQualityForm(formId)

DELETE /api/v2/quality/forms/{formId}

Delete an evaluation form.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var formId = "formId_example"; // String | Form ID

apiInstance.deleteQualityForm(formId)
  .then(function() {
    console.log('deleteQualityForm returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteQualityForm');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteQualityKeywordset"></a>

# void deleteQualityKeywordset(keywordSetId)

DELETE /api/v2/quality/keywordsets/{keywordSetId}

Delete a keywordSet by id.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var keywordSetId = "keywordSetId_example"; // String | KeywordSet ID

apiInstance.deleteQualityKeywordset(keywordSetId)
  .then(function() {
    console.log('deleteQualityKeywordset returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteQualityKeywordset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **keywordSetId** | **String** | KeywordSet ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteQualityKeywordsets"></a>

# void deleteQualityKeywordsets(ids)

DELETE /api/v2/quality/keywordsets

Delete keyword sets

Bulk delete of keyword sets; this will only delete the keyword sets that match the ids specified in the query param.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var ids = "ids_example"; // String | A comma-delimited list of valid KeywordSet ids

apiInstance.deleteQualityKeywordsets(ids)
  .then(function() {
    console.log('deleteQualityKeywordsets returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteQualityKeywordsets');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ids** | **String** | A comma-delimited list of valid KeywordSet ids |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getQualityAgentsActivity"></a>

# [**AgentActivityEntityListing**](AgentActivityEntityListing.html) getQualityAgentsActivity(opts)

GET /api/v2/quality/agents/activity

Gets a list of Agent Activities

Including the number of evaluations and average evaluation score

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Start time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | End time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  'agentUserId': null, // [Object] | user id of agent requested
  'evaluatorUserId': "evaluatorUserId_example", // String | user id of the evaluator
  'name': "name_example", // String | name
  'group': "group_example" // String | group id
};
apiInstance.getQualityAgentsActivity(opts)
  .then(function(data) {
    console.log(`getQualityAgentsActivity success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityAgentsActivity');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **startTime** | **Date** | Start time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ | [optional]  |
 **endTime** | **Date** | End time of agent activity. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ | [optional]  |
 **agentUserId** | **[Object]** | user id of agent requested | [optional]  |
 **evaluatorUserId** | **String** | user id of the evaluator | [optional]  |
 **name** | **String** | name | [optional]  |
 **group** | **String** | group id | [optional]  |
{: class="table table-striped"}

### Return type

**AgentActivityEntityListing**

<a name="getQualityCalibration"></a>

# [**Calibration**](Calibration.html) getQualityCalibration(calibrationId, calibratorId)

GET /api/v2/quality/calibrations/{calibrationId}

Get a calibration by id.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var calibrationId = "calibrationId_example"; // String | Calibration ID

var calibratorId = "calibratorId_example"; // String | calibratorId

apiInstance.getQualityCalibration(calibrationId, calibratorId)
  .then(function(data) {
    console.log(`getQualityCalibration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityCalibration');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **calibrationId** | **String** | Calibration ID |  |
 **calibratorId** | **String** | calibratorId |  |
{: class="table table-striped"}

### Return type

**Calibration**

<a name="getQualityCalibrations"></a>

# [**CalibrationEntityListing**](CalibrationEntityListing.html) getQualityCalibrations(calibratorId, opts)

GET /api/v2/quality/calibrations

Get the list of calibrations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var calibratorId = "calibratorId_example"; // String | user id of calibrator

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'conversationId': "conversationId_example", // String | conversation id
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  'endTime': new Date("2013-10-20T19:20:30+01:00") // Date | end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
};
apiInstance.getQualityCalibrations(calibratorId, opts)
  .then(function(data) {
    console.log(`getQualityCalibrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityCalibrations');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **calibratorId** | **String** | user id of calibrator |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **conversationId** | **String** | conversation id | [optional]  |
 **startTime** | **Date** | Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ | [optional]  |
 **endTime** | **Date** | end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ | [optional]  |
{: class="table table-striped"}

### Return type

**CalibrationEntityListing**

<a name="getQualityConversationAudits"></a>

# [**QualityAuditPage**](QualityAuditPage.html) getQualityConversationAudits(conversationId, opts)

GET /api/v2/quality/conversations/{conversationId}/audits

Get audits for conversation or recording



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'recordingId': "recordingId_example", // String | id of the recording
  'entityType': "RECORDING" // String | entity type options: Recording, Calibration, Evaluation, Annotation, Screen_Recording
};
apiInstance.getQualityConversationAudits(conversationId, opts)
  .then(function(data) {
    console.log(`getQualityConversationAudits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityConversationAudits');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **recordingId** | **String** | id of the recording | [optional]  |
 **entityType** | **String** | entity type options: Recording, Calibration, Evaluation, Annotation, Screen_Recording | [optional] [default to RECORDING] |
{: class="table table-striped"}

### Return type

**QualityAuditPage**

<a name="getQualityConversationEvaluation"></a>

# [**Evaluation**](Evaluation.html) getQualityConversationEvaluation(conversationId, evaluationId, opts)

GET /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}

Get an evaluation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var conversationId = "conversationId_example"; // String | conversationId

var evaluationId = "evaluationId_example"; // String | evaluationId

var opts = { 
  'expand': "expand_example" // String | agent, evaluator, evaluationForm
};
apiInstance.getQualityConversationEvaluation(conversationId, evaluationId, opts)
  .then(function(data) {
    console.log(`getQualityConversationEvaluation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityConversationEvaluation');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **evaluationId** | **String** | evaluationId |  |
 **expand** | **String** | agent, evaluator, evaluationForm | [optional]  |
{: class="table table-striped"}

### Return type

**Evaluation**

<a name="getQualityEvaluationsQuery"></a>

# [**EvaluationEntityListing**](EvaluationEntityListing.html) getQualityEvaluationsQuery(opts)

GET /api/v2/quality/evaluations/query

Queries Evaluations and returns a paged list

Query params must include one of conversationId, evaluatorUserId, or agentUserId

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'conversationId': "conversationId_example", // String | conversationId specified
  'agentUserId': "agentUserId_example", // String | user id of the agent
  'evaluatorUserId': "evaluatorUserId_example", // String | evaluator user id
  'queueId': "queueId_example", // String | queue id
  'startTime': "startTime_example", // String | start time of the evaluation query
  'endTime': "endTime_example", // String | end time of the evaluation query
  'evaluationState': null, // [Object] | evaluation state options: Pending, InProgress, Finished
  'isReleased': true, // Boolean | the evaluation has been released
  'agentHasRead': true, // Boolean | agent has the evaluation
  'expandAnswerTotalScores': true, // Boolean | get the total scores for evaluations
  'maximum': 56 // Number | maximum
};
apiInstance.getQualityEvaluationsQuery(opts)
  .then(function(data) {
    console.log(`getQualityEvaluationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityEvaluationsQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **conversationId** | **String** | conversationId specified | [optional]  |
 **agentUserId** | **String** | user id of the agent | [optional]  |
 **evaluatorUserId** | **String** | evaluator user id | [optional]  |
 **queueId** | **String** | queue id | [optional]  |
 **startTime** | **String** | start time of the evaluation query | [optional]  |
 **endTime** | **String** | end time of the evaluation query | [optional]  |
 **evaluationState** | **[Object]** | evaluation state options: Pending, InProgress, Finished | [optional]  |
 **isReleased** | **Boolean** | the evaluation has been released | [optional]  |
 **agentHasRead** | **Boolean** | agent has the evaluation | [optional]  |
 **expandAnswerTotalScores** | **Boolean** | get the total scores for evaluations | [optional]  |
 **maximum** | **Number** | maximum | [optional]  |
{: class="table table-striped"}

### Return type

**EvaluationEntityListing**

<a name="getQualityEvaluatorsActivity"></a>

# [**EvaluatorActivityEntityListing**](EvaluatorActivityEntityListing.html) getQualityEvaluatorsActivity(opts)

GET /api/v2/quality/evaluators/activity

Get an evaluator activity



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'startTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  'endTime': new Date("2013-10-20T19:20:30+01:00"), // Date | The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ
  'name': "name_example", // String | Evaluator name
  'permission': null, // [Object] | permission strings
  'group': "group_example" // String | group id
};
apiInstance.getQualityEvaluatorsActivity(opts)
  .then(function(data) {
    console.log(`getQualityEvaluatorsActivity success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityEvaluatorsActivity');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **startTime** | **Date** | The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ | [optional]  |
 **endTime** | **Date** | The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss.SSSZ | [optional]  |
 **name** | **String** | Evaluator name | [optional]  |
 **permission** | **[Object]** | permission strings | [optional]  |
 **group** | **String** | group id | [optional]  |
{: class="table table-striped"}

### Return type

**EvaluatorActivityEntityListing**

<a name="getQualityForm"></a>

# [**EvaluationForm**](EvaluationForm.html) getQualityForm(formId)

GET /api/v2/quality/forms/{formId}

Get an evaluation form



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var formId = "formId_example"; // String | Form ID

apiInstance.getQualityForm(formId)
  .then(function(data) {
    console.log(`getQualityForm success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityForm');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
{: class="table table-striped"}

### Return type

**EvaluationForm**

<a name="getQualityFormVersions"></a>

# [**EvaluationFormEntityListing**](EvaluationFormEntityListing.html) getQualityFormVersions(formId, opts)

GET /api/v2/quality/forms/{formId}/versions

Gets all the revisions for a specific evaluation.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var formId = "formId_example"; // String | Form ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getQualityFormVersions(formId, opts)
  .then(function(data) {
    console.log(`getQualityFormVersions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityFormVersions');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**EvaluationFormEntityListing**

<a name="getQualityForms"></a>

# [**EvaluationFormEntityListing**](EvaluationFormEntityListing.html) getQualityForms(opts)

GET /api/v2/quality/forms

Get the list of evaluation forms



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'expand': "expand_example", // String | Expand
  'name': "name_example" // String | Name
};
apiInstance.getQualityForms(opts)
  .then(function(data) {
    console.log(`getQualityForms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityForms');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **expand** | **String** | Expand | [optional]  |
 **name** | **String** | Name | [optional]  |
{: class="table table-striped"}

### Return type

**EvaluationFormEntityListing**

<a name="getQualityKeywordset"></a>

# [**KeywordSet**](KeywordSet.html) getQualityKeywordset(keywordSetId)

GET /api/v2/quality/keywordsets/{keywordSetId}

Get a keywordSet by id.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var keywordSetId = "keywordSetId_example"; // String | KeywordSet ID

apiInstance.getQualityKeywordset(keywordSetId)
  .then(function(data) {
    console.log(`getQualityKeywordset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityKeywordset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **keywordSetId** | **String** | KeywordSet ID |  |
{: class="table table-striped"}

### Return type

**KeywordSet**

<a name="getQualityKeywordsets"></a>

# [**KeywordSetEntityListing**](KeywordSetEntityListing.html) getQualityKeywordsets(opts)

GET /api/v2/quality/keywordsets

Get the list of keyword sets



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': null, // [Object] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'name': "name_example", // String | the keyword set name - used for filtering results in searches.
  'queueId': "queueId_example", // String | the queue id - used for filtering results in searches.
  'agentId': "agentId_example", // String | the agent id - used for filtering results in searches.
  'operator': "operator_example" // String | If agentID and queueId are both present, this determines whether the query is an AND or OR between those parameters.
};
apiInstance.getQualityKeywordsets(opts)
  .then(function(data) {
    console.log(`getQualityKeywordsets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityKeywordsets');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[Object]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **name** | **String** | the keyword set name - used for filtering results in searches. | [optional]  |
 **queueId** | **String** | the queue id - used for filtering results in searches. | [optional]  |
 **agentId** | **String** | the agent id - used for filtering results in searches. | [optional]  |
 **operator** | **String** | If agentID and queueId are both present, this determines whether the query is an AND or OR between those parameters. | [optional] <br />**Values**: AND, OR |
{: class="table table-striped"}

### Return type

**KeywordSetEntityListing**

<a name="getQualityPublishedform"></a>

# [**EvaluationForm**](EvaluationForm.html) getQualityPublishedform(formId)

GET /api/v2/quality/publishedforms/{formId}

Get the published evaluation forms.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var formId = "formId_example"; // String | Form ID

apiInstance.getQualityPublishedform(formId)
  .then(function(data) {
    console.log(`getQualityPublishedform success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityPublishedform');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
{: class="table table-striped"}

### Return type

**EvaluationForm**

<a name="getQualityPublishedforms"></a>

# [**EvaluationFormEntityListing**](EvaluationFormEntityListing.html) getQualityPublishedforms(opts)

GET /api/v2/quality/publishedforms

Get the published evaluation forms.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'name': "name_example" // String | Name
};
apiInstance.getQualityPublishedforms(opts)
  .then(function(data) {
    console.log(`getQualityPublishedforms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getQualityPublishedforms');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **name** | **String** | Name | [optional]  |
{: class="table table-striped"}

### Return type

**EvaluationFormEntityListing**

<a name="postAnalyticsEvaluationsAggregatesQuery"></a>

# [**AggregateQueryResponse**](AggregateQueryResponse.html) postAnalyticsEvaluationsAggregatesQuery(body)

POST /api/v2/analytics/evaluations/aggregates/query

Query for evaluation aggregates



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var body = new platformClient.AggregationQuery(); // AggregationQuery | query

apiInstance.postAnalyticsEvaluationsAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsEvaluationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsEvaluationsAggregatesQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **AggregationQuery** | query |  |
{: class="table table-striped"}

### Return type

**AggregateQueryResponse**

<a name="postQualityCalibrations"></a>

# [**Calibration**](Calibration.html) postQualityCalibrations(body, opts)

POST /api/v2/quality/calibrations

Create a calibration



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var body = new platformClient.CalibrationCreate(); // CalibrationCreate | calibration

var opts = { 
  'expand': "expand_example" // String | calibratorId
};
apiInstance.postQualityCalibrations(body, opts)
  .then(function(data) {
    console.log(`postQualityCalibrations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postQualityCalibrations');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **CalibrationCreate** | calibration |  |
 **expand** | **String** | calibratorId | [optional]  |
{: class="table table-striped"}

### Return type

**Calibration**

<a name="postQualityConversationEvaluations"></a>

# [**Evaluation**](Evaluation.html) postQualityConversationEvaluations(conversationId, body, opts)

POST /api/v2/quality/conversations/{conversationId}/evaluations

Create an evaluation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.Evaluation(); // Evaluation | evaluation

var opts = { 
  'expand': "expand_example" // String | evaluatorId
};
apiInstance.postQualityConversationEvaluations(conversationId, body, opts)
  .then(function(data) {
    console.log(`postQualityConversationEvaluations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postQualityConversationEvaluations');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Evaluation** | evaluation |  |
 **expand** | **String** | evaluatorId | [optional]  |
{: class="table table-striped"}

### Return type

**Evaluation**

<a name="postQualityEvaluationsScoring"></a>

# [**EvaluationScoringSet**](EvaluationScoringSet.html) postQualityEvaluationsScoring(body)

POST /api/v2/quality/evaluations/scoring

Score evaluation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var body = new platformClient.EvaluationFormAndScoringSet(); // EvaluationFormAndScoringSet | evaluationAndScoringSet

apiInstance.postQualityEvaluationsScoring(body)
  .then(function(data) {
    console.log(`postQualityEvaluationsScoring success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postQualityEvaluationsScoring');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **EvaluationFormAndScoringSet** | evaluationAndScoringSet |  |
{: class="table table-striped"}

### Return type

**EvaluationScoringSet**

<a name="postQualityForms"></a>

# [**EvaluationForm**](EvaluationForm.html) postQualityForms(body)

POST /api/v2/quality/forms

Create an evaluation form.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var body = new platformClient.EvaluationForm(); // EvaluationForm | Evaluation form

apiInstance.postQualityForms(body)
  .then(function(data) {
    console.log(`postQualityForms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postQualityForms');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **EvaluationForm** | Evaluation form |  |
{: class="table table-striped"}

### Return type

**EvaluationForm**

<a name="postQualityKeywordsets"></a>

# [**KeywordSet**](KeywordSet.html) postQualityKeywordsets(body, opts)

POST /api/v2/quality/keywordsets

Create a Keyword Set



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var body = new platformClient.KeywordSet(); // KeywordSet | keywordSet

var opts = { 
  'expand': "expand_example" // String | queueId
};
apiInstance.postQualityKeywordsets(body, opts)
  .then(function(data) {
    console.log(`postQualityKeywordsets success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postQualityKeywordsets');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **KeywordSet** | keywordSet |  |
 **expand** | **String** | queueId | [optional]  |
{: class="table table-striped"}

### Return type

**KeywordSet**

<a name="postQualityPublishedforms"></a>

# [**EvaluationForm**](EvaluationForm.html) postQualityPublishedforms(body)

POST /api/v2/quality/publishedforms

Publish an evaluation form.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var body = new platformClient.EvaluationForm(); // EvaluationForm | Evaluation form

apiInstance.postQualityPublishedforms(body)
  .then(function(data) {
    console.log(`postQualityPublishedforms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postQualityPublishedforms');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **EvaluationForm** | Evaluation form |  |
{: class="table table-striped"}

### Return type

**EvaluationForm**

<a name="postQualitySpotability"></a>

# [**KeywordSet**](KeywordSet.html) postQualitySpotability(opts)

POST /api/v2/quality/spotability

Retrieve the spotability statistic



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var opts = { 
  'body': new platformClient.KeywordSet() // KeywordSet | Keyword Set
};
apiInstance.postQualitySpotability(opts)
  .then(function(data) {
    console.log(`postQualitySpotability success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postQualitySpotability');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **KeywordSet** | Keyword Set | [optional]  |
{: class="table table-striped"}

### Return type

**KeywordSet**

<a name="putQualityCalibration"></a>

# [**Calibration**](Calibration.html) putQualityCalibration(calibrationId, body)

PUT /api/v2/quality/calibrations/{calibrationId}

Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var calibrationId = "calibrationId_example"; // String | Calibration ID

var body = new platformClient.Calibration(); // Calibration | Calibration

apiInstance.putQualityCalibration(calibrationId, body)
  .then(function(data) {
    console.log(`putQualityCalibration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putQualityCalibration');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **calibrationId** | **String** | Calibration ID |  |
 **body** | **Calibration** | Calibration |  |
{: class="table table-striped"}

### Return type

**Calibration**

<a name="putQualityConversationEvaluation"></a>

# [**Evaluation**](Evaluation.html) putQualityConversationEvaluation(conversationId, evaluationId, body, opts)

PUT /api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}

Update an evaluation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var conversationId = "conversationId_example"; // String | conversationId

var evaluationId = "evaluationId_example"; // String | evaluationId

var body = new platformClient.Evaluation(); // Evaluation | evaluation

var opts = { 
  'expand': "expand_example" // String | evaluatorId
};
apiInstance.putQualityConversationEvaluation(conversationId, evaluationId, body, opts)
  .then(function(data) {
    console.log(`putQualityConversationEvaluation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putQualityConversationEvaluation');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **evaluationId** | **String** | evaluationId |  |
 **body** | **Evaluation** | evaluation |  |
 **expand** | **String** | evaluatorId | [optional]  |
{: class="table table-striped"}

### Return type

**Evaluation**

<a name="putQualityForm"></a>

# [**EvaluationForm**](EvaluationForm.html) putQualityForm(formId, body)

PUT /api/v2/quality/forms/{formId}

Update an evaluation form.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var formId = "formId_example"; // String | Form ID

var body = new platformClient.EvaluationForm(); // EvaluationForm | Evaluation form

apiInstance.putQualityForm(formId, body)
  .then(function(data) {
    console.log(`putQualityForm success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putQualityForm');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **formId** | **String** | Form ID |  |
 **body** | **EvaluationForm** | Evaluation form |  |
{: class="table table-striped"}

### Return type

**EvaluationForm**

<a name="putQualityKeywordset"></a>

# [**KeywordSet**](KeywordSet.html) putQualityKeywordset(keywordSetId, body)

PUT /api/v2/quality/keywordsets/{keywordSetId}

Update a keywordSet to the specified keywordSet via PUT.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.QualityApi();

var keywordSetId = "keywordSetId_example"; // String | KeywordSet ID

var body = new platformClient.KeywordSet(); // KeywordSet | keywordSet

apiInstance.putQualityKeywordset(keywordSetId, body)
  .then(function(data) {
    console.log(`putQualityKeywordset success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putQualityKeywordset');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **keywordSetId** | **String** | KeywordSet ID |  |
 **body** | **KeywordSet** | keywordSet |  |
{: class="table table-striped"}

### Return type

**KeywordSet**

