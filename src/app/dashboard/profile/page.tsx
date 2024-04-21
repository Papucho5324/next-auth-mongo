"use client";
import { useSession, signOut } from "next-auth/react";
import { CheckIcon } from '@heroicons/react/24/outline';
import Info from "@/app/components/Info";

function ProfilePage() {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <div className='mt-[-4rem] bg-black pb-3rem'>
        <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1
        lg:grid-cols-2 gap-[2rem]'>
            <div>
                <p className='heading__primary'>Bienvenido</p>
                <h1 className='heading__mini'>
                    Actualmente cuentas con los siguientes servicios.
                </h1>
                <br/>
                <hr/>
                <br/>
                <div
                className='mt:-[2rem] space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className="2-[3rem] h-[2rem] text-blue-500 " />
                        <p className='text-[18px] text-white'> Paquete Popular.</p>
                    </div>
                </div>
                <div
                className='mt:-[2rem] space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className="2-[3rem] h-[2rem] text-blue-500 " />
                        <p className='text-[18px] text-white'> 50 Megas de subida.</p>
                    </div>
                </div>
                <div
                className='mt:-[2rem] space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className="2-[3rem] h-[2rem] text-blue-500 " />
                        <p className='text-[18px] text-white'> 50 Megas de bajada.</p>
                    </div>
                </div>
                <div 
                className='mt:-[2rem] space-y-3'>
                    <div className='flex items-center space-x-4'>
                        <CheckIcon className="2-[3rem] h-[2rem] text-blue-500 " />
                        <p className='text-[18px] text-white'> Atencion Directa con el Cliente.</p>
                    </div>
                </div>
            </div>
            <Info></Info>
        </div>        
    </div>            
  );
}

export default ProfilePage;