<template>
  <RichText
    v-model:richContent="formData.content"
    ref="richTextRef"
    @getIsFocus="handleGetIsFoucus"
  >
  </RichText>
  <div v-html="formData.content"></div>
</template>

<script setup>
import { ref, watch } from 'vue';
import RichText from './richText.vue';
const formData = ref({ content: '' });
const richTextIsFocus = ref(false);
const richTextRef = ref();

const handleGetIsFoucus = (isFocus) => {
  richTextIsFocus.value = isFocus;
};

watch(
  () => formData.value.content,
  () => {
    console.log(formData.value.content);
  },
);
</script>
