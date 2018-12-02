# FormAPI.PDFApi

All URIs are relative to *https://app.formapi.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchGeneratePdfV1**](PDFApi.md#batchGeneratePdfV1) | **POST** /templates/{template_id}/submissions/batch | Generates multiple PDFs
[**batchGeneratePdfs**](PDFApi.md#batchGeneratePdfs) | **POST** /submissions/batches | Generates multiple PDFs
[**combineSubmissions**](PDFApi.md#combineSubmissions) | **POST** /combined_submissions | Merge generated PDFs together
[**createDataRequestToken**](PDFApi.md#createDataRequestToken) | **POST** /data_requests/{data_request_id}/tokens | Creates a new data request token for form authentication
[**createTemplate**](PDFApi.md#createTemplate) | **POST** /templates | Upload a new PDF template
[**expireCombinedSubmission**](PDFApi.md#expireCombinedSubmission) | **DELETE** /combined_submissions/{combined_submission_id} | Expire a combined submission
[**expireSubmission**](PDFApi.md#expireSubmission) | **DELETE** /submissions/{submission_id} | Expire a PDF submission
[**generatePDF**](PDFApi.md#generatePDF) | **POST** /templates/{template_id}/submissions | Generates a new PDF
[**getCombinedSubmission**](PDFApi.md#getCombinedSubmission) | **GET** /combined_submissions/{combined_submission_id} | Check the status of a combined submission (merged PDFs)
[**getDataRequest**](PDFApi.md#getDataRequest) | **GET** /data_requests/{data_request_id} | Look up a submission data request
[**getSubmission**](PDFApi.md#getSubmission) | **GET** /submissions/{submission_id} | Check the status of a PDF
[**getSubmissionBatch**](PDFApi.md#getSubmissionBatch) | **GET** /submissions/batches/{submission_batch_id} | Check the status of a submission batch job
[**getTemplate**](PDFApi.md#getTemplate) | **GET** /templates/{template_id} | Check the status of an uploaded template
[**getTemplateSchema**](PDFApi.md#getTemplateSchema) | **GET** /templates/{template_id}/schema | Fetch the JSON schema for a template
[**getTemplates**](PDFApi.md#getTemplates) | **GET** /templates | Get a list of all templates
[**testAuthentication**](PDFApi.md#testAuthentication) | **GET** /authentication | Test Authentication
[**updateDataRequest**](PDFApi.md#updateDataRequest) | **PUT** /data_requests/{data_request_id} | Update a submission data request


<a name="batchGeneratePdfV1"></a>
# **batchGeneratePdfV1**
> [CreateSubmissionResponse] batchGeneratePdfV1(templateId, createSubmissionDataBatchV1)

Generates multiple PDFs

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var createSubmissionDataBatchV1 = [new FormAPI.CreateSubmissionDataBatchV1()]; // [CreateSubmissionDataBatchV1] | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.batchGeneratePdfV1(templateId, createSubmissionDataBatchV1, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 
 **createSubmissionDataBatchV1** | [**[CreateSubmissionDataBatchV1]**](Array.md)|  | 

### Return type

[**[CreateSubmissionResponse]**](CreateSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="batchGeneratePdfs"></a>
# **batchGeneratePdfs**
> CreateSubmissionBatchResponse batchGeneratePdfs(submissionBatchData)

Generates multiple PDFs

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var submissionBatchData = new FormAPI.SubmissionBatchData(); // SubmissionBatchData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.batchGeneratePdfs(submissionBatchData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionBatchData** | [**SubmissionBatchData**](SubmissionBatchData.md)|  | 

### Return type

[**CreateSubmissionBatchResponse**](CreateSubmissionBatchResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="combineSubmissions"></a>
# **combineSubmissions**
> CreateCombinedSubmissionResponse combineSubmissions(combinedSubmissionData)

Merge generated PDFs together

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var combinedSubmissionData = new FormAPI.CombinedSubmissionData(); // CombinedSubmissionData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.combineSubmissions(combinedSubmissionData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinedSubmissionData** | [**CombinedSubmissionData**](CombinedSubmissionData.md)|  | 

### Return type

[**CreateCombinedSubmissionResponse**](CreateCombinedSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createDataRequestToken"></a>
# **createDataRequestToken**
> CreateSubmissionDataRequestTokenResponse createDataRequestToken(dataRequestId)

Creates a new data request token for form authentication

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var dataRequestId = drq_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDataRequestToken(dataRequestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequestId** | **String**|  | 

### Return type

[**CreateSubmissionDataRequestTokenResponse**](CreateSubmissionDataRequestTokenResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createTemplate"></a>
# **createTemplate**
> Template1 createTemplate(templateDocument, templateName)

Upload a new PDF template

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var templateDocument = "/path/to/file"; // File | 
var templateName = "templateName_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTemplate(templateDocument, templateName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateDocument** | **File**|  | 
 **templateName** | **String**|  | 

### Return type

[**Template1**](Template1.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="expireCombinedSubmission"></a>
# **expireCombinedSubmission**
> CombinedSubmission expireCombinedSubmission(combinedSubmissionId)

Expire a combined submission

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var combinedSubmissionId = com_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.expireCombinedSubmission(combinedSubmissionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinedSubmissionId** | **String**|  | 

### Return type

[**CombinedSubmission**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="expireSubmission"></a>
# **expireSubmission**
> Submission expireSubmission(submissionId)

Expire a PDF submission

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var submissionId = sub_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.expireSubmission(submissionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | **String**|  | 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="generatePDF"></a>
# **generatePDF**
> CreateSubmissionResponse generatePDF(templateId, createSubmissionData)

Generates a new PDF

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var createSubmissionData = new FormAPI.CreateSubmissionData(); // CreateSubmissionData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generatePDF(templateId, createSubmissionData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 
 **createSubmissionData** | [**CreateSubmissionData**](CreateSubmissionData.md)|  | 

### Return type

[**CreateSubmissionResponse**](CreateSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCombinedSubmission"></a>
# **getCombinedSubmission**
> CombinedSubmission getCombinedSubmission(combinedSubmissionId)

Check the status of a combined submission (merged PDFs)

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var combinedSubmissionId = com_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCombinedSubmission(combinedSubmissionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combinedSubmissionId** | **String**|  | 

### Return type

[**CombinedSubmission**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDataRequest"></a>
# **getDataRequest**
> SubmissionDataRequest getDataRequest(dataRequestId)

Look up a submission data request

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var dataRequestId = drq_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDataRequest(dataRequestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequestId** | **String**|  | 

### Return type

[**SubmissionDataRequest**](SubmissionDataRequest.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSubmission"></a>
# **getSubmission**
> Submission getSubmission(submissionId)

Check the status of a PDF

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var submissionId = sub_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubmission(submissionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionId** | **String**|  | 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSubmissionBatch"></a>
# **getSubmissionBatch**
> SubmissionBatch getSubmissionBatch(submissionBatchId, opts)

Check the status of a submission batch job

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var submissionBatchId = sba_000000000000000001; // String | 
var opts = {
  'includeSubmissions': true // Boolean | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubmissionBatch(submissionBatchId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submissionBatchId** | **String**|  | 
 **includeSubmissions** | **Boolean**|  | [optional] 

### Return type

[**SubmissionBatch**](SubmissionBatch.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTemplate"></a>
# **getTemplate**
> Template getTemplate(templateId)

Check the status of an uploaded template

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplate(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTemplateSchema"></a>
# **getTemplateSchema**
> {String: Object} getTemplateSchema(templateId)

Fetch the JSON schema for a template

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var templateId = tpl_000000000000000001; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplateSchema(templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**|  | 

### Return type

**{String: Object}**

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTemplates"></a>
# **getTemplates**
> [Template] getTemplates(opts)

Get a list of all templates

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var opts = {
  'page': 2, // Number | Default: 1
  'perPage': 1 // Number | Default: 50
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTemplates(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Default: 1 | [optional] 
 **perPage** | **Number**| Default: 50 | [optional] 

### Return type

[**[Template]**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testAuthentication"></a>
# **testAuthentication**
> AuthenticationSuccessResponse testAuthentication()

Test Authentication

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testAuthentication(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AuthenticationSuccessResponse**](AuthenticationSuccessResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDataRequest"></a>
# **updateDataRequest**
> UpdateDataRequestResponse updateDataRequest(dataRequestId, updateSubmissionDataRequestData)

Update a submission data request

### Example
```javascript
var FormAPI = require('formapi');
var defaultClient = FormAPI.ApiClient.instance;

// Configure HTTP basic authorization: api_token_basic
var api_token_basic = defaultClient.authentications['api_token_basic'];
api_token_basic.username = 'YOUR USERNAME';
api_token_basic.password = 'YOUR PASSWORD';

var apiInstance = new FormAPI.PDFApi();
var dataRequestId = drq_000000000000000001; // String | 
var updateSubmissionDataRequestData = new FormAPI.UpdateSubmissionDataRequestData(); // UpdateSubmissionDataRequestData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDataRequest(dataRequestId, updateSubmissionDataRequestData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataRequestId** | **String**|  | 
 **updateSubmissionDataRequestData** | [**UpdateSubmissionDataRequestData**](UpdateSubmissionDataRequestData.md)|  | 

### Return type

[**UpdateDataRequestResponse**](UpdateDataRequestResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

