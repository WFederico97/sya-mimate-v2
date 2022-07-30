import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

  export default function Notify () {
    toast.success("Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
    return (
        <ToastContainer />
    );
  }