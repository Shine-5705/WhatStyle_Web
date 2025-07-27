<script>
  import bgImg from "../../images/cardImg.png";
  import { Image } from "@unpic/svelte";
  export let title = "Card Title";
  export let description = "This is a description for the image card.";
  export let buttonText = "Learn More";
</script>

<div class="image-card">
  <div class="image-container">
    <Image
      src={bgImg}
      alt={title}
      sizes="min(320px, 100vw)"
      width={904}
      height={1200}
      style="width: 100%; height: 100%; object-fit: cover; display: block;"
    />
  </div>
  <div class="card-content">
    <h2 class="card-title">{title}</h2>
    <p class="card-description">{description}</p>
    <button class="card-button">{buttonText}</button>
  </div>
</div>

<style lang="scss">
  .image-card {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .image-container {
    width: 100%;
    aspect-ratio: 904 / 1200; /* Matches the 904x1200 image */
    overflow: hidden;
    position: relative;
  }

  .card-content {
    padding: 16px;
    text-align: center;
  }

  .card-title {
    font-size: 1.5rem;
    margin: 0 0 8px;
    color: #333;
  }

  .card-description {
    font-size: 1rem;
    color: #666;
    margin: 0 0 16px;
  }

  .card-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0056b3;
    }
  }

  enhanced\:img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
</style>