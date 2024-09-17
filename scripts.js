function toggleAnswer() {
    const answerDiv = document.getElementById('standard-answer');
    if (answerDiv.classList.contains('hidden')) {
        answerDiv.classList.remove('hidden');
        document.querySelector('button').textContent = '隐藏标准答案';
    } else {
        answerDiv.classList.add('hidden');
        document.querySelector('button').textContent = '显示标准答案';
    }
}
