import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//一個狀態就存儲一類要共享的數據
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  //定义状态初始值
  //定义变量的计算逻辑
  const doubleCount = computed(() => count.value * 2)

  //定义怎么改变状态
  function increment() {
    count.value++
  }

  //返回
  return { count, doubleCount, increment }
})
