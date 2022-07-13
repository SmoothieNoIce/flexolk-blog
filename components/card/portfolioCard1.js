import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const Card = styled.div(
  props => (
    {
      display: 'flex',
      width: '100%',
      backgroundColor: "#091D33",
      [`@media (min-width: 769px)`]: {
        flexDirection: "row",
        maxHeight: "170px",
      },
      [`@media (max-width: 768px)`]: {
        flexDirection: "column",
      }
    }
  ))

const CardContainer = styled.div(
  props => (
    {
      backgroundColor: "#091D33",
      padding: "20px 24px 20px 24px"
    }
  ))

const Img = styled.img(
  props => (
    {
      [`@media (min-width: 769px)`]: {
        maxWidth: "300px",
        maxHeight: "170px",
      },
      [`@media (max-width: 768px)`]: {
        maxWidth: "100%",
      }
    }
  ))


const Title = styled.div(
  props => (
    {
      fontWeight: '800',
      margin: "0"
    }
  ))

const Content = styled.p(
  props => (
    {
      maxHeight: "170px",
      margin: "0",
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