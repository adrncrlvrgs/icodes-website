import React, { useState } from 'react';

import { Stack, Button } from '@chakra-ui/react';
import {
	CusSelectOccOwner,
	CusSelectOccupiedUnit,
	CusUpload,
	CusSelectTransactMonth,
	CusInputRegular,
	CusInputLeftAdd,
	CusPaymentMode,
} from '../../../customs';
const TransactionsForm = ({ form, setUnit, choice, fileName, setMonth }) => {
	const [owner, setOwner] = useState(false);
	const [showReceiptImg, setShowReceiptImg] = useState(
		form.values.receiptImg
	);
	const [receiptImg, setReceiptImg] = useState('');
	return (
		<Stack w={'100%'}>
			<form id='formDiv'>
				<Stack>
					<Stack
						direction={['column', 'row']}
						spacing={6}
					>
						<CusSelectOccupiedUnit
							label={'Location'}
							name='unit'
							id={'unit'}
							placeholder={'Select Location'}
							value={form.values.unit}
							onBlur={form.handleBlur}
							onChange={(e) => {
								form.setFieldValue('unit', e.target.value);
								setUnit(e.target.value);
								setOwner(true);
							}}
							error={form.errors.unit}
							touch={form.touched.unit}
							isRequired
						/>
					</Stack>
					{owner && (
						<Stack>
							<CusSelectOccOwner
								label={'Unit Owner Name'}
								name='unitOwner'
								id='unitOwner'
								placeholder={'Select Unit Owner Names'}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
								value={form.values.unitOwner}
								error={form.errors.unitOwner}
								touch={form.touched.unitOwner}
								isRequired
								disabled={true}
							/>

							<Stack
								direction={['column', 'row']}
								spacing={6}
							>
								<CusSelectTransactMonth
									label={'Month'}
									name='forMonth'
									id='forMonth'
									placeholder={'Select Month'}
									onChange={(e) => {
										form.setFieldValue(
											'forMonth',
											e.target.value
										);
										setMonth(e.target.value);
									}}
									onBlur={form.handleBlur}
									value={form.values.forMonth}
									error={form.errors.forMonth}
									touch={form.touched.forMonth}
									isRequired
									choice={choice}
								/>
								<CusInputLeftAdd
									name='amountPaid'
									label={'Amount Paid'}
									id={'amountPaid'}
									add={'₱'}
									placeholder={'0'}
									isRequired
									value={form.values.amountPaid}
									onChange={(e) => {
										let parts = e.target.value.split('.');
										let v = parts[0].replace(/\D/g, '');
										let dec = parts[1];
										Number(
											dec !== undefined
												? v + '.' + dec
												: v
										);
										let n = new Intl.NumberFormat(
											'en-US'
										).format(v);
										n =
											dec !== undefined
												? n + '.' + dec
												: n;
										form.setFieldValue('amountPaid', n);
									}}
									onBlur={form.handleBlur}
									error={form.errors.amountPaid}
									touch={form.touched.amountPaid}
								/>
							</Stack>

							<Stack
								direction={['column', 'row']}
								spacing={6}
							>
								<CusInputRegular
									isRequired
									label={'Date Paid'}
									type={'date'}
									name='datePaid'
									id='datePaid'
									onChange={form.handleChange}
									value={form.values.datePaid}
									error={form.errors.datePaid}
									onBlur={form.handleBlur}
									touch={form.touched.datePaid}
								/>
								<CusInputRegular
									name='receiptNo'
									label={'Receipt No'}
									id={'receiptNo'}
									type={'number'}
									placeholder={'XXXXXX'}
									isRequired
									value={form.values.receiptNo}
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									error={form.errors.receiptNo}
									touch={form.touched.receiptNo}
								/>
								<CusPaymentMode
									name='paymentMode'
									isRequired
									id={'paymentMode'}
									label={'Payment Mode'}
									onChange={form.handleChange}
									onBlur={form.handleBlur}
									error={form.errors.paymentMode}
									touch={form.touched.paymentMode}
									value={form.values.paymentMode}
								/>
							</Stack>
							<Stack>
								<CusUpload
									name='receiptImg'
									id='receiptImg'
									onChange={(e) => {
										const file = e.target.files[0];
										form.setFieldValue('receiptImg', file);
										setShowReceiptImg(
											URL.createObjectURL(file)
										);
										setReceiptImg(file);
									}}
									fileName={
										showReceiptImg && receiptImg.name
											? `Receipt Image Chosen: ${receiptImg.name}`
											: (fileName &&
													`Receipt Image: ${fileName}`) ||
											  'Add receipt image'
									}
									onBlur={form.handleBlur}
									error={form.errors.receiptImg}
									touch={form.touched.receiptImg}
									showImage={showReceiptImg}
									isRequired={true}
								/>
							</Stack>
						</Stack>
					)}

					<Stack
						direction={['column', 'row']}
						justify={'flex-end'}
					>
						<Button
							variant={'primary'}
							onClick={form.handleSubmit}
						>
							Save
						</Button>
					</Stack>
				</Stack>
			</form>
		</Stack>
	);
};

export default TransactionsForm;
