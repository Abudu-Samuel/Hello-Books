import axios from 'axios';
import toastMessage from '..//helpers/toastMessage';
import { hostUrl } from '../helpers/utils';
import bluebird from 'bluebird';
import axiosDefaultOptions from '../helpers/axiosDefaultOptions';
import { 
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_ERROR,
  PENDING_BORROW_REQUEST,
  PENDING_BORROW_REQUEST_SUCCESS,
  PENDING_BORROW_REQUEST_ERROR, 
  PENDING_RETURN_REQUEST,
  PENDING_RETURN_REQUEST_SUCCESS,
  PENDING_RETURN_REQUEST_ERROR,
  DELETE_BOOK,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_ERROR
} from './actionTypes';

const fetchBookSuccess = (books) => {
  return {
    type: FETCH_BOOK_SUCCESS,
    books
  }
}

const fetchBookError = (error) => {
  return {
    type: FETCH_BOOK_ERROR,
    error
  }
}

export const fetchAllBooks = () => dispatch => {
  return axios.get(`${hostUrl}/api/v1/books/`, axiosDefaultOptions)
    .then((response) => {
      dispatch(fetchBookSuccess(response.data.books))
    })
    .catch((error) => {
      dispatch(fetchBookError(error.response.data))
    })
}

const pendingAcceptBorrow = () => {
  return {
    type: PENDING_BORROW_REQUEST
  }
}

const pendingAcceptBorrowSuccess = (pendingBorrowList) => {
  return {
    type: PENDING_BORROW_REQUEST_SUCCESS,
    pendingBorrowList
  }
}

const pendingAcceptBorrowError = (error) => {
  return {
    type: PENDING_BORROW_REQUEST_ERROR,
    error
  }
}

export const pendingAcceptBorrowRequest = () => dispatch => {
  dispatch(pendingAcceptBorrow());
  return axios.get(`${hostUrl}/api/v1/borrowedbooks/?borrowStatus=pending`, axiosDefaultOptions)
  .then((response) => {
    dispatch(pendingAcceptBorrowSuccess(response.data))
    // toastMessage('Book fetch successful', 'success')
  })
  .catch((error) => {
    dispatch(pendingAcceptBorrowError(error))
    toastMessage('book fetch failed', 'failure')
  })
}

const pendingAcceptReturn = () => {
  return {
    type:PENDING_RETURN_REQUEST
  }
}

const pendingAcceptReturnSuccess = (pendingAcceptList) => {
  return {
    type: PENDING_RETURN_REQUEST_SUCCESS,
    pendingAcceptList
  }
}

const pendingAcceptReturnError = (error) => {
  return {
    type: PENDING_RETURN_REQUEST_ERROR,
    error
  }
}

export const pendingAcceptReturnRequest = () => dispatch => {
  dispatch(pendingAcceptReturn());
  return axios.get(`${hostUrl}/api/v1/borrowedbooks/?returnStatus=pending`, axiosDefaultOptions)
  .then((response) => {
    console.log(response.data)
    
    dispatch(pendingAcceptReturnSuccess(response.data.borrowedBooks))
    // toastMessage(response.data.message, 'success')
  })
  .catch((error) => {
    dispatch(pendingAcceptReturnError(error))
    toastMessage(error.response.data.message, 'failure')
  })
}
 

const deleteBook = () => {
  return {
    type: DELETE_BOOK
  }
}

const deleteBookSuccess = (bookId) => {
  return {
    type:DELETE_BOOK_SUCCESS,
    bookId
  }
}

const deleteBookError = (error) => {
  return {
    type: DELETE_BOOK_ERROR,
    error
  }
}

export const deleteBookAction = (bookId) => dispatch => {
  dispatch(deleteBook());
    return axios.delete(`${hostUrl}/api/v1/books/${bookId}`,  axiosDefaultOptions)
    .then(() => {
      dispatch(deleteBookSuccess(bookId))
    })
    .catch((error) => {
      dispatch(deleteBookError(error))
      toastMessage(error.response.data.message, 'failure')
    })

}