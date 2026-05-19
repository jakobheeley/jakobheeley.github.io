type SecHeaderProp = {
    title: string;
};

export default function SecHeader({title}: SecHeaderProp){
    return(
        <h2 className="text-4xl font-extrabold mb-4 text-white text-center">{title}</h2>
    );
}