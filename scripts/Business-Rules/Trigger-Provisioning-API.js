(function executeRule(current, previous /*null when async*/) {

    try {

        var r = new sn_ws.RESTMessageV2(
            'x_2062699_automa_0.AWS Resource Provisioning',
            'Provision Resource POST'
        );

        r.setStringParameterNoEscape('number', current.number.toString());
        r.setStringParameterNoEscape('resource_type', current.resource_type.toString());
        r.setStringParameterNoEscape('environment', current.environment.toString());
        r.setStringParameterNoEscape('requested_by', current.requested_by.getDisplayValue());

        var response = r.execute();
        var httpStatus = response.getStatusCode();

        if (httpStatus == 200 || httpStatus == 201) {
            gs.info(
                'Provisioning API triggered successfully for ' +
                current.number +
                '. HTTP Status: ' +
                httpStatus
            );
        } else {
            gs.error(
                'Provisioning API failed for ' +
                current.number +
                '. HTTP Status: ' +
                httpStatus +
                '. Response: ' +
                response.getBody()
            );
        }

        gs.info(
            'Provisioning API triggered for ' +
            current.number +
            '. HTTP Status: ' +
            httpStatus
        );

    } catch (ex) {
        gs.error('Provisioning API Error: ' + ex.message);
    }

})(current, previous);
