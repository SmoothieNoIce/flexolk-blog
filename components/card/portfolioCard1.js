import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const Card = styled.div(
  props => (
    {
      display: 'flex',
      width: '100%',
      backgroundColor: "#111111",
      maxHeight: "170px"
    }
  ))

const CardContainer = styled.p(
  props => (
    {
      backgroundColor: "#111111",
      padding: "0px 24px 0px 24px",
    }
  ))

const Img = styled.img(
  props => (
    {
      maxWidth: "300px",
      maxHeight: "170px"
    }
  ))


const Title = styled.p(
  props => (
    {
      fontWeight: '800',
      margin: "0"
    }
  ))

const Content = styled.p(
  props => (
    {
      maxHeight: "170px"

    }
  ))

export default function PortFolioCard1({ title, content, img }) {
  return (
    <>
      <Card>
        <Img
          src={img}
        />
        <CardContainer>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </CardContainer>
      </Card>
    </>
  )
}