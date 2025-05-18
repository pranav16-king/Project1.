


  const ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(248, 16, 66, 0.6)',
          'rgba(13, 151, 243, 0.6)',
          'rgba(248, 180, 10, 0.6)',
          'rgba(0, 255, 255, 0.6)',
          'rgba(90, 14, 241, 0.6)',
          'rgba(238, 125, 12, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  // const ctx2 = document.getElementById('doughnut').getContext('2d');

  // new Chart(ctx2, {
 
  //   // type: 'pie',
  //   type: 'doughnut',  
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //       'rgba(248, 16, 66, 0.6)',
  //         'rgba(13, 151, 243, 0.6)',
  //         'rgba(248, 180, 10, 0.6)',
  //         'rgba(0, 255, 255, 0.6)',
  //         'rgba(90, 14, 241, 0.6)',
  //         'rgba(238, 125, 12, 0.6)'
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });



  

  const ctx3 = document.getElementById('earningsChart').getContext('2d');

  new Chart(ctx3, {
 
    // type: 'pie',
    type: 'line',  
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
        'rgba(248, 16, 66, 0.6)',
          'rgba(13, 151, 243, 0.6)',
          'rgba(248, 180, 10, 0.6)',
          'rgba(0, 255, 255, 0.6)',
          'rgba(90, 14, 241, 0.6)',
          'rgba(238, 125, 12, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  

