import pymysql
import os
import pandas as pd

try:
    connection = pymysql.connect(host='localhost',  # host属性
                                 user='root',  # 用户名
                                 password='**********',  # 此处填登录数据库的密码
                                 db='mysql',  # 数据库名
                                 charset='gbk'
                                 )
    cur = connection.cursor()
    cur.execute('use test;')
    print('数据库连接成功')
except:
    print('数据库连接失败')



path = 'C:/Users/14376/Desktop/csv2/'
files = os.listdir(path)

os.chdir(path)
for file in files:
    print(file)
    try:
        if file.split('.')[-1] in ['csv']:
            filneame = file.split('.')[0]
            filneame = 'tab_' + filneame
            df = pd.read_csv(file, encoding='gbk', low_memory=False)
            df = df.fillna(-1)
            columns = df.columns.tolist()
            tpyes = df.dtypes
            field = []  # 用来接收字段名称的列表
            table = []  # 用来接收字段名称和字段类型的列表
            for item in columns:
                if 'int' in str(tpyes[item]):
                    char = item + ' INT'
                elif 'float' in str(tpyes[item]):
                    char = item + ' FLOAT'
                elif 'object' in str(tpyes[item]):
                    char = item + ' VARCHAR(255)'
                elif 'datetime' in str(tpyes[item]):
                    char = item + ' DATETIME'
                else:
                    char = item + ' TEXT'
                table.append(char)
                field.append(item)
            tables = ','.join(table)
            fields = ','.join(field)
            table_sql = 'CREATE TABLE IF NOT EXISTS ' + filneame + '(' + 'id0 int PRIMARY KEY NOT NULL auto_increment,' + tables + ');'
            cur.execute(table_sql)
            s = ','.join(["%s" for _ in range(len(df.columns))])
            values = df.values.tolist()

            insert_sql = 'insert into {}({}) values({})'.format(filneame, fields, s)
            cur.execute(insert_sql, values)
            connection.commit()
            print('导入完成')
    except:
        pass
