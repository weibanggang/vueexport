<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<ul id="example-1">
		<li v-for="item in datas" :key="item.message" >
			{{ item.message }}
		</li> 
		</ul>
	</div>
</template>

<script>
 export default {
	   name: 'HelloWorld',
	   props: {
	     msg: ""
	   },
		 data() {
			 return {
				 datas: [{
				 	message: 'Foo'
				 },
				 {
				 	message: 'Bar'
				 }
				 ]
			 }
			 
		 },methods:{
			adds(){
				for (var i = 0; i < 10; i++) {
					this.datas.push({"message":i});
				}
			}
		},
		created() {
			this.adds();
		}
	 }

/* 	var xx = {
		name: 'HelloWorld',
		props: {
			msg: ""
		},
		data() {
			return {
				datas: [{
						message: 'Foo'
					},
					{
						message: 'Bar'
					}
				]
			}
		},
		methods:{
			adds(){
				for (var i = 0; i < 20; i++) {
					this.datas.push({"message":i});
				}
			}
		},
		created(){
			this.adds();
		}
	}
	export default xx; */
	/* var ss = new Vue({
		name: 'HelloWorld',
		  props: {
		   msg: ""
		 }
	})
	export default ss; */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
