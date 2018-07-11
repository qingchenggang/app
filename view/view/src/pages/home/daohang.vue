<template>
	<div>
		<mu-appbar style="width: 100%;" color="primary">
			<!--<mu-flat-button soft='left' label='保定'class="demo-flat-button" labelPosition='before' icon='folder'/>-->

			<mu-menu slot="right">
				<mu-button flat>MENU</mu-button>
				<mu-list slot="content">
					<mu-list-item button>
						<mu-list-item-content>
							<mu-list-item-title>Menu Item 1</mu-list-item-title>
						</mu-list-item-content>
					</mu-list-item>
					<mu-list-item button>
						<mu-list-item-content>
							<mu-list-item-title>Menu Item 2</mu-list-item-title>
						</mu-list-item-content>
					</mu-list-item>
				</mu-list>
			</mu-menu>
		</mu-appbar>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
		.mu-primary-color {
    background-color: #24b7ab !important;
}
</style>