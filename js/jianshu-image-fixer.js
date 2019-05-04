// 因为过去的文章是写在简书上面的，迁移过来写了个脚本直接扒下来的
// 此脚本主要是为了解决扒下来的文章的图片的问题
document
  .querySelectorAll('.image-package .image-view img')
  .forEach(function(image) {
    image.src = image.getAttribute('data-original-src');
  })