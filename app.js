 document.write ("<b>Reverse Right Half Payramid<b><br><br>")
   
      for(let i=1; i<=5; i++)
    {
        for(let j=5; j>=i; j--)
        document.write("*" + " ")
    document.write("<br>")
    }
     document.write("<hr>")
     document.write ("<b>Reverse left Half Payramid<b><br><br>")
      for(let i=1; i<=5;i++) {
        for(let j=2; j<=i; j++)
            document.write("&nbsp;&nbsp; ")
        for(let k=5; k>=i;k--)
            document.write("* ")
         document.write("<br>")

     }
    
      document.write("<hr>")
      document.write ("<b>left Half Payramid<b><br><br>")
       for(let i=1; i<=5; i++){
        for(let k=4; k>=i; k--)
            document.write("&nbsp;&nbsp; ")
        for(let j=1; j<=i; j++)
            document.write("* ")
         document.write("<br>")
     }
      document.write("<hr>")
        document.write ("<b>Triangle Star Pattern<b><br><br>")

     for(let i=1; i<=5; i++)
     {
        for(let j=4; j>=i; j--)
       
        document.write("&nbsp; ")
    
    for(let k=1; k<=i; k++)
    document.write("*"+"&nbsp;&nbsp; ")
document.write("<br>")
     }
   document.write("<br>")
   document.write("<hr>")
      document.write ("<b>Number Increasing Pyramid<b><br><br>")

   for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++)
    document.write(j +" ")
    document.write("<br>")

   }
    document.write("<hr>")
       document.write ("<b>Number Increasing  Reverse Pyramid<b><br><br>")

    let num=1
   for(let i=1; i<=5; i++)
   {
   
    for(let j=1; j<=6-i; j++ )
    document.write(j+" ")
 document.write("<br>")
   }
 
    document.write("<hr>")
    document.write ("<b>Number Changing Pyramid<b><br><br>")

     for(let i=1;i<=5; i++)
     {
        
        for(let j=1;j<=i;j++)
       
        document.write(num++ +" ")
    document.write("<br>")
     }
     document.write("<hr>")
   