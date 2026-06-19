app_name = "a2z_designs"
app_title = "New Design for a2z"
app_publisher = "a2z"
app_description = "New Design for a2z"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info@a2z.com"
app_license = "MIT"
app_logo_url = "/assets/a2z_designs/images/tech4all-logo.svg"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = "a2z_designs.bundle.css"
app_include_js = "a2z_designs.bundle.js"

# include js, css files in header of web template
# web_include_css = "/assets/a2z_designs/css/a2z_designs.css"
# web_include_js = "/assets/a2z_designs/js/a2z_designs.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "a2z_designs/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

website_context = {
	"favicon": "/assets/a2z_designs/images/a2z_innovations_logo.svg",
	"splash_image": "/assets/a2z_designs/images/tech4all-logo.svg",
}
# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "a2z_designs.install.before_install"
# after_install = "a2z_designs.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "a2z_designs.uninstall.before_uninstall"
# after_uninstall = "a2z_designs.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "a2z_designs.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"a2z_designs.tasks.all"
# 	],
# 	"daily": [
# 		"a2z_designs.tasks.daily"
# 	],
# 	"hourly": [
# 		"a2z_designs.tasks.hourly"
# 	],
# 	"weekly": [
# 		"a2z_designs.tasks.weekly"
# 	]
# 	"monthly": [
# 		"a2z_designs.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "a2z_designs.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "a2z_designs.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other frappe apps
# override_doctype_dashboards = {
# 	"Task": "a2z_designs.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

user_data_fields = [
    {
        "doctype": "{doctype_1}",
        "filter_by": "{filter_by}",
        "redact_fields": ["{field_1}", "{field_2}"],
        "partial": 1,
    },
    {
        "doctype": "{doctype_2}",
        "filter_by": "{filter_by}",
        "partial": 1,
    },
    {
        "doctype": "{doctype_3}",
        "strict": False,
    },
    {
        "doctype": "{doctype_4}"
    }
]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"a2z_designs.auth.validate"
# ]

# Translation
# --------------------------------

# Make link fields search translated document names for these DocTypes
# Recommended only for DocTypes which have limited documents with untranslated names
# For example: Role, Gender, etc.
# translated_search_doctypes = []
