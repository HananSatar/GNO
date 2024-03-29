import React, { Component } from 'react'
import {TextInput,Combobox}from 'evergreen-ui'
import Context from "../context"


class Content extends React.Component {
    constructor() {
        super();
        this.state = {
          name:''
    }}
 
    render() {
  
        return (
            <Context.Consumer>
                {ctx => {
                  
    let { name, country, phone, isShown,email } = this.state
                    return (
                      // <div id="site_content">
                                   <div id="grid">
                                   <div>

                                   <ul className="list-group">
                                    <li className="list-group-item active"> <h2>          معلومات المنظمة في العراق             </h2> </li>
                                    <li className="list-group-item" ><h3>أسم المنظمة باللغة الانكليزية</h3>
                                        <TextInput width={400} height={40}     placeholder=" أسم المنظمة باللغة الانكليزية "></TextInput></li>
                                    <li className="list-group-item"><h3>   أسم المنظمة باللغة العربية </h3> <TextInput width={400} height={40}  placeholder=" أسم المنظمة باللغة العربية "></TextInput></li>
                                    <li className="list-group-item"><h3>عنوان فرع المكتب الرئيسي في بغداد</h3> <TextInput width={400} height={40} placeholder="عنوان فرع المكتب الرئيسي في بغداد"></TextInput></li>
                                    <li className="list-group-item">  <h3>أختصاص المنظمة</h3>
                                    <Combobox label={<h4>أختصاص المنظمة</h4>}
                                            items={['اعلامية','حقوق المراة', 'حقوق الطفل ']}
                                            onChange={selected => console.log(selected)}
                                            placeholder="أختصاص المنظمة"
                                            autocompleteProps={{  title: 'أختصاص المنظمة'
                                            }}
                                            width={400} height={40}

                                            // padding="10px"
                                        /></li>
                                           </ul>

                                             </div>
                            <div>
                              <ul className="list-group">
                              <li className="list-group-item active"><h2>معلومات خاصة بالمنظمة الام </h2> </li>
                              <li className="list-group-item" ><h3>أسم رئيس المنظمة/المديرالتنفيذي</h3>
                              <TextInput width={400} height={40}  placeholder=" اسم رئيس المنظمة/المدير التنفيذي "></TextInput></li>
                              <li className="list-group-item"><h3>هاتف المنظمة</h3> <TextInput width={400} height={40}   placeholder="هاتف المنظمة"></TextInput></li>
                              <li className="list-group-item"><h3>البريد الالكتروني</h3><TextInput width={400} height={40}  placeholder="البريد الالكتروني"></TextInput></li>
                              <li className="list-group-item"><div className="col-xs-2">
                    <h3>الجنسية</h3> 
                    <select className="custom-select" >
                    <option value="AW">آوربا</option>
                        <option value="AZ">أذربيجان</option>
                        <option value="AM">أرمينيا</option>
                        <option value="ES">أسبانيا</option>
                        <option value="AU">أستراليا</option>
                        <option value="AF">أفغانستان</option>
                        <option value="AL">ألبانيا</option>
                        <option value="DE">ألمانيا</option>
                        <option value="AG">أنتيجوا وبربودا</option>
                        <option value="AO">أنجولا</option>
                        <option value="AI">أنجويلا</option>
                        <option value="AD">أندورا</option>
                        <option value="UY">أورجواي</option>
                        <option value="UZ">أوزبكستان</option>
                        <option value="UG">أوغندا</option>
                        <option value="UA">أوكرانيا</option>
                        <option value="IE">أيرلندا</option>
                        <option value="IS">أيسلندا</option>
                        <option value="ET">اثيوبيا</option>
                        <option value="ER">اريتريا</option>
                        <option value="EE">استونيا</option>
                        <option value="IL">اسرائيل</option>
                        <option value="AR">الأرجنتين</option>
                        <option value="JO">الأردن</option>
                        <option value="EC">الاكوادور</option>
                        <option value="AE">الامارات العربية المتحدة</option>
                        <option value="BS">الباهاما</option>
                        <option value="BH">البحرين</option>
                        <option value="BR">البرازيل</option>
                        <option value="PT">البرتغال</option>
                        <option value="BA">البوسنة والهرسك</option>
                        <option value="GA">الجابون</option>
                        <option value="ME">الجبل الأسود</option>
                        <option value="DZ">الجزائر</option>
                        <option value="DK">الدانمرك</option>
                        <option value="CV">الرأس الأخضر</option>
                        <option value="SV">السلفادور</option>
                        <option value="SN">السنغال</option>
                        <option value="SD">السودان</option>
                        <option value="SE">السويد</option>
                        <option value="EH">الصحراء الغربية</option>
                        <option value="SO">الصومال</option>
                        <option value="CN">الصين</option>
                        <option value="IQ">العراق</option>
                        <option value="VA">الفاتيكان</option>
                        <option value="PH">الفيلبين</option>
                        <option value="AQ">القطب الجنوبي</option>
                        <option value="CM">الكاميرون</option>
                        <option value="CG">الكونغو - برازافيل</option>
                        <option value="KW">الكويت</option>
                        <option value="HU">المجر</option>
                        <option value="IO">المحيط الهندي البريطاني</option>
                        <option value="MA">المغرب</option>
                        <option value="TF">المقاطعات الجنوبية الفرنسية</option>
                        <option value="MX">المكسيك</option>
                        <option value="SA">المملكة العربية السعودية</option>
                        <option value="GB">المملكة المتحدة</option>
                        <option value="NO">النرويج</option>
                        <option value="AT">النمسا</option>
                        <option value="NE">النيجر</option>
                        <option value="IN">الهند</option>
                        <option value="US">الولايات المتحدة الأمريكية</option>
                        <option value="JP">اليابان</option>
                        <option value="YE">اليمن</option>
                        <option value="GR">اليونان</option>
                        <option value="ID">اندونيسيا</option>
                        <option value="IR">ايران</option>
                        <option value="IT">ايطاليا</option>
                        <option value="PG">بابوا غينيا الجديدة</option>
                        <option value="PY">باراجواي</option>
                        <option value="PK">باكستان</option>
                        <option value="PW">بالاو</option>
                        <option value="BW">بتسوانا</option>
                        <option value="PN">بتكايرن</option>
                        <option value="BB">بربادوس</option>
                        <option value="BM">برمودا</option>
                        <option value="BN">بروناي</option>
                        <option value="BE">بلجيكا</option>
                        <option value="BG">بلغاريا</option>
                        <option value="BZ">بليز</option>
                        <option value="BD">بنجلاديش</option>
                        <option value="PA">بنما</option>
                        <option value="BJ">بنين</option>
                        <option value="BT">بوتان</option>
                        <option value="PR">بورتوريكو</option>
                        <option value="BF">بوركينا فاسو</option>
                        <option value="BI">بوروندي</option>
                        <option value="PL">بولندا</option>
                        <option value="BO">بوليفيا</option>
                        <option value="PF">بولينيزيا الفرنسية</option>
                        <option value="PE">بيرو</option>
                        <option value="TZ">تانزانيا</option>
                        <option value="TH">تايلند</option>
                        <option value="TW">تايوان</option>
                        <option value="TM">تركمانستان</option>
                        <option value="TR">تركيا</option>
                        <option value="TT">ترينيداد وتوباغو</option>
                        <option value="TD">تشاد</option>
                        <option value="TG">توجو</option>
                        <option value="TV">توفالو</option>
                        <option value="TK">توكيلو</option>
                        <option value="TO">تونجا</option>
                        <option value="TN">تونس</option>
                        <option value="TL">تيمور الشرقية</option>
                        <option value="JM">جامايكا</option>
                        <option value="GI">جبل طارق</option>
                        <option value="GD">جرينادا</option>
                        <option value="GL">جرينلاند</option>
                        <option value="AX">جزر أولان</option>
                        <option value="AN">جزر الأنتيل الهولندية</option>
                        <option value="TC">جزر الترك وجايكوس</option>
                        <option value="KM">جزر القمر</option>
                        <option value="KY">جزر الكايمن</option>
                        <option value="MH">جزر المارشال</option>
                        <option value="MV">جزر الملديف</option>
                        <option value="UM">جزر الولايات المتحدة البعيدة الصغيرة</option>
                        <option value="SB">جزر سليمان</option>
                        <option value="FO">جزر فارو</option>
                        <option value="VI">جزر فرجين الأمريكية</option>
                        <option value="VG">جزر فرجين البريطانية</option>
                        <option value="FK">جزر فوكلاند</option>
                        <option value="CK">جزر كوك</option>
                        <option value="CC">جزر كوكوس</option>
                        <option value="MP">جزر ماريانا الشمالية</option>
                        <option value="WF">جزر والس وفوتونا</option>
                        <option value="CX">جزيرة الكريسماس</option>
                        <option value="BV">جزيرة بوفيه</option>
                        <option value="IM">جزيرة مان</option>
                        <option value="NF">جزيرة نورفوك</option>
                        <option value="HM">جزيرة هيرد وماكدونالد</option>
                        <option value="CF">جمهورية افريقيا الوسطى</option>
                        <option value="CZ">جمهورية التشيك</option>
                        <option value="DO">جمهورية الدومينيك</option>
                        <option value="CD">جمهورية الكونغو الديمقراطية</option>
                        <option value="ZA">جمهورية جنوب افريقيا</option>
                        <option value="GT">جواتيمالا</option>
                        <option value="GP">جوادلوب</option>
                        <option value="GU">جوام</option>
                        <option value="GE">جورجيا</option>
                        <option value="GS">جورجيا الجنوبية وجزر ساندويتش الجنوبية</option>
                        <option value="DJ">جيبوتي</option>
                        <option value="JE">جيرسي</option>
                        <option value="DM">دومينيكا</option>
                        <option value="RW">رواندا</option>
                        <option value="RU">روسيا</option>
                        <option value="BY">روسيا البيضاء</option>
                        <option value="RO">رومانيا</option>
                        <option value="RE">روينيون</option>
                        <option value="ZM">زامبيا</option>
                        <option value="ZW">زيمبابوي</option>
                        <option value="CI">ساحل العاج</option>
                        <option value="WS">ساموا</option>
                        <option value="AS">ساموا الأمريكية</option>
                        <option value="SM">سان مارينو</option>
                        <option value="PM">سانت بيير وميكولون</option>
                        <option value="VC">سانت فنسنت وغرنادين</option>
                        <option value="KN">سانت كيتس ونيفيس</option>
                        <option value="LC">سانت لوسيا</option>
                        <option value="MF">سانت مارتين</option>
                        <option value="SH">سانت هيلنا</option>
                        <option value="ST">ساو تومي وبرينسيبي</option>
                        <option value="LK">سريلانكا</option>
                        <option value="SJ">سفالبارد وجان مايان</option>
                        <option value="SK">سلوفاكيا</option>
                        <option value="SI">سلوفينيا</option>
                        <option value="SG">سنغافورة</option>
                        <option value="SZ">سوازيلاند</option>
                        <option value="SY">سوريا</option>
                        <option value="SR">سورينام</option>
                        <option value="CH">سويسرا</option>
                        <option value="SL">سيراليون</option>
                        <option value="SC">سيشل</option>
                        <option value="CL">شيلي</option>
                        <option value="RS">صربيا</option>
                        <option value="CS">صربيا والجبل الأسود</option>
                        <option value="TJ">طاجكستان</option>
                        <option value="OM">عمان</option>
                        <option value="GM">غامبيا</option>
                        <option value="GH">غانا</option>
                        <option value="GF">غويانا</option>
                        <option value="GY">غيانا</option>
                        <option value="GN">غينيا</option>
                        <option value="GQ">غينيا الاستوائية</option>
                        <option value="GW">غينيا بيساو</option>
                        <option value="VU">فانواتو</option>
                        <option value="FR">فرنسا</option>
                        <option value="PS">فلسطين</option>
                        <option value="VE">فنزويلا</option>
                        <option value="FI">فنلندا</option>
                        <option value="VN">فيتنام</option>
                        <option value="FJ">فيجي</option>
                        <option value="CY">قبرص</option>
                        <option value="KG">قرغيزستان</option>
                        <option value="QA">قطر</option>
                        <option value="KZ">كازاخستان</option>
                        <option value="NC">كاليدونيا الجديدة</option>
                        <option value="HR">كرواتيا</option>
                        <option value="KH">كمبوديا</option>
                        <option value="CA">كندا</option>
                        <option value="CU">كوبا</option>
                        <option value="KR">كوريا الجنوبية</option>
                        <option value="KP">كوريا الشمالية</option>
                        <option value="CR">كوستاريكا</option>
                        <option value="CO">كولومبيا</option>
                        <option value="KI">كيريباتي</option>
                        <option value="KE">كينيا</option>
                        <option value="LV">لاتفيا</option>
                        <option value="LA">لاوس</option>
                        <option value="LB">لبنان</option>
                        <option value="LU">لوكسمبورج</option>
                        <option value="LY">ليبيا</option>
                        <option value="LR">ليبيريا</option>
                        <option value="LT">ليتوانيا</option>
                        <option value="LI">ليختنشتاين</option>
                        <option value="LS">ليسوتو</option>
                        <option value="MQ">مارتينيك</option>
                        <option value="MO">ماكاو الصينية</option>
                        <option value="MT">مالطا</option>
                        <option value="ML">مالي</option>
                        <option value="MY">ماليزيا</option>
                        <option value="YT">مايوت</option>
                        <option value="MG">مدغشقر</option>
                        <option value="EG">مصر</option>
                        <option value="MK">مقدونيا</option>
                        <option value="MW">ملاوي</option>
                        <option value="ZZ">منطقة غير معرفة</option>
                        <option value="MN">منغوليا</option>
                        <option value="MR">موريتانيا</option>
                        <option value="MU">موريشيوس</option>
                        <option value="MZ">موزمبيق</option>
                        <option value="MD">مولدافيا</option>
                        <option value="MC">موناكو</option>
                        <option value="MS">مونتسرات</option>
                        <option value="MM">ميانمار</option>
                        <option value="FM">ميكرونيزيا</option>
                        <option value="NA">ناميبيا</option>
                        <option value="NR">نورو</option>
                        <option value="NP">نيبال</option>
                        <option value="NG">نيجيريا</option>
                        <option value="NI">نيكاراجوا</option>
                        <option value="NZ">نيوزيلاندا</option>
                        <option value="NU">نيوي</option>
                        <option value="HT">هايتي</option>
                        <option value="HN">هندوراس</option>
                        <option value="NL">هولندا</option>
                        <option value="HK">هونج كونج الصينية</option>
                    </select>
                    </div>
                    </li>
                    </ul>

                </div>
         <div>
           <ul className="list-group">
           <li className="list-group-item active"><h2>  معلومات رئيس فرع المنظمة في العراق </h2> </li>
           <li className="list-group-item" ><h3>اسم رئيس فرع المنظمة المخول في العراق</h3>
            <TextInput width={400} height={40}  placeholder=" اسم رئيس فرع المنظمة المخول في العراق"></TextInput></li>
           <li className="list-group-item"><h3>رقم الهاتف</h3> <TextInput width={400} height={40}   placeholder=" رقم الهاتف    "></TextInput></li>
           <li className="list-group-item"><h3>البريد الالكتروني</h3><TextInput width={400} height={40}  placeholder="البريد الالكتروني"></TextInput></li>
           <li className="list-group-item"><h3> الجنسية  </h3>
                    <select className="custom-select" >
                    <option value="AW">آوربا</option>
                        <option value="AZ">أذربيجان</option>
                        <option value="AM">أرمينيا</option>
                        <option value="ES">أسبانيا</option>
                        <option value="AU">أستراليا</option>
                        <option value="AF">أفغانستان</option>
                        <option value="AL">ألبانيا</option>
                        <option value="DE">ألمانيا</option>
                        <option value="AG">أنتيجوا وبربودا</option>
                        <option value="AO">أنجولا</option>
                        <option value="AI">أنجويلا</option>
                        <option value="AD">أندورا</option>
                        <option value="UY">أورجواي</option>
                        <option value="UZ">أوزبكستان</option>
                        <option value="UG">أوغندا</option>
                        <option value="UA">أوكرانيا</option>
                        <option value="IE">أيرلندا</option>
                        <option value="IS">أيسلندا</option>
                        <option value="ET">اثيوبيا</option>
                        <option value="ER">اريتريا</option>
                        <option value="EE">استونيا</option>
                        <option value="IL">اسرائيل</option>
                        <option value="AR">الأرجنتين</option>
                        <option value="JO">الأردن</option>
                        <option value="EC">الاكوادور</option>
                        <option value="AE">الامارات العربية المتحدة</option>
                        <option value="BS">الباهاما</option>
                        <option value="BH">البحرين</option>
                        <option value="BR">البرازيل</option>
                        <option value="PT">البرتغال</option>
                        <option value="BA">البوسنة والهرسك</option>
                        <option value="GA">الجابون</option>
                        <option value="ME">الجبل الأسود</option>
                        <option value="DZ">الجزائر</option>
                        <option value="DK">الدانمرك</option>
                        <option value="CV">الرأس الأخضر</option>
                        <option value="SV">السلفادور</option>
                        <option value="SN">السنغال</option>
                        <option value="SD">السودان</option>
                        <option value="SE">السويد</option>
                        <option value="EH">الصحراء الغربية</option>
                        <option value="SO">الصومال</option>
                        <option value="CN">الصين</option>
                        <option value="IQ">العراق</option>
                        <option value="VA">الفاتيكان</option>
                        <option value="PH">الفيلبين</option>
                        <option value="AQ">القطب الجنوبي</option>
                        <option value="CM">الكاميرون</option>
                        <option value="CG">الكونغو - برازافيل</option>
                        <option value="KW">الكويت</option>
                        <option value="HU">المجر</option>
                        <option value="IO">المحيط الهندي البريطاني</option>
                        <option value="MA">المغرب</option>
                        <option value="TF">المقاطعات الجنوبية الفرنسية</option>
                        <option value="MX">المكسيك</option>
                        <option value="SA">المملكة العربية السعودية</option>
                        <option value="GB">المملكة المتحدة</option>
                        <option value="NO">النرويج</option>
                        <option value="AT">النمسا</option>
                        <option value="NE">النيجر</option>
                        <option value="IN">الهند</option>
                        <option value="US">الولايات المتحدة الأمريكية</option>
                        <option value="JP">اليابان</option>
                        <option value="YE">اليمن</option>
                        <option value="GR">اليونان</option>
                        <option value="ID">اندونيسيا</option>
                        <option value="IR">ايران</option>
                        <option value="IT">ايطاليا</option>
                        <option value="PG">بابوا غينيا الجديدة</option>
                        <option value="PY">باراجواي</option>
                        <option value="PK">باكستان</option>
                        <option value="PW">بالاو</option>
                        <option value="BW">بتسوانا</option>
                        <option value="PN">بتكايرن</option>
                        <option value="BB">بربادوس</option>
                        <option value="BM">برمودا</option>
                        <option value="BN">بروناي</option>
                        <option value="BE">بلجيكا</option>
                        <option value="BG">بلغاريا</option>
                        <option value="BZ">بليز</option>
                        <option value="BD">بنجلاديش</option>
                        <option value="PA">بنما</option>
                        <option value="BJ">بنين</option>
                        <option value="BT">بوتان</option>
                        <option value="PR">بورتوريكو</option>
                        <option value="BF">بوركينا فاسو</option>
                        <option value="BI">بوروندي</option>
                        <option value="PL">بولندا</option>
                        <option value="BO">بوليفيا</option>
                        <option value="PF">بولينيزيا الفرنسية</option>
                        <option value="PE">بيرو</option>
                        <option value="TZ">تانزانيا</option>
                        <option value="TH">تايلند</option>
                        <option value="TW">تايوان</option>
                        <option value="TM">تركمانستان</option>
                        <option value="TR">تركيا</option>
                        <option value="TT">ترينيداد وتوباغو</option>
                        <option value="TD">تشاد</option>
                        <option value="TG">توجو</option>
                        <option value="TV">توفالو</option>
                        <option value="TK">توكيلو</option>
                        <option value="TO">تونجا</option>
                        <option value="TN">تونس</option>
                        <option value="TL">تيمور الشرقية</option>
                        <option value="JM">جامايكا</option>
                        <option value="GI">جبل طارق</option>
                        <option value="GD">جرينادا</option>
                        <option value="GL">جرينلاند</option>
                        <option value="AX">جزر أولان</option>
                        <option value="AN">جزر الأنتيل الهولندية</option>
                        <option value="TC">جزر الترك وجايكوس</option>
                        <option value="KM">جزر القمر</option>
                        <option value="KY">جزر الكايمن</option>
                        <option value="MH">جزر المارشال</option>
                        <option value="MV">جزر الملديف</option>
                        <option value="UM">جزر الولايات المتحدة البعيدة الصغيرة</option>
                        <option value="SB">جزر سليمان</option>
                        <option value="FO">جزر فارو</option>
                        <option value="VI">جزر فرجين الأمريكية</option>
                        <option value="VG">جزر فرجين البريطانية</option>
                        <option value="FK">جزر فوكلاند</option>
                        <option value="CK">جزر كوك</option>
                        <option value="CC">جزر كوكوس</option>
                        <option value="MP">جزر ماريانا الشمالية</option>
                        <option value="WF">جزر والس وفوتونا</option>
                        <option value="CX">جزيرة الكريسماس</option>
                        <option value="BV">جزيرة بوفيه</option>
                        <option value="IM">جزيرة مان</option>
                        <option value="NF">جزيرة نورفوك</option>
                        <option value="HM">جزيرة هيرد وماكدونالد</option>
                        <option value="CF">جمهورية افريقيا الوسطى</option>
                        <option value="CZ">جمهورية التشيك</option>
                        <option value="DO">جمهورية الدومينيك</option>
                        <option value="CD">جمهورية الكونغو الديمقراطية</option>
                        <option value="ZA">جمهورية جنوب افريقيا</option>
                        <option value="GT">جواتيمالا</option>
                        <option value="GP">جوادلوب</option>
                        <option value="GU">جوام</option>
                        <option value="GE">جورجيا</option>
                        <option value="GS">جورجيا الجنوبية وجزر ساندويتش الجنوبية</option>
                        <option value="DJ">جيبوتي</option>
                        <option value="JE">جيرسي</option>
                        <option value="DM">دومينيكا</option>
                        <option value="RW">رواندا</option>
                        <option value="RU">روسيا</option>
                        <option value="BY">روسيا البيضاء</option>
                        <option value="RO">رومانيا</option>
                        <option value="RE">روينيون</option>
                        <option value="ZM">زامبيا</option>
                        <option value="ZW">زيمبابوي</option>
                        <option value="CI">ساحل العاج</option>
                        <option value="WS">ساموا</option>
                        <option value="AS">ساموا الأمريكية</option>
                        <option value="SM">سان مارينو</option>
                        <option value="PM">سانت بيير وميكولون</option>
                        <option value="VC">سانت فنسنت وغرنادين</option>
                        <option value="KN">سانت كيتس ونيفيس</option>
                        <option value="LC">سانت لوسيا</option>
                        <option value="MF">سانت مارتين</option>
                        <option value="SH">سانت هيلنا</option>
                        <option value="ST">ساو تومي وبرينسيبي</option>
                        <option value="LK">سريلانكا</option>
                        <option value="SJ">سفالبارد وجان مايان</option>
                        <option value="SK">سلوفاكيا</option>
                        <option value="SI">سلوفينيا</option>
                        <option value="SG">سنغافورة</option>
                        <option value="SZ">سوازيلاند</option>
                        <option value="SY">سوريا</option>
                        <option value="SR">سورينام</option>
                        <option value="CH">سويسرا</option>
                        <option value="SL">سيراليون</option>
                        <option value="SC">سيشل</option>
                        <option value="CL">شيلي</option>
                        <option value="RS">صربيا</option>
                        <option value="CS">صربيا والجبل الأسود</option>
                        <option value="TJ">طاجكستان</option>
                        <option value="OM">عمان</option>
                        <option value="GM">غامبيا</option>
                        <option value="GH">غانا</option>
                        <option value="GF">غويانا</option>
                        <option value="GY">غيانا</option>
                        <option value="GN">غينيا</option>
                        <option value="GQ">غينيا الاستوائية</option>
                        <option value="GW">غينيا بيساو</option>
                        <option value="VU">فانواتو</option>
                        <option value="FR">فرنسا</option>
                        <option value="PS">فلسطين</option>
                        <option value="VE">فنزويلا</option>
                        <option value="FI">فنلندا</option>
                        <option value="VN">فيتنام</option>
                        <option value="FJ">فيجي</option>
                        <option value="CY">قبرص</option>
                        <option value="KG">قرغيزستان</option>
                        <option value="QA">قطر</option>
                        <option value="KZ">كازاخستان</option>
                        <option value="NC">كاليدونيا الجديدة</option>
                        <option value="HR">كرواتيا</option>
                        <option value="KH">كمبوديا</option>
                        <option value="CA">كندا</option>
                        <option value="CU">كوبا</option>
                        <option value="KR">كوريا الجنوبية</option>
                        <option value="KP">كوريا الشمالية</option>
                        <option value="CR">كوستاريكا</option>
                        <option value="CO">كولومبيا</option>
                        <option value="KI">كيريباتي</option>
                        <option value="KE">كينيا</option>
                        <option value="LV">لاتفيا</option>
                        <option value="LA">لاوس</option>
                        <option value="LB">لبنان</option>
                        <option value="LU">لوكسمبورج</option>
                        <option value="LY">ليبيا</option>
                        <option value="LR">ليبيريا</option>
                        <option value="LT">ليتوانيا</option>
                        <option value="LI">ليختنشتاين</option>
                        <option value="LS">ليسوتو</option>
                        <option value="MQ">مارتينيك</option>
                        <option value="MO">ماكاو الصينية</option>
                        <option value="MT">مالطا</option>
                        <option value="ML">مالي</option>
                        <option value="MY">ماليزيا</option>
                        <option value="YT">مايوت</option>
                        <option value="MG">مدغشقر</option>
                        <option value="EG">مصر</option>
                        <option value="MK">مقدونيا</option>
                        <option value="MW">ملاوي</option>
                        <option value="ZZ">منطقة غير معرفة</option>
                        <option value="MN">منغوليا</option>
                        <option value="MR">موريتانيا</option>
                        <option value="MU">موريشيوس</option>
                        <option value="MZ">موزمبيق</option>
                        <option value="MD">مولدافيا</option>
                        <option value="MC">موناكو</option>
                        <option value="MS">مونتسرات</option>
                        <option value="MM">ميانمار</option>
                        <option value="FM">ميكرونيزيا</option>
                        <option value="NA">ناميبيا</option>
                        <option value="NR">نورو</option>
                        <option value="NP">نيبال</option>
                        <option value="NG">نيجيريا</option>
                        <option value="NI">نيكاراجوا</option>
                        <option value="NZ">نيوزيلاندا</option>
                        <option value="NU">نيوي</option>
                        <option value="HT">هايتي</option>
                        <option value="HN">هندوراس</option>
                        <option value="NL">هولندا</option>
                        <option value="HK">هونج كونج الصينية</option>
                    </select>
                     </li>              
                   <li className="list-group-item"><h3> عنوان السكن في العراق  </h3> <TextInput placeholder="عنوان السكن في العراق" width={400} height={40} ></TextInput></li>
                   </ul>
                   </div>
                <span></span>
                 
                 </div>
                
                    );

                }}
            </Context.Consumer>
        );
    }
}

export default Content;
