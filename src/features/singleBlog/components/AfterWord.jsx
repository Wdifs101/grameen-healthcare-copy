
import Typography from '../../../shared/components/Typography/Typography';
import afterWord from "../assets/afterword.png"

const AfterWord = () => {
    return (
        <div  className='space-y-3'> 
            <Typography variant="h4">
            Afterword: The AI Behind This Article
            </Typography>
              
             <div className='border-2 p-3 rounded-xl border-black'>
             <img className='rounded-xl w-full h-[440px]' src={afterWord} alt="" />


             </div>
             <div>
                <Typography className="font-medium">
                Let's be clear: ChatGPT wrote this article and generated the hero image. It combined my personal experience, knowledge, and research. From the initial notes to finish, it took just 37 minutes.
                </Typography>
             </div>
             <div>
                <Typography>
                Even though it was made by AI, no detection tools could tell. The only thing used was OpenAI's Chat API, no other external tools.
                </Typography>
             </div>
             <div>
                <Typography>
                It shows how AI can help in making content interesting and relevant. It's a new chapter in how we create and share information.
                </Typography>
             </div>
              
        </div>
    );
};

export default AfterWord;