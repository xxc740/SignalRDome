$(function () {
    var messageBox = $("#message_box");
    var textMessage = $("#text_message");
    var textName = $("#text_name");

    //创建与服务器的连接，指定连接到ChatHubs这个hub类（注意ChatHubs的c小写）
    var conn = $.connection.chatHubs;

    //定义浏览器端函数，该函数可通过服务器端的hub类中调用  
    conn.client.receiveMessage = function (name, message) {
        messageBox.append("<li><b>" + name + "</b> say: " + message + "</li>");
    }

    //启动signalr与服务器的连接,连接到服务器
    $.connection.hub.start().done(function () {
        $("#btn_send").bind("click", function () {
            ////调用服务端的函数
            conn.server.sendMessage(textName.val(), textMessage.val());
        });
    });
});