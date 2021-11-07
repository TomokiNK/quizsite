//olタグのanswer li内の値を取得
const answersList = document.querySelectorAll('ol.answers li');
//クリックされた時に実行する
answersList.forEach(li => li.addEventListener('click', checkClickAnswer));

//正しい答え
const correctAnswers = {
    question1: 'C',
    question2: 'D',
    question3: 'D',
    question4: 'D'
}

function checkClickAnswer(event) {
    //クリックされた答えの要素(liタグ)
    const clickAnswerElemnts = event.currentTarget;
    //クリックされた答えの要素(olタグ)
    const questionId = clickAnswerElemnts.closest('ol.answers').dataset.id;
    
    //選択した答え
    const selectedAnswer = clickAnswerElemnts.dataset.answer;
    //正しい答え
    const correctAnswer = correctAnswers[questionId];

    //メッセージを格納する変数を用意
     let message;
    //カラーコードを格納する変数を用意
    let answerColorCode;

    if (selectedAnswer == correctAnswer) {
        //正しいの場合
        message = '正解です！おめでとうございます！';
        answerColorCode = '';
    } else {
        //間違いの場合
        message = '残念！不正解です！';
        answerColorCode = 'red';
    }

    //メッセージの表示
    alert(message);

    //答えの色を変更(間違っていあた場合に色変更)
    document.querySelector('span#correct-answer').style.color = answerColorCode;

    //答え全体を表示
    document.querySelector('div#section-correct-answer').style.display = 'block';
}