import expect from 'expect';
import reducer from '../../reducers/adminReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState'
import { allBooks, error, pendingBorrowedBookRequest,
  pendingReturnedBookRequest, book3, allBooksAfterABookDeletion, book1Modified,
  allBooksAfterABookModification, pendingBorrowedBookRequestList,
  acceptedPendingBorrowedBookRequestList, pendingReturnedBookRequestlist, 
  acceptedPendingReturnedBookRequestList, pendingReturnedBookRequestList } from '../reducers/mocks/adminData';

describe('Admin reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState.admin)
  });
  it('should handle FETCH_BOOK_SUCCESS', () => {
    const fetchAllBooksSuccess = {
      type: types.FETCH_BOOK_SUCCESS,
      books: allBooks
    };
    expect(reducer({}, fetchAllBooksSuccess)).toEqual({allBooks})
  });
  it('should handle FETCH_BOOK_ERROR', () => {
    const fetchAllBooksError = {
      type: types.FETCH_BOOK_ERROR,
      error
    };
    expect(reducer({}, fetchAllBooksError)).toEqual({ error })
  });
  it('should handle PENDING_BORROW_REQUEST_SUCCESS', () => {
    const fetchPendingBorrowRequestSuccess = {
      type: types.PENDING_BORROW_REQUEST_SUCCESS,
      pendingBorrowList: pendingBorrowedBookRequest
    };
    expect(reducer({}, fetchPendingBorrowRequestSuccess)).toEqual({ pendingBorrowedBookRequest })
  });
  it('should handle PENDING_BORROW_REQUEST_ERROR', () => {
    const fetchPendingBorrowRequestError = {
      type: types.PENDING_BORROW_REQUEST_ERROR,
      error
    };
    expect(reducer({}, fetchPendingBorrowRequestError)).toEqual({ error })
  });
  it('should handle PENDING_RETURN_REQUEST_SUCCESS', () => {
    const fetchPendingReturnRequestSuccess = {
      type: types.PENDING_RETURN_REQUEST_SUCCESS,
      pendingAcceptList: pendingReturnedBookRequest
    };
    expect(reducer({}, fetchPendingReturnRequestSuccess)).toEqual({ pendingReturnedBookRequest })
  });
  it('should handle PENDING_RETURN_REQUEST_ERROR', () => {
    const fetchPendingReturnRequestError = {
      type: types.PENDING_RETURN_REQUEST_ERROR,
      error
    };
    expect(reducer({}, fetchPendingReturnRequestError)).toEqual({ error })
  });
  it('should handle DELETE_BOOK_SUCCESS', () => {
    const deleteBookSuccess = {
      type: types.DELETE_BOOK_SUCCESS,
      bookId: book3.id
    };
    expect(reducer({ allBooks }, deleteBookSuccess)).toEqual({ allBooks:allBooksAfterABookDeletion })
  });
  it('should handle DELETE_BOOK_ERROR', () => {
    const deleteBookError = {
      type: types.DELETE_BOOK_ERROR,
      error
    };
    expect(reducer({}, deleteBookError)).toEqual({ error })
  });
  it('should handle UPDATE_SUCCESS', () => {
    const modifyBookReviewSuccess = {
      type: types.UPDATE_SUCCESS,
      book: book1Modified
    };
    expect(reducer({ allBooks }, modifyBookReviewSuccess)).toEqual({ allBooks: allBooksAfterABookModification})
  });
  it('should handle UPDATE_ERROR', () => {
    const modifyBookReviewError = {
      type: types.UPDATE_ERROR,
      error
    };
    expect(reducer({}, modifyBookReviewError)).toEqual({ error })
  });
  it('should handle ACCEPT_BOOK_BORROW_SUCCESS', () => {
    const pendingBorrowRequestAcceptSuccess = {
      type: types.ACCEPT_BOOK_BORROW_SUCCESS,
      borrowedBook: pendingBorrowedBookRequestList[0]
    };
    expect(reducer(
      { pendingBorrowedBookRequest: pendingBorrowedBookRequestList },
      pendingBorrowRequestAcceptSuccess))
      .toEqual({
        pendingBorrowedBookRequest: acceptedPendingBorrowedBookRequestList})
  });
  it('should handle ACCEPT_BOOK_BORROW_ERROR', () => {
    const pendingBorrowRequestAcceptError = {
      type: types.ACCEPT_BOOK_BORROW_ERROR,
      error
    };
    expect(reducer({}, pendingBorrowRequestAcceptError)).toEqual({ error })
  });
  it.only('should handle ACCEPT_BOOK_RETURN_SUCCESS', () => {
    const pendingReturnRequestAcceptSuccess = {
      type: types.ACCEPT_BOOK_RETURN_SUCCESS,
      returnedBook: pendingReturnedBookRequestList[0]
    };
    expect(reducer(
      { pendingReturnedBookRequest: pendingReturnedBookRequestList },
      pendingReturnRequestAcceptSuccess))
      .toEqual({
        pendingReturnedBookRequest: acceptedPendingReturnedBookRequestList})
  });
  it('should handle ACCEPT_BOOK_RETURN_ERROR', () => {
    const fetchPendingReturnRequestError = {
      type: types.ACCEPT_BOOK_RETURN_ERROR,
      error
    };
    expect(reducer({}, fetchPendingReturnRequestError)).toEqual({ error })
  });
})