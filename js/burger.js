document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.line-v1').classList.toggle('line1');
    document.querySelector('.line-v2').classList.toggle('line2');
    document.querySelector('.burger-menu').classList.toggle('active');
});