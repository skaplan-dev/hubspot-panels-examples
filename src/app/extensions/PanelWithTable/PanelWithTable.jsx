import React from 'react'
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

const Extension = () => {

  return (
    <>
      <Panel
        id='my-panel'
        title={`Iphone 14 specs`}
        onClose={() => console.log('closed')}
      >
        <Table flush={true}>
          <TableHead>
            <TableRow>
              <TableHeader>Specs</TableHeader>
              <TableHeader>Price</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Iphone 14</TableCell>
              <TableCell>
                <Flex align='center' direction='row' justify='between'>
                  <Text>$1000</Text>
                  <Link
                    onClick={async (__, reactions) => {
                      reactions.openPanel('my-panel')
                    }}
                  >
                    See more
                  </Link>
                </Flex>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
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
            <TableCell>Iphone 14</TableCell>
            <TableCell>
              <Flex align='center' direction='row' justify='between'>
                <Text>$1000</Text>
                <Link
                  onClick={async (__, reactions) => {
                    reactions.openPanel('my-panel')
                  }}
                >
                  See more
                </Link>
              </Flex>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}
