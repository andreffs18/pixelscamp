<template>
  <div class="posts">
    <post 
    v-for="post in posts.data"
    :key="post.id"
    :title="post.title"
    @click="openPost(post.id)" />
  </div>
</template>


<script>
	import post from '@/components/Post'
	import { mapActions, mapState } from 'vuex'

	export default {
		components: {
			post
		},

		computed: {
			...mapState({
				posts: state => state.posts
			}),
		},

		methods: {
			...mapActions({
				getPosts: 'getPosts'
			}),

			openPost(postId) {
				this.$router.push({
					name: 'post-details',
					params: {
						id: postId
					}
				})
			}
		},

		created(){
			this.getPosts()

			// or 
			// this.$store.dispatch("getPosts")
		}
	}
</script>


<style>
</style>