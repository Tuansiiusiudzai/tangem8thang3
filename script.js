document.getElementById('button').addEventListener('click', function () {
    document.getElementById('image').style.transition = 'opacity 2s'; // Thêm hiệu ứng biến mất từ từ cho hình ảnh
    document.getElementById('image').style.opacity = 0;
    document.getElementById('overlay').classList.remove('hidden');

    const helloText = document.getElementById('helloText');
    const text = "Xin chào! Cô gái của anh. Chúc em 8/3 luôn hạnh phúc, vui vẻ. Sự xuất hiện của em trong thanh xuân của anh như là một món quà, và thực đến hiện tại, anh vẫn chưa thể tin vào sự thật. Vì vậy hãy để anh chăm sóc yêu thương và che chở cho em. Anh biết em là một người muốn tự lập, nhưng sao đâu? Một mình em vẫn ổn, chỉ là có anh sẽ tốt hơn thôi. Và tại sao anh lại nói 'Hãy để anh làm....' thay vì anh cứ làm? Anh không muốn làm những điều em không thích, anh thích tôn trọng sự tự do của em. Vì vậy trong chuyện giữa anh và em, hãy cứ thoải mái không cần phải sợ bị đánh giá hay là bất cứ điều gì khác nhé. Cuối cùng thì...xin lỗi vì gửi lời chúc tới em hơi muộn, mong mọi điều tốt lành đến với em. Love youuu <3🥰 (hihi không giỏi văn lắm nên các câu vẫn dời dạc, nhưng đó là những ý chính mà anh muốn gửi tới em, cảm ơn em đã xem🤗)";
    let index = 0;

    function displayText() {
        if (index < text.length) {
            helloText.textContent += text[index];
            index++;
            setTimeout(displayText, 60); // Thời gian hiển thị cho mỗi kí tự
        }
    }

    displayText();
});
