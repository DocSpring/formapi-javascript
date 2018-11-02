# FormAPI.CreateSubmissionDataRequestData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Object** |  | [optional] 
**authType** | **String** |  | [optional] 
**authSecondFactorType** | **String** |  | [optional] 
**authPhoneNumberHash** | **String** |  | [optional] 
**authSessionStartedAt** | **String** |  | [optional] 
**authUserIdHash** | **String** |  | [optional] 
**authSessionIdHash** | **String** |  | [optional] 
**authUsernameHash** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**fields** | **[String]** |  | [optional] 
**email** | **String** |  | [optional] 
**authProvider** | **String** |  | [optional] 
**order** | **Number** |  | [optional] 


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




