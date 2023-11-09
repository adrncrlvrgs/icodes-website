import { CusTitle, CusTD, CusDelete, CusAlert } from '../../../customs';
import { DateChecker, NameFormat } from '../../../utilities';
import {
	Image,
	Tr,
	Td,
	ButtonGroup,
	Switch,
	useDisclosure,
	Text,
	useToast,
	Flex,
} from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';
import { EditEmployee } from '../../../modals';
import { boolean } from 'yup';
import { useState } from 'react';

import { db } from '../../../../firebase-config';
import { updateDoc, serverTimestamp, doc } from 'firebase/firestore';
import { CusEnlargeImage } from '../../../customs/index'
const EmployeesTable = ({ data, search, all }) => {
	const toast = useToast();
	const ret = search ? all : data;
	const { isOpen: isImageModalOpen, onOpen: onImageModalOpen, onClose: onImageModalClose } = useDisclosure();
    const { isOpen: isStatusModalOpen, onOpen: onStatusModalOpen, onClose: onStatusModalClose } = useDisclosure();
	const [Id, setId] = useState('');
	const [selectedImage, setSelectedImage] = useState(null);
	const [nameLabel, setNameLabel] = useState('')
	const [employeeState, setEmployeeState] = useState({
		fName: '',
		statusLabel: '',
		empId: '',
		currentStatus: boolean,
		status: boolean,
	});

	const handleImageClick = (item) => {
		setSelectedImage(item.Image);
		setNameLabel(item)
		onImageModalOpen();
	};

	return ret
		.filter((item) => {
			return search.toLowerCase() === ''
				? item
				: item.EmpId.toString().includes(search);
		})
		.map((data, id) => {
			const status = data.Status ? 'Enabled' : 'Disabled'
			const statusConfirmation = (value, data) => {
				onStatusModalOpen();
				setEmployeeState({
					...employeeState,
					fName: data.FName,
					statusLabel: value === true ? 'Enable' : 'Disable',
					empId: data.EmpId,
					status: value,
					currentStatus: data.Status,
				});
			};

			const handleConfirmStatusChange = async () => {
				try {
					const docRef = doc(
						db,
						'maintenance',
						'admin',
						'tbl_employees',
						Id
					);

					await updateDoc(docRef, {
						EditedDate: serverTimestamp(),
						Status: employeeState.status,
					});

					toast({
						title: `${employeeState.fName}'s Status ${
							employeeState.currentStatus ? 'Disabled' : 'Enabled'
						}!`,
						status: 'success',
						duration: 3000,
						isClosable: true,
					});

					onStatusModalClose();
				} catch (error) {
					toast({
						title: 'Edit Status Failed!',
						status: 'error',
						duration: 3000,
						isClosable: true,
					});
					onClose();
				}
			};
			if (data.CreatedDate) {
				return (
					<React.Fragment key={id}>
						<Tr
							key={id}
							display={{
								base: 'grid',
								xl: 'table-row',
							}}
							sx={{
								'@media print': {
									display: 'table-row',
								},
								gridTemplateColumns:
									'minmax(0px, 50%) minmax(0px, 50%)',
								gridGap: '10px',
							}}
						>
							<React.Fragment>
								<CusTitle component={'Created At'} />
								<CusTD
									component={
										<DateChecker
											dateToCheck={
												new Date(
													data.CreatedDate.seconds *
														1000
												)
											}
										/>
									}
								/>

								<CusTitle component={'Image'} />
								<Td width={{ base: '', xl: '100px' }}>
									<Image
										src={data.Image}
										width={{ base: '100px', xl: '100px' }}
										onClick={() =>
											handleImageClick(data)
										}
									/>
								</Td>
								<CusTitle component={'Employee ID'} />
								<CusTD component={data.EmpId} />
								<CusTitle component={'Name'} />
								<CusTD
									component={
										<NameFormat
											fName={data.FName}
											mName={data.MName}
											lName={data.LName}
										/>
									}
								/>
								<CusTitle component={'Contact Number'} />
								<CusTD component={'09' + data.CNum} />
								<CusTitle component={'Email'} />
								<CusTD component={data.Email + '.com'} />
								<CusTitle component={'Position'} />
								<CusTD component={data.EmpPos} />
								<CusTitle component={'Employment Start'} />
								<CusTD
									component={moment(data.DStart).format(
										'MM/DD/YYYY'
									)}
								/>
								<CusTitle component={'Status'} />
								<CusTD
									component={
										<Flex direction={'column'}>
											{status}
											<Switch
												id='isChecked'
												isChecked={data.Status}
												onChange={(e) => {
													statusConfirmation(
														e.target.checked,
														data
													);
													setId(data.id);
												}}
											/>
										</Flex>
									}
								/>
							</React.Fragment>
							<CusTitle component={'Actions'} />
							<CusTD
								component={
									<ButtonGroup
										variant='solid'
										size='sm'
										spacing={3}
									>
										{data.id && (
											<EditEmployee
												data={data}
												id={data.id}
												mainCollection='maintenance'
												tblDocUser='admin'
												tblUserCol='tbl_employees'
											/>
										)}

										<CusDelete
											id={data.id}
											stor={`admin/employees/${data.EmpId}/profile.png`}
											label={` ${data.FName}'s Data`}
											mainCollection='maintenance'
											tblDocUser='admin'
											tblUserCol='tbl_employees'
											onUpdate={() => {}}
										/>
									</ButtonGroup>
								}
							/>
						</Tr>
						<CusAlert
							isOpen={isStatusModalOpen}
							onClose={onStatusModalClose}
							header={'Status Confirmation'}
							action={handleConfirmStatusChange}
							actionLabel={'Confirm'}
							body={
								<Text fontSize='md'>
									Are you sure to{' '}
									<Text
										as='b'
										color={
											employeeState.statusLabel ===
											'Disable'
												? 'r.100'
												: 'green'
										}
									>
										{employeeState.statusLabel}
									</Text>{' '}
									<Text
										as='b'
										color='b.300'
									>
										{employeeState.fName}
									</Text>
									's account?
								</Text>
							}
						/>

						<CusEnlargeImage
                            isOpen={isImageModalOpen}
                            onClose={onImageModalClose}
                            label={<NameFormat
								fName={nameLabel.FName}
								mName={nameLabel.MName}
								lName={nameLabel.LName}
							/>}
				
                            body={
                                <Image
									src={selectedImage}
									width={'680px'}
									height={'500px'}
								/>
                            }
                        />
					</React.Fragment>
				);
			}
		});
};

export default EmployeesTable;
