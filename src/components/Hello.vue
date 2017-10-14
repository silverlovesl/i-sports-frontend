<template>
  <div class="hello">
    <v-text-field label="Name" id="txtName"></v-text-field>
  </div>
</template>

<script>
import Profile from '../model/profile'
import ProfileService from '../service/profile-service'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'health management'
    }
  },
  mounted() {
    let ps = new ProfileService();
    ps.getProfile().then(res => {
      let profile = new Profile(JSON.parse(res.bodyText));
      console.log(profile);

    });
  },
  methods: {
    getProfile: () => {
      let ps = new ProfileService();
      ps.getProfile().then(res => {
        console.log(res.bodyText);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
