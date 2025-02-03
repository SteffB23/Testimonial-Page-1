console.log('Hello!');

const testimonialData = [
  {
    name: 'Alvan Morrison',
    role: 'BHT',
    quote: 'I love using the Cheatsheet app—it has been incredibly helpful in writing detailed progress notes and serves as a great refresher for ABA principles.',
    image: 'https://assets.codepen.io/6836864/Image-1.jpg'
  },
  {
    name: 'Zaniyah Thompson',
    role: 'BHT',
    quote: "The ABA concepts help me to better understand what I was doing during my sessions.",
    image: 'https://assets.codepen.io/6836864/Zaniyah.jpeg'
  },
  {
    name: 'Shruti Balasa',
    role: 'Behavior Consultant',
    quote: 'I was struggling to manage both sides of the consultant role since my experience was predominately with CBT until I discovered This tool. I have learnt a lot more about ABA and the specific interventions associated with Autism.',
    image: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80'
  },
  {
    name: 'Sara Vieira',
    role: 'Clinical Supervisor',
    quote: "This tool makes it easy for the clinicians to assist the technicians.",
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Didier Catz',
    role: 'RBT',
    quote: "This app is bridging the gap between coming from a background with no experience to becoming an ABA pro.",
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Brandon Marrick',
    role: 'BHT',
    quote: "This app has revolutionized the way I approach ABA. It's intuitive and incredibly efficient.",
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Jane Dougherty',
    role: 'Behavior Consultant',
    quote: 'This utility-first tool increases my technicians instructional control and completion of daily progress notes. I love it!',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Alex Johnson',
    role: 'BCBA',
    quote: "This app's flexibility has improved my technicians workflow significantly. It's a game-changer for teaching and empowering.",
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Emily Brown',
    role: 'Behavior Consultant',
    quote: "I was skeptical at first, but this tool has won me over. It's now an essential part of my toolkit.",
    image: 'https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Michael Lee',
    role: 'Behavior Consultant',
    quote: "This tool strikes the perfect balance between work and growth. It's a joy to use.",
    image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Sarah Connor',
    role: 'Operations Coordinator',
    quote: 'The learning curve is 10x. The RBT Cheatsheet has made our employees more efficient and effective.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'David Wilson',
    role: 'Administrative Director',
    quote: "Checking Progress notes is no longer a nightmare. Lol",
    image: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Lisa Taylor',
    role: 'BHT',
    quote: "I recommend this tool to all my colleagues. It's an excellent tool for learning modern ABA practices.",
    image: 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Robert Martinez',
    role: 'Clinical Director',
    quote: 'The RBT Cheatsheet has sped up my staff development process significantly. Our employees are happier with faster learning curve experiences.',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Emma Watson',
    role: 'RBT',
    quote: 'The consistency and flexibility of this app has improved collaboration between me and our other treatment teams.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Chris Evans',
    role: 'Behavior Consultant',
    quote: "This Cheatsheet has simplified our supervision protocols and implementation. It's a powerful tool for large-scale agencies.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Olivia Parker',
    role: 'BCBA',
    quote: 'I appreciate how this cheatsheet makes it easy to create stronger technicians in real-time.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Daniel Kim',
    role: 'Mobile App Developer',
    quote: 'Even as a primarily mobile developer, I find Tailwind CSS invaluable for creating responsive web views in hybrid apps.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Sophia Rodriguez',
    role: 'E-commerce Developer',
    quote: 'Tailwind CSS has been a game-changer for quickly building and iterating on e-commerce sites.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Ethan Hunt',
    role: 'BCBA',
    quote: "The modularity of Tailwind CSS fits perfectly with our microservices architecture. It's DevOps friendly!",
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
];

let currentIndex = 0;
const testimonials = document.getElementById('testimonials');
const showMoreBtn = document.getElementById('showMoreBtn');
const showLessBtn = document.getElementById('showLessBtn');

function createTestimonialCard(testimonial) {
  const newTestimonial = document.createElement('div');
  newTestimonial.className = 'bg-white border border-silver p-4 rounded-lg shadow-sm';
  newTestimonial.innerHTML = `
      <div class="flex items-center mb-2">
          <img src="${testimonial.image}" alt="${testimonial.name}" class="w-8 h-8 rounded-full mr-2 object-cover">
          <div>
              <h3 class="font-semibold text-sm">${testimonial.name}</h3>
              <p class="text-gray-600 text-xs">${testimonial.role}</p>
          </div>
      </div>
      <p class="text-gray-800 text-sm">${testimonial.quote}</p>
  `;
  return newTestimonial;
}

showMoreBtn.addEventListener('click', function() {
  const fragment = document.createDocumentFragment();
  const cardsToAdd = 20 - (testimonials.children.length % 20);
  for (let i = 0; i < cardsToAdd; i++) {
    if (currentIndex >= testimonialData.length) {
      break;
    }
    const testimonial = testimonialData[currentIndex];
    fragment.appendChild(createTestimonialCard(testimonial));
    currentIndex++;
  }
  testimonials.appendChild(fragment);
  showMoreBtn.classList.add('hidden');
  showLessBtn.classList.remove('hidden');
});

showLessBtn.addEventListener('click', function() {
  const additionalCards = testimonials.querySelectorAll('.bg-white.border.border-silver.p-4.rounded-lg.shadow-sm');
  for (let i = 3; i < additionalCards.length; i++) {
    additionalCards[i].remove();
  }
  currentIndex = 0;
  showMoreBtn.classList.remove('hidden');
  showLessBtn.classList.add('hidden');
});