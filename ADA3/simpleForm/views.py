from django.http import HttpResponse
from django.template import Template, Context
from datetime import datetime

def home(request):
    nombre="AlejandroUcan"
    doc_externo=open('D:/Escuel/UADY/Optativas/FAW/ADAs/ADA3/simpleForm/simpleForm/plantillas/alumno_control.html')
    plt=Template(doc_externo.read())
    doc_externo.close()
    ctx=Context({"nombre_usuario": nombre})
    documento=plt.render(ctx)
    
    return HttpResponse(documento)

def registro(request):
    doc_externo=open('D:/Escuel/UADY/Optativas/FAW/ADAs/ADA3/simpleForm/simpleForm/plantillas/alumno_registro.html')
    plt=Template(doc_externo.read())
    doc_externo.close()
    ctx=Context()
    documento=plt.render(ctx)
    
    return HttpResponse(documento)

def registroProceso(request):
    fecha_nacimiento = request.GET["fecha_nacimiento"]
    dia_nacimiento = int(fecha_nacimiento[8:10])
    mes_nacimiento = int(fecha_nacimiento[5:7])
    anio_nacimiento = int(fecha_nacimiento[0:4])

    nacimiento = datetime(anio_nacimiento, mes_nacimiento, dia_nacimiento, 10, 35, 00, 00000)
    hoy = datetime.now()
    diferencia = hoy - nacimiento

    doc_externo=open('D:/Escuel/UADY/Optativas/FAW/ADAs/ADA3/simpleForm/simpleForm/plantillas/alumno_datos.html')
    plt=Template(doc_externo.read())
    doc_externo.close()
    ctx=Context({"matricula": request.GET["matricula"], "nombre": request.GET["nombre"], "procedencia": request.GET["procedencia"], "diferencia": diferencia})
    documento=plt.render(ctx)
    
    return HttpResponse(documento)
