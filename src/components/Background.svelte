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
    background-color: #030708;
    background-image: linear-gradient(45deg, #64807e, #060808);
  }

  .right {
    background-color: #030708;
    background-image: linear-gradient(135deg, #060808, #64807e);
  }
</style>
