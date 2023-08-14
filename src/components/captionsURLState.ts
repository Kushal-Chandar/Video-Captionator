import { reactive } from "vue";

export const captionsURL = reactive({
  value: "",
  setValue(url: string){
    this.value = url
  }
});

export default captionsURL;
