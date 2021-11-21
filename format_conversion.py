#coding=utf-8
import os
import pandas as pd    #导入pandas库

def readname(name):
    filePath = name
    retname = os.listdir(filePath)
    return retname

#os.chdir("C:/DatabaseProject/CFOPsort/CFPS 2010/")
#data = pd.read_stata('cfps2010famecon_202008.dta')   #读入待转换的文件名称
#data.to_csv('cfps2010famecon_202008.csv',encoding='GBK') #成功转换

lisyear = ["C:/DatabaseProject/CFOPsort/CFPS 2010/","C:/DatabaseProject/CFOPsort/CFPS 2011/","C:/DatabaseProject/CFOPsort/CFPS 2012/","C:/DatabaseProject/CFOPsort/CFPS 2014/","C:/DatabaseProject/CFOPsort/CFPS 2016/","C:/DatabaseProject/CFOPsort/CFPS 2018"]

for foldername in lisyear:
    filenames=readname(foldername)
    for filename in filenames:
        os.chdir(foldername)
        try:
            data=pd.read_stata(filename)
            data.to_csv(filename+".csv",encoding='GBK')
            print(filename+".csv"+"转换成功")
        except:
            file_handle=open('C:/Users/14376/Desktop/esfile.txt',mode='w')
            file_handle.write(filename+".csv")
            file_handle.close()




