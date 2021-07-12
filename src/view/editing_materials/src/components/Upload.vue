<template>
  <div class="upload">
    <el-upload
      action="http://18.166.177.61:8080/api/apply_creator/"
      class="avatar-uploader"
      :show-file-list="false"
      :before-upload="beforeAvatarUpload"
      :on-success="on_success"
    >
      <slot></slot>
    </el-upload>
  </div>
</template>
<script>
export default {
  props: {},
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error("头像只支持jpg,png格式");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return (isJPG || isPNG) && isLt2M;
    },
    on_success(response, file, fileList) {
      this.$emit("on_success", file);
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" >
.upload {
}
</style>
