import * as Yup from 'yup';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//
import { useDispatch, useSelector } from 'src/redux/store';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { LoadingButton } from '@mui/lab';
import { Card, Grid, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// @types
// assets
import { useSnackbar } from '../../../components/snackbar';
import FormProvider, {
  RHFSwitch,
  RHFTextField,
  RHFAutocomplete,
} from '../../../components/hook-form';

//
import { createPolicy, editPolicy, policyList } from 'src/redux/slices/policy';
//----------------------------------------------------------------------

type Props = {
  isEdit?: boolean;
  currentUser?: PolicyType;
};

export type PolicyType = {
  id: string;
  title?: string | undefined;
  description?: string | undefined;
  type?: string | undefined;
  publish?: boolean | string | undefined;
  metaTitle?: string | undefined;
  date?: string;
  updateDate?: string;
};

export type FormValuesProps = PolicyType;
function PoliciesEditPostForm({ isEdit = false, currentUser }: Props) {
  const navigate = useNavigate();
  const list1 = useSelector(policyList);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const TYPE_OPTION = ['Safety Policy', 'Regulatory Policy', 'HR Policy', 'Restrictive Policy'];

  const NewPolicySchema = Yup.object().shape({
    id: Yup.string(),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    publish: Yup.boolean(),
    type: Yup.string().required('Type is required'),
    updateDate: Yup.string().min(
      1,
      'Update date is required, (If you creating policy fill Update date = "-" )'
    ),
    date: Yup.string().required('Date is required'),
  });

  const defaultValues = useMemo(
    () => ({
      id: currentUser?.id || '',
      title: currentUser?.title || '',
      description: currentUser?.description || '',
      type: currentUser?.type || '',
      publish: currentUser?.publish || false,
      date: currentUser?.date || '',
      updateDate: currentUser?.updateDate || '',
    }),
    [currentUser]
  );

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewPolicySchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  console.log(values.title, values.description, values.date, values.publish, values.type);

  useEffect(() => {
    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(!isEdit ? 'Create success!' : 'Update success!');
      navigate(PATH_DASHBOARD.general.policies);
      if (!isEdit) {
        const list = { ...data, id: String(list1.length + 1) };
        dispatch(createPolicy(list));
      } else {
        const list = data;
        dispatch(editPolicy(list));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <RHFTextField name="title" label="Title" />

              <RHFTextField name="description" label="Description" multiline rows={8} />
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <div>
                <RHFSwitch
                  name="publish"
                  label="Publish"
                  labelPlacement="start"
                  sx={{ mb: 1, mx: 0, width: 1, justifyContent: 'space-between' }}
                />
              </div>

              <RHFAutocomplete
                name="type"
                label="Type"
                options={TYPE_OPTION.map((option) => option)}
                ChipProps={{ size: 'small' }}
              />
              <RHFTextField name="date" label="Date" />
              <RHFTextField name="updateDate" label="updateDate" />
            </Stack>
          </Card>

          <Stack alignItems="flex-end" sx={{ mt: 3 }}>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              {!isEdit ? 'Create Policy' : 'Save Changes'}
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}

export { PoliciesEditPostForm };
