const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Alone Again",
      artist: "Weekend",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/01%20Alone%20Again.mp3?alt=media&token=649fc9f8-8bc4-48fa-851a-2301b48af8d6",
      duration:"4.10",
      imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/weekend.webp?alt=media&token=c7ada031-ba7e-4d1e-b4b0-6897b9f40bd1"   },
    {
      id: 2,
      favourite: false,
      songName: "Up",
      artist: "Cardi B",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/002.%20Cardi%20B%20-%20Up.mp3?alt=media&token=59a1c7c6-7869-4c5f-8cea-721f7e9d46b0",
      imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/pics%2Fcardi-b.webp?alt=media&token=b5865663-7a2b-407c-8bc4-aea68d796bf9"    
      ,duration:"4.10",
    },
    {
      id: 3,
      favourite: false,
      songName: "DÁKITI",
      artist: "Bad Bunny",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/016.%20Bad%20Bunny%20-%20D%C3%81KITI.mp3?alt=media&token=58de4b34-2eff-4035-838b-a124b07eeca8",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/pics%2Fbunny.jpg?alt=media&token=7f2d1143-3dfc-400e-9a69-57da3c8ff8ec",
        duration:"03:25",
      },
    {
      id: 4,
      favourite: false,
      songName: "34+35",
      artist: "Ariana Grande",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/004.%20Ariana%20Grande%20-%2034%2B35.mp3?alt=media&token=9e0169d1-8943-4c3d-980d-05266f5d04bf",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/pics%2Fariana.jpg?alt=media&token=708c80af-6097-4184-8f64-3aa4daa5b79a",
        duration:"4.12",
      },
    {
      id: 5,
      favourite: false,
      songName: "Go Crazy",
      artist: "chris brown",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/003.%20Chris%20Brown%20-%20Go%20Crazy.mp3?alt=media&token=483891a0-171e-46a2-a9c9-977cd10d35ee",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/pics%2Fchris.jpg?alt=media&token=e34218ef-5678-4ccd-8fa7-38609c155898",
        duration:"3.10",
      },
    {
      id: 6,
      songName: "Levitating",
      artist: "Dua Lipa",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/010.%20Dua%20Lipa%20-%20Levitating%20(feat.%20DaBaby).mp3?alt=media&token=78b87280-cf3a-4e1d-bc73-c8d4754004f6",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/pics%2Fdua.jpg?alt=media&token=88b3daf8-3532-4917-87f7-44815c75e9a0",
        duration:"3.40",
      },
    {
      id: 7,
      favourite: false,
      songName: "Therefore I am",
      artist: "Billie EilishGopi Sundar",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/012.%20Billie%20Eilish%20-%20Therefore%20I%20Am.mp3?alt=media&token=562b7cd4-d235-42ec-b662-ad809b493386",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/pics%2Fbillie.png?alt=media&token=84280c03-958b-4681-b2c1-f758c13d1f9a",
        duration:"3.48",
      },
    {
      id: 8,
      favourite: false,
      songName: "Good Days",
      artist: "Sza",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/017.%20SZA%20-%20Good%20Days.mp3?alt=media&token=0cd15456-b39a-476e-be75-f11d95db1e52",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/pics%2Fsza.webp?alt=media&token=cf9be302-7f94-481f-b6d1-0071a0c7d8bc",
        duration:"4.56",   
      },
    {
      id: 9,
      favourite: false,
      songName: "Driving License",
      artist: "olivia rodrigo",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/001.%20Olivia%20Rodrigo%20-%20drivers%20license.mp3?alt=media&token=2f4f147f-cf38-4559-91b4-7051362ea61c",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/pics%2Folivia.webp?alt=media&token=e4243fa1-10e6-4667-a05a-896db5687f5a",
        duration:"3.12",
    },
    {
      id: 10,
      favourite: false,
      songName: "What you know about Love",
      artist: "Pop smoke",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/011.%20Pop%20Smoke%20-%20What%20You%20Know%20Bout%20Love.mp3?alt=media&token=4d0d12c5-c869-4895-8c07-d12cb9fd4e8c",
      duration:"3.39",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-f6377.appspot.com/o/pics%2Fpop.jpg?alt=media&token=40df855d-28e7-4f7d-8551-43cbbda4495f",
    },
  ];
  
  export { Songs };