document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const today = new Date();
  const monthDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

  // 曜日のヘッダーを追加
  let daysHtml = '<div class="weekday">日</div><div class="weekday">月</div><div class="weekday">火</div><div class="weekday">水</div><div class="weekday">木</div><div class="weekday">金</div><div class="weekday">土</div>';

  // 月の初日が始まるまで空白を追加
  for (let i = 0; i < firstDay; i++) {
    daysHtml += '<div class="day"></div>';
  }

  for (let day = 1; day <= monthDays; day++) {
    const currentDay = new Date(today.getFullYear(), today.getMonth(), day);
    const isToday = day === today.getDate() ? 'today' : '';
    daysHtml += `<div class="day ${isToday}">${day}</div>`;
  }

  calendarEl.innerHTML = daysHtml;
});
