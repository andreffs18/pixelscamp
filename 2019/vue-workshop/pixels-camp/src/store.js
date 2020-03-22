import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	posts: {
  		loading: false,
  		data: '',
  		error: null,
  	}

  },
  mutations: {
  	setPosts(state, data){
  		state.posts = data
  	}

  },
  actions: {
  	async getPosts(context) {

  		context.commit('setPosts', {
	  		loading: true,
	  		data: '',
	  		error: null,
	  	})

  		try {
  			const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
	  		
	  		context.commit('setPosts', {
		  		loading: false,
		  		data: response.data,
		  		error: null,
		  	})

  		} catch (error) {
  			context.commit('setPosts', {
		  		loading: false,
		  		data: '',
		  		error: error,
		  	})
  		}
  	}
  }
})
