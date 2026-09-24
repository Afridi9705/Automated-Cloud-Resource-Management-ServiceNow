(function executeRule(current, previous /*null when async*/) {

    var grRequest = new GlideRecord('x_2062699_automa_0_cloud_resource_request');

    grRequest.addQuery('requested_by', current.requested_by);
    grRequest.addQuery('resource_type', current.resource_type);
    grRequest.addQuery('environment', current.environment);
    grRequest.query();

    if (grRequest.hasNext()) {
        gs.addErrorMessage(
            "You already have an existing request for this specific Resource Type and Environment."
        );

        current.setAbortAction(true);
    }

})(current, previous);
