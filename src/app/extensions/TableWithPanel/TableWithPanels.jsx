import React, { useState } from 'react'
import {
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
import { Panel } from '@hubspot/ui-extensions/experimental'

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ runServerlessFunction, actions }) => (
  <Extension runServerlessFunction={runServerlessFunction} actions={actions} />
))

const CellWithDetails = ({ text, onClick }) => {
  return (
    <TableCell>
      <Flex align='center' direction='row' justify='between'>
        <Text>{text}</Text>
        <Link
          onClick={async (__, reactions) => {
            onClick()
            reactions.openPanel('my-panel')
          }}
        >
          See quotes
        </Link>
      </Flex>
    </TableCell>
  )
}

const nameToQuotes = {
  'Tim Robinson': [
    'Why use a door when you can exit through a window?',
    'Sometimes, the best plan is to have no plan at all.',
    'I thought this was a costume party... turns out it was just fancy!',
  ],
  'Patti Harrison': [
    'I ordered a pizza, but it turned out to be a giant cookie. Best mistake ever!',
    'Why walk when you can dance everywhere?',
    'I tried to teach my cat to sing. The result? A purr-fect melody!',
  ],
  'Sam Richardson': [
    'Why read the news when you can just make it up?',
    'I once entered a silent contest. I lost because I sneezed.',
    'I brought a map to the GPS store. They looked confused.',
  ],
  'Ruben Rabasa': [
    'A steering wheel for a hat? It’s the new fashion!',
    'I invented a new game: chess but with only pawns. It’s a real crowd-pleaser.',
    'My secret talent? I can hear a cookie being opened from a mile away.',
  ],
}

const Extension = () => {
  const [selected, setSelected] = useState('')

  return (
    <>
      <Panel
        id='my-panel'
        title={`${selected} Quotes`}
        onClose={() => console.log('closed')}
      >
        {selected && nameToQuotes[selected].map(quote => <Text>{quote}</Text>)}
      </Panel>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Tim Robinson</TableCell>
            <CellWithDetails
              text='Car Salesman'
              onClick={() => setSelected('Tim Robinson')}
            />
          </TableRow>
          <TableRow>
            <TableCell>Patti Harrison</TableCell>
            <CellWithDetails
              text='Tables (vendor)'
              onClick={() => setSelected('Patti Harrison')}
            />
          </TableRow>
          <TableRow>
            <TableCell>Sam Richardson</TableCell>
            <CellWithDetails
              text='Show host'
              onClick={() => setSelected('Sam Richardson')}
            />
          </TableRow>
          <TableRow>
            <TableCell>Ruben Rabasa</TableCell>
            <CellWithDetails
              text='Car imagineer'
              onClick={() => setSelected('Ruben Rabasa')}
            />
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
