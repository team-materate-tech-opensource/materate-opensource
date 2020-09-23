from django.db import models
from django.contrib.auth.models import AbstractUser

from .constants import *

class User(AbstractUser):
    """
    Extended UserModel.
    Extra Field that are required for the User Model
    are added here.
    Any changes here should also be reflected in admin.ADDITIONAL_FIELDS
    so they can appear on the admin panel
    """
    has_changed_username = models.BooleanField(default=False,verbose_name="Has changed username?")
    last_login = models.DateTimeField(verbose_name="Last Logged in", blank=True, null=True)
    role = models.SmallIntegerField(
        choices=USER_ROLES, 
        null = True,
        verbose_name="User Role", 
        help_text="""
        This is an integer field, each role is assigned a specific integer: <br>
        <b>0 </b> for Students <br />
        <b>1 </b> for Teachers <br />
        <b>2 </b> for Principals <br />
        """
    )


class School(models.Model):
    created_by = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=50, verbose_name="Name")
    location = models.TextField(max_length=150, blank=True, verbose_name="Location")

    def __unicode__(self):
        return self.name
    
    def __str__(self):
        return self.name+', '+self.location



class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=40, blank=True, verbose_name="Name")
    city = models.CharField(max_length=30, blank=True, verbose_name="City")
    school = models.ForeignKey(School, null=True, blank=True, on_delete=models.SET_NULL)
    standard = models.PositiveSmallIntegerField(choices=STUDENT_STD, null=True, blank=True, verbose_name="Class")
    email = models.EmailField(max_length=254, blank=True, verbose_name="Email")
    contact_no = models.CharField(max_length=20, blank=True, verbose_name="Contact No")
    guardian_name = models.CharField(max_length=40, blank=True, verbose_name="Parents/Guardian's Name")
    guardian_contact = models.CharField(max_length=20, blank=True, verbose_name="Parents/Guardian's Contact No")
    guardian_address = models.TextField(max_length=150, blank=True, verbose_name="Parents/Guardian's Address")


    def __unicode__(self):
        return self.name
    
    def __str__(self):
        return self.name

