     function show() {
        var Close = document.getElementById("close");
        var Open = document.getElementById("myDIV");
        console.log(Open);
        Open.style.display = 'none';
        Close.style.display = 'block';
        var navLinks = document.getElementById('navLinks');
          navLinks.style.top = '70px';
      }
      function hide() {
        var Open = document.getElementById("myDIV");
        var Close = document.getElementById("close");
        console.log(Close);
        Open.style.display = 'block';
        Close.style.display = 'none';
        navLinks.style.top= '-400px';
      }
    
