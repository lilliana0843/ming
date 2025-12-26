// 建立一個 IntersectionObserver 物件
// 它會幫我們「觀察元素有沒有進入畫面」
const observer = new IntersectionObserver(entries => {

  // entries 是一個陣列
  // 裡面每一個 entry 代表一個被觀察的元素
  entries.forEach(entry => {

    // isIntersecting 代表：
    // 這個元素「現在是否出現在螢幕範圍內」
    if (entry.isIntersecting) {

      // 如果元素進入畫面
      // 就在這個元素身上加上 class="show"
      // 讓 CSS 的 .fade-in.show 生效
      entry.target.classList.add('show');
      
    }
  });
});


// 找出所有有 .fade-in 這個 class 的元素
document.querySelectorAll('.fade-in').forEach(el => {

  // 把每一個元素交給 observer 觀察
  // 當它們進入畫面時，就會觸發上面的 callback
  observer.observe(el);
});
