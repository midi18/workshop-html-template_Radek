const btn = document.querySelector("#click-btn");
const text = document.querySelector("#click-show");
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const rechteck = document.getElementById('rechteck');
let count = 0;

btn.addEventListener(("click"), (e) => {
    count++;
    text.textContent = `${count} clicks`
})
plus.addEventListener('click', () => {
    rechteck.style.width = rechteck.offsetWidth + 10 + 'px';
    rechteck.style.height = rechteck.offsetHeight + 10 + 'px';
})

minus.addEventListener('lick', () => {
    rechteck.style.width = rechteck.offsetWidth - 10 + 'px';
    rechteck.style.height = rechteck.offsetHeight - 10 + 'px';
})