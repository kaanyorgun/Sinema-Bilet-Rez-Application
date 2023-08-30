const container =document.querySelector('.container');
 const count =document.getElementById('count');
 const amount = document.getElementById('amount');
 const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(reserved')
getFromLocalStroge();
calculateTotal();




container.addEventListener('click', function(e){
     if(e.target.classlist.contains('seat'&& !e.target.classlist.contains('reserved'))) {
       e.target.classlist.toggle('selected')
         calculateTotal()
    
   
    }
});

select.addEventListener('change', function(e){
    calculateTotal();
});

function calculateTotal(){
    const selectedSeats = container.querySelector('.seat.selected');
   const selectedSeatsArr =[];
   const seatsArr = [];

   seats.forEach(function(seat) {
    seatsArr.push(seat);

   });

   let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
          return seatsArr.indexOf(seat);
   });
  
   console.log(selectedSeatsArr)
   
    let  selectedSeatCount =container.querySelectorAll('seat.selected').length;
        console.log(selectedSeatCount);
        count.innerText = selectedSeatCount
        let price = select.value;
       amount.innerText = selectedSeatCount * select.value;

       saveToLocalStorage(selectedSeatIndexs)
   
}

function getFromLocalStroge(){
    const selectedSeats = JSON.parse(localStroge.getItem('selectedSeats'));

    if(selectedSeats !=null && selectedSeats.length >0) {
        seats.forEach(function(seat,index){
         if(selectedSeats.indexOf(index) > -1) {
            seat.classList.add('selected');
         }
        });
    }
    const selectedMovieIndexs = localStorage.getItem('SelectedMovieIndex');

    if(selectedMovieIndexs != null) {
        select.selectIndex = selectedMovieIndexs;
    }
}

function saveToLocalStorage(Indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndexs',select.selectedIdex);
}