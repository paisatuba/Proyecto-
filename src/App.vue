<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="BSP Logo" class="logo" src="@/components/icons/BSP Blanco PNG.png"  height="160" />

    <div class="wrapper">
      <h2 class="Bienve">"Banda Sinfónica De Pensilvania"</h2>

      <nav>
        
        <RouterLink to="/inicio">Inicio</RouterLink>
        <RouterLink to="/horarios">Horarios</RouterLink>
        <RouterLink to="/eventos">Eventos</RouterLink>
        
      </nav>
    </div>
  </header>
  <body>
    <RouterView />
  </body>
  <footer>
    <img alt="BSP footer" class="footer" src="@/components/icons/Logo BSP horizontal negro.png"  height="160" />
  </footer>

  
</template>

<style >
header {
  align-items: center;
  align-content: center;
  text-align: center;
  vertical-align: middle;
  
}
.Bienve{
  color:hsla(160, 100%, 37%, 1);

}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 30px;
  text-align: center;
 
}
.footer{
  align-content: center;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
