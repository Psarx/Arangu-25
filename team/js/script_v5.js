$(()=>{
    const Tech =[
        {
            name: "Nihal Ansar",
            img: 'nihal_updated.png',
            inst: "https://instagram.com/_nihal_2k",
            git: "https://github.com/nihalansar",
            link: "https://www.linkedin.com/in/nihalansar"
        },
        {
            name: "Joyal Raphel",
            img: "joyal_updated.jpg",
            inst: "https://instagram.com/_joyal_raphel",
            git: "https://github.com/joyal007",
            link: "https://www.linkedin.com/in/joyalraphel"
        },
        {
            name: "Jopaul Joy",
            img: "jopi.jpeg",
            inst: "https://instagram.com/jopaul.joy",
            git: "https://github.com/jopaul23",
            link: "https://www.linkedin.com/in/jopaul-joy"
        },
        {
            name: "Pranav V",
            img: "pranav.jpeg",
            inst: "https://instagram.com/im_17pranav",
            git: "https://github.com/Pranav2k02",
            link: "https://www.linkedin.com/in/pranav-v-6310941a5/"
        }
    ]
    Tech.map( e=>{
        $("#tech .teachers-pag .container .row").append(`
        <div class="col-md-4 col-sm-6 teachers-col">
                                            <div class="single-teacher mt-80 text-center">
                                                <div class="teacher-social">
                                                    <ul class="social">
                                                        <li><a target="_blank" href="${e.git}"><i class="fab fa-github"></i></a></li>
                                                        <li><a target="_blank" href="${e.inst}"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a target="_blank" href="${e.link}"><i class="fab fa-linkedin-in"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="teacher-image">
                                                    
                                                        <img src="images/${e.img}" width="266" height="359" alt="teacher">
                                                    
                                                </div>
                                                <div class="teacher-content">
                                                    <h4 class="name">${e.name}</h4>
                                                </div>
                                            </div>
                                        </div>
        `)
    })

    const studentCor = [
        
        {
            name:"Amar",
                    post:"Core Team",
            img:"amar.jpeg",	
        insta:"https://instagram.com/_.amarr___",
            git:"https://github.com/amarjith67",
        link:"https://www.linkedin.com/in/amarjith-raj-b2822a196"
        },
        {
            name:"Aneeka",
                    post:"Core Team",
            img:"aneeka.jpeg",
            insta:"https://instagram.com/aneeka.geo",
            git:"https://github.com/aneekageo",
            link:"https://www.linkedin.com/in/aneeka-geo"
        },
        {
            name:"Joel Boby M",
                    post:"Core Team",
            img:"joelbobym.jpeg",
            insta:"https://instagram.com/___indelible_j_b_m___",
            git:"https://github.com/JoelBobyM",
            link:"https://www.linkedin.com/in/joel-boby-m-1b3431190"
        
        },
        {
            name:"Kajal Anna Koshy",
                    post:"Core Team",
            img:"kajal.jpeg",
            insta:"https://instagram.com/kajalannakoshy",
            git:"https://github.com/kajalannakoshy",
            link:"https://www.linkedin.com/in/kajalannakoshy"
        },
        {
            name:"Sanjay",
                    post:"Core Team",
            img:"Sanjay.png",
            insta:"",
            git:"",
            link:""
        },
        {
            name:"Sreejith S Kartha",
                   post: "Core Team",
            img:"sree.jpeg",
        insta:"https://instagram.com/sreejithskartha",
            git:"https://github.com/sreejitt",	
        link:"https://www.linkedin.com/in/sreejithkartha"
        
        },
        {
            name:"Aman",
            post:"Lead, Tech Team",
            img:"aman.jpeg",
            insta:"",
            git:"https://github.com/amankshihab",
            link:"https://www.linkedin.com/in/amankshihab/"
        },
        {
            name:"Ayisha",
                    post:"Lead,Content Team",
            img:"ayisha_c.jpeg",
            insta:"https://instagram.com/heir_of_dreams_ayisha_",
            git:"https://github.com/Ayisha1411",
            link:"https://www.linkedin.com/in/ayisha-navas"
        },
        
        {
            name:"Joel Nickson",
                    post:"Lead, Marketing Team",
            img:"joel-nickson.jpeg",
            insta:"",
            git:"",
            link:""
        },
        
        {
            name:"R Sreyas",
                    post:"Lead, Design Team",
            img:"sreyas.jpeg",
            insta:"https://instagram.com/zreyas",
            git:"https://github.com/Zreyas",
            link:"https://www.linkedin.com/in/r-sreyas-6462a9184"
        },
        
        {
            name:"Ajay Nair",
            post:"Lead, Sponsorship Team",
            img:"ajay.jpeg",
            insta:"https://instagram.com/ajaynair7?igshid=ZDdkNTZiNTM=",
            git:"https://github.com/Ajay-Nair",
            link:"https://www.linkedin.com/in/ajay-nair2001"

        }

    ]
    studentCor.map( e=>{
        $("#student .teachers-pag .container .row").append(`
        <div class="col-md-4 col-sm-6 teachers-col">
                                            <div class="single-teacher mt-80 text-center">
                                                <div class="teacher-social">
                                                    <ul class="social">
                                                        <li><a target="_blank" href="${e.git}"><i class="fab fa-github"></i></a></li>
                                                        <li><a target="_blank" href="${e.insta}"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a target="_blank" href="${e.link}"><i class="fab fa-linkedin-in"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="teacher-image">
                                                    
                                                        <img src="./images/${e.img}" style="width:266;height:400px" width="266" height="359" alt="teacher">
                                                   
                                                </div>
                                                <div class="teacher-content">
                                                    <h4 class="name">${e.name}</h4>
                                                    <span class="designation">${e.post}</span>
                                                </div>
                                            </div>
                                        </div>
        `)
    })
    
})