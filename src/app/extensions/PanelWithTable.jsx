import React from 'react'
import {
  Button,
  Flex,
  Form,
  hubspot,
  Input,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
} from '@hubspot/ui-extensions'
import { Panel, PanelSection, PanelBody } from '@hubspot/ui-extensions'
import {CrmAssociationTable} from '@hubspot/ui-extensions/crm'

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

const Modal = 'Modal'
const ModalBody = 'ModalBody'

const ModalFooter = 'ModalFooter'

const Extension = () => {
  return (
    <>
      <Modal
        id='my-panel'
        title='Delete domain?'
        onClose={() => console.log('closed')}
        variant="danger"
      >
        <ModalBody>
        You're about to delete the domain <Text format={{fontWeight : 'bold'}} inline={true}>www.examplewebsite.com</Text>. This can't be undone.
        </ModalBody>
        {/* <ModalFooter>
          <Button variant='primary'>Delete domain</Button>
          <Button onClick={(_, reactions) => reactions.openPanel('1234')}>
Cancel
</Button>
        </ModalFooter> */}
      </Modal>
      <CrmAssociationTable
        objectTypeId="0-3"
        propertyColumns={[
          'dealname',
          'hubspot_owner_id',
          'amount',
          'dealstage',
        ]}
        quickFilterProperties={['hubspot_owner_id', 'dealstage', 'amount']}
        pageSize={10}
        preFilters={[
          {
            operator: 'NOT_IN',
            property: 'dealstage',
            values: ['closedwon', 'closedlost'],
          },

        ]}
        sort={[
          {
            direction: 1,
            columnName: 'amount',
          },
        ]}
        searchable={true}
        pagination={true}
      />
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
                    reactions.openModal('my-panel')
                  }}
                >
                  Open Modal
                </Button>
                <Button
                  size='xs'
                  onClick={async (__, reactions) => {
                    reactions.openPanel('1234')
                  }}
                >
                  Open Panel
                </Button>
              </Flex>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Panel id='1234'>

        <Button
          size='xs'
          onClick={async (__, reactions) => {
            reactions.openModal('my-panel')
          }}
        >
          See Specs
        </Button>
      </Panel>
    </>
  )
}
