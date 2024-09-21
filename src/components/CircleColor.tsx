interface IProps {
    color:string
}

const CircleColor: React.FC<IProps> = ({color}) => {
    return  <span className={`block mb-2 w-5 h-5  rounded-full cursor-pointer`} style={{backgroundColor:color}} />
};

export default CircleColor;