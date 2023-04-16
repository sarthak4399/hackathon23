import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import { useEffect ,useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  sx
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const OverviewLatestOrders = (props) => {
  const [equipment, setEquipment] = useState([])

  const fetchData = () => {
    fetch('https://raw.githubusercontent.com/hindavilande05/testAPI/master/equipment.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setEquipment(data.equipment)
      })
  }
console.log(equipment);

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Card sx={sx}>
      <CardHeader title="Equipment Issued" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  ID
                </TableCell>
                <TableCell>
                 Equipment Name
                </TableCell>
                <TableCell >
                  Avaliable Qty
                </TableCell>
                <TableCell>
                  Issued Qty
                </TableCell>
                <TableCell>
                  Issued Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {equipment.map((order) => {
                // const createdAt = format(equipment.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                      {order.id}
                    </TableCell>

                    <TableCell>
                      {order.EqpName}
                    </TableCell>
                    <TableCell>
                      {order.availableQty}
                    </TableCell>
                    <TableCell>
                      {order.issuedQty}
                    </TableCell>
                    <TableCell>
                      {order.issueDate}
                    </TableCell>

                    <TableCell>
                      {/* <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill> */}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewLatestOrders.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
