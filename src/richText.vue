<template>
  <div class="richWrap">
    <div id="editor" />
    <div class="tips">
      <slot name="tips" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits, defineExpose } from 'vue';
import FroalaEditor from 'froala-editor';

import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/plugins.pkgd.min.css';
import 'froala-editor/css/themes/gray.min.css';
import 'froala-editor/js/languages/zh_cn';

const props = defineProps({
  richContent: String,
});

const emits = defineEmits(['update:richContent', 'getIsFocus']);

const editorRef = ref();

defineExpose({
  editorInstance: editorRef,
});

const initEditor = () => {
  editorRef.value = new FroalaEditor(
    '#editor',
    {
      language: 'zh_cn',
      height: 501,
      toolbarButtons: [
        'bold',
        'italic',
        'underline',
        'fontFamily',
        'fontSize',
        'textColor',
        'backgroundColor',
        'insertLink',
        'alignLeft',
        'alignCenter',
        'alignRight',
        'alignJustify',
        'formatOLSimple',
        'formatOL',
        'formatUL',
        'clearFormatting',
        'strikeThrough',
        'lineHeight',
        'outdent',
        'indent',
        'insertImage',
        'fontAwesome',
        'insertHR',
        'insertTable',
        'fullscreen',
        'print',
        'selectAll',
        'undo',
        'redo',
      ],
      theme: 'gray',
      events: {
        'charCounter.update': function () {
          let html = editorRef.value.html.get(true);
          // html.
          emits('update:richContent', html);
        },
        focus: function () {
          emits('getIsFocus', true);
        },
        blur: function () {
          emits('getIsFocus', false);
        },
      },
    },
    function () {
      editorRef.value.html.set('');
      editorRef.value.html.set(props.richContent);
    },
  );
};

onMounted(() => {
  initEditor();
});
</script>

<style lang="scss" scoped>
.richWrap {
  position: relative;
  width: 100%;
}

.tips {
  position: absolute;
  top: 100px;
  left: 1px;
  z-index: 2;
  width: calc(100% - 2px);
}

:deep(.fr-element) {
  min-height: 500px !important;
}

:deep(#fr-logo) {
  display: none;
}

:deep(.fr-btn-grp) {
  .fr-svg {
    transform: scale(0.8);
  }
}
</style>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.fr-wrapper div:nth-child(1) {
  position: relative;
  top: -10000px;
  opacity: 0;
}

.fr-element.fr-view {
  position: absolute;
  width: 100%;
  top: 0px;
}

.fr-placeholder {
  margin-top: 0 !important;
}
</style>
