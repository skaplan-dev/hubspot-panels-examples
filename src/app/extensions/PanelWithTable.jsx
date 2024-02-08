import React from 'react'
import {
  Button,
  Flex,
  hubspot,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@hubspot/ui-extensions'
import { Panel, PanelSection } from '@hubspot/ui-extensions'

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

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ runServerlessFunction, actions }) => (
  <Extension runServerlessFunction={runServerlessFunction} actions={actions} />
))

const Extension = () => {
  return (
    <>
      <Panel
        id='my-panel'
        title={`IPhone 14 specs`}
        onClose={() => console.log('closed')}
        variant='modal'
      >
        <PanelBody>
          <PanelSection>
            <Table condensed={true}>
              <TableHead>
                <TableRow>
                  <TableHeader>Spec</TableHeader>
                  <TableHeader>Value</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {specs.map(spec => (
                  <TableRow>
                    <TableCell>{spec.name}</TableCell>
                    <TableCell>{spec.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </PanelSection>

          <PanelSection>test 123</PanelSection>
        </PanelBody>
      </Panel>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Item</TableHeader>
            <TableHeader>Price</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>IPhone 14</TableCell>
            <TableCell>
              <Flex align='center' direction='row' justify='between'>
                <Text>$1000</Text>
                <Button
                  size='xs'
                  onClick={async (__, reactions) => {
                    reactions.openPanel('my-panel')
                  }}
                >
                  See Specs
                </Button>
              </Flex>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
