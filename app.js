       const title = document.getElementById('title');
       const author = document.getElementById('author');
       const year = document.getElementById('year');
       const btn = document.getElementById('btn');
       const booklist = document.getElementById('book-list');


       btn.addEventListener('click',function(e){
        e.preventDefault();
        // console.log('hello');

        if(title.value == '' && author.value == '' && year.value == ''){
            alert('Please Provide Your Data!');
        }else{
            const tableRow = document.createElement('tr');

            //create new title
            const tabletitle = document.createElement('td');
            tabletitle.innerHTML = title.value;
            tableRow.appendChild(tabletitle);


            //create new author
            const tableauthor= document.createElement('td');
            tableauthor.innerHTML = author.value;
            tableRow.appendChild(tableauthor);


            //create new year
            const tableyear = document.createElement('td');
            tableyear.innerHTML = year.value;
            tableRow.appendChild(tableyear);

            
            booklist.appendChild(tableRow);
        }
       })