import React from 'react';
import Company from './Company';
import company15 from "../image/company15.png"
import company16 from "../image/company16.png"
import company1 from "../image/LeadSoft.png"
import company3 from "../image/kaz.png"

const Top = () => {
    const bangladesh =[
        {
            id:1,
            name:"Leadsoft",
            detail:"Leadsoft is a software development company which Established in 1999.The mission of the company is to realize the customer’s business and delivery result through their experience.",
            site:"https://leadsoft.com.bd/",
            icon:company1
        },
        {
            id:2,
            name:"brain station 23",
            detail:"The brain station 23 limited is the largest software and it company which started the journey in 2006. It provides the software products both global and local market.",
            site:"https://brainstation-23.com/",
            icon:company16
        },
        {
            id:3,
            name:"Kaz soft",
            detail:"Kaz soft limited established in 2004. It is one of the leading custom software companies in Bangladesh in order to create ordinary software. The professional designers, engineers and content specialists   involve in this company. ",
            site:"https://kaz.com.bd/",
            icon : company3
        }
    ]
    const international =[
        {
            id:4,
            name:"IBM",
            detail:"International Business Machines (IBM), an American multinational corporation with headquarters in New York, is listed second on its ranking of the best IT companies.",
            site:"https://www.ibm.com/about",
            icon:"https://img.freepik.com/free-icon/ibm_318-668784.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph"
        },
        {
            id:5,
            name:"Amazon",
            detail:"The main areas of interest for Amazon.com, Inc., a multinational technology company based in the United States, are digital streaming, cloud computing, e-commerce, and artificial intelligence.",
            site:"https://www.aboutamazon.com/",
            icon:company15
        },
        {
            id:6,
            name:"Microsoft",
            detail:"Microsoft, one of the biggest businesses in the world, comes out on top in practically all lists of IT corporations. Unquestionably, Microsoft is among the top tier 1 business in the United Kingdom.",
            site:"https://www.microsoft.com/en-us/about",
            icon:"https://img.freepik.com/free-icon/microsoft_318-566086.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=sph"
        }
    ]
    return (
        <section className="bg-gray-100 text-gray-800 my-20">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Top companies</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">Here are some top IT companies</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Bangldeshi companies</h3>
				<div className="mt-12 space-y-12">
					{
                        bangladesh.map(item=>
                            <div key={item.id}>						
						<div className="ml-4">
							<Company item={item}/>
						</div>
					</div>					
                )
            }
            </div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://img.freepik.com/free-vector/bangladesh-map-design_1142-3913.jpg?size=338&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=sph" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">International companies</h3>					
					<div className="mt-12 space-y-12">
                    {
                        international.map(item=>
                            <div key={item.id}>						
						<div className="ml-4">
							<Company item={item}/>
						</div>
					</div>					
                )
            }
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://img.freepik.com/free-photo/digital-world-map-hologram-blue-background_1379-900.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>
    );
};

export default Top;