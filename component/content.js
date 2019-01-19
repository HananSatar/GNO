import React, { Component } from 'react'
import { Label, Box, Button, TextInput, Pane, Combobox, TextInputField ,Icon,Dialog} from 'evergreen-ui'
import Context from "../context"
// import { FlatButton, GridList } from 'material-ui';
// import { ContentAdd } from 'material-ui/svg-icons';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <Context.Consumer>
                {ctx => {
                  
    let { name, country, phon, isShown,email } = this.state
                    return (
                     <div id="grid">
           <div>

           <ul class="list-group">
                                    <li class="list-group-item active"> <h1>          معلومات المنظمة في العراق             </h1> </li>
                                    <li class="list-group-item" ><h2>أسم المنظمة باللغة الانكليزيةي</h2>
                                        <TextInput width={500} height={50}     placeholder=" أسم المنظمة باللغة الانكليزية "></TextInput></li>
                                    <li class="list-group-item"><h2>   أسم المنظمة باللغة العربية </h2> <TextInput width={500} height={50}  placeholder=" أسم المنظمة باللغة العربية "></TextInput></li>
                                    <li class="list-group-item"><h2>عنوان فرع المكتب الرئيسي في بغداد</h2> <TextInput width={500} height={50} placeholder="عنوان فرع المكتب الرئيسي في بغداد"></TextInput></li>
                                    <li class="list-group-item">  <h2>أختصاص المنظمة</h2>  <Combobox
                                            label={<h4>أختصاص المنظمة</h4>}
                                            items={['jjj', 'mnm', 'kljk']}
                                            onChange={selected => console.log(selected)}
                                            placeholder="أختصاص المنظمة"
                                            autocompleteProps={{
                                                title: 'أختصاص المنظمة'

                                            }}
                                            width="50%"

                                            padding="10px"
                                        /></li>
                                    

                                           </ul>

                                             </div>
                           <div>
                            <ul class="list-group">
                            <li class="list-group-item active"><h1>معلومات خاصة بالمنظمة الام </h1> </li>
                            <li class="list-group-item" ><h2>اسم رئيس المنظمة/المدير التنفيذي ذ</h2>
                             <TextInput width={500} height={50}  placeholder=" اسم رئيس المنظمة/المدير التنفيذي "></TextInput></li>
                            <li class="list-group-item"><h2>هاتف المنظمة</h2> <TextInput width={500} height={50}   placeholder="هاتف المنظمة"></TextInput></li>
                            <li class="list-group-item"><h2>البريد الالكتروني</h2><TextInput width={500} height={50}  placeholder="البريد الالكتروني"></TextInput></li>
                            <li class="list-group-item"><h2>   جنسية المنظمة </h2> <TextInput placeholder="جنسية المنظمة" width={500} height={50} ></TextInput></li>
                            

                        </ul>

                          </div>
                          <div>
           
           <ul class="list-group">
           <li class="list-group-item active"><h1>  معلومات رئيس فرع المنظمة في العراق </h1> </li>
           <li class="list-group-item" ><h2>اسم رئيس فرع المنظمة المخول في العراق</h2>
            <TextInput width={500} height={50}  placeholder=" اسم رئيس فرع المنظمة المخول في العراق"></TextInput></li>
           <li class="list-group-item"><h2>رقم الهاتف</h2> <TextInput width={500} height={50}   placeholder=" رقم الهاتف    "></TextInput></li>
           <li class="list-group-item"><h2>البريد الالكتروني</h2><TextInput width={500} height={50}  placeholder="البريد الالكتروني"></TextInput></li>
           <li class="list-group-item"><h2> الجنسية  </h2> <TextInput placeholder="الجنسية" width={500} height={50} ></TextInput></li>
           <li class="list-group-item"><h2> عنوان السكن في العراق  </h2> <TextInput placeholder="عنوان السكن في العراق" width={500} height={50} ></TextInput></li>

       </ul>

         </div>

                                    
    <Pane>
      <Dialog
        className="modal"
        isShown={isShown}
        title="أضافة منتسبي المنظمة في العراق"
        onCloseComplete={() => this.setState({ isShown: false })}
        // confirmLabel="Save"
        confirmLabel="Custom Label"
      >
        <Pane display="flex" flex="colum" padding={16} background="tint2" borderRadius={3}>
                    <Pane flex={1}  paddingRight={10}>
                      <TextInputField
                        width="100%"
                        label="الاسم الرباعي ."
                        placeholder="الاسم الرباعي"
                        onChange={e => this.setState({ name: e.target.value })}
                        value={name}
                      />
                    </Pane>
                   
                   <Pane display="flex">
                      <TextInputField
                      
                        label="الجنسية ."
                        placeholder="الجنسية"
                        onChange={e => this.setState({ country: e.target.value })}
                        value={country}
                      />
                    </Pane>
                    <Pane display="flex">
                      <TextInputField
                      // type="number"
                        label="الهاتف" 
                        placeholder="الهاتف"
                        onChange={e => this.setState({ phon: e.target.value })}
                        value={phon}
                      />
                      </Pane>
                      <Pane display="flex">
                      <TextInputField
                      // type="number"
                        label="البريد الالكتروني" 
                        placeholder="Email"
                        onChange={e => this.setState({ email: e.target.value })}
                        value={email}
                      />
                      </Pane>
                    </Pane>
                    </Dialog>
        <Button className="create-btn" onClick={() => {
                  this.setState({ isShown: true })
                }}><Icon style={{ marginRight: 5 }} icon="add" size={20} />أضافة منتسبي المنظمة في العراق</Button> 
      {/* <Button onClick={() => setState({ isShown: true })}>Show Dialog</Button> */}
    
    </Pane>


  

                          {/* </div> */}
                       </div>
                    );

                }}
            </Context.Consumer>
        );
    }
}export default Content;