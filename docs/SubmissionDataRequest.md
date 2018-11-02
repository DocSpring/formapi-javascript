# FormAPI.SubmissionDataRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**email** | **String** |  | 
**order** | **Number** |  | 
**fields** | **[String]** |  | 
**metadata** | **Object** |  | 
**state** | **String** |  | 
**viewedAt** | **String** |  | [optional] 
**completedAt** | **String** |  | [optional] 
**authType** | **String** |  | [optional] 
**authSecondFactorType** | **String** |  | [optional] 
**authProvider** | **String** |  | [optional] 
**authSessionStartedAt** | **String** |  | [optional] 
**authSessionIdHash** | **String** |  | [optional] 
**authUserIdHash** | **String** |  | [optional] 
**authUsernameHash** | **String** |  | [optional] 
**authPhoneNumberHash** | **String** |  | [optional] 


<a name="StateEnum"></a>
## Enum: StateEnum


* `pending` (value: `"pending"`)

* `completed` (value: `"completed"`)




<a name="AuthTypeEnum"></a>
## Enum: AuthTypeEnum


* `none` (value: `"none"`)

* `password` (value: `"password"`)

* `oauth` (value: `"oauth"`)

* `email_link` (value: `"email_link"`)

* `phone_number` (value: `"phone_number"`)

* `ldap` (value: `"ldap"`)

* `saml` (value: `"saml"`)




<a name="AuthSecondFactorTypeEnum"></a>
## Enum: AuthSecondFactorTypeEnum


* `none` (value: `"none"`)

* `phone_number` (value: `"phone_number"`)

* `totp` (value: `"totp"`)

* `mobile_push` (value: `"mobile_push"`)

* `security_key` (value: `"security_key"`)

* `fingerprint` (value: `"fingerprint"`)




