function performGetRequest () {

  $(document).ready(function(){
    $.ajax({
      url: "http://localhost:4001/api/statuses/home_timeline",
      method :'GET',
      dataType : 'JSON',
      success : function (tweets) {
       tweets.forEach(item => {
         console.log(item);
         $("#getResult").append(
           `<h3>${item.user.screen_name} </h3>
           <p>${item.text} </p>
           <p>${item.user.created_at}</p>`);
       })
      }
    })
  })
 }
