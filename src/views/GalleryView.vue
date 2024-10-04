<template>
  <div class="frame">
    <iframe
      :src="externalUrl"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "GalleryView",
  data() {
    return {
      externalUrl:
        "https://gall.dcinside.com/mgallery/board/lists/?id=grdpiano",
    };
  },
};
</script>

<style scoped>
.frame {
  width: 100%;
  height: 100%;
}
</style>
