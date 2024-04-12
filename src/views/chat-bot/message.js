export default (botName, botImage, botResponse) => (`
<div class=''>
  <div class='container__message__bot'>
    <div class="message messageBot">
      <div>
        <img src="${botImage}" class='avatar' width='80' height='80' alt="">
      </div>
    <div class='content__message___bot'>
      <p class='botName'>${botName}</p>
        ${botResponse}
      <p class='botDate'>${new Date().toLocaleDateString('fr')}</p>
    </div>
    </div>
  </div>
</div>
`);
