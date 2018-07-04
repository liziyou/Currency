/**
 * Created by Udea-Manager on 2018/7/2.
 */
export default {
  data(){
    return {
      loginData:{
        userName:'',
        password:''
      },
      loginRules:{
        userName:[
          {
            required:true,
            validator:(rules,value,callback)=>{
              if(value=='') {
                callback(new Error('请输入用户名'))
              }else{
                callback()
              }
            },
            trigger:'blur'
          }
        ],
        password:[
          {
            required:true,
            validator:(rules,value,callback)=>{
              if(value==''){
                callback(new Error('请输入密码'))
              }else{
                callback()
              }
            },
            trigger:'blur'
          }
        ]

      }
    }
  },
  methods:{
    login(loginFrom){
      this.$refs[loginFrom].validate((valid)=>{
        if(valid){
          console.log('登录验证通过')
          this.$router.push('/home');
        }else{
          return false;
        }
      })
    }
  }
}
