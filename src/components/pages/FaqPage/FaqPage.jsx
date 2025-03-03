import React from 'react';
import Section from '../../templates/Section/Section';
import FaqSection from '../../organisms/FaqSection/FaqSection';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { fetcher } from '../../../utils/SWRFetcher/SWRFetcher';
import envConfig from '../../../../envconfig';
import useSWR from 'swr';
import Spinner from '../../UI/Spinner/Spinner';

const FaqPage = () => {
    const {
        data: faqData,
        error: errorFaqData,
        isLoading: loadingFaqData,
    } = useSWR(`${envConfig.apiUrl}faq`, fetcher);
    return (
        <div>
            <MainTemplate>
                <div className="mt-[90px]">
                    <Section
                        heading={"Frequently Asked Questions"}
                        className={"bg-gray-100"}
                    >
                        {
                            loadingFaqData && (
                                <div className="flex justify-center items-center h-96">
                                    <Spinner />
                                </div>
                            )
                        }
                        <FaqSection data={faqData?.data?.faqs} />
                    </Section>
                </div>
            </MainTemplate>
        </div>
    );
};

export default FaqPage;