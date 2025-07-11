import CallList from '@/components/ui/callList'
import React from 'react'

const previous = () => {
  return (
    <section className = "flex size-full flex-col gap-10 text-white">
      <h1 className = 'text-3xl font-bold'>
        Previous
      </h1>
        <CallList type = "ended"/>
    </section>
  )
}

export default previous