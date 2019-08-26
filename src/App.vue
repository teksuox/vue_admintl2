<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  created() {
    
    const currentPath = this.$router.history.current.path;

    // if (!window.localStorage.getItem('Logiado')) {
    //   this.$router.push('/login');
    // }

    if (currentPath === '/' || currentPath === '/app' ) {
      this.$router.push('/app/blanco');
    }

  },
};
</script>