var StudentArr = [
    {'StudentId':'0','StudentName':'朱玲慧','StudentSex':'女',"StudentAge":'6','StudentYear':'中班','StudentClass':'二班'},
    {'StudentId':'1','StudentName':'王瑶','StudentSex':'女',"StudentAge":'7','StudentYear':'大班','StudentClass':'一班'},
    {'StudentId':'2','StudentName':'陈云','StudentSex':'女',"StudentAge":'5','StudentYear':'小班','StudentClass':'三班'},
    {'StudentId':'3','StudentName':'杨德鳞','StudentSex':'男',"StudentAge":'8','StudentYear':'大班','StudentClass':'二班'},
    {'StudentId':'4','StudentName':'吴佳家','StudentSex':'男',"StudentAge":'7','StudentYear':'中班','StudentClass':'一班'},

];

var tableStudent = $('.tableStudent');
bindStudent();
/*1.循环遍历数组对象绑定在表格中*/
        //查找绑定标签
    function bindStudent() {
        // 循环遍历，将数据动态插入表格中
        for(var StuArr of StudentArr) {
            var StudentId = StuArr["StudentId"];
            var StudentName = StuArr["StudentName"];
            var StudentSex = StuArr["StudentSex"];
            var StudentAge = StuArr["StudentAge"];
            var StudentYear = StuArr["StudentYear"];
            var StudentClass = StuArr["StudentClass"];
            StudentId++;
            // 每行数据绑定在表格中
            tableStudent.append(`<tr>
                    <td><input type="checkbox" name="check"/></td>
                    <td>${StudentId}</td>
                    <td>${StudentName}</td>
                    <td>${StudentSex}</td>
                    <td>${StudentAge}</td>
                    <td>${StudentYear}</td>
                    <td>${StudentClass}</td>
                    <td><button class="del"><span class="icon-shanchu">删除</span></button><button class="revise"><span class="icon-bianji">修改</span></button><button class="up">升学</button><button class="down">退学</button></td>
                    <td><button class="look btn-info" data-toggle="modal" data-target="#myModal"><span class="icon-chakan">查看</span></button></td>
                </tr`);
            //设置表格偶数行变色
            // $("tr:even:not(:first)").css("background","whitesmoke");
        }
        TrDel();
        AddStudent();
        pag();
        searchStudent();
        StudentDown();
    }
/*编辑*/

/* 4.退学*/
function StudentDown() {
    var $down = $('.down');
    $down.on('click',function () {
        $(this).css('color','red');
    })
}
/*5.升学*/
// function StudentUp() {
//     var $up = $('.up');
//     var Year =StudentYear.value;//获取学生年级
//     $up.on('click',function () {
//         // if (Year.val('小班')){
//         //     Year.val().remove(Year);
//         // }
//         // else if (Year.val('中班')==true) {
//         //     Year.val('大班');
//         // }else {
//         //     Year.val('已毕业');
//         // }
//         if (Year == '大班'){
//             alert('毕业')
//         }
//     })
// }
/* 6.查看信息*/
function lookStudent() {
    $(function () {
        $('.look').on('click', function () {
            // for (var i= 0;i<StudentArr.length;i++){
            $('#sId').val();//获取学号
            $('.sName').val();//获取学生姓名
            $('.sSex').val();//获取学生性别
            $('.sAge').val();//获取学生年龄
            $('.sYear').val();//获取学生年级
            $('.sClass').val();//获取学生班级
            $('.sAddress').val();//获取家庭住址
            $('#sIdCard').val();//获取学生身份证号
            $('.jName').val();//获取家长姓名
            $('.jPhone').val();//获取家长电话
            // }
            // var $Id = $("<td>" + sId + "</td>");
            // var $sNme = $("<td>" + sNme + "</td>");
            // var $sSex = $("<td>" + sSex + "</td>");
            // var $sAge = $("<td>" + sAge + "</td>");
            // var $sYear = $("<td>" + sYear + "</td>");
            // var $sClass = $("<td>" + sClass + "</td>");
            // var $sAddress = $("<td>"+sAddress+"</td>");
            // var $sIdCard = $("<td>"+sIdCard+"</td>");
            // var $jName = $("<td>"+jName+"</td>");
            // var $jPhone = $("<td>"+jPhone+"</td>");
            // var $tr = $("<tr><td><input type=\"checkbox\" name=\"check\"/></td></tr>");
            // $tr.append($Id).append($sNme).append($sSex).append($sAge).append($sYear).append($sClass).append($sAddress).append($sIdCard).append($jName).append($jPhone);
            // $(".tableStudent").append($tr);
        })
    })
}
lookStudent();
/*7.搜索框*/
function searchStudent(){
    $(function () {
        $("#tiJiao").on('click',function () {
            var $sea=$('#souSuo').val();
            //先隐藏全部，再把符合筛选条件的值显示
            $('table tbody tr').hide().filter(':contains('+$sea+')').show();
        });
    });
}
/*8.新增学生*/
function AddStudent () {
    $(function () {
        $('#sub').on('click', function () {
            var sId = $('#sId').val();//获取学号
            var sNme = $('.sName').val();//获取学生姓名
            var sSex = $('.sSex').val();//获取学生性别
            var sAge = $('.sAge').val();//获取学生年龄
            var sYear = $('.sYear').val();//获取学生年级
            var sClass = $('.sClass').val();//获取学生班级
            var sAddress = $('.sAddress').val();//获取家庭住址
            var sIdCard = $('#sIdCard').val();//获取学生身份证号
            var jName = $('.jName').val();//获取家长姓名
            var jPhone = $('.jPhone').val();//获取家长电话

            if (!/^[\u4E00-\u9FA5A-Za-z]+$/.test(sNme)) {
                alert('学生姓名只能中文或汉字');
                return false;
            } else if (!/^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))[0-9]{8}$/.test(jPhone)) {
                alert('请输入正确手机号码');
                return false;
            } else if (!/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|30|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/.test(sIdCard)) {
                alert('请输入正确的证件号(18位)');
                return false;
            } else if (!/^[\u4E00-\u9FA5A-Za-z]+$/.test(jName)) {
                alert('家长姓名只能中文或汉字');
                return false;
            } else if (sSex == null || sSex == '') {
                alert('性别不能为空');
                return false;
            } else if (sAge == null || sAge == '') {
                alert('年龄不能为空');
                return false;
            } else if (sYear == null || sYear == '') {
                alert('年级不能为空');
                return false;
            } else if (sClass == null || sClass == '') {
                alert('班级不能为空');
                return false;
            } else if (sId == null || sId == '') {
                alert('学号不能为空');
                return false;
            } else {
                $('#myModal').modal('hide');
            }

            var $Id = $("<td>" + sId + "</td>");
            var $sNme = $("<td>" + sNme + "</td>");
            var $sSex = $("<td>" + sSex + "</td>");
            var $sAge = $("<td>" + sAge + "</td>");
            var $sYear = $("<td>" + sYear + "</td>");
            var $sClass = $("<td>" + sClass + "</td>");
            // var $sAddress = $("<td>"+sAddress+"</td>");
            // var $sIdCard = $("<td>"+sIdCard+"</td>");
            // var $jName = $("<td>"+jName+"</td>");
            // var $jPhone = $("<td>"+jPhone+"</td>");
            // `<td><button class="edit">编辑</button><button class="del">删除</button><button class="revise">修改</button></td>
            //              <td><button>查看</button></td>`

            var $but = $(`<td><button class="del"><span class="icon-shanchu">删除</span></button><button class="revise"><span class="icon-bianji">修改</span></button><button class="up">升学</button><button class="down">退学</button></td><td><button><span class="icon-chakan" data-toggle="modal" data-target="#myModal">查看</span></button></td>`);
            var $tr = $("<tr><td><input type=\"checkbox\" name=\"check\"/></td></tr>");
            $tr.append($Id).append($sNme).append($sSex).append($sAge).append($sYear).append($sClass).append($but);
            $(".tableStudent").append($tr);
            TrDel();
            StudentDown();
        });
        //清空数据
        $('#myModal').on('hidden.bs.modal', function (e) {
            $("#addForm")[0].reset();
        });
    });
    searchStudent();
}

/* 全部选中*//* 10.全部取消*/
$("#checkedAll").click(function() {
    if (this.checked) {
        $("[name=check]:checkbox").prop("checked", true);
    }else {
        $("[name=check]:checkbox").prop("checked", false);
    }
});
/* 批量删除*/
$('#plDel').click(function () {
    if (confirm('确定全部删除吗')) {
        var isChe = $(':CheckBox:checked');
        isChe.each(function () {
            $(this).parent().parent().remove();
        })
    }
});
/*换页符*/
function pag(){
    $(function(){
        $(".pagination").createPage({
            totalPage:30,
            currPage:14,
        });
    });
    (function($){
        var ms = {
            init:function(totalsubpageTmep,args){
                return (function(){
                    ms.fillHtml(totalsubpageTmep,args);
                    ms.bindEvent(totalsubpageTmep,args);
                })();
            },
            //填充html
            fillHtml:function(totalsubpageTmep,args){
                return (function(){
                    totalsubpageTmep="";
                    // 页码大于等于4的时候，添加第一个页码元素
                    if(args.currPage!=1 && args.currPage>=4 && args.totalPage!=4) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >"+1+"</a></li>";
                    }
                    /* 当前页码>4, 并且<=总页码，总页码>5，添加“···”*/
                    if(args.currPage-2>2 && args.currPage<=args.totalPage && args.totalPage>5) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_' data-go='' >...</a></li>";
                    }
                    /* 当前页码的前两页 */
                    var start = args.currPage-2;
                    /* 当前页码的后两页 */
                    var end = args.currPage+2;

                    if((start>1 && args.currPage<4) || args.currPage==1) {
                        end++;
                    }
                    if(args.currPage>args.totalPage-4 && args.currPage>=args.totalPage) {
                        start--;
                    }
                    for(; start<=end; start++) {
                        if(start<=args.totalPage && start>=1) {
                            totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >"+start+"</a></li>";
                        }
                    }
                    if(args.currPage+2<args.totalPage-1 && args.currPage>=1 && args.totalPage>5) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_' data-go='' >...</a></li>";
                    }

                    if(args.currPage!=args.totalPage && args.currPage<args.totalPage-2 && args.totalPage!=4) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >"+args.totalPage+"</a></li>";
                    }
                    $(".pagination").html(totalsubpageTmep);
                })();
            },
            //绑定事件
            bindEvent:function(totalsubpageTmep,args){
                return (function(){
                    totalsubpageTmep.on("click","a.geraltTb_pager",function(event){
                        var current = parseInt($(this).text());
                        ms.fillHtml(totalsubpageTmep,{"currPage":current,"totalPage":args.totalPage,"turndown":args.turndown});
                        if(typeof(args.backFn)=="function"){
                            args.backFn(current);
                        }
                    });
                })();
            }
        };
        $.fn.createPage = function(options){
            ms.init(this,options);
        }
    })(jQuery);
}

/*删除*/
function TrDel(){
    $(function () {
        var tabDel = $('.del');
        tabDel.on('click',function () {
            if (confirm('确定删除吗?')) {
                $(this).closest('tr').remove();
            }
        })
    });
}

