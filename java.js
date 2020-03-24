 function addLi()
            {
               
                
                var txtVal = document.getElementById('txtVal').value,
                    listNode = document.getElementById('list'),
                    
                    liNode = document.createElement("LI"),
                    txtNode = document.createTextNode(txtVal);
                 liNode.appendChild(txtNode);
                 listNode.appendChild(liNode);
                
                 var max = 10;
                 $('ul, ol').each(function(){
                   $(this).find('li, ol').each(function(index){
                     if(index >= max) $(this).hide()
                   })
                 })

            }
