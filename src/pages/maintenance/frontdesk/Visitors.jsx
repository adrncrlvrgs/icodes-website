import React, { useState } from 'react';
import { Flex, Text, Heading, ScaleFade } from '@chakra-ui/react';
import { Body } from '../../../sections/maintenance';
import { VisitorTable } from '../../../tables';
import {
	CusTable,
	CusSearch,
	CusFilter,
	CusPagination,
} from '../../../customs';
import { AddVisitors } from '../../../modals';
import { useData } from '../../../../DataContext';
import moment from 'moment';

const Visitors = () =>{
    return (
        <Flex
			w='full'
			minH='100vh'
			alignItems='stretch'
			bg={'#EFF3F6'}
		>
			<Body children={<Item />} />
		</Flex>


    );

}

const Item = () => {
    const { curUser, visitors  } = useData();
    const [currentPage, setCurrentPage] = useState(1);

	const recordsPerPage = 4;
	const lastIndex = currentPage * recordsPerPage;
	const firstIndex = lastIndex - recordsPerPage;

    const [search, setSearch] = useState('');

    const header = [
		'Visitor ID',
		'Unit',
		'Visitor/s of:',
		"Visitor/s Name/s",
		'Date',
		'Purpose of Visit',
		'Status',
		'Modify',
	];

    const [sortType, setSortType] = useState('asc');

    const records = visitors.slice(firstIndex, lastIndex);
    const numPage = Math.ceil(visitors.length / recordsPerPage);
    const pages = [...Array(numPage + 1).keys()].slice(1);

    if(visitors){
        visitors.sort((a, b) => {
			if (a.CreatedDate && b.CreatedDate) {
				return (
					moment(
						new Date(
							sortType == 'desc'
								? a.CreatedDate.seconds * 1000
								: b.CreatedDate.seconds * 1000
						)
					) -
					moment(
						new Date(
							sortType == 'asc'
								? a.CreatedDate.seconds * 1000
								: b.CreatedDate.seconds * 1000
						)
					)
				);
			}
		});

        return (
            <Flex
                flexDir='column'
                p={'45px'}
                h={'100%'}
                bg={'#EFF3F6'}
                justifyContent={'space-between'}
            >
                <ScaleFade
                    initialScale={0.9}
                    in='true'
                >
                    <Flex flexDir='column'>
                        <Heading
                            fontSize='md'
                            color={'b.300'}
                        >
                            Hi, {curUser.FName}!
                        </Heading>
                        <Text color={'b.300'}>Manage the Visitors here.</Text>
                        <Flex
                            display='flex'
                            justifyContent='flex-end'
                            mb={5}
                            gap={5}
                            flexDir={{
                                base: 'column',
                                md: 'row',
                            }}
                        >
                            <Flex gap={5}>
                                <CusSearch
                                    placeholder={'Search by ID'}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <CusFilter setSortType={setSortType} />
                            </Flex>

                            <AddVisitors />
                        </Flex>

                        <Flex
                            justifyContent={'space-between'}
                            flexDir={'column'}
                        >
                            <CusTable
                                header={header}
                                children={
                                    <VisitorTable
                                        data={records}
                                        search={search}
                                        all={visitors}
                                    />
                                }
                            />
                        </Flex>
                    </Flex>
                </ScaleFade>
                <CusPagination
                    page={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    lastIndex={lastIndex}
                    firstIndex={firstIndex}
                    numPage={numPage}
                />
            </Flex>
        );
    }
}

export default Visitors;