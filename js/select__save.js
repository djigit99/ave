function SaveSelectValue(el) {
   return localStorage.setItem(el.name, el.value);
  }
  function LoadSelectValue(el) {
    return localStorage.getItem(el.name);
  }
  
  let selectCheck = document.querySelector("[name='user_profile_color_1']");
  selectCheck.value = LoadSelectValue(selectCheck) === null ? "£" : LoadSelectValue(selectCheck); 

 