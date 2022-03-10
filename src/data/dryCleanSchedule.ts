import React from 'react';

import { RenderItem } from '../Components/Schedule';

const DATA: Array<React.ComponentProps<typeof RenderItem>> = [
	{
		id: 1,
		title: 'Book Dry & Cleaning Schedule',
		serviceDetailsTitle: 'Cleaning Service Details',
		list: [
			{
				id: 1,
				title: 'steam iron normal',
				price: 20,
				image: require('../assets/images/iron-steam.jpg'),
			},
			{
				id: 2,
				title: 'steam iron (packing)',
				price: 25,
				image: require('../assets/images/iron-steam.jpg'),
			},
			{
				id: 3,
				title: 'steam iron medium',
				price: 45,
				image: require('../assets/images/iron-steam.jpg'),
			},
			{
				id: 4,
				title: 'steam iron heavy',
				price: 70,
				image: require('../assets/images/iron-steam.jpg'),
			},
			{
				id: 5,
				title: 'men waist coat',
				price: 350,
				image: require('../assets/images/waist-coat.jpg'),
			},
			{
				id: 6,
				title: 'men coat/Blazer',
				price: 5000,
				image: require('../assets/images/coat-blazer.jpg'),
			},
			{
				id: 7,
				title: 'men pant',
				price: 6000,
				image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
			},
			{
				id: 8,
				title: 'men kurta plain',
				price: 5000,
				image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
			},
			{
				id: 9,
				title: 'men silk kurta',
				price: 13000,
				image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
			},
			{
				id: 10,
				title: 'men apron',
				price: 9000,
				image: require('../assets/images/photo-1506794778202-cad84cf45f1d.jpg'),
			},
			{
				id: 11,
				title: 'woman blouse (plain)',
				price: 2000,
				image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
			},
			{
				id: 12,
				title: 'women slwar suit',
				price: 450,
				image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
			},
			{
				id: 13,
				title: 'women slwar suit designer',
				price: 500,
				image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
			},
			{
				id: 14,
				title: 'women top/shirt',
				price: 400,
				image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
			},
			{
				id: 15,
				title: 'women five seater sofa cover',
				price: 2000,
				image: require('../assets/images/photo-1581963320355-8b54453eaa87.jpg'),
			},
			{
				id: 16,
				title: 'home curtain',
				price: 200,
				image: require('../assets/images/curtain.jpg'),
			},
			{
				id: 17,
				title: 'home pillow',
				price: 150,
				image: require('../assets/images/pillow.jpg'),
			},
		],
	},
];

export default DATA;
