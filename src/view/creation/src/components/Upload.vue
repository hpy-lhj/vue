<template>
  <div class="upload">
    <el-upload
      class="upload-demo"
      action="http://18.166.177.61:8080/api/apply_creator/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :on-success="on_success"
      multiple
      :limit="1"
      :on-exceed="handleExceed"
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    on_success(response, file, fileList) {
      this.$emit("on_success",file)
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" >
.upload {
}
</style>
