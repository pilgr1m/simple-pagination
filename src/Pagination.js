import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const PaginationComponent =({postsPerPage, totalPosts, paginate, currentPage})=> {

	const active = currentPage
    const pageNumbers = []


    for (let i =1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(
			   <Pagination.Item 
			   		key={i}
			   		active={i === active}
					onClick={()=> paginate(i)}
				>
			       			{i}
			     </Pagination.Item>,
			   )
    }

    return (
        <div>
            <Pagination>
				{pageNumbers}
			</Pagination>
        </div>
    )
}

export default PaginationComponent
