import { Helmet } from 'react-helmet-async';
// sections
import { PoliciesEditPostForm } from 'src/sections/@dashboard/policies/PoliciedEditPostForm';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import { useSettingsContext } from '../../components/settings';
import CustomBreadcrumbs from '../../components/custom-breadcrumbs';

// ----------------------------------------------------------------------

export default function UserCreatePage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> User: Create a new user | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Create a new policy"
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
              name: 'Create',
              href: PATH_DASHBOARD.general.create,
            },
            { name: 'New policy' },
          ]}
        />
        <PoliciesEditPostForm />
      </Container>
    </>
  );
}
