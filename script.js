

  fetch('http://localhost:3000/data',{
    method:"GET"
  }).then(response => response.json())
  .then(data => {
    const html = data.data.map(item => {
        return `
          
            <tr colspan="5" rowspan="10" class="bg-slate-900 ">
                <td class="text-xl p-4 ">${item.name}</td>
                <td class="text-xl p-4 ">${item.buy}</td>
                <td class="text-xl p-4 ">${item.sell}</td>
                <td class="text-xl p-4 ">${item.volume}</td>
                <td class="text-xl p-4 ">${item.base_unit || "Not Available"}</td>
            </tr>
            
            
          
        `;
      }).join('');
      document.getElementById('tbody').innerHTML = html;
    
      
  } )
  .catch(error => console.error('Error:', error));
