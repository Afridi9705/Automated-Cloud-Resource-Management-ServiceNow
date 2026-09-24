function onChange(control, oldValue, newValue, isLoading, isTemplate) {

    if (isLoading || newValue === '') {
        g_form.hideFieldMsg('requested_by');
        return;
    }

    var ga = new GlideAjax('CloudUserAjax');

    ga.addParam('sysparm_name', 'getUserEmail');
    ga.addParam('sysparm_user_id', newValue);

    ga.getXMLAnswer(function(response) {

        g_form.hideFieldMsg('requested_by');

        if (response !== 'No email found') {

            g_form.showFieldMsg(
                'requested_by',
                'Requester Email: ' + response,
                'info'
            );

        } else {

            g_form.showFieldMsg(
                'requested_by',
                'No email address found for this user.',
                'error'
            );
        }
    });
}
