import React from 'react'
import Repo from './Repo'
import UserStats from './UserStats'

const Repos = ( { user, repos }) => {
  return (
    <div>
        <h3 className='text-4xl font-bold text-center uppercase text-red-800 pt-6'>Tech Contribution</h3>
        <UserStats user={user} />
        <div className='md:grid md:grid-cols-3 md:gap-2 md:my-6'>
        {repos.map(repo => {
        return (
          <Repo key={repo.id} repo={repo} />
        )
      })}
      </div>
      </div>
  )
}

export default Repos