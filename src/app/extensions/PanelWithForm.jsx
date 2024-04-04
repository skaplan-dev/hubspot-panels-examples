import React, { useEffect } from 'react'

import {
  Button,
  Form,
  hubspot,
  NumberInput,
  Select,
  Panel,
  PanelBody,
  PanelFooter,
  PanelSection,
  Image,
  Divider,
  DescriptionList,
  DescriptionListItem,
} from '@hubspot/ui-extensions'

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ runServerlessFunction, context }) => (
  <Extension runServerlessFunction={runServerlessFunction} context={context} />
))

const NewComponent = 'NewComponent';

const Extension = ({runServerlessFunction, context}) => {

  console.log(context)

  useEffect(()=> {
    runServerlessFunction({name: 'myFunc'}).then((resp) => console.log(resp))
  },[])

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
                required={true}
                name='leaseType'
                label='Lease type'
                placeholder='Select a lease type'
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
        Add new test listing
      </Button>
        <Divider/>
        <DescriptionList >
          <DescriptionListItem label='item 1'>
            test 123
          </DescriptionListItem>
          <DescriptionListItem label='item 2'>
            test 123
          </DescriptionListItem>
          <DescriptionListItem label='item 3'>
            test 123
          </DescriptionListItem>
          <DescriptionListItem label='item 4'>
            test 123
          </DescriptionListItem>
        </DescriptionList>
    </>
  )
}
