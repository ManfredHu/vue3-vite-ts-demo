// 举例：下面是axios在vue3.0+ts中具体定义方法
import { AxiosInstance } from "axios";
import { Store } from 'vuex'
import { ComponentCustomProperties } from 'vue'
declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    count: number
  }
  
  interface ComponentCustomProperties {
    $store: Store<State>
    $axios: AxiosInstance;
  }
}