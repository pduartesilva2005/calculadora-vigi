const tabMenu = document.querySelectorAll('li a');
const tabContent = document.querySelectorAll('section');

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('active');

  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove('active');
    });

    tabContent[index].classList.add('active');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}

var capturing = '';

function capture() {
  data = document.getElementById('data').value;
  base = document.getElementById('base').value;
  result = (data * 100) / base;
  document.getElementById('valueResult').innerHTML = result.toFixed(2) + '%';
}

function demoAge() {
  var demoAge = document.getElementById('age').value;
  document.getElementById('demo').innerHTML = demoAge;
}

function age(birth_year, birth_month, birth_day) {
  var age = document.getElementById('age').value;
  var date = new Date(),
    present_year = date.getFullYear(),
    present_month = date.getMonth() + 1,
    present_day = date.getDate(),
    birth_year = +age.slice(0, 4),
    birth_month = +age.slice(5, 7),
    birth_day = +age.slice(8, 10),
    how_many_month = present_month - birth_month;
  how_many_year = present_year - birth_year;

  if (how_many_year === 0) {
    how_many_year--;
  } else if (
    present_month < birth_month ||
    (present_month == birth_month && present_day < birth_day)
  ) {
    return (document.getElementById('valueResult2').innerHTML =
      how_many_year < 0 ? 0 : how_many_year + ' anos');
  }
  return (document.getElementById('valueResult2').innerHTML =
    how_many_month + ' meses');
}
