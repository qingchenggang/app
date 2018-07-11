<template>
	<div>
		<mu-container class="demo-container">
			<mu-row gutter>
				<mu-col span="6" >
					
					<div class="grid-cell">打车</div>
				</mu-col>
				<mu-col span="6">
					
					<div class="grid-cell">名宿公寓</div>
				</mu-col>

			</mu-row>

		</mu-container>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="less">
	.demo-container {
		.row {
			margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.grid-cell {
			border-radius: 4px;
			height: 36px;
			
		}
	}
	
	.demo-container.is-stripe .col:nth-child(2n) .grid-cell {
		background: rgba(0, 0, 0, 0.54);
	}
	.demo-container .grid-cell {
    border-radius: 4px;
   
  
}
.demo-container {
    text-align: center;
   line-height:50px !important;
   background-color: white;
}
.vehicle {
	color:#2986e3;
}
.apartment{
	color: #fcb937;
}
.tour{
	color: #44a8fd;
}
.ticket{
	color: #41a9ff;
}
.bike{
	color: #f74310;
}
</style>