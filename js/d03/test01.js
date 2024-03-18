document.getElementById('evt').onclick = function(){
    var id=prompt('아이디 입력');
    if(id === 'admin'){
        // 아이디가 admin 과 같은 경우
        var pw = prompt('비밀번호 입력');
        if(pw === '12345'){
            location.href = 'success.html';
        } else {
            location.href = 'error.html';
        }
    } else {
        location.href = 'error.html';
    }
};