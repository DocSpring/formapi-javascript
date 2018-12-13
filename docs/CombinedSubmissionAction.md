# FormAPI.CombinedSubmissionAction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**integrationId** | **String** |  | 
**state** | **String** |  | 
**actionCategory** | **String** |  | 
**actionType** | **String** |  | 
**resultData** | **Object** |  | 


<a name="StateEnum"></a>
## Enum: StateEnum


* `pending` (value: `"pending"`)

* `processed` (value: `"processed"`)

* `failed` (value: `"failed"`)

* `error` (value: `"error"`)




<a name="ActionCategoryEnum"></a>
## Enum: ActionCategoryEnum


* `notification` (value: `"notification"`)

* `file_upload` (value: `"file_upload"`)




<a name="ActionTypeEnum"></a>
## Enum: ActionTypeEnum


* `webhook` (value: `"webhook"`)

* `slack_webhook` (value: `"slack_webhook"`)

* `email` (value: `"email"`)

* `aws_s3_upload` (value: `"aws_s3_upload"`)




