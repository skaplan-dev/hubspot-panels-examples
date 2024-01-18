import React from 'react'

import {
  Button,
  Form,
  hubspot,
  NumberInput,
  Select,
} from '@hubspot/ui-extensions'
import {
  Panel,
  PanelBody,
  PanelFooter,
  PanelSection,
} from '@hubspot/ui-extensions/experimental'

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ runServerlessFunction, actions }) => (
  <Extension runServerlessFunction={runServerlessFunction} actions={actions} />
))

const Extension = () => {
  return (
    <>
      <Panel id='property-panel' title='Property Listing'>
        <Form
          preventDefault={true}
          onSubmit={(event, reactions) => {
            console.log(event)
            reactions.closePanel('property-panel')
          }}
        >
          <PanelBody>
            <PanelSection>
              <NumberInput
                name='rentalPrice'
                label='Monthly rental price'
                required={true}
              />
              <Select
                name='leaseType'
                label='Lease type'
                options={[
                  { label: 'Monthly', value: 'Monthly' },
                  { label: 'Yearly', value: 'Yearly' },
                ]}
              />
            </PanelSection>
          </PanelBody>
          <PanelFooter>
            <Button variant='primary' type='submit'>
              Add property listing
            </Button>
          </PanelFooter>
        </Form>
      </Panel>
      <Button
        onClick={(__, reactions) => {
          reactions.openPanel('property-panel')
        }}
      >
        Add property listing
      </Button>
    </>
  )
}
