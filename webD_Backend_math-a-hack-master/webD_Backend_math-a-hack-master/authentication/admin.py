from django.contrib import admin
from .models import User, Student, School, Contact, Subscriber
from django.contrib.auth.admin import UserAdmin

ADDITIONAL_FIELDS = (
        ("User Role", {
            "fields": (
                'role',
            ),
        }),
    )

OPTIONAL_FIELDS = (
        ("Changed Username Status", {
            "fields": (
                'has_changed_username',
            ),
        }),
)

class CustomUserAdmin(UserAdmin):
    model = User
    add_fieldsets = UserAdmin.add_fieldsets + ADDITIONAL_FIELDS
    fieldsets =  ADDITIONAL_FIELDS + UserAdmin.fieldsets + OPTIONAL_FIELDS
    list_display = ('username','role')
    date_hierarchy = 'date_joined'
    list_filter = ('role','is_active')

admin.site.register(User, CustomUserAdmin)

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    search_fields = ('user__username','name','standard','email','contact_no')
    list_display = ('username','name','standard','email','contact_no')

    def username(self, obj):
        return obj.user.username

    date_hierarchy = 'user__date_joined'

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    search_fields = ('name', 'email', 'phone', 'preffered_mode', 'message', 'time')
    list_display = ('name', 'email', 'phone', 'preffered_mode', 'message', 'time')

@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    search_fields = ('email', 'time'),
    list_display = ('email', 'time')