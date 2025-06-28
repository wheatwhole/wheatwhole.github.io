<script>
	let { urlshort, url, name, description, img } = $props();
	// @ts-ignore
	import URLButton from './inputs-and-buttons/URLButton.svelte';
</script>

<div class="card">
	<URLButton {url} {urlshort} {name} {img} />
	<div class="contents">
		<div class="sub-text description">
			{description}
		</div>
	</div>
</div>

<style>
	/* i know all these random flex styles are a bandaid solution but for some reason items just wouldn't stay in the flexbox so i had to use this */

	.card {
		border-radius: var(--border-radius);
		box-shadow: var(--shadow-main-border);
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		position: relative;
		padding: 12px 22px 22px 12px;
		align-items: flex-start;
		flex-shrink: 0;
		min-height: 250px;
		transition: 0.3s var(--actions-and-stuff-ahh-transition);
		max-width: 500px;
	}

	.project-button {
		user-select: none;
		flex-shrink: 0;
		display: flex;
		min-width: fit-content;
		flex-basis: content;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		position: relative;
		border-radius: var(--border-radius);
		padding: 7px 9px;
		width: max-content;
	}

	.project-button:hover {
		background: var(--hover-bg);
		filter: brightness(1.1);
	}

	.url-text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-decoration: none;
		color: var(--text-color);
		position: relative;
	}

	.url-name {
		display: flex;
		font-weight: 600;
		font-size: 0.9rem;
	}

	.url-destination {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 0.9rem;
		gap: 5px;
	}

	.project-icon {
		width: 3rem;
		height: 3rem;
		border-radius: 12px;
	}

  .contents {
    padding-left: 10px;
  }

	.description {
		font-size: 0.9rem;
	}

	/* @media only screen and (max-width: 600px) {
     .card {
      width: 100%;
      padding: 14px 18px 18px 6px;
  }
  } */
</style>
