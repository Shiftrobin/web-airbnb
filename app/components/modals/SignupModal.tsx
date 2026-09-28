'use client';

import { use, useState } from "react";
import {useRouter} from "next/navigation";
import Modal from "./Modal";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignupModal = () => {

    // Variables
    const router = useRouter();      
    const signModal = useSignupModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    // Submit funtionility
    const submitSignup = async () => {
        const formData = {          
            email: email,
            password1: password,
            password2: password2
        }

        const response = await apiService.postWithoutToken('/api/auth/register/', formData);

        if(response.access) {         

            handleLogin(response.user.pk, response.access, response.refresh)

            signModal.close();
            router.push('/');
            
        } else {
            const tmpErrors:string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setErrors(tmpErrors);
        }
    }


    
    const content = (
            <>
                <h2 className="mb-6 text-2xl">
                    Welcome to airbnb, please signup
                </h2>

                <form 
                    action={submitSignup}
                    className="space-y-4">
                    <input onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                    <input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                    <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                    {
                        errors.map((error, index) => {
                            return (
                                <div 
                                    key={`error_${index}`}
                                    className="p-5 bg-primary text-white rounded-xl opacity-80">
                                    {error}
                                </div>
                            )
                        })
                    }
                    
                 

                    <CustomButton 
                        label="Submit"
                        onClick={submitSignup}
                    />
                </form>
            
            </>
        );

    return (
        <Modal
            isOpen={signModal.isOpen}
            close={signModal.close}
            label="Signup"
            content={content}
        />
    );
}

export default SignupModal;