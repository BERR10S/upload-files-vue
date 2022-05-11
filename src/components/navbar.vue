<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Logo from '@/static/logo-navbar.png'
export default {
  name: 'navbar',
  data () {
    return {
      Logo: Logo
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  .navbar{
    background: rgb(5,36,89);
    background: -moz-linear-gradient(180deg, rgba(5,36,89,1) 97%, rgba(3,19,47,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(5,36,89,1) 97%, rgba(3,19,47,1) 100%);
    background: linear-gradient(180deg, rgba(5,36,89,1) 97%, rgba(3,19,47,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#052459",endColorstr="#03132f",GradientType=1);
    a{
      color: white;
      transition: 0.2s;
      &:hover{
        text-shadow: 0px 0px 5px #ffffff;
        background-color: transparent;
      }
    }
  }
}
</style>
