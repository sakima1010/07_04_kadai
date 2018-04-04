$(function(){
  // 読み込み時に非表示
  $('.choice').hide();
  $('.myhand').hide();

  // 空の変数を用意
  var mess = '';
  var mess2 = '';

  // 0～3の乱数を変数myhandに格納
  var myhand = Math.floor(Math.random() * 3 + 1);
  console.log(myhand)

  // 乱数に応じて自分の出す手を決定
  if (myhand == 1) {
      var mess = "わたしはグーを出したよ<br><img src='images/guu.png'>";
    }else if (myhand == 2){
      var mess = "わたしはチョキを出したよ<img src='images/choki.png'>";
    }else{
      var mess= "わたしはパーを出したよ<img src='images/paa.png'>";
  };

  // 自分の出した手を表示
  $(".myhand").html(mess);

  //startを押したらクリックイベントで表示
  $('#start').on('click',function(){
    $('.choice').show(1000);
    $('.myhand').show(1000);
  });

  //ponを押したらクリックイベント
  $('#pon').on('click',function(){
    //radioタグからユーザーが押した情報を取得
    var yourhand = $("[name=yourhand]:checked").val();
    console.log(yourhand);
    console.log(myhand);

    //ぐー　（1がぐー　2がちょき　3がぱー）
    if (myhand == 1 && yourhand ==1) {
      mess2 = "あいこです";
    } else if (myhand == 1 && yourhand == 2){
      mess2 = "負けです";
    } else if (myhand == 1 && yourhand == 3){
      mess2 = "勝ちです";
    }

    //ちょき　（1がぐー　2がちょき　3がぱー）
    if (myhand == 2 && yourhand ==1) {
      mess2 = "勝ちです";
    } else if (myhand == 2 && yourhand == 2){
      mess2 = "あいこです";
    } else if (myhand == 2 && yourhand == 3){
      mess2 = "負けです";
    }

    //ぱー　（1がぐー　2がちょき　3がぱー）
    if (myhand == 3 && yourhand ==1) {
      mess2 = "勝ちです";
    } else if (myhand == 3 && yourhand == 2){
      mess2 = "負けです";
    } else if (myhand == 3 && yourhand == 3){
      mess2 = "あいこです";
    }

  //結果を表示
    $(".result").html(mess2);
  });



});


// $(function() {
//   // プレイヤーの手の取得
//   var yourhand = $("[name=yourhand]:checked").val();
//   // var yourhand = $('yourhand').attr('value');
//   // 結果を判定
//   if (myhand == yourhand) {
//     var mess2 = "あいこです";
//  };
//   // 結果を表示
//    $(".result").html(mess2);
// });
// });

 // $(document).ready(function(){
 //   $('.choice').hide();
 //   $('.myhand').hide();
 // });
 //
 // $(document).ready(function(){
 //   $('#start').on('click', function(){
 //     $('.choice').show(1000);
 //     $('.myhand').show(1000);
 //   });
 //   $('#pon').on('click', function(){
 //     $(".result").show(1000);
 //   });
   // });
