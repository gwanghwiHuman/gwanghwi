const memberNameInput = document.getElementById('memberName');
const addMemberButton = document.getElementById('addMember');
const memberList = document.getElementById('memberList');
const pickCleanerButton = document.getElementById('pickCleaner');

let members = [];

addMemberButton.addEventListener('click', () => {
    const memberName = memberNameInput.value.trim();
    if (memberName) {
        members.push(memberName);
        const listItem = document.createElement('li');
        listItem.textContent = memberName;
        listItem.classList.add('list-group-item');
        memberList.appendChild(listItem);
        memberNameInput.value = '';
    }
});

pickCleanerButton.addEventListener('click', () => {
    if (members.length === 0) {
        Swal.fire('경고', '참여자를 먼저 추가해주세요.', 'warning');
        return;
    }

    const randomIndex = Math.floor(Math.random() * members.length);
    const cleaner = members[randomIndex];

    Swal.fire({
        title: '오늘의 청소 당번은?',
        text: `${cleaner} 입니다!`,
        icon: 'success',
        confirmButtonText: '확인'
    });
});