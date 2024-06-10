import {
  Button,
  Modal,
  ModalBody,
  Panel, PanelSection,
  hubspot
} from '@hubspot/ui-extensions'
import React from 'react'

const specs = [
  {
    name: 'Capacity',
    value: '128GB',
  },
  {
    name: 'Display',
    value: '6.7-inch (diagonal) all-screen OLED display',
  },
  {
    name: 'Chip',
    value: 'A15 Bionic chip',
  },
  {
    name: 'Camera',
    value: 'Pro 12MP camera system: Telephoto, Wide, and Ultra Wide cameras',
  },
  {
    name: 'Video Recording',
    value: '4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps',
  },
  {
    name: 'TrueDepth Camera',
    value: '12MP camera',
  },
  {
    name: 'Battery',
    value: 'Built-in rechargeable lithium-ion battery',
  },
  {
    name: 'Water Resistant',
    value:
      'Rated IP68 (maximum depth of 6 meters up to 30 minutes) under IEC standard 60529',
  },
]

hubspot.extend(({ runServerlessFunction, actions }) => (
  <Extension runServerlessFunction={runServerlessFunction} actions={actions} />
))

const PanelComponent = () => {
  return (
    <Panel>
      <PanelSection>test 1234</PanelSection>
    </Panel>
  )
}
const Extension = ({ actions }) => {
  return (
    <>
      <Button
        overlay={
          <Modal id='1234'>
            <ModalBody>test 123</ModalBody>
          </Modal>
        }
      >

        open modal
      </Button>
    </>
  )
}
