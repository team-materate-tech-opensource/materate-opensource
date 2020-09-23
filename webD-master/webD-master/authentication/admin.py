from django.contrib import admin
from .models import User, Student, School
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

admin.site.register(User, CustomUserAdmin)

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    search_fields = ('user__username','name','standard','email')

admin.site.register(School)
