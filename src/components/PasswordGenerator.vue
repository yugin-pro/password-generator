<template>
<div>
    <label for="signNumber">Password Length:</label>
    <input type="number" id="signNumber" name="signNumber" required
        min="4" maxlength="200" v-model="options.length" > <br>
    <label for="pass">Password:</label>
    <input type="text" id="pass" name="pass" minlength="4" maxlength="8" size="30" v-bind:value="password">
    <button  @click="generatePassword">generate</button>
    <br>
    <ul>
        <li v-for="pass of passwordList">{{ pass }} </li>
    </ul>
</div>

</template>

<script>
import PaswordService from "../services/PasswordService.js";

export default {
  data() {
    return { 
        password: '',
        passwordList:[],
        options:{
            length: 8,
            charsets: ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789"]
        }
     }
  },
  methods: {
      generatePassword() {
          let password = PaswordService.generate(this.options)
          this.password = password
          this.passwordList.unshift(password)
      }
  }
}
</script>

<style>

</style>