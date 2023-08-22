import { Ref, ref } from 'vue';

export default function (){
  const list:Ref<number[]> = ref([]);

  for (let i = 1; i <= 30; i++) {
    list.value.push(i);
  }

  return {
    list,
  }
}