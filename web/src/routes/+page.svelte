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
	// @ts-ignore
	import GunsLolIcon from '~icons/fa6-solid/gun';
	import ProjectCard from '$components/ProjectCard.svelte';
	import URLButton from '$components/inputs-and-buttons/URLButton.svelte';


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
		<!--me card-->
		<Profile name={'wheatwhole'} />
		<p class="giantahhparagraph">
			i'm a full-stack and game developer who has won the internet 🥀🐝
		</p>
		<p class="giantahhparagraph">check out ciabi:</p>
		<URLButton url="https://ciabidev.github.io" urlshort ="ciabidev.github.io" name="ciabi dev team" img="/icons/logo-padded.png" />

		
		<div class="contact-wrapper">
			<Contact href="https://www.roblox.com/users/2342724391/profile" Icon={RobloxIcon} />
			<Contact href="https://discord.com/users/968622168302833735" Icon={DiscordIcon} />
			<Contact href="https://github.com/wheatwhole" Icon={GithubIcon} />
			<Contact href="https://guns.lol/wheatwhole" Icon={GunsLolIcon} />
		</div>
		<!-- <div class="likes-wrapper">
			<h3 class="tiny-title">likes</h3>
			<Tags names={tags} colorPreset={'likesPreset'} />
		</div> -->
	</main>
	<h3 class="tiny title">⏬ my projects ⏬</h3>
		<div class="projects-wrapper">
			<ProjectCard
				banner="/banners/aochallenger.jpg"
				url="https://github.com/ciabidev/AO-Challenger"
				urlshort = "ciabidev/AO-Challenger"
				name="Arcane Odyssey Challenger"
				img="/icons/aochallenger.webp"
				description="PVP discord bot for Arcane Odyssey that features a 1v1 finder and global pvp hosting. Not affiliated with Arcane Odyssey. "
			/>
			<ProjectCard
				banner="/banners/awg.png"
				url="https://github.com/wheatwhole/Award-Winning-Game"
				urlshort="the repository"
				name="award winning game"
				img="/icons/awg.png"
				description="in this pixel platformer adventure, the world has been thrown into chaos after a rogue chemist unleashed a powerful ancient potion, permanently flooding the Earth with unstable magical energy. I havent come up with a name for this yet, so I just called it 'award winning game' since that is what it's gonna be anyways. please excuse the unclear commit messages and 'monobranch' type management. "
			/>
			<ProjectCard
				banner=""
				url="https://routinehub.co/shortcut/19577/"
				urlshort="routinehub.co/shortcut/19577"
				name="Cyclone"
				img="/icons/cyclone.webp"
				description="an entire framework inside iOS Shortcuts (yes, the automation app)."
			/>
			<ProjectCard
				banner=""
				url="https://ciabidev.github.io/packgod/"
				urlshort="ciabidev.github.io/packgod"
				name="packgod humbler 3000"
				img="/icons/packgod.webp"
				description="we call it the packgod humbler 3000, a scary accurate packgod roast generator. will humble any fools in the vicinity. practice caution when using.

	"
			/>



		 </div>
</div>

<style>
	.page-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		height: max-content;
		overscroll-behavior: none;
		overflow-y: none;
		padding: var(--padding);
		gap: 20px;
	}

	.wheatwhole {
		display: flex;
		overscroll-behavior: none;
		flex-direction: column;
		height: fit-content;
		justify-content: center;
		align-items: center;
		gap: 10px;
		overflow-y: none;
		width: 100%;
	}

	.likes-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.9375rem;
		margin-bottom: 1.25rem;
		z-index: 0;
	}

	.projects-wrapper {
		flex-direction: column;
		gap: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	/* smooth box shadows inner shadows */
	}

	.contact-wrapper {
		display: flex;
		position: relative;
		flex-direction: row;
		gap: 7px;
	}



</style>
