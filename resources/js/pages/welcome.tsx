import FeaturesOne from '@/components/landing/features-five';
import FeaturesTwo from '@/components/landing/features-ten';
import FeaturesThree from '@/components/landing/features-three';
import FooterSection from '@/components/landing/footer-one';
import HeroSection from '@/components/landing/hero-section';
import TeamSection from '@/components/landing/team-section';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <HeroSection /> 
            {/* <FeaturesThree/> */}
            <FeaturesOne />
            <TeamSection />
            <FooterSection/>
        </>
    );
}
// {
//     auth.user ? (
//         <Link
//             href={route('dashboard')}
//             className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
//         >
//             Dashboard
//         </Link>
//     ) : (
//         <>
//             <Link
//                 href={route('login')}
//                 className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
//             >
//                 Log in
//             </Link>
//             <Link
//                 href={route('register')}
//                 className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
//             >
//                 Register
//             </Link>
//         </>
//     );
// }
