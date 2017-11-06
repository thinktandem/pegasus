<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <span class="title">
          Pegasus
        </span>
        <system-information></system-information>
      </div>

      <div class="right-side">
        <div class="doc">
          <div class="title">Getting Started</div>
          <p>
            Pegasus is one of the best known creatures in Greek mythology. He is a winged divine stallion usually depicted as pure white in color.
          </p>
          <p>
            Pegasus allows the hero to ride him to defeat a monster, the Chimera, before realizing many other exploits.
          </p>
          <button @click="open('https://github.com/thinktandem/pegasus/')">Read the Docs</button><br><br>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation';

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Arial', sans-serif; }

  #wrapper {
    height: 100vh;
    padding: 30px 80px;
    width: 100vw;
  }

  main {
    height: 286px;
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #000;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #000;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #000;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 0px;
  }

</style>
