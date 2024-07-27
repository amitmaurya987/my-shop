import React, { useEffect, useRef, useState } from "react";
import crosIcon from "../../../assets/cross.png";
import {
  AddCustomersWrapper,
  ModelFooter,
  ModelWrapper,
  OverLayer,
} from "./style";
import Tab from "../Tab/Tab";
import Button from "../Input/Button";
import IconNext from "../../../assets/Icons/IconNext";
import IconBack from "../../../assets/Icons/IconBack";
import ContactInfoTab from "../../../Pages/Customers/ContactInfoTab";
import CompanyAddressTab from "../../../Pages/Customers/CompanyAddressTab";
import CompanyInfoTab from "../../../Pages/Customers/CompanyInfoTab";
import DevicesTab from "../../../Pages/Customers/DevicesTab";
import { isEmpty, sendNotification } from "../../../utils/common";
import { formValidation } from "../../../utils/formValidation";
import Loader from "../../Loader/Loader";
import NotificationBox from "../Notification/Notification";
import { productCatalog, productDepentant } from "../../../utils/api";

const CompanyItialData = {
  companyName: "",
  taxId: "",
  companyWebsite: "",
  companyPhone: "",
 
};
const CompanyAddress = {
  address1: "",
  address2: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",
};

const ContactInfoInitial = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  involved: "",
};

function Model({
  closeModel = () => {},
  submit = () => {},
  showMsg = () => {},
  setLoading = () => {},
}) {
  const [tab, setTab] = useState(1);
  const [total, setTotal]= useState(0);
  const [margin, setMargin]= useState(0);
  const [devicesFormData, setDevicesFormData] = useState([]);

  const [devicesFormDataError, setDevicesFormDataError] = useState([]);
  const [selectOption, setSelectOption]= useState([]);
  const [dependent,setDependent] = useState([]);
  
  const [companyFormData, setCompanyFormData] = useState({
    ...CompanyItialData,
  });
  const [companyFormDataError, setCompanyFormDataError] = useState({
    ...CompanyItialData,
  });
  const [companyaddressFormData, setCompanyaddressFormData] = useState({
    ...CompanyAddress,
  });
  const [companyaddressErr, setCompanyaddressErr] = useState({
    ...CompanyAddress,address1:""
  });
  const [contactInfo, setContactInfo] = useState({ ...ContactInfoInitial });
  const [contactInfoErr, setContactInfoErr] = useState({
    ...ContactInfoInitial,
  });
  const childRef = useRef(null)
  const [opacity, setOpacity] = useState("opacity-0");
  const [zoom, setZoom] = useState("zoom-1");

  const next = () => {
    if (tab === 1) {
      let checkError = true;
      const errorArr_ = devicesFormDataError;
     
      devicesFormData.map((item, index) => {
        const error = formValidation(item,["base_quantity","markup_price","notes","disable","commissionable","match_quantity"]);
     
        if (!isEmpty(error)) {
          checkError = false;
       
       
          if(parseFloat(item.price) < item.basePrice){
           
            error.price =  `Minimun is set to ${item.basePrice}`
          }
          let newErrObj = { ...error};

          errorArr_[index] = newErrObj;
       
          setDevicesFormDataError([...errorArr_]);
        }
      });

      errorArr_.map((err) => {
        if (!isEmpty(err.price)) {
          checkError = false;
        }
      });

      if (checkError) {
        setTab(tab + 1);
      }
    } else if (tab === 2) {
     
      const error = formValidation(companyFormData,["taxId"]);

      if(companyFormData?.companyPhone.length < 10){
        error.companyPhone = 'Phone number must be 10 digit';
      }

    
      
      if (isEmpty(error)) {
        setTab(tab + 1);
      } else {
        setCompanyFormDataError({ ...CompanyItialData, ...error });
      }
    } else if (tab === 3) {
      const error = formValidation(companyaddressFormData,["address2"]);
    
  
      if (isEmpty(error)) {
        setTab(tab + 1);
      } else {
        setCompanyaddressErr({ ...CompanyAddress, ...error });
      }
    } else {
      const error = formValidation(contactInfo);
      if(contactInfo.phoneNumber.length < 10){
        error.phoneNumber = 'Phone number must be 10 digit';
      }
      const onboarding_contact_info = {
        first_name: contactInfo.firstName,
        last_name: contactInfo.lastName,
        email: contactInfo.email,
        phone_number: contactInfo.phoneNumber,
        involved: contactInfo.involved,
      };
      const company_address = {
        address1: companyaddressFormData.address1,
        address2: companyaddressFormData.address2,
        country: companyaddressFormData.country,
        state: companyaddressFormData.state,
        city: companyaddressFormData.city,
        zip_code: companyaddressFormData.zipCode,
      };
      const company_data = {
        company_name: companyFormData.companyName,
        tax_id: companyFormData.taxId,
        company_website: companyFormData.companyWebsite,
        company_phone: companyFormData.companyPhone,
      
      };

      const company_products = devicesFormData.map(
        (item) => {
          return {price:parseFloat(item.price),id:Number(item.id),quantity:Number(item.quantity)}
        }
     
      );

     
    
      if (isEmpty(error)) {
        const payload = {
          company_products,
          company_data,
          company_address,
          onboarding_contact_info,
        };
      
        submit(payload);
      } else {
        setContactInfoErr({ ...ContactInfoInitial, ...error });
      }
    }
  };

  const close = () => {
    setZoom("zoom-1");

    setTimeout(() => {
      setOpacity("opacity-0");
    }, 200);
    setTimeout(() => {
      setTab(1);
   
      setCompanyFormData({ ...CompanyItialData });
      setCompanyFormDataError({ ...CompanyItialData });
      closeModel();
    }, 600);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpacity("opacity-1");
    });
    setTimeout(() => {
      setZoom("zoom");
    }, 100);
  }, []);

  useEffect(() =>{
    setLoading(true);
  
    productDepentant().then((resp) =>{
      if(resp?.status === 200){
       
  setDependent(resp?.data)
      }
      setLoading(false);
      getProductList(resp?.data || []);
    })
  },[])

  const getProductList = (dependents) =>{
    setLoading(true);
    productCatalog().then(resp =>{
      setLoading(false);
     if(resp?.status === 200){
       
       const transformedArray = resp?.data?.map((item) =>{

         return {
           label: item.description,
           value: item.id.toString(), 
           basePrice: item.rate,
           markup_price:item.markup_price,
           base_quantity:item.base_quantity,
           notes:item.notes,
           commissionable:item.commissionable,
           match_quantity:item.match_quantity
       }

       } );

       

       if(!isEmpty(resp?.data)){
        const mergedProducts = dependents.map(item => item.products).flat();
     
        let initalErr = []
        let initial =  []
        if(mergedProducts.includes(resp?.data[0].id)){
      
            dependents.map((item,i) =>{
                       
              if(item.products.includes(resp?.data[0].id)){
                item?.products.map((val,ind )=>{
                  resp?.data.map(elements =>{

                    if(elements.id === val){
                      const  prodectItem =   {
                        id: elements.id,
                        price: elements.rate + elements.markup_price,
                        quantity:elements.base_quantity,
                        basePrice: elements.rate,
                        base_quantity:elements.base_quantity,
                        notes:elements.notes,
                        disable:true,
                        commissionable:elements.commissionable,
                        match_quantity:elements.match_quantity
                      }

                      if(ind === 0){
                        prodectItem.disable =false;
                      }
                      initial.push(prodectItem);

                      let  error={}
                      const prize = (elements.rate + elements.markup_price).toFixed(2);
                      if(elements.markup_price > prize){
                        error = {
                          price: `Minimun is set to ${elements.rate}`,
                          quantity: "",
                        }
             
                      
                      }else{
                       error = {
                         price: ``,
                         quantity: "",
                       }
                      }
                      initalErr.push(error);
                    }

                  })
                    
                })
              }
              
         });

        }else{
        const  prodectItem =   {
            id: resp?.data[0].id,
            price: resp?.data[0].rate + resp?.data[0].markup_price,
            quantity: resp?.data[0].base_quantity,
            basePrice: resp?.data[0].rate,
            base_quantity:resp?.data[0].base_quantity,
            notes:resp?.data[0].notes,
            disable:false,
            commissionable:resp?.data[0].commissionable,
            match_quantity:resp?.data[0].match_quantity
          }
          initial.push(prodectItem);
          const prize = (resp?.data[0].rate + resp?.data[0].markup_price).toFixed(2);
          let  error={}
          if(resp?.data[0].markup_price > prize){
            error = {
              price: `Minimun is set to ${resp?.data[0].rate}`,
              quantity: "",
            }
 
          
          }else{
           error = {
             price: ``,
             quantity: "",
           }
          }
          initalErr.push(error);
        }


         setDevicesFormDataError([...initalErr]);
   
         setDevicesFormData([...initial]);
        
       }
      
     setSelectOption([...transformedArray])
    
     }else if(resp?.status === 401){
       sendNotification(childRef,"error","Unauthorized User");
       
     }else if(resp?.status === 400){
       sendNotification(childRef,"error","Bad Request");
     }else{
       sendNotification(childRef,"error","Something went wrong.");
     }
   })
  }
const errorMsg = (msg) =>{
  sendNotification(childRef,"error",msg);
}
  return (
    <OverLayer>
       
      <NotificationBox ref={childRef} />
      <ModelWrapper className={`${opacity} ${zoom}`}>
        <AddCustomersWrapper>
          <div className="modelHeader flex justify-between align-center">
            <h2>Add new Customer</h2>
            <div className="close pointer center" onClick={close}>
              <img src={crosIcon} alt="close" />
            </div>
          </div>
          <Tab tab={tab} setTab={setTab} />
          <div className="tabContact">
            {tab === 4 && (
              <ContactInfoTab
                formData={contactInfo}
                setFormData={setContactInfo}
                setFormDataError={setContactInfoErr}
                formDataError={contactInfoErr}
              />
            )}
            {tab === 3 && (
              <CompanyAddressTab
                formData={companyaddressFormData}
                setFormData={setCompanyaddressFormData}
                setFormDataError={setCompanyaddressErr}
                formDataError={companyaddressErr}
                showMsg={showMsg}
                setLoading={setLoading}
              />
            )}
            {tab === 2 && (
              <CompanyInfoTab
                formData={companyFormData}
                setFormData={setCompanyFormData}
                setFormDataError={setCompanyFormDataError}
                formDataError={companyFormDataError}
              />
            )}
            {tab === 1 && (
              <DevicesTab
            
                setDevicesFormDataError={setDevicesFormDataError}
                devicesFormDataError={devicesFormDataError}
                setDevicesFormData={setDevicesFormData}
                devicesFormData={devicesFormData}
                selectOption={selectOption}
                setMargin={setMargin}
                margin={margin}
                setTotal={setTotal}
                total={total}
                dependent={dependent}
                errorMsg={errorMsg}
              />
            )}
          </div>
          <ModelFooter className="flex justify-between align-center">
            {tab > 1 ? (
              <Button
                title={"Back"}
                Icon={IconBack}
                iconPosition="left"
                className="btnoutline"
                onClick={() => setTab(tab - 1)}
              />
            ) : (
              <div></div>
            )}
            {tab !== 4 && (
              <Button title={"Next"} Icon={IconNext} onClick={next} />
            )}
            {tab === 4 && <Button title={"Add Customer"} onClick={next} />}
          </ModelFooter>
        </AddCustomersWrapper>
      </ModelWrapper>
    </OverLayer>
  );
}

export default Model;
