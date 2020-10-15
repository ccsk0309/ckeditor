CKEDITOR.editorConfig = function( config ) {
  config.toolbar_questions = [
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    { name: 'insert', items: [ 'Mathjax' ] },
  ];

  config.extraPlugins = 'sharedspace,mathjax';
  config.mathJaxLib = '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML'
  config.removePlugins = 'elementspath';
  config.contentsCss = '/assets/ckeditor/contents.css'
};

// ckeditor内のHTMLコメントを禁止
CKEDITOR.on('instanceReady', function (e) {
  e.editor.dataProcessor.dataFilter.addRules({
    comment: function(){
      return false;
    }
  });
});
