import glob

from barModule.Conf.Config import configuracion


import os

from wand.image import Image as Img

from ExtractPdfWeb.settings import MEDIA_URL , IMAGENES_PATH

class BusinessPDF():

    def convertirPDFenJPG(self, ruta):
        """
        transforma un pdf en una sucesion de imagenes, una por cada hoja del pdf
        :param ruta: ruta donde se almacena el pdf
        :return: imagenes.jpg
        """
        print('*******************************************')

        with Img(filename= MEDIA_URL+ruta , resolution=150) as img:
            #img.compression_quality = 99
            img.save(filename=IMAGENES_PATH+'image_name.jpg')


if __name__ == '__main__':

    ruta = 'factura2.pdf'
    BusinessPDF().convertirPDFenJPG(ruta)
