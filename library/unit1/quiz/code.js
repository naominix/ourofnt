

	//何問目かを格納
	var now = 0;

	//正解数を記録
	var correct = 0;

	//乱数生成
	var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
	var a = arr.length;

	//音声
	var correctaudio = new Audio("sound/correct.mp3");
	var wrongaudio = new Audio("sound/wrong.mp3");

	//シャッフルアルゴリズム
	while (a)
	{
	    var j = Math.floor( Math.random() * a );
	    var t = arr[--a];
	    arr[a] = arr[j];
	   	arr[j] = t;
	}


    /*============================
     * 変数の定義
     *===========================*/

    // 画像のリストの定義
   	 var photoList = [
   	     'img/' + arr[0] + '.png',
   	     'img/' + arr[1] + '.png',
   	     'img/' + arr[2] + '.png',
		 'img/' + arr[3] + '.png',
   	     'img/' + arr[4] + '.png',
   	     'img/' + arr[5] + '.png',
		 'img/' + arr[6] + '.png',
   	     'img/' + arr[7] + '.png',
   	     'img/' + arr[8] + '.png',
		 'img/' + arr[9] + '.png',
   	     'img/' + arr[10] + '.png',
   	     'img/' + arr[11] + '.png',
		 'img/' + arr[12] + '.png',
   	     'img/' + arr[13] + '.png',
   	     'img/' + arr[14] + '.png',
		 'img/' + arr[15] + '.png',
   	     'img/' + arr[16] + '.png',
   	     'img/' + arr[17] + '.png',
		 'img/' + arr[18] + '.png',
		 'img/' + arr[19] + '.png',
		 'img/' + arr[20] + '.png',
   	 ];

	 //回答結果を格納用の配列
	 var answer = [];
	 answer.length = 10;

	//正誤を格納用の配列
	 var result = [];
	 result.length = 10;

	//画像の枚数を取得
    var photoLength = photoList.length;

    // 要素の取得
    var photo = document.getElementById('photo');

    // 現在のインデックスを保存するための変数
    var currentIndex = 0;

	var img = document.getElementById("photo");
	var nownumber = document.getElementById("nownumber");

    /*============================
     * 関数の定義
     *===========================*/


// 画像を切り替える関数
function changeImage()
{
	img.src = photoList[now];
}


function showresult()
{
	var i = 0;
	var j = 0;
	var correct = sessionStorage.getItem('key');
	var questiontxt = sessionStorage.getItem('questiontxt');
	var answertxt = sessionStorage.getItem('answertxt');
	var resulttxt = sessionStorage.getItem('res');

	//受け取った正誤表の文字列を配列として格納
	var result = new Array();
	result = resulttxt.split(",");

	//受け取った回答と正解のidを配列として格納
	var question = new Array();
	question = questiontxt.split(",")

	//画像表示用にidを複製しておく
	imgid = questiontxt.split(",")

	var answer = new Array();
	answer = answertxt.split(",");

	//デコーダでidを文字列に変換する
	for ( j ; j < 10 ; j++)
	{
		question[j] = Number(question[j]);
		question[j] = decode(question[j]);
		answer[j] = Number(answer[j]);
		answer[j] = decode(answer[j]);
	}

	//表示用
	for ( i ; i < 10 ; i++)
	{
		switch(i)
		{
			case 0:
			if (result[i] === "1")
			{
				r0.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r0.insertAdjacentHTML('afterbegin', "×");
			}
				i0.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q0.insertAdjacentHTML('afterbegin', question[i]);
				a0.insertAdjacentHTML('afterbegin', answer[i]);
			break;

			case 1:
			if (result[i] === "1")
			{
				r1.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r1.insertAdjacentHTML('afterbegin', "×");
			}
				i1.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q1.insertAdjacentHTML('afterbegin', question[i]);
				a1.insertAdjacentHTML('afterbegin', answer[i]);
			break;

			case 2:
			if (result[i] === "1")
			{
				r2.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r2.insertAdjacentHTML('afterbegin', "×");
			}
				i2.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q2.insertAdjacentHTML('afterbegin', question[i]);
				a2.insertAdjacentHTML('afterbegin', answer[i]);
			break;

			case 3:
			if (result[i] === "1")
			{
				r3.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r3.insertAdjacentHTML('afterbegin', "×");
			}
				i3.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q3.insertAdjacentHTML('afterbegin', question[i]);
				a3.insertAdjacentHTML('afterbegin', answer[i]);
			break;

			case 4:
			if (result[i] === "1")
			{
				r4.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r4.insertAdjacentHTML('afterbegin', "×");
			}
				i4.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q4.insertAdjacentHTML('afterbegin', question[i]);
				a4.insertAdjacentHTML('afterbegin', answer[i]);
			break;

			case 5:
			if (result[i] === "1")
			{
				r5.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r5.insertAdjacentHTML('afterbegin', "×");
			}
				i5.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q5.insertAdjacentHTML('afterbegin', question[i]);
				a5.insertAdjacentHTML('afterbegin', answer[i]);
			break;

			case 6:
			if (result[i] === "1")
			{
				r6.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r6.insertAdjacentHTML('afterbegin', "×");
			}
				i6.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q6.insertAdjacentHTML('afterbegin', question[i]);
				a6.insertAdjacentHTML('afterbegin', answer[i]);
			break;

			case 7:
			if (result[i] === "1")
			{
				r7.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r7.insertAdjacentHTML('afterbegin', "×");
			}
				i7.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q7.insertAdjacentHTML('afterbegin', question[i]);
				a7.insertAdjacentHTML('afterbegin', answer[i]);
			break;

			case 8:
			if (result[i] === "1")
			{
				r8.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r8.insertAdjacentHTML('afterbegin', "×");
			}
				i8.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q8.insertAdjacentHTML('afterbegin', question[i]);
				a8.insertAdjacentHTML('afterbegin', answer[i]);
			break;

			case 9:
			if (result[i] === "1")
			{
				r9.insertAdjacentHTML('afterbegin', "〇");
			}
			else
			{
				r9.insertAdjacentHTML('afterbegin', "×");
			}
				i9.insertAdjacentHTML('afterbegin', "<img src = img/" + imgid[i] + '.png class= "ansbox">');
				q9.insertAdjacentHTML('afterbegin', question[i]);
				a9.insertAdjacentHTML('afterbegin', answer[i]);
			break;

		}

	}

	score = correct * 10;
	txt.insertAdjacentHTML('afterbegin', score + "点");
	linktxt.insertAdjacentHTML('afterbegin', '<a href = "index.html">もう一度</a>');
}

function main(ans)
{
		nownumber.innerHTML = now+1 + '問目';
        // 表示する画像のインデックスを計算
        currentIndex++;
        if (currentIndex === photoLength) {
            currentIndex = 0;
        }

		//正誤判定
		if( arr[now] == ans ){
			correctaudio.play();
			correct ++ ;
			result[now] = 1;
		}
		else{
			wrongaudio.play();
			result[now] = 0;
		}

		answer[now] = ans;


		//結果発表処理
        if (now === 9) {
			now = 0;
			//正解数を渡す
			sessionStorage.setItem('key', correct);

			//正誤表を文字列にして渡す
			var questiontxt = arr.toString()
			sessionStorage.setItem('questiontxt', questiontxt);

			//正誤表を文字列にして渡す
			var answertxt = answer.toString()
			sessionStorage.setItem('answertxt', answertxt);

			//正誤表を文字列にして渡す
			var resulttxt = result.toString()
			sessionStorage.setItem('res', resulttxt);

			//結果発表ページに飛ぶ
			location.href = "result.html";
        }
		else{
			now ++;
			nownumber.innerHTML = now+1 + '問目';

		}

		//問題数

		//画像切り替え
		changeImage();
}

//画像名と地図記号の内容を変換するデコーダ
//新しい画像を追加するときはここもいじる
function decode(id)
{
	var name;

	switch(id)
	{
		case 1:
		name = "工場";
		break;
		case 2:
		name = "市役所";
		break;
		case 3:
		name = "小中学校";
		break;
		case 4:
		name = "消防署";
		break;
		case 5:
		name = "警察署";
		break;
		case 6:
		name = "郵便局";
		break;
		case 7:
		name = "病院";
		break;
		case 8:
		name = "神社";
		break;
		case 9:
		name = "寺";
		break;
		case 10:
		name = "博物館";
		break;
		case 11:
		name = "図書館";
		break;
		case 12:
		name = "発電所";
		break;
		case 13:
		name = "老人ホーム";
		break;
		case 14:
		name = "温泉";
		break;
		case 15:
		name = "田";
		break;
		case 16:
		name = "果樹園";
		break;
		case 17:
		name = "畑";
		break;
		case 18:
		name = "広葉樹林";
		break;
		case 19:
		name = "針葉樹林";
		break;
		case 20:
		name = "灯台";
		break;
		case 21:
		name = "城跡";
		break;
		default :
			name = "def";

	}


	return(name);
}
