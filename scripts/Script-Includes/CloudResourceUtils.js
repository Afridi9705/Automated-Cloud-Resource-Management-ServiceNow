var CloudResourceUtils = Class.create();

CloudResourceUtils.prototype = {

    initialize: function() {
    },

    generateResourceName: function(resourceType, requestNumber) {
        return resourceType + '-' + requestNumber;
    },

    type: 'CloudResourceUtils'
};
