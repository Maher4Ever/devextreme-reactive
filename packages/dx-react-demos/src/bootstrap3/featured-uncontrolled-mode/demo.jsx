import React from 'react';
import PropTypes from 'prop-types';
import {
  SortingState, SelectionState, FilteringState, PagingState, GroupingState,
  LocalFiltering, LocalGrouping, LocalPaging, LocalSorting, LocalSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table, TableHeaderRow, TableFilterRow, TableSelection, TableGroupRow,
  PagingPanel, GroupingPanel, DragDropContext, TableColumnReordering, Toolbar,
} from '@devexpress/dx-react-grid-bootstrap3';
import {
  ProgressBarCell,
} from '../templates/progress-bar-cell';
import {
  HighlightedCell,
} from '../templates/highlighted-cell';

import {
  generateRows,
  globalSalesValues,
} from '../../demo-data/generator';

const Cell = (props) => {
  if (props.column.name === 'discount') {
    return <ProgressBarCell {...props} />;
  }
  if (props.column.name === 'amount') {
    return <HighlightedCell {...props} />;
  }
  return <Table.Cell {...props} />;
};
Cell.propTypes = {
  column: PropTypes.shape({ name: PropTypes.string }).isRequired,
};

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'product', title: 'Product' },
        { name: 'region', title: 'Region' },
        { name: 'amount', title: 'Sale Amount' },
        { name: 'discount', title: 'Discount' },
        { name: 'saleDate', title: 'Sale Date' },
        { name: 'customer', title: 'Customer' },
      ],
      tableColumnExtensions: [
        { columnName: 'amount', align: 'right' },
      ],
      rows: generateRows({ columnValues: globalSalesValues, length: 1000 }),
      pageSizes: [5, 10, 15],
    };
  }
  render() {
    const {
      rows, columns, tableColumnExtensions, pageSizes,
    } = this.state;

    return (
      <Grid
        rows={rows}
        columns={columns}
      >
        <FilteringState
          defaultFilters={[{ columnName: 'saleDate', value: '2016-02' }]}
        />
        <SortingState
          defaultSorting={[
            { columnName: 'product', direction: 'asc' },
            { columnName: 'saleDate', direction: 'asc' },
          ]}
        />
        <GroupingState
          defaultGrouping={[{ columnName: 'product' }]}
          defaultExpandedGroups={['EnviroCare Max']}
        />
        <PagingState
          defaultCurrentPage={0}
          defaultPageSize={10}
        />
        <SelectionState
          defaultSelection={[1, 3, 18]}
        />

        <LocalGrouping />
        <LocalFiltering />
        <LocalSorting />
        <LocalPaging />
        <LocalSelection />

        <DragDropContext />

        <Table
          columnExtensions={tableColumnExtensions}
          cellComponent={Cell}
        />

        <TableColumnReordering defaultOrder={columns.map(column => column.name)} />

        <TableHeaderRow allowSorting />
        <TableFilterRow />
        <PagingPanel
          pageSizes={pageSizes}
        />
        <TableSelection showSelectAll />
        <Toolbar />
        <GroupingPanel allowSorting />
        <TableGroupRow />
      </Grid>
    );
  }
}
