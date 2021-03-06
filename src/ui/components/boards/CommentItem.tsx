import * as React from 'react'
import styled from '@emotion/styled'
import { ICommentVM } from '../../../adapters/vm/Comment'

interface IProps {
  comment: ICommentVM
}

const CommentItem: React.FC<IProps> = (props) => {
  const { comment: { author, content, createAt } } = props
  const createDate = new Date(createAt)

  return (
    <$commentItem>
      <$commentText>&rsaquo;</$commentText>
      <$commentText>{author}</$commentText>
      <$commentText>{content}</$commentText>
      <$commentText>{`${createDate.getFullYear()}-${createDate.getMonth() + 1}-${createDate.getDate()}`}</$commentText>
    </$commentItem>
  )
}

export default CommentItem

const $commentItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #eee;
`

const $commentText = styled.p`
  display: inline-block;
  padding: 0 20px;
  font-size: 16px;
  line-height: 60px;
  margin: 0;
`