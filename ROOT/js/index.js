$(function() {
    var questionInfoStr = '<p>{0}&nbsp;({1})</p>';
    var questionTitleStr = '<p><a href="./question/{0}">{1}</a></p>';
    var questionTagsStr = "<p>Question at {0}</p>";
    var tags = ['question', 'answer'];
    var html = '';

    $.get('./question/query/list', function(data) {
        if (data['ok']) {
            $.each(data, function (key, value) {
                $.each(value['data']['data'], function (key, value) {
                    html = String.format(questionInfoStr, 'user_name', '2012-02-13 16:18:10');
                    html += String.format(questionTitleStr, value, "这是一个神奇的网站");
                    html += String.format(questionTagsStr, getTagsHTML(tags));
                    html = String.format('<td class="questioner-img"><img src="{0}" alt="{1}"></td>', './img/img.jpeg', 'UserName') + '<td>' + html + '</td>';
                    $("#questions").append($('<tr>' + html +'</tr>'));
                });
            });
        }
    });
});
