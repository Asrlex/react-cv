import { BaseEnum } from "@/components/entities/components.enum";

const tableStyle = {
  table: {
    width: '100%',
    maxHeight: '95%',
    backgroundColor: 'var(--table-bg-color)',
    color: 'var(--text-color)',
    transition: `all ${BaseEnum.TRANSITION_DURATION}s ease`,
    '&::-webkit-scrollbar': {
      width: '5px',
      height: '8px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'var(--scrollbar-track-color)',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'var(--scrollbar-thumb-color)',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'var(--scrollbar-thumb-hover-color)',
    },
  },
  tableRow: {
    backgroundColor: 'var(--item-bg-color)',
    ':hover': {
      backgroundColor: 'var(--item-hover-bg-color)',
    },
  },
  tableHeaderCell: {
    backgroundColor: 'var(--barra-bg-color)',
    color: 'var(--barra-text-color)',
    fontSize: '1rem',
    textAlign: 'center',
    transition: `all ${BaseEnum.TRANSITION_DURATION}s ease`,
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0',
    paddingRight: '0',

    '@media (max-width: 768px)': {
      fontSize: '0.875rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem',
    },
    '@media (min-width: 480px)': {
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
    },
  },
  tableCell: {
    color: 'var(--product-text-color)',
    fontSize: '1rem',
    cursor: 'default',
    textAlign: 'center',
    transition: `all ${BaseEnum.TRANSITION_DURATION}s ease`,
    padding: '0',

    '@media (max-width: 768px)': {
      fontSize: '0.875rem',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem',
    },
  },
  tablePagination: {
    backgroundColor: 'var(--barra-bg-color)',
    color: 'var(--pagination-text-color)',
    '@media (max-width: 600px)': {
      fontSize: '0.7rem',
      '& .MuiTablePagination-selectLabel': {
        fontSize: '0.7rem',
      },
      '& .MuiTablePagination-displayedRows': {
        fontSize: '0.7rem',
      },
      '& .MuiPopover-root': {
        fontSize: '0.7rem',
      },
      '& .MuiSvgIcon-root': {
        fontSize: '0.9rem',
      },
    },
  },
  tablePaginationSlots: {
    menuItem: {
      sx: {
        fontSize: '0.7rem',
      },
    },
    select: {
      sx: {
        fontSize: '0.7rem',
      },
    },
  },
};

export default tableStyle;