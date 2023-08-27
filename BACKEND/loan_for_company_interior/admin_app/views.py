from rest_framework import viewsets
from .serializers import UserSerializer,DefaulterSerializer
from .models import User,Defaulter
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.filters import SearchFilter
class UserView(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()
    # authentication_classes=[JWTAuthentication]
    # permission_classes = [IsAuthenticated]
    
class UserViewFilter(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    filter_backends=[SearchFilter]
    search_fields=["^role"]


class DefaulterView(viewsets.ModelViewSet):
    serializer_class = DefaulterSerializer
    queryset = Defaulter.objects.all()

# class LogoutView(APIView):
#      permission_classes = (IsAuthenticated,)
#      def post(self, request):
          
#           try:
#                refresh_token = request.data["refresh_token"]
#                token = RefreshToken(refresh_token)
#                token.blacklist()
#                return Response(status=status.HTTP_205_RESET_CONTENT)
#           except Exception as e:
#                return Response(status=status.HTTP_400_BAD_REQUEST)