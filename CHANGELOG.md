### 2.14.0 [November 6, 2019]

- Added status polling wrapper for combinePdfs, so that it returns a processed PDF by default

### 2.13.0 [October 10, 2019]

- Add permanent_download_url attribute to Submission model

### 2.12.0 [October 9, 2019]

- Add parent folder ID and path params to GET template response
- Add parent folder ID param when creating a new template, so you can upload a template into a folder

### 2.11.0 [July 31, 2019]
* Added Create Folder, List Folder, Move to Folder endpoints

### 2.10.0 [June 22, 2019]

- **BREAKING CHANGE** Renamed "Get Templates" endpoint to "List Templates". Added a search query parameter.

### 2.9.0 [April 11, 2019]

- Added support for editable PDFS (editable: true)

### 2.6.0 [December 23, 2018]

- Added CustomFiles, and combinePdf call to support many different types of source PDFs. Renamed a few models

### 2.5.0 [December 18, 2018]

- Updated API host to api.formapi.io

### 2.4.0 [December 13, 2018]

- Fix model name for newly created Templates (PendingTemplate)
- Added "actions" to submission and combined_submission responses. Includes information about custom S3 uploads

### 2.3.0 [December 1, 2018]

- Added Create Template, Get Template, and Get Template Schema endpoints

### 2.2.0 [November 4, 2018]

- Initial changelog
