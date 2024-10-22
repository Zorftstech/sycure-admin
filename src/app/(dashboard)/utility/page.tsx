"use client"
import SycureButton from '@/components/SycureButton'
import SycureSearchBar from '@/components/SycureSearchBar'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { p } from 'framer-motion/client'
import React from 'react'

const Page = () => {
  const tableData = [
    {
      name: 'Ogbonna Kennet',
      amount: 'N25,000',
      address: '45, Adebule Akande street',
      contact: '07034567899',
      status: 'Fully paid'
    },
    {
      name: 'Ogbonna Kennet',
      amount: 'N25,000',
      address: '45, Adebule Akande street',
      contact: '07034567899',
      status: 'Partly paid'
    },
    {
      name: 'Ogbonna Kennet',
      amount: 'N25,000',
      address: '45, Adebule Akande street',
      contact: '07034567899',
      status: 'Not paid'
    },
    {
      name: 'Ogbonna Kennet',
      amount: 'N25,000',
      address: '45, Adebule Akande street',
      contact: '07034567899',
      status: 'Partly paid'
    },
    {
      name: 'Ogbonna Kennet',
      amount: 'N25,000',
      address: '45, Adebule Akande street',
      contact: '07034567899',
      status: 'Not paid'
    },
    {
      name: 'Ogbonna Kennet',
      amount: 'N25,000',
      address: '45, Adebule Akande street',
      contact: '07034567899',
      status: 'Partly paid'
    },
    {
      name: 'Ogbonna Kennet',
      amount: 'N25,000',
      address: '45, Adebule Akande street',
      contact: '07034567899',
      status: 'Not paid'
    },
    {
      name: 'Ogbonna Kennet',
      amount: 'N25,000',
      address: '45, Adebule Akande street',
      contact: '07034567899',
      status: 'Fully paid'
    },
  ]
  const years = ["2020", "2021", "2022", "2023", "2024"]
  const [year, setYear] = React.useState<any>(new Date().getFullYear())
  const [selectedFilters, setSelectedFilters] = React.useState<any []>([])
  const filters = ['Fully paid', 'Partly paid', 'Not paid', 'Not & partly paid']

  const TableRows = ({data, type}:{data: {[key:string]: string}, type: "SOLID" | "LIGHT"}) => {
    return (
      <Tr>
        <Td>{data.name}</Td>
        <Td>{data.amount}</Td>
        <Td>{data.address}</Td>
        <Td>{data.contact}</Td>
        <Td className={`${data.status == "Not paid" ? "text-[#BF2942]" : data.status == "Partly paid" ? "text-[#CFB529]" : data.status == "Fully paid" ? "text-[#29A962]" : ""}`}>{data.status}</Td>
        <Td textDecor={"underline"} color={"#4E5A66"} fontSize={'16px'} cursor={"pointer"}>{"View"}</Td>
        <Td color={"#4E5A66"} fontSize={'16px'} cursor={"pointer"}><div className='bg-[#29A96221] py-1 px-2 rounded-full text-center text-[#29A962] text-sm'>{"No action"}</div></Td>
      </Tr>
    )
  }
  return (
    <div className='pt-20 w-full h-full overflow-scroll hide-scrollbar'>
      <div className='flex justify-between mt-12 items-center'>
        <div>
          <div className='flex items-center gap-x-4'>
            <h3 className='text-[32px] text-[#204D88] font-medium'>Security Levy</h3>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton color={"#4E5A66"} mb={0} fontWeight={"medium"} fontSize={'14px'} rounded={'full'} isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                    Year {year}
                  </MenuButton>
                  <MenuList>
                    {
                      years.map((year, idx) => (
                        <MenuItem onClick={() => setYear(year)}>{year}</MenuItem>
                      ))
                    }
                  </MenuList>
                </>
              )}
            </Menu>
          </div>
          <p className='text-sm font-normal text-[#4E5A66]'>500 of 850 Total Payments</p>
        </div>

        <SycureButton variant='SECONDARY'>Create new estate utility +</SycureButton>
      </div>

      <div className='mt-14'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-x-5 items-center'>
            <SycureSearchBar placeholder='Enter resident name to search' />
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton bg={"#E2E1E5"} color={"#4E5A66"} mb={0} fontWeight={"medium"} fontSize={'14px'} rounded={'full'} isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                    Search filter
                  </MenuButton>
                  <MenuList>
                    {
                      filters.map((filter, idx) => (
                        <MenuItem onClick={() => {
                          if(selectedFilters.includes(filter)){
                            const newData = selectedFilters.filter((item) => item != filter)
                            setSelectedFilters(newData)
                          }else{
                            setSelectedFilters((prev) => ([...prev, filter]) )
                          }
                        }} key={idx}>{filter}</MenuItem>
                      ))
                    }
                  </MenuList>
                </>
              )}
            </Menu>
            
            <div className='flex flex-wrap gap-4'>
              {
                selectedFilters.map((filter) => (<div onClick={() => {
                  const newData = selectedFilters.filter((item) => item != filter)
                  setSelectedFilters(newData)
                }} className={`cursor-pointer py-1 px-3 rounded-full ${filter == "Fully paid" ? "bg-[#29A96221] text-[#29A962]" : filter == "Partly paid" ? "bg-[#CFB52921] text-[#CFB529]" : filter == "Not paid" ? "bg-[#BF294240] text-[#BF2942]" : ""} text-sm font-bold`}><p>{filter} x</p></div>))
              }
            </div>
          </div>

          <div className='flex items-center gap-x-7'>
            <p className='text-[#292727] font-bold text-sm'>1 - 50 of 1000</p>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>

        <TableContainer mt={'20px'}>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th textTransform={'capitalize'} fontSize={14}>Resident name</Th>
                <Th textTransform={'capitalize'} fontSize={14}>Amount paid</Th>
                <Th textTransform={'capitalize'} fontSize={14}>Resident address</Th>
                <Th textTransform={'capitalize'} fontSize={14}>Phone no.</Th>
                <Th textTransform={'capitalize'} fontSize={14}>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                tableData.filter((item:any) => selectedFilters.length > 0 ?(
                  selectedFilters.some((fil) => item.status.includes(fil))
                ): item).map((data, idx) => (<TableRows type="LIGHT" key={idx} data={data}/>))
              }
            </Tbody>
            {
              tableData.filter((item:any) => selectedFilters.length > 0 ?(
                  selectedFilters.some((fil) => item.status.includes(fil))
              ):item).length == 0 && 
            (  <Tfoot>
                <Tr>
                  <Th className='font-bold text-2xl text-center text-[#cfb6297c]'>!!!No result</Th>
                </Tr>
              </Tfoot>)
            }
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default Page