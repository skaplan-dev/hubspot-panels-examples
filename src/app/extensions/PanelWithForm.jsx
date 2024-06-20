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
  Modal,
  ModalBody,
  ModalFooter,
} from '@hubspot/ui-extensions'
import { CrmCardActions, CrmPropertyList } from '@hubspot/ui-extensions/crm'

// Define the extension to be run within the Hubspot CRM
// hubspot.extend(({ runServerlessFunction, context, actions }) => (
//   <Extension runServerlessFunction={runServerlessFunction} context={context} actions={actions}/>
// ))

// const NewComponent = 'NewComponent'

// const Extension = ({ runServerlessFunction, context,actions}) => {
//   console.log(context)

//   useEffect(() => {
//     runServerlessFunction({ name: 'myFunc' }).then(resp => console.log(resp))
//   }, [])

//   return (
//     <>
//       <CrmCardActions
//         actionConfigs={[
//           {
//             type: 'button',
//             label: 'Open Modal',
//             tooltipText: 'Preview something',
//           },
//           {
//             type: 'dropdown',
//             label: 'Activities',
//             options: [
//               {
//                 type: 'action-library-button',
//                 label: 'Send email',
//                 actionType: 'SEND_EMAIL',
//                 actionContext: {
//                   objectTypeId: '0-1',
//                   objectId: 769851,
//                 },
//               },
//               {
//                 type: 'action-library-button',
//                 label: 'Add note',
//                 actionType: 'ADD_NOTE',
//                 actionContext: {
//                   objectTypeId: '0-1',
//                   objectId: 769851,
//                 },
//               },
//             ],
//           },
//         ]}
//         overlay={
//           <Modal id="1234" title='This is from the CrmActions' width='md'>
//             <ModalBody>test 123</ModalBody>
//             <ModalFooter><Button onClick={()=> actions.closeOverlay('1234')}>Close Overlay</Button></ModalFooter>
//           </Modal>
//         }
//       />
//       <Panel id='property-panel' title='Property Listing'>
//         <Form
//           preventDefault={true}
//           onSubmit={(event, reactions) => {
//             console.log(event)
//             reactions.closePanel('property-panel')
//           }}
//         >
//           <PanelBody>
//             <PanelSection>
//               <NumberInput
//                 name='rentalPrice'
//                 label='Monthly rental price'
//                 required={true}
//               />
//               <Select
//                 required={true}
//                 name='leaseType'
//                 label='Lease type'
//                 placeholder='Select a lease type'
//                 options={[
//                   { label: 'Monthly', value: 'Monthly' },
//                   { label: 'Yearly', value: 'Yearly' },
//                 ]}
//               />
//             </PanelSection>
//           </PanelBody>
//           <PanelFooter>
//             <Button variant='primary' type='submit'>
//               Add property listing
//             </Button>
//           </PanelFooter>
//         </Form>
//       </Panel>

//       <Button
//         onClick={(__, reactions) => {
//           reactions.openPanel('property-panel')
//         }}
//       >
//         Add new test listing
//       </Button>

//       <Button
//         overlay={<Modal id="1245"><ModalBody>test 123</ModalBody></Modal>}
//       >
//         Add new test listing
//       </Button>
//       <Divider />
//       <DescriptionList>
//         <DescriptionListItem label='item 1'>test 123</DescriptionListItem>
//         <DescriptionListItem label='item 2'>test 123</DescriptionListItem>
//         <DescriptionListItem label='item 3'>test 123</DescriptionListItem>
//         <DescriptionListItem label='item 4'>test 123</DescriptionListItem>
//       </DescriptionList>
//     </>
//   )
// }

hubspot.extend(({ actions }) => <Extension actions={actions} />)

const Extension = ({ actions }) => {

  const {onCrmPropertiesUpdate} =  actions

  onCrmPropertiesUpdate(['custom_prop',], (properties) => {
    console.log(properties)
  });

  return (
    <>
      <Button
        overlay={
          <Panel id='1234'>
            <PanelBody>test 123</PanelBody>
            <PanelFooter>
              <Button onClick={() => actions.closeOverlay('1234')}>Done</Button>
            </PanelFooter>
          </Panel>
        }
      >
        Open Panel
      </Button>
      <CrmPropertyList properties={['custom_prop']}/>
    </>
  )
}
