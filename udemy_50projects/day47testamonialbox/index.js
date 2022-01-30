const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore optio aspernatur sed minima dolores repellat? Quibusdam amet maxime, porro blanditiis nulla excepturi. Numquam iste, rem exercitationem quaerat possimus nesciunt nihil minus unde debitis aperiam sit itaque quas nulla! Placeat nisi quia odit iure fuga provident consequatur perspiciatis nam iste. Doloribus.',
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem alias optio expedita accusantium maxime rem voluptatibus delectus. Sed voluptates molestias repellendus reprehenderit officiis doloremque incidunt aspernatur tenetur, aliquam. Nobis expedita distinctio iure recusandae at quis quia corporis animi. Corporis quis amet assumenda dolore eum dolorum at eaque voluptas nesciunt ipsa!',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, exercitationem, assumenda eaque, voluptas nam aut nesciunt adipisci doloribus reprehenderit voluptates aperiam. Consequuntur a obcaecati sunt. Magnam consectetur nisi, dolorem aperiam voluptatum praesentium suscipit qui nihil dolor reprehenderit deserunt laudantium recusandae mollitia, modi ducimus quos et nostrum totam. Odit, non, asperiores.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, adipisci esse porro cumque voluptatibus autem corporis facere illum dolorem, omnis.",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque et earum incidunt corporis, tempore, rerum iste aperiam laboriosam, molestiae consequatur harum officiis tenetur! Reiciendis deleniti, necessitatibus rerum sequi dolorem odio neque excepturi nemo, iusto id optio impedit aut dignissimos aliquam pariatur, at blanditiis! Animi non, autem aperiam in, voluptas laborum!",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Ullam, expedita!',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Architecto ipsa reprehenderit tempore quae sapiente sequi corrupti, voluptatum alias, nemo cupiditate omnis voluptatibus, ipsam magni excepturi minus aut sed in, provident.',
  },
]

let idx = 1

function updateTestimonial() {
	const {name, position, photo, text } = testimonials[idx]
	
	testimonial.innerHTML = text
	userImage.src = photo
	username.innerHTML = name
	role.innerHTML = position

	idx+=1
	if(idx > testimonials.length - 1)
		idx = 0
}

setInterval(updateTestimonial, 10000)