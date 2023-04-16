import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { CardActions, Divider, CardHeader, CardContent, Grid, TextField, InputAdornment, OutlinedInput, Card, Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { spacing } from '@mui/system';


const now = new Date();

const data = [
  {
    id: '5e887b209c28ac3dd97f6db5',
    address: {
      city: 'Amravati',
      country: 'India',
      state: 'Maharastra',
      street: '8569  Maltekdi'
    },
    avatar: '/assets/avatars/avatar-fran-perez.png',
    createdAt: subDays(subHours(now, 1), 2).getTime(),
    email: 'demo.demo@sarthak.io',
    name: 'Sarthak Khandare',
    phone: '712-351-5711'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    address: {
      city: 'Mukta ',
      country: 'Murtizapur',
      state: 'Maharastra',
      street: '4894  A.S N.H'
    },
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subDays(subHours(now, 4), 2).getTime(),
    email: 'jie.yan.song@devias.io',
    name: 'Jie Yan Song',
    phone: '770-635-2682'
  },
  {
    id: '5e86809283e28b96d2d38537',
    address: {
      city: 'Paratwada',
      country: 'Maharastra',
      name: 'Hindavi lande',
      street: '4158  Hedge Street'
    },
    avatar: '/assets/avatars/avatar-anika-visser.png',
    createdAt: subDays(subHours(now, 11), 2).getTime(),
    email: 'hinda.binda@jhakas.io',
    name: 'Hindavi Lande',
    phone: '908-691-3'
  }
]; 

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Entries | IndexIT
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Customers
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  {/* <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button> */}
                  {/* <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button> */}
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>

            
              <Card>
                <CardHeader
                  // subheader="Add Entry"
                  title="Add Entry"
                />
                <CardContent sx={{ pt: 0,
                                  my: -3 }}>
                  <Box sx={{ mx: 1.5,
                            my: 1.5 }}>
                    <Grid
                      container
                      spacing={3}
                      sx={{gap:2,display:'flex' ,flexDirection:'row'}}
                    >
                      <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          // helperText="Please specify the first name"
                          label="First name"
                          name="firstName"
                          // onChange={handleChange}
                          required
                          // value={values.firstName}
                        />
                      </Grid>
                      <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          label="Last name"
                          name="lastName"
                          // onChange={handleChange}
                          required
                          // value={values.lastName}
                        />
                      </Grid>
                      <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          // onChange={handleChange}
                          required
                          // value={values.email}
                        />
                      </Grid>
                      {/* <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          label="Location"
                          name="location"
                          // onChange={handleChange}
                          required
                          // value={values.country}
                        />
                      </Grid> */}
                      <Grid
                        xs={7}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          // onChange={handleChange}
                          type="number"
                          required
                          // value={values.phone}
                        />
                      </Grid>
                      {/* <Grid
                        xs={12}
                        md={6}
                      >
                        <TextField
                          fullWidth
                          label="Select State"
                          name="state"
                          // onChange={handleChange}
                          required
                          select
                          // SelectProps={{ native: true }}
                          // value={values.state}
                        >
                          {states.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                      </Grid> */}
                    </Grid>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button variant="contained" sx={{}}>
                    Save details
                  </Button>
                </CardActions>
              </Card>
          

            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
