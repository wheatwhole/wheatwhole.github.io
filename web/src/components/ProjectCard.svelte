<script>
	let { url, urlshort, name, description, img, banner } = $props();
	// @ts-ignore
	import LinkIcon from '~icons/tabler/external-link';
	import URLButton from './inputs-and-buttons/URLButton.svelte';
</script>

<div class="card">
	<!--<a class="project-button" target="_blank" {href}>
    <img src={img} alt={projectName} class="project-icon icon" />
    <div class="project-info">
      <div class="project-name">{projectName}</div>
      <span class="project-url sub-text" data-sveltekit-replacestate><LinkIcon style="min-width: 1rem; min-height: 1rem; flex-shrink: 0;" class="icon" />{url}</span>
    </div>
  </a>
  <div class="sub-text description">
    {description}
  </div> -->

    {#if banner}

	<div class="banner-container">
		<img src={banner} alt={name} />
	</div>
	{/if}
	<div class="card-main">
		<URLButton {url} urlshort={urlshort} {name} {img} />
		<div class="contents">
			<div class="project-header">
				<h2 class="project-name">{name}</h2>
				<div class="sub-text description">{description}</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* i know all these random flex styles are a bandaid solution but for some reason items just wouldn't stay in the flexbox so i had to use this */

	.card {
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		position: relative;
		align-items: flex-start;
		flex-shrink: 0;
		min-height: 250px;
		transition: 0.3s var(--actions-and-stuff-ahh-transition);
		max-width: 500px;
		overflow: hidden;
		box-shadow: var(--shadow-main-border);
	}

	.card-main {
		padding-left: 12px;
		padding-right: 22px; /* the right side should match the TOTAL of the left side */
		padding-top: 12px;
		padding-bottom: 12px;
	}

	.contents {
		padding-left: 10px; /* to align with the URL Button */
	}

	.banner-container {
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		height: 250px;
	}

	.banner-container > img {
		object-fit: cover;
		flex-shrink: 0;
		min-width: 100%;
		min-height: 100%;
		height: auto;
	}

	.project-header {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: var(--text-color);
		position: relative;
		gap: 0.5rem;
	}

	.project-name {
		display: flex;
		font-weight: 600;
	}

	.description {
		font-size: 1rem;
	}

	/* @media only screen and (max-width: 600px) {
     .card {
      width: 100%;
      padding: 14px 18px 18px 6px;
  }
  } */
</style>
