
FROM python:3.6.5
ENV PYTHONUNBUFFERED 1

RUN mkdir /code

WORKDIR /code

ADD requirements.txt /code/

RUN pip install -r requirements.txt

RUN apt-get update

RUN apt-get install -y tesseract-ocr

ADD . /code/





