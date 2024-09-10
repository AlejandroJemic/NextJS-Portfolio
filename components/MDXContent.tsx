/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { JSX } from 'react'
import {highlight} from 'sugar-high'

import  Counter from '@/components/counter'


function Code ({children, ...props}: any){
    const codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{__html: codeHTML}} {...props} />
}

const CustomComponents = {
    h2:(props:  React.HTMLAttributes<HTMLHeadingElement>) =>(
      <h2 {...props} className='text-red-400'>
        {props.children}
      </h2>
    ),
    code : Code,
    Counter
  }
export default function MDXContent(
    props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
    {...props}
    components={{ ...CustomComponents, ...(props.components || {}) }}
    />
  )
}
