//redirecting window to hurricane florance relief page


// ============ 1st attempt drop down jQuery for semantic form:========================

$('.ui.dropdown')
  .dropdown({
    values: [
      {
        name: 'Yes',
        value: 'Yes',
        selected:false //not yet selected
      },
      {
        name     : 'Not Today',
        value    : 'Not Today',
        selected:false //not yet selected
      }
    ]
  });
$("#selected").dropdown();

//player will be promted to input a yes or no (radio button or drop down 
//check box tied to the submit button linking to this script below)
//trying to say if the value name is the index of 0 then go to this site:
            // if (dropdown.values.name[0] === true) {
            //     window.location.href="https://www.redcross.org/donate/hurricane-florence-donations.html/?cid=fy19hurflorence&med=cpc&source=google&scode=rsg00000e017&gclid=Cj0KCQjw_vfcBRDJARIsAJafEnFmG9mB-fUspuh4dyZBYTc1urKftDMwW9gPCelV1VWGAdSanMhEBJoaAnbfEALw_wcB&gclsrc=aw.ds&dclid=CNTE593VwN0CFcJtwQodDvEJrA";
            // };

//=========== 1st attempt dropdown function ending here==================================





// =================this backup option works===============================================
document.getElementById("button").onclick = function() {
    window.location.href = "https://www.redcross.org/donate/hurricane-florence-donations.html/?cid=fy19hurflorence&med=cpc&source=google&scode=rsg00000e017&gclid=Cj0KCQjw_vfcBRDJARIsAJafEnFmG9mB-fUspuh4dyZBYTc1urKftDMwW9gPCelV1VWGAdSanMhEBJoaAnbfEALw_wcB&gclsrc=aw.ds&dclid=CNTE593VwN0CFcJtwQodDvEJrA";
  };
// ================= end of backup button option =============================================