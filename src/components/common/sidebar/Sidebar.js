/**
 * Created by Udea-Manager on 2018/7/3.
 */
export default {
  data(){
    return {
      isCollapse: false
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    collapseClick(){
      if(this.isCollapse){
        this.isCollapse = false;
      }else{
        this.isCollapse = true;
      }
    },
  },
  mounted(){
    console.log('哈哈哈')
    console.log(this.$route)
    console.log(this.$router.options.routes)
  }
}
