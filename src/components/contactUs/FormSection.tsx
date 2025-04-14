import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function FormSection() {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendMail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (form.current) {
            const params = {
                name: (document.getElementById("name") as HTMLInputElement)?.value,
                email: (document.getElementById("email") as HTMLInputElement)?.value,
                no_hp: (document.getElementById("no-hp") as HTMLInputElement)?.value,
                judul: (document.getElementById("judul") as HTMLInputElement)?.value,
                nama_perusahaan: (document.getElementById("nama_perusahaan") as HTMLInputElement)?.value,
                pesan: (document.getElementById("pesan") as HTMLTextAreaElement)?.value,
            };

            emailjs
                .send("service_u2wwqcq", "template_l6gtama", params, "5pBO-mhwVlJDWENwR")
                .then(
                    () => {
                        setIsLoading(false);
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Your email has been sent successfully.',
                            confirmButtonColor: '#1E40AF',
                            customClass: {
                                popup: 'rounded-2xl',
                                confirmButton: 'px-6 py-2 text-lg font-medium',
                            },
                        });
                        form.current?.reset();
                    },
                    (error) => {
                        setIsLoading(false);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `Failed to send email: ${error.text}`,
                            confirmButtonColor: '#1E40AF',
                            customClass: {
                                popup: 'rounded-2xl',
                                confirmButton: 'px-6 py-2 text-lg font-medium',
                            },
                        });
                    }
                );
        } else {
            setIsLoading(false);
        }
    };

    return (
        <form
            ref={form}
            onSubmit={sendMail}
            className="w-[90%] sm:w-[80%] lg:w-[60%] font-cabin mb-20 text-blue-950 flex flex-col"
        >
            <div className="mb-5">
                <label htmlFor="name" className="block mb-[2px] text-lg">
                    Nama Pengirim
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-700 focus:border-blue-900 block w-full p-4"
                    placeholder="johndoe"
                    required
                />
            </div>
            <div className="mb-5 flex space-x-6">
                <div className="w-full">
                    <label htmlFor="email" className="block mb-[2px] text-lg">
                        Email Pengirim
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-700 focus:border-blue-900 block w-full p-4"
                        placeholder="name@gmail.com"
                        required
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="no_hp" className="block mb-[2px] text-lg">
                        Nomor Handphone
                    </label>
                    <input
                        type="text"
                        id="no_hp"
                        name="no_hp"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-700 focus:border-blue-900 block w-full p-4"
                        placeholder="+628123456789"
                        required
                    />
                </div>
            </div>
            <div className="mb-5">
                <label htmlFor="nama_perusahaan" className="block mb-[2px] text-lg">
                    Nama Perusahaan
                </label>
                <input
                    type="text"
                    id="nama_perusahaan"
                    name="nama_perusahaan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-700 focus:border-blue-900 block w-full p-4"
                    placeholder="nama perusahaan"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="judul" className="block mb-[2px] text-lg">
                    Judul Pesan
                </label>
                <input
                    type="text"
                    id="judul"
                    name="judul"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-700 focus:border-blue-900 block w-full p-4"
                    placeholder="Judul Pesan"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="pesan" className="block mb-[2px] text-lg">
                    Pesan
                </label>
                <textarea
                    rows={6}
                    id="pesan"
                    name="pesan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-700 focus:border-blue-900 block w-full p-4"
                    placeholder="Tulis Pesan Anda disini.."
                    required
                />
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`text-white text-center px-12 py-2 sm:py-2.5 lg:py-3 2xl:py-3.5 rounded-4xl font-medium transition-colors duration-300 ease-in-out ${
                        isLoading
                            ? 'bg-blue-600 cursor-not-allowed'
                            : 'bg-blue-800 hover:bg-blue-900'
                    }`}
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        'Submit'
                    )}
                </button>
            </div>
        </form>
    );
}