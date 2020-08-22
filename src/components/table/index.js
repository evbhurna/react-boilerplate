import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination, useSortBy } from 'react-table'

export const Styles = styled.div`
  display: block;
  max-width: 100%;

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-y: hidden;
  }

  table {
    width: 100%;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;

      :last-child {
        border-right: 0;
      }
    }
  }

`

export function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, 
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
        useSortBy,
        usePagination,
    )

    // Render the UI for your table
    return (
        <>
            <div className="card p-2">
                <div className="tableWrap">
                    <table {...getTableProps()} className="table-striped table-bordered table-hover">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        // Add the sorting props to control sorting. For this example
                                        // we can add them into the header props
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                            {column.render('Header')}
                                            {/* Add a sort direction indicator */}
                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? ' 🔽'
                                                        : ' 🔼'
                                                    : ''}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div>Showing {pageSize} results of {data.length} rows</div>
                </div>
            </div>
            <div className="card p-2">
                <div className="row">
                    <div className="col-md-4 my-2">
                        <button className="btn btn-primary m-1" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            <i className="material-icons">first_page</i>
                        </button>{' '}
                        <button className="btn btn-primary m-1" onClick={() => previousPage()} disabled={!canPreviousPage}>
                            <i className="material-icons">chevron_left</i>
                        </button>{' '}
                        <button className="btn btn-primary m-1" onClick={() => nextPage()} disabled={!canNextPage}>
                            <i className="material-icons">chevron_right</i>
                        </button>{' '}
                        <button className="btn btn-primary m-1" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                            <i className="material-icons">last_page</i>
                        </button>{' '}
                    </div>
                    <div className="col-md-4 my-2">
                        <span>
                            <strong style={{ verticalAlign: "middle" }}>
                                Page{' '}
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                    &nbsp;&nbsp;| Go to page:{' '}
                            <input
                                className="form-control d-inline"
                                type="number"
                                defaultValue={pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    gotoPage(page)
                                }}
                                style={{ width: '100px' }}
                                min="1"
                                max={pageOptions.length}
                            />
                        </span>{' '}
                    </div>
                    <div className="col-md-4 my-2">
                        Show entries
                    <select
                            className="form-control d-inline mx-2"
                            style={{ width: '100px' }}
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value))
                            }}
                        >
                            {[10, 20, 30].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>
            </div>
        </>
    )
}

