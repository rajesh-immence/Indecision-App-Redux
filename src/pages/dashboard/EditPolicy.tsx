import { Helmet } from 'react-helmet-async';
import { paramCase } from 'change-case';
import { useParams } from 'react-router-dom';
// data
import { useSelector } from 'src/redux/store';
// sections
import { PoliciesEditPostForm } from 'src/sections/@dashboard/policies/PoliciedEditPostForm';
// @mui
import { Container } from '@mui/material';
// redux store
import { policyList } from 'src/redux/slices/policy';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _userList } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';
// ----------------------------------------------------------------------

export default function UserEditPage() {
  const { themeStretch } = useSettingsContext();
  const list = useSelector(policyList);
  const { id } = useParams();

  const currentUser = list.find((user) => paramCase(user.id) === id);
  console.log(currentUser);

  return (
    <>
      <Helmet>
        <title> User: Edit user | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Edit policy"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Policies',
              href: PATH_DASHBOARD.general.policies,
            },
            {
              name: 'Edit',
              href: PATH_DASHBOARD.general.edit(paramCase(id)),
            },
            { name: currentUser?.title || 'edit' },
          ]}
        />

        <PoliciesEditPostForm isEdit currentUser={currentUser} />
      </Container>
    </>
  );
}
