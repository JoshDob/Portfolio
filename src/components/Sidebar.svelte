<script>
  import { projectImages } from "../projectImages.js";
</script>

<div class="projects">
  {#each projectImages as projectImage, index}
    <div
      class="project-thumbnail"
      style="background-image: url({projectImage.src});"
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

  .project-thumbnail:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px) scale(1.05);
  }
</style>
