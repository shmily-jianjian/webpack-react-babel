<template>
  <RichText
    v-model:richContent="formData.content"
    ref="richTextRef"
    @getIsFocus="handleGetIsFoucus"
  >
  </RichText>
</template>

<script setup>
import { ref } from 'vue';
import RichText from './richText.vue';
const formData = ref({ content: '' });
const richTextIsFocus = ref(false);
const richTextRef = ref();

const handleGetIsFoucus = (isFocus) => {
  richTextIsFocus.value = isFocus;
};
</script>
