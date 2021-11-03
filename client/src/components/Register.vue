<template>
  <div>
    <h1>Hello</h1>
    <input v-model="email" type="email" name="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="register">Rgister</button>
  </div>
</template>

<script>
import Auth from "@/services/Auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      console.log("clicked!" + this.email);
      const response = await Auth.register({
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
    },
  },
};
</script>

<style scoped>
</style>
