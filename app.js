const cardContners = document.getElementById('cardContners');

const allDataLoding = async () => {
  const dataLode = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const jsonData = await dataLode.json();
  const data = jsonData.posts;

  //-------add to card detalis-------

  data.forEach(cards => {
    const divs = document.createElement('div');

    divs.classList = `mb-7 card w-full p-4 lg:p-10 bg-[#F3F3F5] shadow-md`;
    divs.innerHTML = `
  <div class="lg:flex gap-4">
              <div id="addColors" class=" p-1 w-[70px] h-[70px] bg-[#FFFFFF] ">
            
  <div class="bg-[#10B981] ${
    cards.isActive ? 'bg-green-500' : 'bg-red-500'
  } -mt-3 ml-[60px] w-[12px] h-[12px] py-1 rounded-full">
  </div>
                <img src="${cards.image}" alt="">
              </div>

              <div>
                <div class="flex gap-5">
                  <h2 class="font-semibold">#${cards.category}</h2>
                  <h2 class="font-semibold">Author : <span>${
                    cards.author.name
                  }</span></h2>
                </div>
                <div class="border-b-2 border-dotted border-[#12132D40] pb-6">
                  <h2 class="text-2xl font-bold py-3">${cards.title}</h2>
                  <p class="">${cards.description}</p>
                </div>
                <div class="flex justify-between mt-5">
                  <div class="flex gap-7 ">
                    <div class="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                      </svg>

                      <h2>${cards.comment_count}</h2>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>

                      <h2>${cards.view_count} </h2>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>

                      <h2>${cards.posted_time}</h2>
                    </div>
                  </div>
                 
<button onclick="addDetalisShow('${cards.title.replace(/'/g, '')}','${
      cards.view_count
    }')"  class="  p-[2px] border-[4px] rounded-full border-[#10B981]">
                   <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    
                 </button>
                </div>
              </div>


            </div>


    `;

    cardContners.appendChild(divs);
  });
};

//click to add input section add detali
let count = 0;
const addToTextContns = document.getElementById('addToTextContns');
const countValue = document.getElementById('countValue');
const addDetalisShow = (id, view) => {
  count++;
  countValue.innerText = count;

  const div = document.createElement('div');
  div.classList = `my-5 rounded-lg p-4 gap-6 items-center bg-[#FFFFFF] flex justify-center`;
  div.innerHTML = `
    <h2 class="text-xl font-semibold">${id}</h2>
  <p class="flex gap-2" >  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
 ${view}</p>
    `;
  addToTextContns.appendChild(div);
};

//click to search section javascript-----
const btnValues = async category => {
  const btnInnerText = await fetch(
    ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`
  );
  const btnDarts = await btnInnerText.json();
  const finalData = btnDarts.posts;

  const cardContners = document.getElementById('cardContners');
  cardContners.innerHTML = '';
  finalData.forEach(cards => {
    const divs = document.createElement('div');
    document.getElementById('clickToLoading').classList.add('hidden');
    divs.classList = `mb-7 card w-full p-4 lg:p-10 bg-[#F3F3F5] shadow-md`;
    divs.innerHTML = `
  <div class="lg:flex gap-4">
              <div id="addColors" class=" p-1 w-[70px] h-[70px] bg-[#FFFFFF] ">
            
  <div class="bg-[#10B981] ${
    cards.isActive ? 'bg-green-500' : 'bg-red-500'
  } -mt-3 ml-[60px] w-[12px] h-[12px] py-1 rounded-full">
  </div>
                <img src="${cards.image}" alt="">
              </div>

              <div>
                <div class="flex gap-5">
                  <h2 class="font-semibold">#${cards.category}</h2>
                  <h2 class="font-semibold">Author : <span>${
                    cards.author.name
                  }</span></h2>
                </div>
                <div class="border-b-2 border-dotted border-[#12132D40] pb-6">
                  <h2 class="text-2xl font-bold py-3">${cards.title}</h2>
                  <p class="">${cards.description}</p>
                </div>
                <div class="flex justify-between mt-5">
                  <div class="flex gap-7 ">
                    <div class="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                      </svg>

                      <h2>${cards.comment_count}</h2>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>

                      <h2>${cards.view_count} </h2>
                    </div>
                    <div class="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>

                      <h2>${cards.posted_time}</h2>
                    </div>
                  </div>
                 
<button onclick="addDetalisShow('${cards.title.replace(/'/g, '')}','${
      cards.view_count
    }')"  class="  p-[2px] border-[4px] rounded-full border-[#10B981]">
                   <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    
                 </button>
                </div>
              </div>


            </div>


    `;

    cardContners.appendChild(divs);
  });
};

//------add to search function ---------

const searchHendels = () => {
  document.getElementById('clickToLoading').classList.remove('hidden');
  const inputValue = document.getElementById('inputValue').value;

  btnValues(inputValue);
};

//------letest Post section -------
const lestPostSection = document.getElementById('lestPostSection');
const letsPostData = async () => {
  const dataLode = await fetch(
    ` https://openapi.programming-hero.com/api/retro-forum/latest-posts`
  );

  const data = await dataLode.json();

  console.log(data);
  data.forEach(letstPost => {
    const div = document.createElement('div');
    div.classList = `card w-full bg-base-100 border-2 border-[#12132D26] shadow-sm p-6`;
    div.innerHTML = ` 
  <figure><img src="${letstPost.cover_image}" alt="Shoes" />
          </figure>
          <div class="mt-3">
            <div class="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>

              <h2>${letstPost.author?.posted_date || 'No publish date'}</h2>
            </div>
            <div>
              <h2 class="text-xl my-3 font-bold">${letstPost.title}</h2>
              <p>${letstPost.description}</p>
            </div>
            <div class=" flex mt-4 gap-2">
              <div><img class="w-[50px] h-[50px] rounded-full object-cover" src="${
                letstPost.profile_image
              }" alt="image"></div>
              <div>
                <h2 class="font-bold">${letstPost.author.name}</h2>
                <h2>${letstPost.author?.designation || 'Unknown'}</h2>
              </div>
            </div>
          </div>
        </div>

  `;
    lestPostSection.appendChild(div);
  });
};

letsPostData();
btnValues();
allDataLoding();
