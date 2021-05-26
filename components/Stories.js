import StoryCard from './StoryCard';

const stories = [
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

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name}
                src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
