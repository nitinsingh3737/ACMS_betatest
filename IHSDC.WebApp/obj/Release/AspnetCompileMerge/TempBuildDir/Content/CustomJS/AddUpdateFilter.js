$(document).ready(function () {
    if ($('#BtnDeclaration').val() == "Courses") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), $("#Course_ID").val(), 0, 0, 0, 0, '', '', 0, 0, 0, '', '', '');
    }

    if ($('#BtnDeclaration').val() == "HeptrRPA") {
        if ($("#AircraftTypeId").val() == "1")
        {
            GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, $("#AircraftTypeId").val(), $("#HeptrRPAMasterId").val(), $("#CatIRId").val(), 0, '', '', 0, 0, 0, '', '', '');
        }
        else if($("#AircraftTypeId").val() == "3")
        {
            GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, $("#AircraftTypeId").val(), $("#HeptrRPAMasterId").val(), 0, $("#RPACatId").val(), '', '', 0, 0, 0, '', '', '');
        }       
    }
    if ($('#BtnDeclaration').val() == "Awards") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, $("#HonourAwardsDate").val(), '', 0, 0, 0, '', '', '');
    }
    if ($('#BtnDeclaration').val() == "FlyingHrs") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, $("#AircraftTypeId").val(), $("#HeptrRPAMasterId").val(), 0, 0, '', $("#Month").val(), 0, 0, 0, '', '', '');
    }
    if ($('#BtnDeclaration').val() == "SplEQPT") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', $("#SpecialEqpt_ID").val(), 0, 0, '', '', '');
    }
    if ($('#BtnDeclaration').val() == "ForeignVisit") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, $("#ForeignPostingTypeId").val(), 0, '', '', '');
    }
    if ($('#BtnDeclaration').val() == "Qual") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, 0, $("#SpecialQual_ID").val(), '', '', '');
    }
    if ($('#BtnDeclaration').val() == "Medical") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, 0, 0, $("#MedicalStartDate").val(), '', '');
    }
    if ($('#BtnDeclaration').val() == "Accident") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, 0, 0, '', $("#DateOfAccidentIncident").val(), '');
    }
    if ($('#BtnDeclaration').val() == "GoodShow") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, 0, 0, '', '', $("#DateGoodShow").val());
    }
});


$('#BtnDeclaration').click(function () {
    if ($('#BtnDeclaration').val() == "Courses") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), $("#Course_ID").val(), 0, 0, 0, 0, '', '', 0, 0, 0, '', '', '');
    }
    if ($('#BtnDeclaration').val() == "HeptrRPA") {
        if ($("#AircraftTypeId").val() == "1") {
            GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, $("#AircraftTypeId").val(), $("#HeptrRPAMasterId").val(), $("#CatIRId").val(), 0, '', '', 0, 0, 0, '', '', '');
        }
        else if ($("#AircraftTypeId").val() == "3") {
            GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, $("#AircraftTypeId").val(), $("#HeptrRPAMasterId").val(), 0, $("#RPACatId").val(), '', '', 0, 0, 0, '', '', '');
        }
    }
    if ($('#BtnDeclaration').val() == "Awards") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, $("#HonourAwardsDate").val(), '', 0, 0, 0, '', '', '');
    }
    if ($('#BtnDeclaration').val() == "FlyingHrs") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, $("#AircraftTypeId").val(), $("#HeptrRPAMasterId").val(), 0, 0, '', $("#Month").val(), 0, 0, 0, '', '', '');
    }
    if ($('#BtnDeclaration').val() == "SplEQPT") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', $("#SpecialEqpt_ID").val(), 0, 0, '', '', '');
    }
    if ($('#BtnDeclaration').val() == "ForeignVisit") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, $("#ForeignPostingTypeId").val(), 0, '', '', '');
    }
    if ($('#BtnDeclaration').val() == "Qual") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, 0, $("#SpecialQual_ID").val(), '', '', '');
    }
    if ($('#BtnDeclaration').val() == "Medical") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, 0, 0, $("#MedicalStartDate").val(), '', '');
    }
    if ($('#BtnDeclaration').val() == "Accident") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, 0, 0, '', $("#DateOfAccidentIncident").val(),'');
    }
    if ($('#BtnDeclaration').val() == "GoodShow") {
        GetAddUpdate($('#BtnDeclaration').val(), $('#Aviator_ID').val(), 0, 0, 0, 0, 0, '', '', 0, 0, 0, '', '',$("#DateGoodShow").val());
    }
});


function GetAddUpdate(FormName, AviatorID, CourseID, AircraftTypeId, HeptrRPAMasterId, CatIRId, RPACatId, AwardDate, Month, SplEqptID, ForeignPostingTypeId, SpecialQual_ID, MedicalSDate, DateOfAccidentIncident, DateGoodShow) {

    if (RPACatId == "") { RPACatId = 0 }

    $.ajax({
        url: '/AA7/GetAddUpdate',
        type: 'POST',
        data: { "FormName": FormName, "Aviatorid": AviatorID, "CourseID": CourseID, "AircraftType_ID": AircraftTypeId, "HeptrRPAMasterId": HeptrRPAMasterId, "CatIRId": CatIRId, "RPACatId": RPACatId, "HonourAwardsDate": AwardDate, "Month": Month, "SpecialEqpt_ID": SplEqptID, "ForeignPostingTypeId": ForeignPostingTypeId, "SpecialQual_ID": SpecialQual_ID, "MedicalStartDate": MedicalSDate, "DateOfAccidentIncident": DateOfAccidentIncident, "DateGoodShow": DateGoodShow }, //get the search string
        success: function (response) {
            if (response && response.length > 0) {
                if (response[0].StatusName && response[0].StatusName.toLowerCase() === "update") {
                    $("#btnval").val("Update");
                    $("#btnval").html("Update");
                } else {
                    $("#btnval").val("Add");
                    $("#btnval").html("Add");
                }
            } else {
                $("#btnval").val("Add");
                $("#btnval").html("Add");
            }
        }


    });
}

function CheckMinuteHrs(obj) {
    //debugger;
    var str = $(obj).val();
    var array = $(obj).val().split(".");
    var val = array[0];
    var pval = array[1];
    if (val.length == 1) {
        val = '0' + val;
        $(obj).val(val + "." + (pval));

    }
    var mod = (pval % 5);
    if (mod == 0)
    { 
        if (pval != undefined && pval != null && pval != "") {
            if (pval.length == 1) {
                pval = '0' + pval;
                $(obj).val(val + "." + (pval));
            }
            pval = pval.substring(0, 2);
            if (parseInt(pval) > 59) {
                var v = pval % 60;
                val = parseInt(val) + 1;
                var mod = v % 5;
                var total = v - mod;
                $(obj).val(val + "." + total);
                var valstr = val.toString();
                if (valstr.length == 1) {
                    valstr = '0' + val;
                    $(obj).val(valstr + "." + total);
                }
                else {
                    $(obj).val(val + "." + total);
                }
            }
            else {
                var mod = (parseInt(pval) % 5);
                var total = (parseInt(pval) - mod);
                $(obj).val(val + "." + total);
                var setstr = total.toString();
                if (setstr.length == 1) {
                    setstr = '0' + total;
                    $(obj).val(val + "." + (setstr));
                }
                else {
                    $(obj).val(val + "." + total);
                }
            }
        }
        else {
            sweetAlert("Please enter correct flying Hrs !", "something like that 00.00", "warning");
            $(obj).val("");
        }
    }
    else {
        sweetAlert("Please enter correct flying Hrs !", "Multiple of 5 after decimal", "warning");
        $(obj).val("");
    }
    $(obj).focus();
}