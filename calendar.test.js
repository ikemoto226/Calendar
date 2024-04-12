const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// テスト対象のHTMLファイルをロード
const html = fs.readFileSync(path.resolve(__dirname, './path/to/your/calendar.html'), 'utf-8');

// テストケース
describe('カレンダーシステム', () => {
  it('現在の月を正しく表示する', () => {
    const dom = new JSDOM(html);
    const currentMonth = new Date().getMonth() + 1; // JavaScriptでは月が0から始まるため
    const displayedMonth = dom.window.document.querySelector('#current-month').textContent;

    expect(displayedMonth).toContain(currentMonth.toString());
  });
});
