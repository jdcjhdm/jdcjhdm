from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=120)
    # image = models.FileField()
    # deadline = models.IntegerField()

    def __str__(self):
        return self.title
