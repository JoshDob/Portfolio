<!-- Frame.svelte -->
<script>
  // You can add props or logic here if needed
</script>

<div class="wrap">
  <div class="half left" />
  <div class="half right" />
</div>

<style>
  .wrap {
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }

  .half {
    flex: 1;
    height: 100%;
  }

  .left {
    background-color: #fcfafc;
    background-image: linear-gradient(90deg, #fcbd03, #f00314);
  }

  .right {
    background-color: #fcfafc;
    background-image: linear-gradient(270deg, #002de3, #8f03ff);
  }

  .left,
  .right {
    background-size: 200% 200%;
    animation: animatedGradient 8s ease infinite;
  }

  @keyframes animatedGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
