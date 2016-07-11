// $(function() {
//   $(document).on('keyup', function(e) {
//     console.log(e)
//   })
//   for (var i = 0; i < 20; i++) {
//     for (var j = 0; j < 20; j++) {
//       $('<div>').addClass('diban').css({
//         width: 30,
//         height: 30,
//         backgroundColor: 'green'
//       }).attr('id', i + '-' + j).appendTo($('.changjing'))
//     }
//   }
//   //初始化蛇
//   var she = [
//   {
//     x: 0,
//     y: 0
//   }, 
//   {
//     x: 0,
//     y: 1
//   }, 
//   {
//     x: 0,
//     y: 2
//   }
//   ];
//   for (var i = 0; i < she.length; i++) {
//     $('#' + she[i].x + '-' + she[i].y)
//     .addClass('she');
//   }
//   //放置食物
//   var shiwu = fangshiwu();
//   function fangshiwu() {
//     var a = Math.floor(Math.random() * 20);
//     var b = Math.floor(Math.random() * 20);
//     $('#' + a + '-' + b).addClass('shiwu');
//     return {
//       x: a,
//       y: b
//     };
//   }
//   var fangxiang = 'you';
//   setInterval(move, 100);
//   function move() {
//     var jiutou = she[she.length - 1];
    
    
    
//     if (fangxiang === 'you') {
//       var xintou = {
//         x: jiutou.x,
//         y: jiutou.y + 1
//       };
//     }
//     if (fangxiang === 'zuo') {
//       var xintou = {
//         x: jiutou.x,
//         y: jiutou.y - 1
//       };
//     }
//     if (fangxiang === 'shang') {
//       var xintou = {
//         x: jiutou.x - 1,
//         y: jiutou.y
//       };
//     }
//     if (fangxiang === 'xia') {
//       var xintou = {
//         x: jiutou.x + 1,
//         y: jiutou.y
//       };
//     }
//     she.push(xintou);
//     $('#' + xintou.x + '-' + xintou.y).addClass('she');
//     if (xintou.x === shiwu.x && xintou.y === shiwu.y) {
//       $('#' + shiwu.x + '-' + shiwu.y).removeClass('shiwu');
//       shiwu = fangshiwu();
//     } else {
//       var weiba = she.shift();
//       $('#' + weiba.x + '-' + weiba.y).removeClass('she');
//     }
//   }
//   $(document).on('keyup', function(e) {
//     if (e.keyCode === 37) {
//       fangxiang = 'zuo';
//     }
//     if (e.keyCode === 39) {
//       fangxiang = 'you';
//     }
//     if (e.keyCode === 38) {
//       fangxiang = 'shang';
//     }
//     if (e.keyCode === 40) {
//       fangxiang = 'xia';
//     }
//   })

// });


$(function(){
  var d=0;
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 20; j++) {
      d+=50;
     $('<div>').addClass('diban').css({width:28,height:28,}).attr('id',i+'-'+j).appendTo('.changjing').delay(d);
    }
  }
    var shebiao={
    '0-0':true,
    '0-1':true,
    '0-2':true
  };
  var she=[
      {x:0,y:0},
      {x:0,y:1},
      {x:0,y:2}
  ];

  for (var i = 0; i < she.length; i++) {
    $('#'+she[i].x+'-'+she[i].y).addClass('she');  
  }
  var fangshiwu=function(){
    do{
    var a=Math.floor(Math.random()*20);
    var b=Math.floor(Math.random()*20);
  }while(shebiao[a+'-'+b]);
    
  

    $('#'+a+'-'+b).addClass('shiwu');
    return {x:a,y:b};
  };
  var shiwu=fangshiwu();
  var t;
  function kaishi(){
    clearInterval(t);
     t=setInterval(move,100);
  }
    function kaishie(){
    clearInterval(t);
     t=setInterval(move,300);
  }
    function kaishis(){
    clearInterval(t);
     t=setInterval(move,500);
  }
  
  function zanting(){
    clearInterval(t);
  }
  var fangxiang='you';

  function move(){


    var jiutou=she[she.length-1];
    if (fangxiang==='you') {
        var xintou={x:jiutou.x,y:jiutou.y+1};
    $('#'+xintou.x+'-'+(xintou.y+1)).addClass('yyy');
    $('#'+(xintou.x-1)+'-'+xintou.y).addClass('sss');
    $('#'+(xintou.x+1)+'-'+(xintou.y)).addClass('xxx');
    }; if (fangxiang==='zuo') {
      var xintou={x:jiutou.x,y:jiutou.y-1};
    $('#'+xintou.x+'-'+(xintou.y-1)).addClass('zzz');
    $('#'+(xintou.x-1)+'-'+xintou.y).addClass('sss');
    $('#'+(xintou.x+1)+'-'+(xintou.y)).addClass('xxx');
    }; if (fangxiang==='shang') {
      var xintou={x:jiutou.x-1,y:jiutou.y};
    $('#'+xintou.x+'-'+(xintou.y-1)).addClass('zzz');
    $('#'+(xintou.x-1)+'-'+xintou.y).addClass('sss');
    $('#'+xintou.x+'-'+(xintou.y+1)).addClass('yyy');
    }; if (fangxiang==='xia') {
      var xintou={x:jiutou.x+1,y:jiutou.y};
    $('#'+xintou.x+'-'+(xintou.y-1)).addClass('zzz');
    $('#'+(xintou.x+1)+'-'+xintou.y).addClass('xxx');
    $('#'+xintou.x+'-'+(xintou.y+1)).addClass('yyy');
    };
    
    
    
    if (xintou.x>19||xintou.x<0||xintou.y>19||xintou.y<0){
      zanting();
        $('.dabeijing1').removeClass('damenzuo');
        $('.dabeijing2').removeClass('damenyou');
        $('.chongxinkaishi').addClass('cxkschuxian');
      return;
    };
    if (shebiao[xintou.x+'-'+xintou.y]){
      zanting();
        $('.dabeijing1').removeClass('damenzuo');
        $('.dabeijing2').removeClass('damenyou');
        $('.chongxinkaishi').addClass('cxkschuxian');
      console.log('zhuangziji');
      return;
    };


    $('#' + xintou.x + '-' + xintou.y).addClass('she');
    she.push(xintou);
    shebiao[xintou.x+'-'+xintou.y]=true;


    if (xintou.x===shiwu.x&&xintou.y===shiwu.y){
      $('#'+shiwu.x+'-'+shiwu.y).removeClass('shiwu');
      shiwu=fangshiwu();
    }else{
      var weiba=she.shift();
      
      $('#'+weiba.x+'-'+weiba.y).removeClass('she');
      delete shebiao[weiba.x+'-'+weiba.y];
    }
    $('.cebianlan span').html('分数：'+(she.length-3));
    //东东
    $('#'+shiwu.x+'-'+(shiwu.y-1)).toggleClass('zzzz');
    $('#'+shiwu.x+'-'+(shiwu.y+1)).toggleClass('yyyy');
    $('#'+(shiwu.x-1)+'-'+shiwu.y).toggleClass('ssss');
    $('#'+(shiwu.x+1)+'-'+(shiwu.y)).toggleClass('xxxx');



  }

  
  var biao={
    'zuo':37,
    'you':39,
    'shang':38,
    'xia':40
  };
  $(document).on('keydown',function(e){
    if (Math.abs(e.keyCode-biao[fangxiang])===2) {
      return;
    }
    if (e.keyCode === 37) {
      fangxiang = 'zuo';
     }
     if (e.keyCode === 39) {
       fangxiang = 'you';
    }
   if (e.keyCode === 38) {
       fangxiang = 'shang';
    }
     if (e.keyCode === 40) {
      fangxiang = 'xia';
    }
  });
  $('.kaishiyouxi').on('click',function(){
    kaishi();
  });
    //$('.kaikaikai').on('click',function(){
    //kaishi();
  //});
    //$('.cebian2 zanzanzan').on('click',function(){
      //zanting();
    //})
  $('.cebian2').click(function(){
    
    $(this).toggleClass('kaikaikai');
    if ($(this).hasClass('kaikaikai')){
      $(this).find('span').html('开始');
      zanting();
    }else{
      $(this).find('span').html('暂停');
      kaishi();
    }
  })
 $('.diyi').on('click',function(){
  $(this).addClass('damenshang');
  $('.dabeijing1').addClass('damenzuo');
  $('.dabeijing2').addClass('damenyou');
  $('.kaishiyouxi').addClass('huifu3');
  $('.kaishiyouxi').addClass('huifu3');
  $('.cebianlan').addClass('huifu2');
  $('.cebian2').addClass('huifu2');
  $('.zhong').addClass('huifu');
  $('.changjing').addClass('huifu2');

 })
 $('.chongxinkaishi').on('click',function(){
  location.reload();
 })
});