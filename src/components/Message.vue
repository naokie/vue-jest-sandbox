<template>
  <li class="message" style="padding-top: 10px;">{{ message }}</li>
</template>

<script>
export default {
  name: 'message',
  props: ['message'],
  created() {
    console.log('CREATED!');
  }
}
</script>
