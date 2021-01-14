import { Avatar } from "@material-ui/core";
import React from "react";
import { getDate } from "../../utility/utils";
import LOGO from '../../RawData/mainassociates_icon.png'



function PrintTermsandCondition({ obj, print }) {



    return (
        <div>


            <div className="container">
                <div className="row" >
                    <div className="col-12" style={{ display: 'grid', placeItems: 'center' }} >
                        <Avatar alt="logo" src={LOGO} variant="rounded" style={{ width: '80px', height: '50px', marginTop: '3%' }} />
                    </div>

                </div>

                <div className="row">


                    <div className="col-12  heading">

                        <h3 className="mt-5 rounded text-center bg-danger text-white p-2"><em>TERMS &amp; CONDITIONS </em></h3>

                    </div>

                    <div className="mt-5 col-12">
                        <div className="row">
                            <div className="offset-7 col-2 pl-4 text-right "><span style={{ fontSize: 12, opacity: 0.5 }} >Date :</span></div>
                            <div className="col-2 text-left pl-4  border-bottom"><span style={{ fontSize: 12, opacity: 0.5 }} >{getDate()}</span></div>
                        </div>
                    </div>


                    <div className="mt-5 offset-1 col-10">

                        <ol>
                            <li className="mt-2 pl-2">All payments to be paid by applicant according to agreed schedule. </li>
                            <li className="mt-2 pl-2">Contact information provided by the applicant should only be modified / changed with prior
                            information to company otherwise company shall not be responsible for any delay in
                                communication &amp; subsequent late charges.  </li>
                            <li className="mt-2 pl-2">Possession &amp; ownership of property shall remain with the company until
                                full payment with service, documentation charges etc paid by applicant. </li>
                            <li className="mt-2 pl-2"> No sell / transfer activity to be carried out by allottee prior to taking over possession of the
                            property, subject to written consent of company that to be made after receiving all
                                outstanding dues &amp; transfer fee.  </li>
                            <li className="mt-2 pl-2">In case of late payment after decided time a late payment charge will be levied for
                            outstanding dues. Failure to pay late charges &amp; dues after final notice the allocation will be
                            liable to cancellation. Deposited amount shall be refunded after 6 months of cancellation and
                                    resale of property with 10% deduction from refundable amount </li>

                            <li className="mt-2 pl-2">In case of surrender by applicant, the deduction would be same as per clause no. 5 of this
                                document. The deduction to be made in account of service &amp; establishment charges.  </li>
                            <li className="mt-2 pl-2"> lease expanses, documentation charges, outer development charges &amp; all other ancillary &amp;
                            miscellaneous expenses &amp; formalities of various departments I agencies as &amp; when asked by
                            company to be paid by applicant within the given time. Expanses / charges stated above
                                (where applicable) does not include in cost of property. </li>
                            <li className="mt-2 pl-2">Project maintenance charges to be paid by applicant on 10"' of every month after booking of
                                property. </li>
                            <li className="mt-2 pl-2">Company will make every effort to obtain utility services for project but accepts no
                                responsibility in case of any delay from respective departments.  </li>
                            <li className="mt-2 pl-2">The applicant will not misuse the amenities provided by the company.  </li>
                            <li className="mt-2 pl-2">Booking of property is provisional unit final payment is cleared.  </li>
                            <li className="mt-2 pl-2">Use of exterior walls, front &amp; common area is reserved by company for any commercial or
                                other use at discretion of company.   </li>
                            <li className="mt-2 pl-2">Numbering &amp; identification I marking in layout plans &amp; or allocation letter are ad hoc,
                                temporary &amp; company reserves the rights to amend.    </li>
                            <li className="mt-2 pl-2">No construction work to be carded out without company NOC &amp; a copy of such document to
                                be submitted at project main gate for allowance of construction material, labor &amp; vehicles.    </li>
                            <li className="mt-2 pl-2">Illegal activities / activist are strictly prohibited in project area. In case of any complaint
                                regarding such activity / person, company reserves the rights of cancellation of allotment.    </li>
                            <li className="mt-2 pl-2">I confirm that I have fully read, understood the terms &amp; conditions and do hereby
                                agree to abide by the same.    </li>


                        </ol>

                    </div>
                    <div className="mt-5 col-12">
                        <div className=" row ">
                            <div style={{ height: "5rem" }} className="offset-2 col-2 col-2 mb-2 text-left pl-4"></div>
                            <div className="offset-1 col-2  text-left pl-4 "></div>
                            <div className="offset-2 col-1   ">
                                <Avatar variant="rounded" alt="pic" src={obj['personal']['imageURI']} style={{ width: '100px', height: '100px' }} />
                            </div>

                        </div>
                        <div className="row ">
                            <div className="offset-2 col-2 text-left "> Read &amp; Understood </div>
                            <div className="offset-1  col-4 text-center  "><span>CNIC: {obj['personal']['cnic']}</span> </div>


                        </div>
                    </div>


                </div>

                <div className="mt-5 col-12 ">
                    <div className="row">
                        <div className=" col-2 text-center ">CALL US:</div>

                    </div>
                    <div className="row">
                        <div className="col-2 text-center ">+92-</div>

                    </div>
                </div>
                
                {
                print
                    ? <div style={{ display: 'flex', flexDirection: 'column', bottom: '50px', width: '100%', position: 'fixed', textAlign: 'center' }} >
                        <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >Powered By <b>HESOGENS</b> </span>
                        <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >Digital Service Provider</span>
                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto' }} >
                            <span style={{ fontSize: 12, color: 'black', opacity: '0.7' }} >www.hesogens.com&nbsp;|&nbsp;+92-312-2027770</span>
                        </div>
                    </div>
                    : null
            }





            </div>

        </div>

    )
}


export default PrintTermsandCondition


