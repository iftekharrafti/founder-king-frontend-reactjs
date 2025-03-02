import React from 'react';
import Section from '../../templates/Section/Section';
import ServicesSection from '../../organisms/ServiceSection/ServicesSection';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import envConfig from '../../../../envconfig';
import { fetcher } from '../../../utils/SWRFetcher/SWRFetcher';
import useSWR from 'swr';

const ServicePage = () => {
    const services = [
        {
            imageUrl:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format",
            title: "Incomplete Order tracking",
            description:
                "Creating modern, responsive websites using the latest technologies and best practices for optimal user experience.",
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&auto=format",
            title: "customizable Landing pages",
            description:
                "Developing native and cross-platform mobile applications that deliver seamless experiences across all devices.",
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format",
            title: "One click courier upload system",
            description:
                "Crafting intuitive and beautiful user interfaces that enhance user engagement and satisfaction.",
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format",
            title: "Return order management",
            description:
                "Implementing scalable cloud infrastructure and services to power your digital transformation journey.",
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format",
            title: "Stock management",
            description:
                "Transforming raw data into actionable insights through advanced analytics and visualization.",
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&auto=format",
            title: "Sms marketing",
            description:
                "Protecting your digital assets with comprehensive security solutions and best practices.",
        },
    ];

    const {
        data: serviceData,
        error: errorServiceData,
        isLoading: loadingServiceData,
    } = useSWR(`${envConfig.apiUrl}services`, fetcher);

    return (
        <div>
            <MainTemplate>
                <div className="mt-[90px]">
                    <Section
                        heading={serviceData?.data?.title}
                        subHeading={
                            serviceData?.data?.content
                        }
                        className={"bg-gray-100"}
                    >
                        <ServicesSection data={serviceData?.data?.services} />
                    </Section>
                </div>
            </MainTemplate>
        </div>
    );
};

export default ServicePage;