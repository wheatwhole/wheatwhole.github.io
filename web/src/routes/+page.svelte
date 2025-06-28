<script>
	import ProjectCardMini from '$components/ProjectCardMini.svelte';
	import Profile from '$components/Profile.svelte';
	import Tags from '$components/Tags.svelte';
	import Contact from '$components/Contact.svelte';
	// @ts-ignore
	import StarIcon from '~icons/basil/star-outline';
	// @ts-ignore
	import RobloxIcon from '~icons/simple-icons/roblox'; /* using Unplugin icons we can load icons at meowbalt speeds! */
	// @ts-ignore
	import DiscordIcon from '~icons/pajamas/discord';	
	// @ts-ignore
	import GithubIcon from '~icons/tabler/brand-github-filled';

let tags = [
		'Minecraft',
		'Avatar: The Last Airbender',
		'Arcane Odyssey by vetexgames',
		'Elemental Warzone',
		'Rush Hour',
		'Grace (game)',
		'Lilo and Stitch',
		'One Piece',
		'Naruto',
		'Dragon Ball',
		'Mario'
	];
</script>

<!--bottom navbar-->
<!--acts as a "body" excluding the navbar -->
<div class="page-wrapper">
	<!-- wrapper of the current view -->
	<main class="wheatwhole">
		<div class="main-profile">
			<!--me card-->
			<Profile name={'wheatwhole'} />
			<section class="short-bio" id="short-bio">
				<p class="giantahhparagraph">
					i'm a full-stack and game developer who has won the internet 🥀🐝
				</p>
			</section>
		</div>
		<div class="contact-wrapper">
			<Contact href="https://www.roblox.com/users/2342724391/profile" Icon={RobloxIcon} />
			<Contact href="https://discord.com/users/968622168302833735" Icon={DiscordIcon} />
			<Contact href="https://github.com/wheatwhole" Icon={GithubIcon} />
			
		</div>
		<div class="likes-wrapper">
			<h3 class="tiny-title">likes</h3>
			<Tags names={tags} colorPreset={'likesPreset'} />
		</div>
	</main>
	<div class="projects">
		<h3 class="tiny title">my games</h3>
		<ProjectCardMini
			url="https://github.com/wheatwhole/Award-Winning-Game"
			urlshort="the repository"
			name="award winning game"
			img="/icons/awg.png"
			description="in this pixel platformer adventure, the world has been thrown into chaos after a rogue chemist unleashed a powerful ancient potion, permanently flooding the Earth with unstable magical energy. I havent come up with a name for this yet, so I just called it 'award winning game' since that is what it's gonna be anyways. please excuse the unclear commit messages and 'monobranch' type management. "
		/>
	</div>
</div>

<style>
	.page-wrapper {
		width: 80%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		min-height: max-content;
		align-items: center;
		height: 100%;
		min-height: max-content;
		overscroll-behavior: none;
	}

	.wheatwhole {
		display: flex;
		overscroll-behavior: none;
		flex-direction: column;
		justify-content: safe center;
		align-items: center;
		width: 22rem;
		position: relative;
		height: fit-content;
		gap: 20px;
		overflow-y: none;
		transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1);
	}

	.likes-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.9375rem;
		margin-bottom: 1.25rem;
		z-index: 0;
	}

	.projects {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 15px;
		display: flex;
	}

	.contact-wrapper {
		width: 100%;
		display: flex;
		position: relative;
		flex-direction: row;
		gap: 7px;
		justify-content: start;
		vertical-align: center;
		align-items: center;
	}

	@media only screen and (max-height: 400px) {
		.page-wrapper {
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			height: max-content;
		}
	}

	@media only screen and (max-width: 1300px) {
		.page-wrapper {
			width: 90%;
		}
	}

	@media only screen and (max-width: 950px) {
		.page-wrapper {
			width: 100%;
			justify-content: center;
			padding: calc(var(--padding) + 15px);
		}
		
		.wheatwhole {
			max-width: 500px;
			width: 100%;
		}
	}
</style>
