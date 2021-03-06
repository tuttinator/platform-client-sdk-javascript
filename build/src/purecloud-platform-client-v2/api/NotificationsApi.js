(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.NotificationsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Notifications service.
   * @module purecloud-platform-client-v2/api/NotificationsApi
   * @version 7.0.0
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:purecloud-platform-client-v2/api/NotificationsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Remove all subscriptions
     * 
     * @param {String} channelId Channel ID
     */
    this.deleteNotificationsChannelSubscriptions = function(channelId) { 

      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw "Missing the required parameter 'channelId' when calling deleteNotificationsChannelSubscriptions";
      }


      return this.apiClient.callApi(
        '/api/v2/notifications/channels/{channelId}/subscriptions', 
        'DELETE', 
        { 'channelId': channelId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get available notification topics.
     * 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getNotificationsAvailabletopics = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/notifications/availabletopics', 
        'GET', 
        {  }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of all subscriptions for this channel
     * 
     * @param {String} channelId Channel ID
     */
    this.getNotificationsChannelSubscriptions = function(channelId) { 

      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw "Missing the required parameter 'channelId' when calling getNotificationsChannelSubscriptions";
      }


      return this.apiClient.callApi(
        '/api/v2/notifications/channels/{channelId}/subscriptions', 
        'GET', 
        { 'channelId': channelId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * The list of existing channels
     * 
     */
    this.getNotificationsChannels = function() { 


      return this.apiClient.callApi(
        '/api/v2/notifications/channels', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a list of subscriptions to the existing list of subscriptions
     * 
     * @param {String} channelId Channel ID
     * @param {Array.<module:purecloud-platform-client-v2/model/ChannelTopic>} body Body
     */
    this.postNotificationsChannelSubscriptions = function(channelId, body) { 

      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw "Missing the required parameter 'channelId' when calling postNotificationsChannelSubscriptions";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postNotificationsChannelSubscriptions";
      }


      return this.apiClient.callApi(
        '/api/v2/notifications/channels/{channelId}/subscriptions', 
        'POST', 
        { 'channelId': channelId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new channel
     * There is a limit of 10 channels. Creating an 11th channel will remove the channel with oldest last used date.
     */
    this.postNotificationsChannels = function() { 


      return this.apiClient.callApi(
        '/api/v2/notifications/channels', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Replace the current list of subscriptions with a new list.
     * 
     * @param {String} channelId Channel ID
     * @param {Array.<module:purecloud-platform-client-v2/model/ChannelTopic>} body Body
     */
    this.putNotificationsChannelSubscriptions = function(channelId, body) { 

      // verify the required parameter 'channelId' is set
      if (channelId === undefined || channelId === null) {
        throw "Missing the required parameter 'channelId' when calling putNotificationsChannelSubscriptions";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putNotificationsChannelSubscriptions";
      }


      return this.apiClient.callApi(
        '/api/v2/notifications/channels/{channelId}/subscriptions', 
        'PUT', 
        { 'channelId': channelId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));
