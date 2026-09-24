var CloudUserAjax = Class.create();
CloudUserAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getUserEmail: function() {

        var userId = this.getParameter('sysparm_user_id');

        var grUser = new GlideRecord('sys_user');

        if (grUser.get(userId)) {
            return grUser.email.toString();
        }

        return 'No email found';
    },

    type: 'CloudUserAjax'
});
