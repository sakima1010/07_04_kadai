$(function() {
  // 0～3の乱数を変数myhandに格納
  var myhand = Math.floor( Math.random() * 3 + 1);

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
 return myhand;
});

$(function() {
  // プレイヤーの手の取得
  var yourhand = $("[name=yourhand]:checked").val();
  // var yourhand = $('yourhand').attr('value');
  // 結果を判定
  if (myhand == yourhand) {
    var mess2 = "あいこです";
 };
  // 結果を表示
   $(".result").html(mess2);
});

 $(document).ready(function(){
   $('.choice').hide();
   $('.myhand').hide();
 });

 $(document).ready(function(){
   $('#start').on('click', function(){
     $('.choice').show(1000);
     $('.myhand').show(1000);
   });
   $('#pon').on('click', function(){
     $(".result").show(1000);

       // $('.result').html("あいこ");
     // }else if(myhand == 2){
     //   $('.result').html("あなたのまけ");
     // }else{
     //   $('.result').html("あなたのかち");
   });
   });




//   $(document).ready(function(){
   // $('#gu').on('click', function(){
//      if(myhand == 1){
//        $(".result").html("あいこ");
//      }else{
//        $(".result").html("そのた");
//      };
//      console_log();
//  });
// });
    // if(myhand == 1){
    //   $('#gu').on('click',function(){
    //     $(".result").html("あいこ");
    //   }else{
    //     $(".result").html("そのた");
    //   };
    // )};



// 確認
 // $(document).ready(function(){
 //   $('#gu').on('click',function){
 //     if(myhand == 1){
 //       $(".result").html("あいこ");
 //     }else if(myhand == 2){
 //       $(".result").html("あなたのかち");
 //     }else{
 //       $(".result").html("あなたのまけ");
 //     });



 //    $(".result").html(mess2);
 //   }
 // }
//
// $('#gu').on('click',function(){
//   if()$('#ex').show(2000);
//   count++;
//   $("#ex").html(count);
//   $("#ex").css("border",count +"px solid");
// });

// $(document).ready(function(){
//   $('#gu').on('click', function(){
//   alert("押されたよ");
//
// });

// if (val==0) {
//   alert("0です");
// }else{
//   alert(unkokko);
// }
//
// console_log()
// $(function(){
//  if (val==0) {
//
//  });

//     'use strict';
//
//     const $els   = $('button'),
//           hand   = new Map(),
//           result = new Map([
//               [0, 'あいこ'],
//               [1, '負け'],
//               [2, '勝ち']
//           ]);
//
//     $els.each(function(){
//         const num = parseInt($(this).val()),
//               val = $(this).text();
//
//         hand.set(num, val);
//     });
//
//     $els.on('click', function(){
//
//         const playerChoice = parseInt($(this).val()),
//               enemyChoice  = Math.floor(Math.random() * 3 + 1),
//               judge        = (playerChoice - enemyChoice + 3) % 3;
//
//         $('#result').html(
//             `<h2 class="info">結果</h2>` +
//             `<p><b>あなた:</b> ${hand.get(playerChoice)}<br>` +
//             `<b>あいて:</b> ${hand.get(enemyChoice)}</p>` +
//             `<p><b>「${result.get(judge)}」</b>です</p>`
//         );
//     });
// });


// // $(document).ready(function(){
// //  alert('読み込まれているか実験')
// // });
// //
// // $(document).ready(function(){
// //  alert('読み込まれているか実験')
// // });
// //
// // $(document).ready(function(){
// //  var box ='変数の中身のテスト';
// //  alert('読み込まれているか実験');
// //  console.log(1);
// // });
//
// $(document).ready(function(){
//   $('.box').on('click', function(){
//   alert("押されたよ");
//   console.log("押されたよ");
// });
//
// $('#js').on('click',function(){
// 　var elem = '<a href="#">次ページ</a>';
//   $("#js").html(elem);
//   // $("#js").text(elem);
//   // $("#js").css("color","#ff0");
//   $("#js").show(4000); //hide
//   // $("#js").prepend(elem); //要素の先頭にHTML要素を追加
//   // $("#js").append(elem);  //要素の最後にHTML要素を追加
//   // $("#js").empty(); //子要素を全て削除
//   // $("#js").remove(); //要素を全て削除
// });
//
//
// // 演習1ここから
// // var count = "0";
// //
// // $('#hide').on('click',function(){
// //   $('#ex').hide(2000);
// // });
// // $('#show').on('click',function(){
// //   $('#ex').show(2000);
// //   count++;
// //   $("#ex").html(count);
// //   $("#ex").css("border",count +"px solid");
// // });
// // 演習1ここまで
//
// // 演習2ここから
// var p1 = "<p>かきくけこ</p>";
// var p2 = "<p>あいうえお</p>";
// var p3 = "<p>さしすせそ</p>";
//
// $('#ex').hide().fadeIn(4000);
// $('#ex').html(p1);
// $('#ex').prepend(p2);
// $('#ex').append(p3);
// //
//
// $('#ex').css("color","#fff");
// $('#ex').css("background-color","#000");
// $('#ex>:odd').css("background-color","#fff");
//
// // http://www.searchlight8.com/jquery-background-color-change/
// });
