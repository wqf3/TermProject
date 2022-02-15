"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template, request, url_for, jsonify, session
from FlaskWebProject1 import app, cursor
from FlaskWebProject1.testForm import NewForm, JsonForm
import json

app.config['SECRET_KEY'] = 'a random string'


@app.route('/',methods=['POST','GET'])
def main():
    return render_template('login.html',year=datetime.now().year,indexFlag = 1,)

@app.route('/login',methods=['POST','GET'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    if(len(username) * len(password) == 0):
        return render_template('login.html',emptyFlag = 1,year=datetime.now().year,)
    cursor.execute('use test1215;')
    cursor.execute('select * from test1;')
    datas = cursor.fetchall()
    cursor.execute('use final;')
    for data in datas:
        if username == data[1]:
            if password == data[2]:
                session['user'] = data[1]
                return render_template(
                    'index.html',
                    title='简述',
                    year=datetime.now().year,
		    indexFlag = 1,
                    test1 = 1,
                    )
    return render_template('login.html',year=datetime.now().year,indexFlag = 1,errorFlag = 1)


#@app.route('/')
@app.route('/home')
def home():
    session['user'] = "test"
    """Renders the home page."""
    user = session.get('user')
    if not user:
        return render_template('login.html',year=datetime.now().year,indexFlag = 1,notLoginFlag = 1,)
    return render_template(
        'index.html',
        title='简述',
        year=datetime.now().year,
        indexFlag = 1,
    )

@app.route('/about')
def about():
    """Renders the about page."""
    user = session.get('user')
    if not user:
        return render_template('login.html',year=datetime.now().year,indexFlag = 1,notLoginFlag = 1,)
    return render_template(
        'about.html',
        title='关于我们',
        year=datetime.now().year,
        message='Your application description page.',
        indexFlag = 1,
    )

@app.route('/SQL', methods=['GET','POST'])
def SQL():
    """Renders the SQL inserting page."""
    user = session.get('user')
    if not user:
        return render_template('login.html',year=datetime.now().year,indexFlag = 1,notLoginFlag = 1,)
    form = NewForm()
    jsonForm = JsonForm()
    if form.validate_on_submit():
        if user == 'tourist':
            print(form.content.data.lstrip()[:6])
            test = form.content.data.lstrip()[:6]
            if 'select' == test.lower():
                print(1)
        try:
            cursor.execute(form.content.data)
        except:
            print("Error")
            return render_template(
                'query.html',
                title = 'SQL查询',
                year = datetime.now().year,
                form = form,
                errorFlag = 1,
                )
        data = cursor.fetchall()
        dataflag = len(data)
        if dataflag == 0:
            print("Empty")
            return render_template(
                'query.html',
                title = 'SQL查询',
                year = datetime.now().year,
                form = form,
                emptyFlag = 1,
                )
        datalen = len(data[0])
        des = cursor.description
        head = []
        for item in des:
            head.append(item[0])
        return render_template(
            'result.html',
            title = '数据结果',
            year = datetime.now().year,
            head = head,
            rows = data,
            columns = range(datalen),
            jsonForm = jsonForm,
            )
    return render_template(
        'query.html',
        title = 'SQL查询',
        year = datetime.now().year,
        form = form,
        )

@app.route('/table')
def table():
    """Renders the result of tables page after querying."""
    user = session.get('user')
    if not user:
        return render_template('login.html',year=datetime.now().year,indexFlag = 1,notLoginFlag = 1,)
    cursor.execute('show tables;')
    data = cursor.fetchall()
    datalen = len(data[0])
    return render_template(
        'tables.html',
        title = '数据表查询',
        rows = data,
        columns = range(datalen),
        year=datetime.now().year,
        )

@app.route('/tableQuery/<table>',methods=['GET'])
def tableQuery(table):
    user = session.get('user')
    if not user:
        return render_template('login.html',year=datetime.now().year,indexFlag = 1,notLoginFlag = 1,)
    form = NewForm()
    jsonForm = JsonForm()
    cursor.execute('select * from ' + table + ';')
    data = cursor.fetchall()
    dataFlag = len(data)
    if dataFlag == 0:
        print("Empty")
        return render_template(
            'query.html',
            title = 'SQL查询',
            year = datetime.now().year,
            form = form,
            emptyFlag = 1,
            )
    datalen = len(data[0])
    des = cursor.description
    head = []
    for item in des:
        head.append(item[0])
    return render_template(
        'result.html',
        title = '数据结果',
        year = datetime.now().year,
        rows = data,
        dataFlag = dataFlag,
        columns = range(datalen),
        jsonForm = jsonForm,
        head = head,
        )

@app.route('/jsonPost',methods=['POST','GET'])
def jsonPost():
    user = session.get('user')
    if not user:
        return render_template('login.html',year=datetime.now().year,indexFlag = 1,notLoginFlag = 1,)
    jsonData = request.form.get('jsonval')
    #dataDict = json.loads(jsonData)
    #dataArray = dataDict["data"]
    #print(dataArray)
    print(jsonData)
    return render_template(
        'ECharts.html',
        title = 'ECharts图表',
        year=datetime.now().year,
        jsonData = jsonData
    )
    
@app.route('/report')
def report():
    user = session.get('user')
    if not user:
        return render_template('login.html',year=datetime.now().year,indexFlag = 1,notLoginFlag = 1,)
    return render_template(
        'report.html',
        )
