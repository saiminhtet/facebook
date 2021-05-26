
import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
    {
        name: "Sonny Sangha",
        src: "/images/users/sonny_sangha.jpg",
        profile: "/images/avatars/sonny.jpg"
    },
    {
        name: "Elon Musk",
        src: "/images/users/elon_musk.jpg",
        profile: "/images/avatars/elon_musk.jpg"
    },
    {
        name: "Jeff Bezos",
        src: "/images/users/jeff-bezos-richest-man-2018.jpg",
        profile: "/images/avatars/jeff-bezos.jpg"
    },
    {
        name: "Mark Zuckerberg",
        src: "/images/users/mark_zuckerberg.jpg",
        profile: "/images/avatars/mark_zuckerberg.jpg"
    },
    {
        name: "Bill Gates",
        src: "/images/users/bill_gate.jpg",
        profile: "/images/avatars/bill_gate.jpg"
    },

];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact key={contact.profile} src={contact.profile} name={contact.name}/>
            ))}
        </div>
    );
}

export default Widgets
