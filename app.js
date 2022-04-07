const BTN = document.querySelector('.btn');
const advice_tag = document.querySelector('.advice-tag');
const para = document.querySelector('.advice');

function onBtnClick(){
// console.log('click');
   fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
   .then(resp => resp.json()
   .then(jsonData => {
       advice_tag.text = 'advice #' + jsonData['slip']['id']
       para.innerText = '"' + jsonData['slip']['advice'] + '"'
   }) 
)
}

BTN.addEventListener('click', onBtnClick);
onBtnClick();