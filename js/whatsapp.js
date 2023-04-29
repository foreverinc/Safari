
    var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?52298';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "backgroundColor":"#4dc247",
      "ctaText":"",
      "borderRadius":"25",
      "marginLeft":"0",
      "marginBottom":"50",
      "marginRight":"50",
      "position":"right"
  },
  "brandSetting":{
      "brandName":"BaraBara Safaris Ltd",
      "brandSubTitle":"Typically replies within an hour",
      "brandImg":"https://i.ibb.co/MZBLy49/logo.jpg",
      "welcomeText":"Hi there!\nHow can I help you?",
      "messageText":"Hello, I would like to know more about BaraBara Safaris",
      "backgroundColor":"#0a5f54",
      "ctaText":"Start Chat",
      "borderRadius":"25",
      "autoShow":false,
      "phoneNumber":"256783685802"
  }
};
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
