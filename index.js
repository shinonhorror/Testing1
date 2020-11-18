let sidebar=document.getElementById("2");
const check = window.matchMedia('(max-width: 1200px)')
function handleTabletChange(e) {
  if (e.matches) {
    sidebar.style.visibility="hidden"
  }
  if (!e.matches) {
    sidebar.style.visibility="visible"
  }
}
check.addListener(handleTabletChange)
handleTabletChange(check)
function hideSidebar(id){
  if (sidebar.style.visibility=="hidden"){
    sidebar.style.visibility="visible"
  }
  else{
    sidebar.style.visibility="hidden"
  }
}