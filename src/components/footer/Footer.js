import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
 return (
   <MDBFooter color="black" className="font-small pt-4 mt-4">
     <MDBContainer fluid className="text-center text-md-left">
       <MDBRow>
         <MDBCol md="6">
           <h5 className="title"></h5>
           <img src="https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/67871313_348666312676814_2469226490026262528_n.png?_nc_cat=100&_nc_oc=AQmD3WqMtMvi3PfzM_YzzK_ojn7rMyceCV4JgwOF4oSXpImBKfos-dxldVps6gOThyY&_nc_ht=scontent.ftun1-1.fna&oh=b8bbd0d39d8d547e14fe19e70a9861c9&oe=5DEA211F(20 kB)
https://scontent.ftun1-1.fna.fbcdn.net/v/t1.15752-9/67871313_348666312676814_2469226490026262528_n.png?_nc_cat=100&_nc_oc=AQmD3WqMtMvi3PfzM_YzzK_ojn7rMyceCV4JgwOF4oSXpImBKfos-dxldVps6gOThyY&_nc_ht=scontent.ftun1-1.fna&oh=b8bbd0d39d8d547e14fe19e70a9861c9&oe=5DEA211F
" width="300 px" height="150 px" ></img>
                </MDBCol>
        
         <div class="box-content"><h3>Contactez Nous</h3>
<p>Route de Sousse, jemmel, 5020 monastir</p>
<ul>
    <li class="phone"><i class="fas fa-phone-alt"></i>TEL: 00 216 73 100 100</li>
    <li class="fax">Fax: 00 216 73 100 101</li>
    <li class="email">Email: info@Mega-plast.tn</li>
</ul>
</div>
       </MDBRow>
     </MDBContainer>
     <div className="footer-copyright text-center py-3">
       <MDBContainer fluid>
         &copy; {new Date().getFullYear()} Copyright: <a> M²b²NK </a>
       </MDBContainer>
     </div>
   </MDBFooter>
 );
}
export default FooterPage;