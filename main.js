 const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');
      let counter = 0;
      let Incomplete = 0;
      let complete = 0;

      button.onclick = function() {  
        if(input.value != ''){
        let myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.innerHTML = `<input type="checkbox" id="${counter}" name="${counter}" onchange="checkboxcheck(${counter})"><label>${myItem}</label>`;
        listItem.appendChild(listBtn);
        listBtn.innerHTML = '<i class="fas fa-window-close"></i>';
        list.appendChild(listItem);


        listBtn.onclick = function(e) {
          list.removeChild(listItem);
          todocount(false);
        }
         }
         todocount(true);
        input.focus();
      }

      function checkboxcheck(checkbox){
        const checkboxname = document.getElementById(checkbox);
        if(checkboxname.checked)
          { 
            Incomplete--;
            complete++;
          }
          else 
          { 
            Incomplete++;
            complete--;
          }

        todocount();
      }

      function todocount(count){
        if(count == true){
          counter++;
          Incomplete++;
        }
        const paragraph = document.querySelector('p');
        paragraph.innerHTML = `Total:${counter}, complete:${complete} , Incomplete:${Incomplete}`;
      }
