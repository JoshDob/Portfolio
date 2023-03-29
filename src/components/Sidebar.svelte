<script>
  import { projectImages } from "../projectImages.js";
  import { selectedProject } from "../store.js";
</script>

<div class="projects">
  {#each projectImages as projectImage}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="project-thumbnail"
      class:selected={$selectedProject.title === projectImage.title}
      style="background-image: url({projectImage.src});"
      on:click={() => selectedProject.set(projectImage)}
    />
  {/each}
</div>

<style>
  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .project-thumbnail {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    cursor: pointer;
    height: 150px;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
    width: 150px;
  }

  .selected {
    border: 2px solid greenyellow;
  }

  .project-thumbnail:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px) scale(1.05);
  }
</style>
