import React from 'react';
import {
  Grid,
  DragDropContext,
  Table,
  TableHeaderRow,
  TableColumnReordering,
} from '@devexpress/dx-react-grid-bootstrap3';

import {
  generateRows,
} from '../../demo-data/generator';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'name', title: 'Name' },
        { name: 'sex', title: 'Sex' },
        { name: 'city', title: 'City' },
        { name: 'car', title: 'Car' },
      ],
      tableColumnExtensions: [
        { columnName: 'sex', width: 100 },
      ],
      rows: generateRows({ length: 6 }),
      columnOrder: ['city', 'sex', 'car', 'name'],
    };

    this.changeColumnOrder = this.changeColumnOrder.bind(this);
  }
  changeColumnOrder(newOrder) {
    this.setState({ columnOrder: newOrder });
  }
  render() {
    const {
      rows, columns, tableColumnExtensions, columnOrder,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <DragDropContext />
        <Table
          columnExtensions={tableColumnExtensions}
        />
        <TableColumnReordering
          order={columnOrder}
          onOrderChange={this.changeColumnOrder}
        />
        <TableHeaderRow />
      </Grid>
    );
  }
}
