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
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Templatesv2Template'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Templatesv2Template'));
  } else {
    // Browser globals (root is window)
    if (!root.FormAPI) {
      root.FormAPI = {};
    }
    root.FormAPI.CreateTemplateData = factory(root.FormAPI.ApiClient, root.FormAPI.Templatesv2Template);
  }
}(this, function(ApiClient, Templatesv2Template) {
  'use strict';




  /**
   * The CreateTemplateData model module.
   * @module model/CreateTemplateData
   * @version 2.7.0
   */

  /**
   * Constructs a new <code>CreateTemplateData</code>.
   * @alias module:model/CreateTemplateData
   * @class
   * @param template {module:model/Templatesv2Template} 
   */
  var exports = function(template) {
    var _this = this;

    _this['template'] = template;
  };

  /**
   * Constructs a <code>CreateTemplateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTemplateData} obj Optional instance to populate.
   * @return {module:model/CreateTemplateData} The populated <code>CreateTemplateData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('template')) {
        obj['template'] = Templatesv2Template.constructFromObject(data['template']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Templatesv2Template} template
   */
  exports.prototype['template'] = undefined;



  return exports;
}));


