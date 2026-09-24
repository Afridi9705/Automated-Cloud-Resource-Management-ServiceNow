function onChange(control, oldValue, newValue, isLoading, isTemplate) {

    if (isLoading || newValue == '') {
        return;
    }

    g_form.hideFieldMsg('environment');

    if (newValue == 'Production' || newValue == 'production') {
        g_form.showFieldMsg(
            'environment',
            'Warning: Production resources require strict manager approval.',
            'error'
        );
    }
}
