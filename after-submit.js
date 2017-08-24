/* After submit form cf7 Bustedll  */
function set_alert_after_submit(page, word){		
    $(document).ajaxComplete(function() {
        if($("body").hasClass(page)||$("body .jPanelMenu-panel #wrapper div[itemscope]").hasClass(page)){
            var contentBox = "<div class='modal-box'>"+
                                "<div class='inside-modal-box'>"+
                                    "<div class='content-box'>"+
                                    "<a class='close' href='#'>&times;</a>"+
                                        "<p class='show-msg'>"+word+"</p>"+
                                    "</div>"+
                                "<div>"+
                            "</div>";
            var getDisplay = $(".wpcf7-response-output.wpcf7-display-none.wpcf7-mail-sent-ok");           
            getDisplay.html(contentBox);
            $(".modal-box").css({
                "position":"fixed",
                "top":"50%",
                "box-shadow":"3px 3px 5px 6px #ccc",
                "background-color":"white",
                "left":"50%;",
                "transform":"translate(-50%, -50%);"				
            });           
            $(".close").css({
                "position": "absolute",
                "top": "20px",
                "right": "30px",
                "transition": "all 200ms",
                "font-size": "30px",
                "font-weight": "bold",
                "text-decoration": "none",
                "color": "#333",
            });
            $(".close").click(function(){
                $(".modal-box").hide();
            });
            $("body").click(function(){
                $(".modal-box").hide();
            });

        }
    });
}

set_alert_after_submit('page-id-12149',' การประเมินราคานี้ยังไม่สิ้นสุด กรุณารอเจ้าหน้าที่ติดต่อกลับเพื่อแจ้งราคาอีกครั้ง และหากต้องการเพิ่มเติมรายละเอียดบนการ์ดนอกเหนือจากแบบฟอร์มนี้ กรุณาแจ้งเจ้าหน้าที่ค่ะ');