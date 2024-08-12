$(document).ready(function () {

    var count = 1;
    $("#Search").click(function () {
        if (count == 1) {
            swal("Please Add Query", "Error", "error");
        }
        else {
            bindQuery(count);
        }
        
        
    });
   
    $("#Add").click(function () {

        var con = $('input[type=radio][name=inlineRadioOptions]:checked').attr('id');

       // alert($('input[type=radio][name=inlineRadioOptions]:checked').attr('id'));
        if (count > 0) {

            if (count == 1) {
                BindElement(con, count);
                count++;
            }
            else if ($('input[type=radio][name=inlineRadioOptions]:checked').attr('id') == "OR" || $('input[type=radio][name=inlineRadioOptions]:checked').attr('id') == "AND") {
                BindElement(con, count);
                count++;
            }
            else {
                swal("Please Select Conditions", "Error", "error");
            }
        }
        
    });
    //$('body').on('.ddlfiled').on('change', function () {
    //    //do some code here i.e
    //    alert($(this).closest("div").find(".ddlfiled").html());
    //    alert($(".ddlfiled").attr('id'));
    //   // binddata($(".ddlfiled").val())
    //});

});
function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
function bindQuery(count) {
    var query = "";
    Finalquery = '';
    myarray = [];
    Finalcount = 0;
    for (var i = 1; i < count; i++)
    {
        var AndOr = "";
        if (i > 1) {
           // alert($("#spnconId" + i).html());
            AndOr = $("#spnconId" + i).html();
        }
        //alert($("#ddlfiled" + i).val());
        var filed = $("#ddlfiled" + i).val();
       // alert($("#ddlcondiation" + i).val());
        var condition = $("#ddlcondiation" + i).val();
        //alert($("#vlaue" + i).val());
        var value = $("#vlaue" + i).val();
        if (filed != "" && value != "") {
            $("#ddlfiled" + i).removeClass("border border-danger");
            $("#vlaue" + i).removeClass("border border-danger");
            BindQuery(AndOr, filed, condition, value, i, count);
        } else {

            if (value == "") {
                $("#vlaue" + i).addClass("border border-danger");
            }
            else {
                $("#vlaue" + i).removeClass("border border-danger");
            }
            if (filed == "") {
                $("#ddlfiled" + i).addClass("border border-danger");
            }
            else {
                $("#ddlfiled" + i).removeClass("border border-danger");
            }
        }

       // if (condition =="Like")
       // query += "" + AndOr + " " + filed + " " + condition + " '%" + value + "%' ";

    }
   
}
function BindQuery(AndOr, filed, condition, value, i, count) {

    var Filedname = '';
    var HeaderName = '';
    var typesearch = '';
    $.ajax({
        url: '/AdvSearch/BindQuery',
        type: 'POST',
        data: { "filed": filed }, //get the search string
        success: function (result) {


            if (result.length > 0) {

                for (var j = 0; j < result.length; j++) {
                    Filedname = result[j].Filed;
                    HeaderName = result[j].Name;
                    typesearch = result[j].Type;
                    
                    FinalBindQuery(AndOr, Filedname, condition, value, i, count, HeaderName, typesearch)
                }
                


            }


        }
    });
}
var Finalquery = '';
var Finalcount = 0;
var myarray = [];
function FinalBindQuery(AndOr, filed, condition, value, i, count, HeaderName, Type) {

    myarray.push(HeaderName);
   
    var first = '';
  
    if (i == 1) {

        if (condition == "Like") {

            first = "" + AndOr + " " + filed + " " + condition + " ''%" + value + "%'' ";
        }
        else {

            if (Type == "NUM" || Type == "DECI") {
                first = "" + AndOr + " " + filed + " " + condition + " " + value + " ";
            }
            else {
                first = "" + AndOr + " " + filed + " " + condition + " ''" + value + "'' ";
            }
        }
        Finalquery = first + "" + Finalquery;
    }
    else {
        if (condition == "Like") {
            Finalquery += "" + AndOr + " " + filed + " " + condition + " ''%" + value + "%'' ";
        }
        else {
            if (Type == "NUM" || Type == "DECI") {
                Finalquery += "" + AndOr + " " + filed + " " + condition + " " + value + " ";
            }
            else {
                Finalquery += "" + AndOr + " " + filed + " " + condition + " ''" + value + "'' ";

            }
           
        }
    }
    Finalcount++
  
    if (Finalcount == count - 1) {
        var list = '';
     
        $.ajax({
            url: '/AdvSearch/FinalBindQuery',
            type: 'POST',
            data: { "query": Finalquery }, //get the search string
            success: function (result) {

              
                if (result.length > 0) {
                    var datac = 1;
                    removeA(myarray, 'ArmyNumber');
                    removeA(myarray, 'AviatorName');
                    removeA(myarray, 'UnitName');
                    removeA(myarray, 'Aircraft Type');
                    removeA(myarray, 'Aircraft Name');

                    for (var j = 0; j < result.length; j++) {

                        if (j == 0) {
                            list += '<thead class="bg-info text-white">'
                            list += '<tr>';
                            list += '<th class="center">S/No</th>';
                            list += '<th class="center">Pers No</th>';
                            list += '<th class="center">Rank & Name</th>';
                            list += '<th class="center">Unit</th>';
                            list += '<th class="center">Aircraft Type</th>';
                            list += '<th class="center">Aircraft Name</th>';
                            for (var i = 0; i < myarray.length; ++i) {
                                if (myarray[i] == "Capitan Hrs") {
                                    list += '<th class="center">Night Dual Hrs</th>';
                                    list += '<th class="center">Day Solo Hrs</th>';
                                    list += '<th class="center">Total</th>';
                                }
                                else {
                                    list += '<th class="center">' + myarray[i] + '</th>';
                                }

                            }
                            list += '</tr>';
                            list += '</thead>';
                        }
                        list += '<tbody id="ttbody">';
                        list += '<tr>';
                        list += '<td>' + datac++ + '</td>';
                        list += '<td>' + result[j].ArmyNumber + '</td>';
                        list += '<td>' + result[j].AviatorName + '</td>';
                        list += '<td>' + result[j].UnitName + '</td>';
                        list += '<td>' + result[j].AircraftType + '</td>';
                        list += '<td>' + result[j].AircraftName + '</td>';
                        for (var i = 0; i < myarray.length; ++i) {

                            if (myarray[i] == "Heptr Cat Card No") {
                                list += '<td class="center">' + result[j].CatCardNo + '</td>';
                            }
                            else if (myarray[i] == "CAT/IR Date") {
                                list += '<td class="center">' + result[j].CatIRDate + '</td>';
                            }
                            else if (myarray[i] == "CAT/IR") {
                                list += '<td class="center">' + result[j].CatIR + '</td>';
                            }
                            else if (myarray[i] == "InstrCAT") {
                                list += '<td class="center">' + result[j].InstrCAT + '</td>';
                            }
                            else if (myarray[i] == "CourseName") {
                                list += '<td class="center">' + result[j].CourseName + '</td>';
                            }
                            else if (myarray[i] == "Grading") {
                                list += '<td class="center">' + result[j].Grading + '</td>';
                            }
                            else if (myarray[i] == "CourseSerialNumber") {
                                list += '<td class="center">' + result[j].CourseSerialNumber + '</td>';
                            }
                            else if (myarray[i] == "Day Dual Hrs") {
                                list += '<td class="center">' + result[j].DayDualHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "Day Solo Hrs") {
                                list += '<td class="center">' + result[j].DaySoloHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "Day Copilot Hrs") {
                                list += '<td class="center">' + result[j].DayCopilotHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "Night Dual Hrs") {
                                list += '<td class="center">' + result[j].NightDualHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "Night Solo Hrs") {
                                list += '<td class="center">' + result[j].NightSoloHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "Night Copilot Hrs") {
                                list += '<td class="center">' + result[j].NightCopilotHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "Instr Day Hrs") {
                                list += '<td class="center">' + result[j].InstrDayHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "Instr Night Hrs") {
                                list += '<td class="center">' + result[j].InstrNightHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "IMC Hrs") {
                                list += '<td class="center">' + result[j].IMCHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "SIF Hrs") {
                                list += '<td class="center">' + result[j].SIFHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "ALHS mlHrs") {
                                list += '<td class="center">' + result[j].ALHSmlHrs.toFixed(2) + '</td>';
                            }
                            else if (myarray[i] == "RPAS Substream") {
                                list += '<td class="center">' + result[j].RPA_Substream + '</td>';
                            }
                            else if (myarray[i] == "RPA Cat") {
                                list += '<td class="center">' + result[j].RPACat + '</td>';
                            }
                            else if (myarray[i] == "RPA Instr CatDate") {
                                list += '<td class="center">' + result[j].RPA_Instr_CatDate + '</td>';
                            }
                            else if (myarray[i] == "Capitan Hrs") {
                                list += '<td class="center">' + result[j].NightDualHrs.toFixed(2) + '</td>';
                                list += '<td class="center">' + result[j].DaySoloHrs.toFixed(2) + '</td>';
                                list += '<td class="center">' + result[j].Total.toFixed(2) + '</td>';
                            }
                        }
                        list += '</tr>';
                        list += '</tbody>';
                        /*alert(result[j].ArmyNumber);*/
                    }



                }

                else {
                    list += '<tr><td colspan="20" class="text-center"> No Record found</td></tr>';
                }

                $("#tbldata").html(list);
                $('#tbldata').dataTable();
                //$('#ttbody').dataTable({
                //    paging: false
                //});
            }
        });
    }
    
  
}
function BindElement(con, count) {
    var list = '';
    if (count==1)
        con = "";
    list += '<div class="col-md-6 cardsearch border-left-primary shadow h-100 py-2 mt-2">';
    list += '<div class="d-flex"><span class="spnId d-none">' + count + '</span><span class="mr-2" id="spnconId' + count +'">' + con +'</span>';
    list += ' <select id="ddlfiled' + count +'" class="form-control ml-2 ddlfiled" required></select>';
    list += '<select class="select form-control ml-2 ddlcondiation" data-live-search="true" data-show-subtext="true" id="ddlcondiation' + count +'" name="ddlcondiation"></select>';
    list += '<div id="appendvlaue' + count +'" class="appendvlaue " ></div>';
    list += ' </div>';
    list += ' </div>';

    $("#elements").append(list);
    $(".ddlfiled").off("change").change(function () {
       
        //alert($(this).closest("div").find(".vlaue").attr('id'));
        var ddlconid = $(this).closest("div").find(".ddlcondiation").attr('id');
        $("#" + ddlconid).html('<option value="Like">Contains</option><option value="=">Equal</option><option value=">">Greater Than</option><option value="<">Less Than</option><option value=">=">Greater Than Equal</option><option value="<=">Less Than Equal</option>');
        var id = $(this).closest("div").find(".appendvlaue").attr('id');
        var value = $(this).closest("div").find(".ddlfiled").val();
        var count = $(this).closest("div").find(".spnId").html();
        binddata(id, value, count, ddlconid)
    });

    
   BindName("ddlfiled" + count);
}

function BindName(filed) {
    
    var listFiled = '';
    listFiled = '<option value="">Select Field</option>';
/*    list = '<option value="">No Corps</option>';*/
    $.ajax({
        url: '/AdvSearch/BindNameData',
        type: 'POST',
        data: { "Id": 1 }, //get the search string
        success: function (result) {


            if (result.length > 0) {



                for (var j = 0; j < result.length; j++) {


                    listFiled += '<option value=' + result[j].Id + '>' + result[j].Name + '</option>';
                }



            }
            $('#' + filed).html(listFiled);
           
        }
    });
}


function binddata(Id, value, count, ddlconid) {

    var listFiled = '';
        
    $.ajax({
        url: '/AdvSearch/BindData',
        type: 'POST',
        data: { "Id": value }, //get the search string
        success: function (result) {


            if (result.length > 0) {

                
                if (result[0].Type == "TEXT") {
                    listFiled = '<input style="width:200px"  type="text" id="vlaue' + count + '" class="form-control ml-2" required/>';
                    $("#" + ddlconid + " option[value='>']").remove();
                    $("#" + ddlconid + " option[value='<']").remove();
                    $("#" + ddlconid + " option[value='>=']").remove();
                    $("#" + ddlconid + " option[value='<=']").remove();
                    
                }
                else if (result[0].Type == "NUM") {
                    $("#" + ddlconid + " option[value='Like']").remove();
                    listFiled = '<input style="width:200px"  type="number" id="vlaue' + count + '" class="form-control ml-2" required/>';
                }
                else if (result[0].Type == "CAL") {
                    $("#" + ddlconid + " option[value='Like']").remove();
                    listFiled = ' <input style="width:200px"  class="form-control datepicker3 ml-2" id="vlaue' + count + '" placeholder="dd/mm/yyyy" required type="text" value="" required>';
                }
                else if (result[0].Type == "DECI") {
                    $("#" + ddlconid + " option[value='Like']").remove();
                    listFiled = '<input style="width:200px"  type="text" id="vlaue' + count + '" class="form-control ml-2" onchange="CheckMinute(this)" onkeypress = "return blockSpecialChar(event)" required/>';
                }
                else  {
                    listFiled += '<select style="width:200px"  id="vlaue' + count + '" class="form-control ml-2 vlaue" required>'
                    $("#" + ddlconid + " option[value='>']").remove();
                    $("#" + ddlconid + " option[value='<']").remove();
                    $("#" + ddlconid + " option[value='>=']").remove();
                    $("#" + ddlconid + " option[value='<=']").remove();
                    for (var j = 0; j < result.length; j++) {


                        listFiled += '<option value=' + result[j].Name + '>' + result[j].Name + '</option>';
                    }
                    listFiled += '</select>';
                }

            }
            $('#' + Id).html(listFiled);

        }
    });
}