/**
 * API v1
 * FormAPI is a service that helps you fill out and sign PDF templates.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FormAPI);
  }
}(this, function(expect, FormAPI) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FormAPI.CreateCombinedSubmissionResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CreateCombinedSubmissionResponse', function() {
    it('should create an instance of CreateCombinedSubmissionResponse', function() {
      // uncomment below and update the code to test CreateCombinedSubmissionResponse
      //var instance = new FormAPI.CreateCombinedSubmissionResponse();
      //expect(instance).to.be.a(FormAPI.CreateCombinedSubmissionResponse);
    });

    it('should have the property combinedSubmission (base name: "combined_submission")', function() {
      // uncomment below and update the code to test the property combinedSubmission
      //var instance = new FormAPI.CreateCombinedSubmissionResponse();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new FormAPI.CreateCombinedSubmissionResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FormAPI.CreateCombinedSubmissionResponse();
      //expect(instance).to.be();
    });

  });

}));
