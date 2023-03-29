<script>

  import { selectedProject } from "../store";

</script>
<div class="outer">
  <img class="inner" src={$selectedProject.src} alt={$selectedProject.title} />
</div>

<style>
  .outer {
    height: 100%;
    padding: 1.25rem;
  }

  .inner {
    width: 100%;
    border: 1px solid red;
  }
</style>
