

export type TSellingPoints = {
title:string;
description:string;
subheadingBold:string;
subheading:string;
icon:React.ReactNode;
className:string;

}


export interface IFeature{

title:string;
description:string;
points:string[];
image:React.ReactNode | string;

}

export type TCategories = {
  title: string;
  icon: React.ReactNode;
  description: string;
  label: string;
};



export type TTestimonialtype = {

name:string;
role:string;
location:string;
growth:string;
message:string;
}



export type TAccordion = {

  title:string;
  content:string;

}


export type TTypeSteps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  margin: string;
};


export type Benefit = {
  icon: React.ReactNode 
  title: string
  description: string
}


declare module 'swiper/css';
declare module 'swiper/css/navigation';