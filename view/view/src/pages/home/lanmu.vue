<template>
	<div>
	<!--	<mu-container id='footer'>
			<mu-bottom-nav>
				<mu-bottom-nav-item to='home' title="美食" color='success' icon="restore"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='recent' title="电影演出" icon="room"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='order' title="酒店住宿" icon="assignment"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='me' title="休闲娱乐" icon="perm_identity"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='me' title="外卖" icon="perm_identity"></mu-bottom-nav-item>
			</mu-bottom-nav>
		</mu-container>-->
		<!--	<mu-container id='footer'>
			<mu-bottom-nav>
				<mu-bottom-nav-item to='home' title="打车" icon="local_taxi" class="vehicle"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='recent' title="名宿公寓" icon="store_mall_directory" class="apartment"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='order' title="周边游" icon="filter_hdr" class="tour"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='me' title="机票" icon="subway" class="ticket"></mu-bottom-nav-item>
				<mu-bottom-nav-item to='me' title="摩拜单车" icon="directions_bike" class="bike"></mu-bottom-nav-item>
			</mu-bottom-nav>
		</mu-container>-->
		<mu-container class="demo-container">
				<mu-row gutter>
			<mu-col span="2.4">
					<mu-icon value="local_taxi" class="vehicle"></mu-icon>
					<div class="grid-cell">美食</div>
				</mu-col>
				<mu-col span="2.4">
					<mu-icon value="store_mall_directory" class="apartment"></mu-icon>
					<div class="grid-cell">电影演出</div>
				</mu-col>
				<mu-col span="2.4">
					<mu-icon value="filter_hdr" class="tour"></mu-icon>
					<div class="grid-cell">酒店住宿</div>
				</mu-col>
				<mu-col span="2.4">
					<mu-icon value="subway" class="ticket"></mu-icon>
					<div class="grid-cell">休闲娱乐</div>
				</mu-col>
				<mu-col span="2.4">
					<mu-icon value="directions_bike" class="bike"></mu-icon>
					<div class="grid-cell">外卖</div>
				</mu-col>
			</mu-row>
		
		
		
		
			<mu-row gutter>
			<mu-col span="2.4">
					<mu-icon value="local_taxi" class="vehicle"></mu-icon>
					<div class="grid-cell">打车</div>
				</mu-col>
				<mu-col span="2.4">
					<mu-icon value="store_mall_directory" class="apartment"></mu-icon>
					<div class="grid-cell">名宿公寓</div>
				</mu-col>
				<mu-col span="2.4">
					<mu-icon value="filter_hdr" class="tour"></mu-icon>
					<div class="grid-cell">周边游</div>
				</mu-col>
				<mu-col span="2.4">
					<mu-icon value="subway" class="ticket"></mu-icon>
					<div class="grid-cell">机票</div>
				</mu-col>
				<mu-col span="2.4">
					<mu-icon value="directions_bike" class="bike"></mu-icon>
					<div class="grid-cell">摩拜单车</div>
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
   line-height: 19px !important;
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