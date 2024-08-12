$(document).ready(function () {
   
    
  
    $("#txtsearch").autocomplete({
       // source: function (request, response) {

        //    $.ajax({
        //        url: "/AA7/SearchAviator",
        //        type: "POST",
        //        dataType: "json",
        //        data: { EmpName: request.term },
        //        success: function (data) {
        //            response($.map(data, function (item) {
        //                return { label: item.AviatorName, value: item.ArmyNumber };
        //            }))

        //        }
        //    })
        //},
        //messages: {
        //    noResults: "", results: ""
        //}
            //source: ["c++", "java", "php", "coldfusion", "javascript"],
          
        source: function (request, response) {
           
            var param = { "EmpName": request.term };
                $.ajax({
                    url: '/AA7/SearchAviator',
                    //data: "{'prefix': '" + request.term + "'}",
                    data: JSON.stringify(param),
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                        console.log(data);
                        response($.map(data, function (item) {
                            return { label: item.ArmyNumber + String.fromCharCode(160) + String.fromCharCode(160) + String.fromCharCode(160) + item.AviatorName, value: item.Aviator_ID };

                            //return { label: item.ArmyNumber +'   '+item.AviatorName + '', value: item.Aviator_ID };
                           // return { label: item.AviatorName + ' (' + item.ArmyNumber + ')', value: item.Aviator_ID };
                        }))
                    },
                    error: function (response) {
                        alert(response.responseText);
                    },
                    failure: function (response) {
                        alert(response.responseText);
                    }
                });
            },
        select: function (e, i) {
            e.preventDefault();
                $("#txtsearch").val(i.item.label);
            var param1 = { "AviatorIds": i.item.value, "AvitorName": i.item.label };
                $.ajax({
                    url: '/AA7/SessionAviator',
                    //data: "{'prefix': '" + request.term + "'}",
                    data: JSON.stringify(param1),
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    success: function (data) {
                       
                        window.location.replace(window.location.origin + '' + window.location.pathname);
                    }
                });
            },
         appendTo: '#suggesstion-box'
    });
}) 