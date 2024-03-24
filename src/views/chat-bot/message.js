export default (botResponse) => (`
<div class=''>
  <div class='container__message__bot'>
    <div class="message messageBot">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4hhYnxq3v-q05kUNHy6K-QDZFKsZM4cdJg&usqp=CAU" width='80' height='80' alt="">
      </div>
    <div class='content__message___bot'>
      <p class='botName'>Thomas Shelby</p>
      <p class='botmessage'>${botResponse}</p>
      <p class='botDate'>${new Date().toLocaleDateString('fr')}</p>
    </div>
    </div>
  </div>
</div>
`);
