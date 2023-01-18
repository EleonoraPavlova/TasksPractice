<template>
	<div
		class="slide"
		:style="{ backgroundImage: `url(${image.link})` }"
		@click="$emit('click')"
	>
		<h3 class="slide__h3" :class="{ active: isActive }">{{ image.name }}</h3>
	</div>
</template>

<script>
export default {
	name: "OneCard",
	props: {
		image: {
			type: Object,
			default: null,
		},
		isActive: {
			type: Boolean,
		},
	},

	emits: ["click"],
};
</script>

<style lang="scss">
.slide {
	height: 80vh;
	border-radius: 20px;
	margin: 10px;
	cursor: pointer;
	color: white;
	padding: 8px;
	flex: 1;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	transition: all 500ms ease-in-out;
	display: flex;
	align-items: end;
	&__h3 {
		padding: 10px;
		font-size: 24px;
		margin: 5px;
		opacity: 0;
		&.active {
			opacity: 1;
			transition: opacity 0.3s ease-in 0.4s;
		}
	}
	&.active {
		flex: 20;
	}
}
</style>
