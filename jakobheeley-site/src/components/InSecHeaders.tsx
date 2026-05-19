type InSecHeaderProp = {
    title: string;
};

export default function InSecHeader({title}: InSecHeaderProp){
    return(
        <h3 className="text-2xl mb-2 font-semibold text-white">{title}</h3>
    );
}