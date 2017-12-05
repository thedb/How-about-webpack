console.log('hello')
// import a from './entry1';
require('./entry')
require('./css/main.scss')

$(function(){
  $('.test').on('click',function(){
    alert('别点我1')
    alert('真的别点我')
  })
})
