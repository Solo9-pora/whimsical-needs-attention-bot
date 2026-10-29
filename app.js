const $=selector=>document.querySelector(selector);
const feedback=$('#decisionFeedback');
function resolveOffer(state,message){$('#offerState').textContent=state;feedback.hidden=false;feedback.textContent=message;$('.offer-footer').hidden=true;$('#need-your-attention').classList.add('resolved')}
$('#approveClaim').addEventListener('click',()=>resolveOffer('Approved','Claim approved for issue #787 only. ChatGPT Triager may investigate and prepare a fix; merge and publish remain blocked.'));
$('#passClaim').addEventListener('click',()=>resolveOffer('Declined','Offer declined. No work was started and the agent has not been authorized to claim this issue.'));
$('#askAgent').addEventListener('click',()=>$('#questionDialog').showModal());
$('#sendQuestion').addEventListener('click',event=>{event.preventDefault();const question=$('#questionInput').value.trim();if(!question){$('#questionInput').focus();return}$('#questionDialog').close();feedback.hidden=false;feedback.textContent=`Question sent: “${question}” The agent’s response will guide its investigation; the claim remains unapproved.`});
$('#historyToggle').addEventListener('click',()=>{const panel=$('#historyContent'),expanded=panel.hidden;panel.hidden=!expanded;$('#historyToggle').setAttribute('aria-expanded',String(expanded));$('#historyChevron').textContent=expanded?'⌄':'›'});
