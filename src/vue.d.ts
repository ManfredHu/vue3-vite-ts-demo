// 举例：下面是axios在vue3.0+ts中具体定义方法
import '@vue/runtime-core'
import { AxiosInstance } from "axios";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}