const api = (props) => {

    let path = "https://apishabu.myseshabu.com/";
    switch(props){
       //ดึงประเภทของอาหารทั้งหมด
       case 'getAllCategory' : return path+"food/getAllCategory";
       //ดึงอาหารโดยเลือกจาก id ประเภทของอาหาร
       case 'getFoodByCategoryID' : return path+"food/getFoodByCategoryID";
       //ตรวจสอบ username และ password เพื่อเข้าสู่ระบบ
       case 'checklogin' : return path+"login/checklogin";
       case 'searchAllMenu' : return path+"food/searchAllMenu";
       /*------------------- PUM ----------------------*/
       case 'getOrderfoodbytableStatus1' : return  path+"order/getOrderfoodbytableStatus1";
       case 'getOrderfoodbytableStatus2' : return  path+"order/getOrderfoodbytableStatus2";
       case 'getOrderfood' : return path+"order/getOrderfood";
       case 'getCheckOrder' : return path+"order/getCheckOrder";
       case 'openbill' : return path+"bill/openbill";
       case 'getAllTable' : return path+"table/getAllTable";
       case 'getTable' : return path+"table/getTable";
       case 'getBillStatusMakepayment' : return path+"bill/getBillStatusMakepayment";
       case 'getOrderByID' : return path+"order/getOrderByID";
       case 'getRowcategory' : return path+"food/getRowcategory";
       case 'getRowfood' : return path+"food/getRowfood";
       case 'getRowOrder' : return path+"food/getRowOrder";
       case 'getRowBill' : return path+"food/getRowBill";
       case 'getDetailOrderbyID' : return path+"order/getDetailOrderbyID";
       
       case 'loadStock' : return path+"stock/loadStock";
       case 'confirmorder' : return path+"order/confirmorder";

       case 'getBillByID' : return path+"bill/getBillByID";
       case 'changeStatusBill2' : return path+"bill/changeStatusBill2";
       case 'changeStatusBill1' : return path+"bill/changeStatusBill1";
       case 'updateorder' : return path+"order/Incrementorder";
       case 'clear' : return path+"order/clear";
       case 'deletemenu' : return path+"order/deletemenu";
       case 'reset' : return path+"login/reset";
       case 'updatepeople' : return path+"bill/updatepeople";
       case 'getNumberOrder' : return path+"order/getNumberOrder";
       case 'getDetailOrderbyID' : return path+"order/getDetailOrderbyID";
       case 'getAllOrder' : return path+"order/getAllOrder";
       case 'changeStatusOrderDetail' : return path+"order/changeStatusOrderDetail";
       case 'getDateOrder' : return path+"order/getDateOrder";
       case 'getBillStatusMakepaymentDate' : return path+"bill/getBillStatusMakepaymentDate";
       case 'register' : return path+"login/register";
       case 'confirmorderall' : return path+"order/confirmorderall";
       case 'getBillIDLast' : return path+"bill/getBillIDLast";
       case 'checkOrderBeforeCheckBill' : return path+"order/checkOrderBeforeCheckBill";
       case 'getDataChartOrder' : return path+"order/getDataChartOrder";
       case 'getBillDayChart' : return path+"bill/getBillDayChart";
       case 'addCategory' : return path+"food/addcategory";
       case 'addfood' : return path+"food/addfood";
       case 'getCategoryById' : return path+"food/getCategoryById";
       case 'getFoodById' : return path+"food/getFoodById";
       case 'updatecategory' : return path+"food/updatecategory";
       case 'deletecategory' : return path+"food/deletecategory";
       case 'updatefood' : return path+"food/updatefood";
       case 'deletefood' : return path+"food/deletefood";

        default : return "";
    }
}


export default api;

