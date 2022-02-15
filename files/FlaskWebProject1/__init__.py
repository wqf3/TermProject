from flask import Flask
app = Flask(__name__)

import pymysql

db = pymysql.connect(host='ip地址',
                     user='账号',
                     password='密码',
                     database='数据库',
                     charset='utf8mb4')


cursor = db.cursor()
 
import FlaskWebProject1.views
