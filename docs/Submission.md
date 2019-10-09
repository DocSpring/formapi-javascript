# FormAPI.Submission

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**templateId** | **String** |  | [optional] 
**test** | **Boolean** |  | 
**editable** | **Boolean** |  | [optional] 
**expired** | **Boolean** |  | 
**expiresAt** | **String** |  | [optional] 
**processedAt** | **String** |  | [optional] 
**state** | **String** |  | 
**metadata** | **Object** |  | [optional] 
**downloadUrl** | **String** |  | [optional] 
**permanentDownloadUrl** | **String** |  | [optional] 
**batchId** | **String** |  | [optional] 
**dataRequests** | [**[SubmissionDataRequest]**](SubmissionDataRequest.md) |  | [optional] 
**actions** | [**[SubmissionAction]**](SubmissionAction.md) |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `pending` (value: `"pending"`)

* `processed` (value: `"processed"`)

* `invalid_data` (value: `"invalid_data"`)

* `error` (value: `"error"`)

* `image_download_failed` (value: `"image_download_failed"`)

* `image_processing_failed` (value: `"image_processing_failed"`)

* `waiting_for_data_requests` (value: `"waiting_for_data_requests"`)

* `syntax_error` (value: `"syntax_error"`)

* `account_suspended` (value: `"account_suspended"`)

* `license_revoked` (value: `"license_revoked"`)




