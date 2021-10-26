import { Fragment } from "react";
import Banner from "../../elements/ui/Banner";
import UserFindPasswordForm from "../../elements/widgets/Form/UserFindPasswordForm";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

export default function HRFindPassword() {

  return (
    // <div id="wrap">
    //   <Header />
    //   <div className="container-scroller">
    //     <div className="container-fluid page-body-wrapper">
    //       {/* Banner는 왼쪽에 있는 리스트 형식의 메뉴 */}
    //       <Banner />
    //       {/* 여기부터 프사 누르면 나오는 메뉴 */}
    //       <div className="main-panel">
    //         <div className="content-wrapper">
                <UserFindPasswordForm/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
  );
}