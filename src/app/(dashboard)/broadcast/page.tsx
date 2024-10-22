"use client"
import SycureButton from '@/components/SycureButton'
import SycureSearchBar from '@/components/SycureSearchBar'
import { Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter()
  const DATA = [
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
    {
      title: 'Verify your payments',
      desc: "Dear resident, please you can send evidence of payment via...",
      type: "All resident",
      date: "Sept 3"
    },
  ]
  const TableRows = ({data, type}:{data: {[key:string]: string}, type: "SOLID" | "LIGHT"}) => {
    return (
      <Tr>
        <Td fontSize={'16px'} fontWeight={700} color={"#4E5A66"}>{data.title}</Td>
        <Td>{data.desc}</Td>
        <Td>{data.type}</Td>
        <Td isNumeric>{data.date}</Td>
      </Tr>
    )
  }
  return (
    <main className='pt-20 w-full h-full overflow-scroll hide-scrollbar'>
      <div className='flex justify-between items-center mt-10 mb-8'>
        <h3 className='text-[32px] text-[#204D88] font-medium'>Broadcast (Notifications)</h3>
        <SycureButton onClick={() => router.push('broadcast/create-broadcast')} variant='SECONDARY'>Send notification / broadcast +</SycureButton>
      </div>

      <div>
        <div className='flex justify-between'>
          <SycureSearchBar placeholder='Enter resident name to search' />
          <div className='flex items-center gap-x-7'>
            <p className='text-[#292727] font-bold text-sm'>1 - 50 of 1000</p>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>

        <TableContainer mt={'20px'}>
          <Table variant='simple'>
            <Tbody>
              {
                DATA.map((data, idx) => (<TableRows type="LIGHT" key={idx} data={data}/>))
              }
            </Tbody>
          </Table>
        </TableContainer>

        <div>
          {
            DATA.map((item, idx) => (
              <div>

              </div>
            ))
          }
        </div>
        <div className='flex'>
          <SycureButton variant='SECONDARY'>Back</SycureButton>
        </div>
      </div>
    </main>
  )
}

export default Page