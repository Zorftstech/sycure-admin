import { FinanceIcon } from "@/assets/icons/icons";
import SycureText from "@/components/SycureText";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  const financeData = [
    {
      title: 'Residents Registered',
      count: 5,
      bg: '#8DCCFE',
      color: '#292727'
    },
    {
      title: 'Verifier Accounts',
      count: 5,
      bg: '#3F77FF',
      color: '#FFFFFF'
    },
    {
      title: 'Admin Accounts',
      count: 2,
      bg: '#7131DA',
      color: '#FFFFFF'
    },
    {
      title: 'Emergency Alerts',
      count: 0,
      bg: '#BF294233',
      color: '#BF2942'
    }
  ]

  const tableData = [
    {
      name: 'Ogbonna Kennet',
      sn: "00093",
      address: '45, Adebule Akande street',
      contact: '070345623447',
      email: 'rekennetgabsonrekennetgabson@gmail.com',
      status: 'Verify Account'
    },
    {
      name: 'Ogbonna Kennet',
      sn: "00093",
      address: '45, Adebule Akande street',
      contact: '070345623447',
      email: 'rekennetgabson@gmail.com',
      status: 'Verify Account'
    },
    {
      name: 'Ogbonna Kennet',
      sn: "00093",
      address: '45, Adebule Akande street',
      contact: '070345623447',
      email: 'rekennetgabson@gmail.com',
      status: 'Verify Account'
    },
    {
      name: 'Ogbonna Kennet',
      sn: "00093",
      address: '45, Adebule Akande street',
      contact: '070345623447',
      email: 'rekennetgabson@gmail.com',
      status: 'Verify Account'
    },
  ]
  const FinanceCards = ({data, index}:{data: {[key:string]: string | number}, index: number}) => {
    return(
      <div className={`flex-1 h-24 rounded-2xl p-6 flex items-center justify-between gap-3`} style={{ backgroundColor: data.bg as string }}>
        <FinanceIcon color={data.color} />
        <div className="flex gap-x-3 items-center">
          <p className="text-[36px] font-bold" style={{ color: data.color as string }}>{data.count}</p>
          <p className="text-[16px] font-medium" style={{ color: data.color as string }}>{data.title}</p>
        </div>
      </div>
    )
  }

  const TableRows = ({data, type}:{data: {[key:string]: string}, type: "SOLID" | "LIGHT"}) => {
    return (
      <Tr>
        <Td>{data.name}</Td>
        <Td>{data.sn}</Td>
        <Td>{data.address}</Td>
        <Td>{data.contact}</Td>
        <Td>{data.email}</Td>
        <Td>{data.status}</Td>
      </Tr>
    )
  }
  return (
    <div className="font-[family-name:var(--font-geist-sans)] pt-16 w-full h-full overflow-scroll hide-scrollbar">
      <div className="flex gap-8 mt-10">
        {
          financeData.map((fin, idx) => (<FinanceCards key={idx} data={fin} index={idx}/>))
        }
      </div>

      <div className="mt-10">
        <div className="flex justify-between">
          <p className="text-[20px] text-[#204D88] font-medium">Newly Registered Accounts</p>
          <p className="underline text-sm text-[#292727] font-medium">View all</p>
        </div>

        <TableContainer mt={'20px'}>
          <Table variant='simple'>
            <Tbody>
              {
                tableData.map((data, idx) => (<TableRows type="LIGHT" key={idx} data={data}/>))
              }
            </Tbody>
          </Table>
        </TableContainer>
      </div>

      <div className="my-10">
        <div className="flex justify-between">
          <p className="text-[20px] text-[#204D88] font-medium">Gate access activity log</p>
          <p className="underline text-sm text-[#292727] font-medium">View all</p>
        </div>
    
        <TableContainer mt={'20px'}>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th textTransform={'capitalize'} fontSize={14}>Guests name</Th>
                <Th textTransform={'capitalize'} fontSize={14}>Access code</Th>
                <Th textTransform={'capitalize'} fontSize={14}>Resident name</Th>
                <Th textTransform={'capitalize'} fontSize={14}>Resident address</Th>
                <Th textTransform={'capitalize'} fontSize={14}>Verified by</Th>
                <Th textTransform={'capitalize'} fontSize={14}>Entry time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                tableData.map((data, idx) => (<TableRows type="LIGHT" key={idx} data={data}/>))
              }
            </Tbody>
          </Table>
        </TableContainer>
          {/* <table className="overflow-scroll table-auto min-w-full">
            <thead>
              <tr className="flex text-left gap-5 py-3 mb-5 border-b border-b-[#A8A8A880]">
                <th className="text-[16px] text-[#292727] text-left font-medium">Guests name</th>
                <th className="text-[16px] text-[#292727] text-left font-medium">Access code</th>
                <th className="text-[16px] text-[#292727] text-left font-medium">Resident name</th>
                <th className="text-[16px] text-[#292727] text-left font-medium">Resident address</th>
                <th className="text-[16px] text-[#292727] text-left font-medium">Verified by</th>
                <th className="text-[16px] text-[#292727] text-left font-medium">Entry time</th>
              </tr>
            </thead>
            <tbody>
              {
                tableData.map((data, idx) => (<TableRows type="LIGHT" key={idx} data={data}/>))
              }
            </tbody>
          </table> */}
        {/* </div> */}
      </div>
    </div>
  );
}
