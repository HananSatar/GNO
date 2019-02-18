                 <div>
                                {/* <div className="Button">معلومات المنظمة في العراق</div> */}
                        <div className="container">
                                {/* <div ClassName="But"> */}
                                <div>
                                    <Button
                                        marginLeft={70}
                                        padding="2px"
                                        color='white'
                                        height={50} appearance="blule"
                                        marginTop={50} width={660}
                                        alignItems="center"
                                        font-size="24"
                                        background="#0384fe"
                                    ><h3>          معلومات المنظمة في العراق             </h3></Button>

                               <div ClassName="pane">
                                <pane>



                                    <div ClassName="input">

                                        <TextInputField

                                            text-align="left"
                                            marginLeft="40%"
                                            marginTop="1px"
                                            width="50%"
                                            padding="10px"
                                            dirction="right" font-size="34"
                                            alignItems="right"
                                            label={<h4>أسم المنظمة باللغة الانكليزي</h4>}

                                            placeholder=" أسم المنظمة باللغة الانكليزية "
                                        />
                                        <TextInputField
                                            // text-align="left"
                                            marginLeft="70%"
                                            marginTop="0px"
                                            width="50%"
                                            padding="10px"

                                            dirction="right"
                                            alignItems="right"
                                            label={<h4>أسم المنظمة باللغة العربية </h4>}
                                            placeholder=" أسم المنظمة باللغة العربية "
                                        />
                                        <TextInputField

                                            padding="10px"
                                            width="50%"
                                            marginLeft="70%"
                                            label={<h4>عنوان فرع المكتب الرئيسي في بغداد</h4>}
                                            placeholder="عنوان فرع المكتب الرئيسي في بغداد"
                                        />
                                  

                                        <Combobox
                                            label={<h4>أختصاص المنظمة</h4>}
                                            items={['jjj', 'mnm', 'kljk']}
                                            onChange={selected => console.log(selected)}
                                            placeholder="أختصاص المنظمة"
                                            autocompleteProps={{
                                                title: 'أختصاص المنظمة'

                                            }}
                                            width="50%"

                                            padding="10px"
                                        />
                                    </div>

                                </pane>
                                {/* <div {<style="float:right"></style>}> */}
                                <div ClassName="col">
                                     <Button
                                        marginLeft={70}

                                        padding="2px"
                                        color='white'
                                        height={50} appearance="blule"
                                        marginTop={50} width={660}
                                        alignItems="center"
                                        font-size="24"
                                        background="#0384fe"
                                    ><h3>         معلومات خاصة بالمنظمة الام            </h3></Button>

                        

                                        <TextInputField

                                            text-align="left"
                                            marginLeft="40%"
                                            marginTop="1px"
                                            width="50%"
                                            padding="10px"
                                            dirction="right" font-size="34"
                                            alignItems="right"
                                            label={<h4>اسم رئيس المنظمة/المدير التنفيذي</h4>}

                                            placeholder=" اسم رئيس المنظمة/المدير التنفيذي "
                                        />
                                        <TextInputField
                                            // text-align="left"
                                            marginLeft="70%"
                                            marginTop="0px"
                                            width="50%"
                                            padding="10px"

                                            dirction="right"
                                            alignItems="right"
                                            label={<h4>عنوان المنظمة </h4>}
                                            placeholder=" عنوان المنظمة "
                                        />
                                        <TextInputField

                                            padding="10px"
                                            width="50%"
                                            marginLeft="70%"
                                            label={<h4>هاتف المنظمة</h4>}
                                            placeholder="هاتف المنظمة"
                                        />
                                        <TextInputField

                                            padding="10px"
                                            width="50%"
                                            marginLeft="70%"
                                            label={<h4>البريد الالكتروني</h4>}
                                            placeholder="البريد الالكتروني"
                                        />
                                    

                                        <Combobox
                                            label={<h4>جنسية المنظمة</h4>}
                                            items={['قضائية', 'فنية', 'انسانية', 'أعلامية']}
                                            onChange={selected => console.log(selected)}

                                            placeholder="جنسية المنظمة"
                                            autocompleteProps={{
                                                title: 'أختصاص المنظمة'

                                            }}
                                            width="50%"

                                            padding="10px"
                                        />
                                    </div>
                                    
</div>










/////////////////////////////
   <div>
                         
                         <form>
                         <div className="form-row">
                           <div className="form-group col-md-6">
                             </div>
                             </div>
                        
 <div className="form-group">
                           <label for="inputAddress">أسم رئيس فرع المنظمةالمخول من المنظمةالام في العراق</label>
                           <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St">
                         </input></div>
                         <div className="form-group">
                           <label for="inputAddress2">Address 2</label>
                           <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                         </div>
                         <div className="form-row">
                           <div class="form-group col-md-6">
                             <label for="inputCity">City</label>
                             <input type="text" class="form-control" id="inputCity"></input>
                           </div>
                           <div class="form-group col-md-4">
                             <label for="inputState">State</label>
                             <select id="inputState" class="form-control">
                               <option selected>Choose...</option>
                               <option>...</option>
                             </select>
                           </div>
                           <div class="form-group col-md-2">
                             <label for="inputZip">Zip</label>
                             <input type="text" className="form-control" id="inputZip"></input>
                           </div>
                         </div>
                         <div class="form-group">
                           <div className="form-check">
                             <input className="form-check-input" type="checkbox" id="gridCheck">
                             </input><label className="form-check-label" for="gridCheck">
                               Check me out
                             </label>
                           </div>
                         </div>
                         <button type="submit" className="btn btn-primary">Sign in</button>
                       </form>
                      </div>
                      ????????////////////////???????????????
                       function() {

('input[name=add-game]').click(function() {
  
  // Lets get the information ready to be added
  var name = '<td>' + $('input[name="game-name"]').val() + '</td>';
  var rating = '<td>' + $('input[name="game-rate"]').val() + '</td>';
  var btnDelete = '<td><button class="delete btn btn-block btn-sm btn-danger">Delete</button></td>'
  
  // Lets append the information into the game table
  ('tbody[id="game-table"]').append('<tr>' + name + rating + btnDelete + '</td>');

  // Since we've created a delete button, we need to bind
  // an event listener to the button so that we can 
  // delete it from the table if the user clicks it
  ('.delete').on('click', function() {
  (this).parent().parent().empty();
  });

})

})
<div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <form className="text-center" action="index.html" method="post">
            Game: <input type="text" name="game-name" value="" placeholder="Choose the game"></input>
            Rate: <input type="text" name="game-rate" value="" placeholder="Rate the game"></input>
            <input className='btn btn-xs btn-success' type="button" name="add-game" value="Add Game"></input>
          </form>
          
          <div className="container">
            <table className="table table-bordered table-striped">
              <thead>
                <th>Name of the game</th>
                <th>Rating</th>
                <th><span className="glyphicon glyphicon-remove"></span></th>
              </thead>
              <tbody id="game-table">
                
              </tbody>
            </table>
          </div>
    
    </div>
    </div>
    </div>
      
  /////////////////
  //////////////////
  //////////////////////
  ?////////////////////////
                    </ul>
      //   className="modal"
      //   isShown={isShown}
      //   title="أضافة منتسبي المنظمة في العراق"
      //   onCloseComplete={() => this.setState({ isShown: false })}
      //   // confirmLabel="Save"
      //   confirmLabel="Custom Label"
      // >
      //   <Pane display="flex" flex="row" padding={16} background="tint2" borderRadius={4}>
      //               {/* <Pane flex={1}  paddingRight={0}> */}
      //                 <TextInputField
      //                   width="100%"
      //                   label="الاسم الرباعي ."
      //                   placeholder="الاسم الرباعي"
      //                   onChange={e => this.setState({ name: e.target.value })}
      //                   value={name}
      //                 />
      //               {/* </Pane> */}
                 
      //              {/* <Pane display="flex"> */}
      //                 <TextInputField
                      
      //                   label="الجنسية ."
      //                   placeholder="الجنسية"
      //                   onChange={e => this.setState({ country: e.target.value })}
      //                   value={country}
      //                 />
      //              {/* </Pane> */}
      //               <Pane display="flex">
      //                 <TextInputField
      //                 // type="number"
      //                   label="الهاتف" 
      //                   placeholder="الهاتف"
      //                   onChange={e => this.setState({ phon: e.target.value })}
      //                   value={phon}
      //                 />
      //                 </Pane>
      //                 <Pane display="flex">
      //                 <TextInputField
      //                 // type="number"
      //                   label="البريد الالكتروني" 
      //                   placeholder="Email"
      //                   onChange={e => this.setState({ email: e.target.value })}
      //                   value={email}
      //                 />
      //                 </Pane>
      //               </Pane>