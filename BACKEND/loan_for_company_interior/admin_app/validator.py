# import os 
# from django.core.exceptions import ValidationError


# def file_extention(value):
#     ext = os.path.splitext(value.name)[1]
#     valid_extentions = ['.jpg','.png','.jpeg']
#     if not ext.lower() in valid_extentions:
#         raise ValidationError('Unsupported File Extension.Give in .jpg or .png or .jpeg')
#     return value


# def file_size(value):
#     limit =1*1024
#     if value.size > limit:
#         raise ValidationError('File Too Large. Size Should Be less Than 2 Mb')
#     return value



    