import React from 'react'

const PostHeading = ({frontmatter}) => {
  return (
    
    <div>
        <div className='flex flex-row justify-between items-end p-3'>
            <div>
              -
            </div>
            <div className='font-semibold text-6xl'>
                {frontmatter.title}
            </div>
            <div>
                {frontmatter.date}
            </div>
        </div>
        <hr className=''/>
    </div>

  )
}

export default PostHeading