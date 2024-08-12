$(document).ready(function () {
   
    //$("#Month").val($("#Month").val().replace('12:00:00 AM', ''));

    GetAircraft($('#AircraftTypeId').val());
});
$(document).ready(function () {

    //$("#Month").val($("#Month").val().replace('12:00:00 AM', ''));

    GetAircraft1($('#PresentCatIRTypeID').val());
});


$('#AircraftTypeId').change(function () {
    
    GetAircraft($('#AircraftTypeId').val());

    if ($('#AircraftTypeId').val() == 3) {
        $('#CatCardDate').attr('disabled', true);
        $('#CatCardDate').val("");
        $('#CatIRId').attr('disabled', true);
        $('#CatIRId').val("0");
        $('#CatIRDate').attr('disabled', true);
        $('#CatIRDate').val("");
        $('#InstrCATId').attr('disabled', true);
        $('#InstrCATId').val("0");
        $('#InstrCatDate').attr('disabled', true);
        $('#InstrCatDate').val("");
        $('#CatCardNo').attr('disabled', true);
        $('#CatCardNo').val("");
        $('#RPAdowDate').attr('disabled', false);
        $('#RPA_SubstreamId').attr('disabled', false);
        $('#RPA_CatCardNo').attr('disabled', false);
        $('#RPA_CatCardDate').attr('disabled', false);
        $('#RPACatId').attr('disabled', false);
        $('#RPA_CatDate').attr('disabled', false);
        $('#RPAInstrCatId').attr('disabled', false);
        $('#RPA_Instr_CatDate').attr('disabled', false);
    }
    else if ($('#AircraftTypeId').val() == 1) {

        $('#CatCardDate').attr('disabled', false);
        $('#CatIRId').attr('disabled', false);
        $('#CatIRDate').attr('disabled', false);
        $('#InstrCATId').attr('disabled', false);
        $('#InstrCatDate').attr('disabled', false);
        $('#CatCardNo').attr('disabled', false);
        $('#RPAdowDate').attr('disabled', true);
        $('#RPAdowDate').val("");
        $('#RPA_SubstreamId').attr('disabled', true);
        $('#RPA_SubstreamId').val("0");
        $('#RPA_CatCardNo').attr('disabled', true);
        $('#RPA_CatCardNo').val("");
        $('#RPA_CatCardDate').attr('disabled', true);
        $('#RPA_CatCardDate').val("");
        $('#RPACatId').attr('disabled', true);
        $('#RPACatId').val("0");
        $('#RPA_CatDate').attr('disabled', true);
        $('#RPA_CatDate').val("");
        $('#RPAInstrCatId').attr('disabled', true);
        $('#RPAInstrCatId').val("0");
        $('#RPA_Instr_CatDate').attr('disabled', true);
        $('#RPA_Instr_CatDate').val("");
    }
    else {
        $('#CatCardDate').attr('disabled', false);
        $('#CatIRId').attr('disabled', false);
        $('#CatIRDate').attr('disabled', false);
        $('#InstrCATId').attr('disabled', false);
        $('#InstrCatDate').attr('disabled', false);
        $('#CatCardNo').attr('disabled', false);
        $('#RPAdowDate').attr('disabled', false);
        $('#RPA_SubstreamId').attr('disabled', false);
        $('#RPA_CatCardNo').attr('disabled', false);
        $('#RPA_CatCardDate').attr('disabled', false);
        $('#RPACatId').attr('disabled', false);
        $('#RPA_CatDate').attr('disabled', false);
        $('#RPAInstrCatId').attr('disabled', false);
        $('#RPA_Instr_CatDate').attr('disabled', false);
    }


});


$('#FlyingStatusId').change(function () {

    GetFlyingStatus($('#FlyingStatusId').val());

    if ($('#FlyingStatusId').val() == 1) {

        $('#ReasonUnFit').attr('disabled', true);
    }
    else {
        $('#ReasonUnFit').attr('disabled', flase);

    }

});


$('#MedicalCatId').change(function () {

    GetMedicalCat($('#MedicalCatId').val());

    if ($('#MedicalCatId').val() == 1) {

        $('#OtherMedicalRemarks').attr('disabled', true);
    }
    else {
        $('#OtherMedicalRemarks').attr('disabled', flase);

    }

});

$('#CopeCodeId').change(function () {

    GetMedicalCat($('#CopeCodeId').val());

    if ($('#CopeCodeId').val() == 1) {

        $('#OtherCopeRemarks').attr('disabled', true);
    }
    else {
        $('#OtherCopeRemarks').attr('disabled', flase);

    }

});





function GetAircraft1(AircraftTypeId) {
    var listItem = "";
    listItem = "<option value='0'>-- Select Aircraft --</option>";
    $("#ddlFileNo").html(listItem);

    $.ajax({
        url: '/GEB/GetAircraft1',
        type: 'POST',
        data: { "AircraftType_ID": AircraftTypeId }, //get the search string
        success: function (response) {

            if (response != "null") {

                {

                    for (var i = 0; i < response.length; i++) {
                        listItem += '<option value="' + response[i].Value + '">' + response[i].Text + '</option>';
                    }
                    $("#TypesIfAnyID").html(listItem);

                    $("#TypesIfAnyID").val($("#TypesIfAnyID2").html());
                }
            }

        }


    });
}

function GetAircraft(AircraftTypeId) {
    var listItem = "";
    listItem = "<option value='0'>-- Select Aircraft --</option>";
    $("#ddlFileNo").html(listItem);

    $.ajax({
        url: '/AA7/GetAircraft',
        type: 'POST',
        data: { "AircraftType_ID": AircraftTypeId }, //get the search string
        success: function (response) {

            if (response != "null") {

                 {

                    for (var i = 0; i < response.length; i++) {
                        listItem += '<option value="' + response[i].Value + '">' + response[i].Text + '</option>';
                    }
                    $("#HeptrRPAMasterId").html(listItem);

                    $("#HeptrRPAMasterId").val($("#HeptrRPAMasterId2").html());
                }
            }

            }


    });
}


//function GetAircraft(AircraftTypeId) {
//    $.ajax({
//        url: '/AA7/GetAircraft',
//        type: 'POST',
//        data: { "AircraftType_ID": AircraftTypeId },
//        success: function (response) {
//            if (response != "null") {
//                var options = "<option value=''>-- Select Aircraft --</option>";
//                for (var i = 0; i < response.length; i++) {
//                    options += '<option value="' + response[i].Value + '">' + response[i].Text + '</option>';
//                }
//                $("#HeptrRPAMasterId").html(options);
//                $("#HeptrRPAMasterId").selectpicker('refresh');
//            }
//        }
//    });
//}





function GetUsername(UnitName) {
    var listItem = "";
    listItem = "<option value='" + UnitName +"'>-- Select User --</option>";
    $("#EstablishmentFull").html(listItem);

    $.ajax({
        url: '/AccountController/GetUsername',
        type: 'POST',
        data: { "UnitName": UnitName }, //get the search string
        success: function (response) {

            if (response != "null") {

                {

                    for (var i = 0; i < response.length; i++) {
                        listItem += '<option value="' + response[i].Value + '">' + response[i].Text + '</option>';
                    }
                    $("#DEFwdAuth").html(listItem);
                }
            }

        }


    });
}


function SubmitConfirmation(obj, ActionName, titleMessage, Submit) {

    swal({
        title: titleMessage,
        text: "",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, Submit it!",
        cancelButtonText: "No, cancel ",
        closeOnConfirm: false,
        closeOnCancel: false
    },
        function (isConfirm) {
            if (isConfirm) {
                var encrypted = $(obj).attr('data-id');
                location.href = ActionName + '?id=' + encrypted + '&submit=' + Submit;
            } else {
                swal("Not Submitted!", "", "info");
            }
        }
    );
}
function SubmitToken(obj, ActionName, titleMessage, Submit) {

    swal({
        title: titleMessage,
        text: "",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Ok, Connected!",
        cancelButtonText: "No, cancel ",
        closeOnConfirm: false,
        closeOnCancel: false
    },
        function (isConfirm) {
            if (isConfirm) {

                var encrypted = $(obj).attr('data-id');
                location.href = ActionName;
            } else {
                var encrypted = $(obj).attr('data-id');
                location.href = ActionName;
            }
        }
    );
}
//-----block specail character and alphabates and convert into upper case
function Case(obj) {
        var strings = $(obj).val();
    var str = strings.toUpperCase();
    $(obj).val(str);
}


function CaseName(obj) {

    if ((e.which < 48 || e.which > 57) && e.which != 46) {
        if (e.which == 8 || e.which == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    var string = $(obj).val();
    var str = string.toLowerCase().replace(/\b[a-z]/g, function (letter) {
        return letter.toUpperCase();
    });
    $(obj).val(str);
}
function SetSuffixLetter(obj) {
    //debugger;
    var arr1 = [], arr2 = [];
    var ArmyNumber = $(obj).val();
    var fixed = "98765432";
    arr1 = ArmyNumber.split('');
    arr2 = fixed.split('');
    var len = arr2.length - arr1.length;
    if (len == 1) {
        ArmyNumber = "0" + ArmyNumber;
    }
    if (len == 2) {
        ArmyNumber = "00" + ArmyNumber;
    }
    if (len == 3) {
        ArmyNumber = "000" + ArmyNumber;
    }
    if (len == 4) {
        ArmyNumber = "0000" + ArmyNumber;
    }
    if (len == 5) {
        ArmyNumber = "00000" + ArmyNumber;
    }
    if (len == 6) {
        ArmyNumber = "000000" + ArmyNumber;
    }
    if (len == 7) {
        ArmyNumber = "0000000" + ArmyNumber;
    }

    var total = 0;
    arr1 = ArmyNumber.split('');
    for (var i = 0; i < arr1.length; i++) {
        var val1 = arr1[i];
        var val2 = arr2[i];
        total += parseInt(val1) * parseInt(val2);
    }
    var rem = total % 11;
    var Sletter = '';
    switch (rem.toString()) {
        case '0':
            Sletter = 'A'
            break;
        case '1':
            Sletter = 'F'
            break;
        case '2':
            Sletter = 'H'
            break;
        case '3':
            Sletter = 'K'
            break;
        case '4':
            Sletter = 'L'
            break;
        case '5':
            Sletter = 'M'
            break;
        case '6':
            Sletter = 'N'
            break;
        case '7':
            Sletter = 'P'
            break;
        case '8':
            Sletter = 'W'
            break;
        case '9':
            Sletter = 'X'
            break;
        case '10':
            Sletter = 'Y'
            break;

    }
    $('#SuffixLetter').val(Sletter.toString());
}



function blockSpecialChar(e) {
    if ((e.which < 48 || e.which > 57) && e.which != 46) {
        if (e.which == 8 || e.which == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}



function onlyAlphaNumeric(event) {

   // debugger;

    if ((event.which < 48 || event.which > 57) && event.which != 46) {
        if (event.which == 8 || event.which == 0) {
            return true;

        }
        else if (((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || event.charCode == 32)) {
            return true;

        }
        else {
            return false;
        }

    }

}

function onlyAlph(event) {

    //debugger;  

    if (((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || event.charCode==32)) {        
            return true;       
        
    }
    else {
        return false;
    }
}




function CheckMinute(obj) {
    //debugger;
    var str = $(obj).val();
    var array = $(obj).val().split(".");
    var val = array[0];
    var pval = array[1];
    if (val.length == 1) {
        val = '0' + val;
        $(obj).val(val + "." + (pval));

    }
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
    $(obj).focus();
}




function CheckMaritalStatus(obj) {

    var val = $(obj).val();
    if (val == "SINGLE" || val == "DIVORCED" || val == "WIDOWER") {
        $("#NameOfSpouse").prop("required", false);
        $("#ContactNoOfSpouse").prop("required", false);
        $("#EmailOfSpouse").prop("required", false);


    }
    else {
        $("#NameOfSpouse").prop("required", true);
        $("#ContactNoOfSpouse").prop("required", true);
        $("#EmailOfSpouse").prop("required", true);
    }
}


function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) {
        //alert('Invalid Email Address');
        swal("Pl fill correct email address!", "Error", "info");
        emailField.value = '';
    }

    return true;

}


function isDate(obj) {

    var datestr = $(obj).val();
    if (datestr != null) {
        //var datePat = /^(\d{2,2})(\/)(\d{2,2})\2(\d{4}|\d{4})$/;
        var datePat = new RegExp("^([0]?[1-9]|[1-2]\\d|3[0-1])/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/[1-2]\\d{3}$", 'i');

        //var datePat = /^\d{2}\/\d{3}\/\d{4}$/ //Basic check for format validity
        var matchArray = datestr.match(datePat); // is the format ok?
        if (matchArray == null) {
            swal("Date must be in DD/MM/YYYY format", "Error", "info");
            //  alert("Date must be in DD/MMM/YYYY format")
            $(obj).val(null);

        }
    }
}




function back() {
    window.history.back();
}















