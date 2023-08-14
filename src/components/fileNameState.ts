import { reactive } from "vue";

export const fileName = reactive({
  value: "",
  setValue(url: string){
    this.value = url
  }
});

export default fileName;
