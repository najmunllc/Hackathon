const main_video = document.querySelector('main-video video')
const main_video_title = document.querySelector('main-video video .title')
const main_video_playlist = document.querySelector('.video-playlist .videos')

let data = [
    {
        'id' : 'a1',
        'title' : 'intro to course',
        'name' : 'persoanlSafety_c1_Overview.mp4',
        'duration' : '1:38',
    },
    {
        'id' : 'a2',
        'title' : 'safety stories resources',
        'name' : 'persoanlSafety_c1_Overview.mp4',
        'duration' : '1:38',
    }
    {
        'id' : 'a3',
        'title' : 'resources and activities',
        'name' : 'persoanlSafety_c1_Overview.mp4',
        'duration' : '1:38',
    }
    {
        'id' : 'a4',
        'title' : 'defense tools and building confidence',
        'name' : 'persoanlSafety_c1_Overview.mp4',
        'duration' : '1:38',
    }

    data.array.forEach((video, i) => {
        let video_element = `
        <div class="video" data=id"${video.id}">
         <img src="play.svg" alt="">
         <p>0${i + 1} </p>
         <h3 class="title">${video.title}><h3>
         <p class="time">${video.duration}</p>
         <.div>
         `;
         video-main_video_playlist.innerHTML += video_element;
    })


  let videos = document.querySelectorAll('.video');
  videos[0].classList.add('active');
  video[0].querySelector('img').src = 'pause.svg';

  videos.forEach(selected_video +.{
    selected_video.onclick = ()=>{

        for(all_videos of videos ){
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'play.svg';
        }
        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'pause.svg';

        let match_video = data.find(video=>video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
  })