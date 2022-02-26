import React from 'react'
import { useRouter } from 'next/router';
import { Fragment } from 'react/cjs/react.development'
import style from './createpost.module.css';
import { useState } from 'react';
import { createPostApi } from '../../../client/request';
import { toast } from 'react-toastify';
import { useStore } from '../../../client/context';
import { getValues } from '../../../backend/utils/common';
import Loader from '../../../components/Loader';


export default function createPost() {
    const router = useRouter();
    
    const [state,] = useStore();
    const user = getValues(state, ["user"], null);

    const [image, setImage] = useState(null);
    const [imageInput, setimageInput] = useState(null);
    const [fromData, setfromData] = useState({
        title: "",
        description: "",
    })


    if (user && user.authentcating) {
        return <Loader />
    }


    if (!user.authenticated) {
        router.replace('/');
        return null;
    }

    const handelOnChange = (e) => {
        setfromData({ ...fromData, [e.target.name]: e.target.value })
    }

    const handelImage = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        setimageInput(file);
        fileReader.onload = function (e) {
            setImage(e.target.result)
        }
        fileReader.readAsDataURL(file);
    }

    const handelSubmit = async (e) => {
        e.preventDefault();


        if (!fromData.title || !fromData.description) {
            toast.error("All fields are required");
            return;
        }

        if (!imageInput) {
            toast.error("Please upload picture");
            return;
        }

        const form = new FormData();
        form.set('title', fromData.title);
        form.set('description', fromData.description);
        form.set('image', imageInput);
        try {
            const data = await createPostApi(form);
            if (data.status) {
                toast.success(data.message);
                setfromData({
                    title: "",
                    description: "",
                });
                setImage(null);
                setimageInput(null);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }




    return (
        <Fragment>
            <div className={`container ${style.post_create}`}>
                <div className="row">
                    <div className="col">
                        <h2 className={style.action}>Create Post</h2>
                    </div>
                </div>
                <form onSubmit={handelSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="form-control">
                                <label>Enter  title</label>
                                <input type="text" value={fromData.title} name="title" onChange={handelOnChange} className="form-control" id="floatingPassword" placeholder="Enter title" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-control">
                                <label>Enter  Description</label>
                                <textarea type="text" value={fromData.description} name="description" onChange={handelOnChange} className="form-control" id="floatingPassword" placeholder="Enter Description" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="form-control">
                                <label>Upload fille</label>
                                <input type="file" onChange={handelImage} className="form-control" placeholder="select file" />
                            </div>
                        </div>
                    </div>
                    {
                        image && (
                            <div className="row">
                                <div className="col">
                                    <img src={image} alt="upload image" />
                                </div>
                            </div>
                        )
                    }
                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
