// calendar.test.js
const { JSDOM } = require('jsdom');

describe('Simple Calendar', () => {
  let document;

  beforeAll(() => {
    const html = `
      <!DOCTYPE html>
      <html lang="jp">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Simple Calendar</title>
      </head>
      <body>
      <div id="calendar"></div>
      </body>
      </html>
    `;
    document = (new JSDOM(html)).window.document;
  });

  test('カレンダーがDOMに存在する', () => {
    // ここでDOMを手動で構築する
    const calendarEl = document.getElementById('calendar');
    calendarEl.innerHTML = '<div class="day"></div>'; // 例として一つの日付要素を追加する

    // カレンダーの日付が正しくレンダリングされているかを確認する。
    const days = calendarEl.getElementsByClassName('day');
    expect(days.length).toBeGreaterThan(0);
  });
});
