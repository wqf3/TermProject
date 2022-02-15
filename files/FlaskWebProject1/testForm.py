from flask_wtf import FlaskForm
from wtforms import StringField,TextAreaField,SubmitField,SelectField
from wtforms.validators import DataRequired
 
class NewForm(FlaskForm):
    content = TextAreaField(label='SQL内容',validators=[DataRequired("请输入内容")],description="请输入内容",render_kw={"required":"required"})
    submit = SubmitField('提交')

class JsonForm(FlaskForm):
    content = StringField(label='jsonData',validators=[DataRequired()])
    submit = SubmitField('提交')
