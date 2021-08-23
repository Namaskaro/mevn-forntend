<template>
  <div class="wrap">
    <div class="container__inner">
      <h1 class="fourofour">404</h1>
      <img
        class="astronaut"
        src="https://www.kennedyspacecenter.com/-/media/DNC/KSCVC/Global-Images/spaceman.ashx?h=263&w=252&la=en&hash=2FB54795818BD9CF32971DFA04CF41F420B6F63C"
        alt=""
      />
      <div class="helper">
        <h2>Whoa! How did you get out here?</h2>
        <h3>
          <a href="https://dribbble.com/ianhazelton" target="_blank"
            >Go back to earth</a
          >
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
body {
  background-color: #000;
}

.wrap {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
}

.container__inner {
  position: relative;
  width: 800px;
  height: 600px;
  background: url('https://timedotcom.files.wordpress.com/2017/10/229-westerlund-21.jpg?w=1520&quality=85&h=1139')
    0 0 no-repeat;
}

.fourofour {
  font-size: 30rem;
  color: #7e00ff80;
  mix-blend-mode: multiply;
  position: absolute;
  left: 20%;
}
.astronaut {
  animation: spin 20000ms linear infinite;
  height: 150px;
  margin: 20% auto;
  width: auto;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

a,
h2,
h3 {
  color: #5c1577;
  font-family: 'Anton', sans-serif;
  font-size: 3rem;
  text-align: center;
  mix-blend-mode: multiply;
}

a {
  text-decoration: underline;
}
</style>
