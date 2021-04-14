import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Posts from './Posts'
import PaginationComponent from './Pagination'


function App() {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPerPage, ] = useState(10)


	useEffect(()=>{
		const fetchPosts = async() => {
			setLoading(true)
			const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
			setPosts(response.data)
			setLoading(false)
		}
		fetchPosts()
	}, [])

	// get current post
	const indexOfLastPost = currentPage * postsPerPage
	const idexOfFirstPost = indexOfLastPost - postsPerPage
	const currentPosts = posts.slice(idexOfFirstPost, indexOfLastPost)

	const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <h1>simple pagination</h1>
	  <Posts posts={currentPosts} loading={loading}/>
	  <PaginationComponent 
		postsPerPage={postsPerPage} 
		totalPosts={posts.length}
		currentPage={currentPage}
		paginate={paginate} 
	  />
    </div>
  )
}

export default App
