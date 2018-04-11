angular.module('converter',[])
    .controller('firstCtrl',firstCtrl)




    function firstCtrl($http)
    {
        var first=this;

        url="https://api.fixer.io/latest?base=INR"
        $http.get(url).then(function(results)
        {
            console.log(results.data)
            // results.data.base='INR'
            // console.log(results.data)
            // first.array=results.data.rates
            // first.a=first.array.map(function(value,label){
            //     return value/79.803
            // })
           




            first.obj=results.data.rates
            console.log(first.obj)
            first.items= Object.keys(first.obj)
            console.log(first.items)
            first.current=Object.values(first.obj)

            // first.curr=first.current.map(function(val){
            //     return val/first.current[14]
            // })
            
            console.log(first.current)
            
            first.final=[] 
            
            console.log(first.obj)
            
            for(var i=0;i<32;i++)
            {   
                
               first.final.push({country: first.items[i],currencies: first.current[i]})
              
            }
            // first.finals=first.final.country
            console.log(first.final)
            
        })

        
        

        first.change=function()
        {
            if(first.currency==undefined){
                first.finalResult=first.amount*first.converted}
           else if( first.currency!=first.converted)
           {
                first.finalResult= first.amount*(first.converted/first.currency)
                console.log(first.finalResult)
           }
           else if( first.currency==first.converted)
                first.finalResult=first.amount
           
        }
    }