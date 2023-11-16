import { Flex } from '@chakra-ui/react';
import { TopNav } from '../../sections/navigation';
import { LogForm } from '../../sections/maintenance';
import { useData } from '../../../DataContext';
import { useLocation } from 'react-router-dom';
const LoginPage = () => {

	const { curUser } = useData()
	const location = useLocation();
	console.log(curUser)



	if (location.pathname === '/login' && curUser.length !== 0) {
		return window.history.back();
	} else{
		localStorage.clear()
		return (
			<Flex
				flexDir={'column'}
				height={'100vh'}
			>
				<TopNav />
				<LogForm />
			</Flex>
		);
	}
	
};

export default LoginPage;
