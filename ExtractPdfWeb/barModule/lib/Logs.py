
import time
from barModule.Conf.Config import configuracion

class Logs():


    def insertar(self,texto, proceso):
        log = '\n\n\n-------------------------------------\n'
        log += 'FECHA: ' + time.strftime('%c') + '  ESCALA DE GRISES: ' + proceso + '\n'
        log += '-------------------------------------\n\n\n'

        log += texto

        with open(configuracion['acceso_rama'] + "salida.txt", 'a') as f:
            f.write(log)


