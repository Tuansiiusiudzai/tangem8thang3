// JavaScript source code
document.getElementById('btn').addEventListener('click', function () {
    // Thêm ho?c xóa l?p 'white-background' khi nút ???c nh?p
    document.body.classList.toggle('white-background');

    // T?o m?t ph?n t? m?i ch?a v?n b?n "Hello"
    var helloText = document.createElement('div');
    helloText.textContent = 'Hello';

    // N?u n?n màu là tr?ng, hi?n th? v?n b?n "Hello"
    if (document.body.classList.contains('white-background')) {
        document.body.appendChild(helloText);
    } else { // N?u không, xóa v?n b?n "Hello"
        document.body.removeChild(helloText);
    }
});
