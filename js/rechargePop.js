var str = '<div class="cover1"><div class="inner1"><div class="close"></div><div class="title">充值提醒</div><p>您今天的免费查询次数已用完，您还可以充值 继续无限制的查询，查询一次是2.0元。</p><div class="remain">当前余额：<span>0元</span></div><input type="text" placeholder="请输入充值金额"><p>为了方便您的查询，每次收费都会自动扣除余 额，请保持余额充足</p><a class="btn cancel" href="javascript:void(0)">取消</a> <a class="btn sure">充值</a></div></div>';
var body = document.getElementsByTagName('body')[0];
body.innerHTML += str;
$('.close').click(function () {
    $('.cover1').hide();
});
$('.cancel').click(function () {
    $('.cover1').hide();
});