import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookItemPage, BookListPage } from '@pages';
import { Hello } from '@components';

export default function App() {
  return (
    <div>
      <Hello />
      <ToastContainer pauseOnHover={false} autoClose={2000} />
      <Routes>
        <Route path='/' element={<BookListPage />} />
        <Route path='/books' element={<BookListPage />} />
        <Route path='/books/:bookId' element={<BookItemPage />} />
      </Routes>
    </div>
  );
}
