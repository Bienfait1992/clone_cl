import React, { useState } from "react";
import { useForm } from "react-hook-form";


const postData = async (data) => {
    try {
        const response = await axios.post("https://65d376c1522627d50108f5ab.mockapi.io/twitt/twitt", data);
    }
    catch (error) {
        alert("Une erreur s'est produit lors de l'envoi des données.")
    }
}

function Tweeteditor() {
    const [formtweet, setFormTweet] = useState({
        tweet: "",
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: formtweet });

    const onSubmit = (data) => {
        postData(data);
        alert("Form Submitted");
    };


    return (
        <div className="tweet-editor">
            <img src="src/images/Profile-Photo.png" className="avatar" />

            <div className="tweet-editor-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="what's happening" name="tweet" {...register("tweet", {
                        required: "tu dois remplir un tweet avant de poster"
                    })} className="tweet-editor-input" />
                    {errors.tweet && (
                        <span style={{ color: "red" }} >{errors.tweet.message}</span>
                    )}

                </form>




                <div className="tweet-editor-buttons">
                    <div className="tweet-editor-actions">
                        {/* <img src="src/images/Meta.png" className="tweet-editor-actions"/> */}
                        <img src="src/images/icone/Media.png" alt="" className="tweet-editor-actions" />
                        <img src="src/images/icone/Gif.png" alt="" className="tweet-editor-actions" />
                        <img src="src/images/icone/Poll.png" alt="" className="tweet-editor-actions" />
                        <img src="src/images/icone/Emoji.png" alt="" className="tweet-editor-actions" />
                        <img src="src/images/icone/Schedule.png" alt="" className="tweet-editor-actions" />
                    </div>


                    <button className="button" type="submit" > Tweet</button>


                </div>
            </div>
        </div>


    );
}
export default Tweeteditor;