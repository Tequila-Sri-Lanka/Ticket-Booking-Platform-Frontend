<template>
  <div id="gbtn" ref="googleLoginBtn"></div>
</template>

<script>
export default {
  mounted() {
    const gClientId = '965754081860-emujf40ikcaldba96qpkm5mil5l3b9g5.apps.googleusercontent.com'; 
    window.google.accounts.id.initialize({
      client_id: gClientId,
      callback: this.handleCredentialResponse,
      auto_select: true,
    });
    
    window.google.accounts.id.renderButton(
      this.$refs.googleLoginBtn, {
        text: 'signin_with',
        size: 'large', 
        width: '100%',
        theme: 'outline', 
        logo_alignment: 'left' 
      }
    );
  },
  methods: {
    
    async handleCredentialResponse(response) {
          console.log(response.credential);

          //need send to googleUser token to backend
     
    }
  }
}
</script>

<style scoped>

</style>
