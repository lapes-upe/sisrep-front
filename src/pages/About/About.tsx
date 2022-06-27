import "./About.scss"
import ContainerCustom from '../../layouts/ContainerCustom/ContainerCustom';
import { useTeste } from '../../hooks/useTeste'

export default function About() {
  const {useTesteQuery, useTesteQuery2} = useTeste();
  const { data: user, isLoading: loadingUser } = useTesteQuery2('2');
  const { data: users, isLoading: loadingUsers } = useTesteQuery();

  console.log('user', user?.data);
  console.log('users', users?.data);

  return (
    <ContainerCustom customClass='min-height'>
      <h1>Sobre</h1>
    </ContainerCustom>
  );
}
