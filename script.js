document.getElementById('yes').addEventListener('click', () => {
      const newWindow = window.open('', '_blank', 'width=800,height=600,menubar=no,toolbar=no,location=no,status=no');
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>HACKEADO اخترق</title>
          <style>
            body {
              margin: 0;
              font-family: Arial, sans-serif;
            }
            .carousel {
              width: 100%;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background-image: url('assets/et-bilu.jpg');
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              background-attachment: fixed;
              position: relative;
            }
            .carousel img {
              max-width: 90%;
              max-height: 90%;
              border-radius: 10px;
            }
            .carousel button {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              background-color: rgba(0, 0, 0, 0.5);
              color: white;
              border: none;
              padding: 10px;
              cursor: pointer;
              font-size: 18px;
            }
            .carousel button#prev {
              left: 10px;
            }
            .carousel button#next {
              right: 10px;
            }
          </style>
        </head>
        <body>
          <div class="carousel">
            
          </div>
          <script>
            const images = ["imagem1.jpg", "imagem2.jpg", "imagem3.jpg"];
            let currentIndex = 0;

            document.getElementById('prev').addEventListener('click', () => {
              currentIndex = (currentIndex - 1 + images.length) % images.length;
              document.getElementById('carousel-image').src = images[currentIndex];
            });

            document.getElementById('next').addEventListener('click', () => {
              currentIndex = (currentIndex + 1) % images.length;
              document.getElementById('carousel-image').src = images[currentIndex];
            });
          <\/script>
        </body>
        </html>
      `);
      newWindow.document.close();
    });

document.getElementById('yes').addEventListener('click', () => {
      const audio = document.getElementById('audio');
      audio.play();
    });

const botaono = document.getElementById('no');

        botaono.addEventListener('click', function() {
            setTimeout(function() {
                window.location.href = 'https://www.google.com';
            }, 200);
        });