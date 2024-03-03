const cardContners = document.getElementById('cardContners');

const allDataLoding = async () => {
  const dataLode = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/posts'
  );
  const jsonData = await dataLode.json();
  const data = jsonData.posts;
  console.log(data);
  //-------add to card detalis--------
  let sum = null;
  if (data.isActive === true) {
    sum = `class="bg-[#10B981] -mt-3 ml-[60px] w-[12px] h-[12px] py-1 rounded-full"`;
  } else {
    // sum = `class="-mt-3 bg-[#FF3434] ml-[60px] w-[12px] h-[12px] py-1 rounded-full"`;
  }

  data.forEach(cards => {
    const divs = document.createElement('div');

    divs.classList = `mb-7 card w-full p-4 lg:p-10 bg-[#F3F3F5] shadow-md`;
    divs.innerHTML = `
  <div class="lg:flex gap-4">
              <div id="addColors" class=" p-1 w-[70px] h-[70px] bg-[#FFFFFF] ">
            
  <div class="${sum}">
  </div>
                <img src="${cards.image}" alt="">
              </div>

              <div>
                <div class="flex gap-5">
                  <h2 class="font-semibold">#${cards.category}</h2>
                  <h2 class="font-semibold">Author : <span>${cards.author.name}</span></h2>
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
                  <div class="card-actions ">

                    <span class="p-[2px] border-[4px] rounded-full border-[#10B981]"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>


            </div>


    `;

    cardContners.appendChild(divs);
  });
};

allDataLoding();
