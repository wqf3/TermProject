setTimeout(function (){ // 每200时间单位，重置图表大小以自适应屏幕
    window.onresize = function () {
        myChart_A1_2010_City.resize();
        myChart_A2_2010_Country.resize();
        myChart_A3_2018_City.resize();
        myChart_A4_2018_Country.resize();
        myChart_B1_2010_Comparison_Education.resize();
        myChart_B2_2018_Comparison_Education.resize();
        myChart_C1_City_SchoolAmount.resize();
        myChart_C2_Country_SchoolAmount.resize();
        myChart_D1_City_ExtraClasses.resize();
        myChart_D2_Country_ExtraClasses.resize();
        myChart_E_Comparison_AfterCompulsoryEducation.resize();

        myChart_A_Comparison_Cash_BankSaving.resize();
        myChart_B_Comparison_PerCapitaDisposableIncome.resize();
        myChart_C1_City_PerCapitaConsumptionExpenditure.resize();
        myChart_C2_Country_PerCapitaConsumptionExpenditure.resize();
        myChart_E_Comparison_Engel.resize();

        myChart_A1_CFPS_SampleSize_Distribution_Sun.resize();
        myChart_A2_CFPS_SampleSize_Distribution_Pie.resize();
        myChart_B_CFPS_QuestionnaireComponent.resize();
        
        myChart_A1_Country_HealthSelfAssessment.resize();
        myChart_A2_City_HealthSelfAssessment.resize();
        myChart_B_Comparison_MedicalExpenditures.resize();
        myChart_C_MedicalServiceBedAmount.resize();
        myChart_D1_Distribution_First_Class_Hospital_at_Grade_3_Sun.resize();
        myChart_D2_Distribution_First_Class_Hospital_at_Grade_3_Pie.resize();
    }
},200)